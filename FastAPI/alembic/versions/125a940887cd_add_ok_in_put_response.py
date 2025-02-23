"""Add OK in PUT response

Revision ID: 125a940887cd
Revises: d94126357a17
Create Date: 2025-02-23 22:11:34.707494

"""
from alembic import op
import sqlalchemy as sa
import uuid

# revision identifiers, used by Alembic.
revision = '125a940887cd'
down_revision = 'd94126357a17'
branch_labels = None
depends_on = None

def upgrade() -> None:
    # Créer une nouvelle table avec la colonne 'id' de type UUID
    op.create_table(
        'persons_new',
        sa.Column('id', sa.UUID(), primary_key=True, nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('age', sa.Integer(), nullable=False),
        sa.Column('profession', sa.String(), nullable=False),
    )

    # Copier les données de la table ancienne à la nouvelle
    op.execute("""
        INSERT INTO persons_new (id, name, age, profession)
        SELECT id, name, age, profession FROM persons
    """)

    # Supprimer l'ancienne table
    op.drop_table('persons')

    # Renommer la nouvelle table
    op.rename_table('persons_new', 'persons')

def downgrade() -> None:
    # Revert back the changes: create the old table with NUMERIC id
    op.create_table(
        'persons_old',
        sa.Column('id', sa.Numeric(), primary_key=True, nullable=False),
        sa.Column('name', sa.String(), nullable=False),
        sa.Column('age', sa.Integer(), nullable=False),
        sa.Column('profession', sa.String(), nullable=False),
    )

    # Copier les données de la nouvelle table à l'ancienne
    op.execute("""
        INSERT INTO persons_old (id, name, age, profession)
        SELECT id, name, age, profession FROM persons
    """)

    # Supprimer la nouvelle table
    op.drop_table('persons')

    # Renommer l'ancienne table
    op.rename_table('persons_old', 'persons')