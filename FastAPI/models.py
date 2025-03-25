from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, Float, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
import uuid
from enum import Enum as PyEnum

class DayEnum(PyEnum):
    Lundi = "Lundi"
    Mardi = "Mardi"
    Mercredi = "Mercredi"
    Jeudi = "Jeudi"
    Vendredi = "Vendredi"
    Samedi = "Samedi"
    Dimanche = "Dimanche"

class SlotEnum(PyEnum):
    Jour = "Jour"
    Matin = "Matin"
    Après_midi = "Après-midi"
    Nuit = "Nuit"

class ConstraintTypeEnum(PyEnum):
    CP = "CP"
    RTT = "RTT" 
    Formation = "Formation"  
    Reunion = "Reunion" 
    GroupeDeTravail = "GroupeDeTravail" 
    Present = "Present" 

Base = declarative_base()

class Constraint(Base):
    __tablename__ = 'constraints'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    week = Column(Integer)  
    day = Column(Enum(DayEnum))  
    slot = Column(Enum(SlotEnum))  
    constraint_type = Column(Enum(ConstraintTypeEnum))
    person_id = Column(UUID(as_uuid=True), ForeignKey('persons.id'))
    
    person = relationship("Person", back_populates="constraints")

class Person(Base):
    __tablename__ = 'persons'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    age = Column(Integer)
    name = Column(String)
    profession = Column(String)

    constraints = relationship("Constraint", back_populates="person", cascade="all, delete-orphan")
