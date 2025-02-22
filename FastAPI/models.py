from sqlalchemy import Column, Integer, String, Boolean, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
import uuid

Base = declarative_base()

class Person(Base):
    __tablename__ = 'persons'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    age = Column(Integer)
    name = Column(String)
    profession = Column(String)