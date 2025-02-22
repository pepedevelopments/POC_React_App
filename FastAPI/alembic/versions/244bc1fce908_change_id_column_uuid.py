"""Change id column UUID

Revision ID: 244bc1fce908
Revises: de683bcfeb49
Create Date: 2025-02-18 20:51:01.394837

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '244bc1fce908'
down_revision: Union[str, None] = 'de683bcfeb49'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Création d'une nouvelle table avec la colonne id en UUID
    op.create_table(
        'persons_temp',
        sa.Column('id', sa.UUID(), nullable=False),
        # Ajoutez ici toutes les autres colonnes de votre table 'persons'
        sa.Column('name', sa.String(), nullable=False),  # Exemple de colonne
        sa.PrimaryKeyConstraint('id')
    )
    
    # Copiez les données de l'ancienne table vers la nouvelle
    op.execute('INSERT INTO persons_temp (id, name) SELECT id, name FROM persons')

    # Supprimez l'ancienne table
    op.drop_table('persons')

    # Renommez la nouvelle table pour remplacer l'ancienne
    op.rename_table('persons_temp', 'persons')


def downgrade() -> None:
    # Répétez le processus inverse pour revenir à l'état précédent
    op.create_table(
        'persons_temp',
        sa.Column('id', sa.INTEGER(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.PrimaryKeyConstraint('id')
    )

    op.execute('INSERT INTO persons_temp (id, name) SELECT id, name FROM persons')

    op.drop_table('persons')

    op.rename_table('persons_temp', 'persons')