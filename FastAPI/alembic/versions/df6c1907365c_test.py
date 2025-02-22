"""test

Revision ID: df6c1907365c
Revises: 244bc1fce908
Create Date: 2025-02-18 21:18:23.529718

"""
from typing import Sequence, Union
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'df6c1907365c'
down_revision: Union[str, None] = '244bc1fce908'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # Création d'une nouvelle table temporaire avec les colonnes nécessaires
    op.create_table(
        'persons_temp',
        sa.Column('id', sa.UUID(), nullable=False),
        sa.Column('name', sa.String(), nullable=True),
        sa.Column('age', sa.Integer(), nullable=True),
        sa.Column('profession', sa.String(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    # Copier les données existantes de la table 'persons' vers 'persons_temp'
    op.execute('INSERT INTO persons_temp (id, name, age, profession) SELECT id, name, age, profession FROM persons')

    # Supprimer l'ancienne table
    op.drop_table('persons')

    # Renommer la table temporaire pour qu'elle porte le nom de l'ancienne table
    op.rename_table('persons_temp', 'persons')

    # Créer l'index sur la nouvelle colonne `id`
    op.create_index(op.f('ix_persons_id'), 'persons', ['id'], unique=False)


def downgrade() -> None:
    # Créer la table temporaire avec les anciennes colonnes (avant les modifications)
    op.create_table(
        'persons_temp_inv',
        sa.Column('id', sa.INTEGER(), nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('age', sa.Integer(), nullable=True),
        sa.Column('profession', sa.String(), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )

    # Copier les données de la table actuelle vers la table temporaire
    op.execute('INSERT INTO persons_temp_inv (id, name, age, profession) SELECT id, name, age, profession FROM persons')

    # Supprimer l'ancienne table
    op.drop_table('persons')

    # Renommer la table temporaire pour qu'elle porte le nom de l'ancienne table
    op.rename_table('persons_temp_inv', 'persons')

    # Supprimer l'index sur la colonne `id`
    op.drop_index(op.f('ix_persons_id'), table_name='persons')