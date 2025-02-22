"""fix GET

Revision ID: 59206cb6f56d
Revises: df6c1907365c
Create Date: 2025-02-18 22:09:44.413617

"""
from typing import Sequence, Union
import uuid

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '59206cb6f56d'
down_revision: Union[str, None] = 'df6c1907365c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # 1. Créer une nouvelle table avec la structure correcte
    op.create_table(
        'persons_temp',
        sa.Column('id', sa.UUID(), primary_key=True, default=str(uuid.uuid4())),
        sa.Column('age', sa.Integer(), nullable=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('profession', sa.String(), nullable=True),
    )

    # 2. Copier les données de l'ancienne table vers la nouvelle table
    op.execute('INSERT INTO persons_temp (id, age, name, profession) SELECT id, age, name, profession FROM persons')

    # 3. Supprimer l'ancienne table
    op.drop_table('persons')

    # 4. Renommer la nouvelle table pour qu'elle ait le même nom que l'ancienne table
    op.rename_table('persons_temp', 'persons')


def downgrade() -> None:
    # Répétez le processus inverse pour revenir à l'état précédent
    op.create_table(
        'persons_temp',
        sa.Column('id', sa.INTEGER(), primary_key=True),
        sa.Column('age', sa.Integer(), nullable=True),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('profession', sa.String(), nullable=True),
    )

    op.execute('INSERT INTO persons_temp (id, age, name, profession) SELECT id, age, name, profession FROM persons')

    op.drop_table('persons')

    op.rename_table('persons_temp', 'persons')
