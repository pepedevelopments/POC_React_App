import uvicorn
from fastapi import FastAPI, HTTPException, Depends
from typing import Annotated
from sqlalchemy.orm import Session
from pydantic import BaseModel
from database import SessionLocal, engine
import models
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    'http://localhost:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

class Person(BaseModel):
    age: int
    name: str
    profession: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependencies = Annotated[Session, Depends(get_db)]

@app.post('/persons/', response_model=Person)
async def create_person(person: Person, db: db_dependencies):
    db_person = models.Person(**person.dict())
    db.add(db_person)
    db.commit()
    db.refresh(db_person)
    return db_person

@app.get('/persons/', response_model=list[Person])
async def read_persons(db: db_dependencies, skip: int = 0, limit: int = 100):
    persons = db.query(models.Person).offset(skip).limit(limit).all()
    return persons

@app.put('/persons/{person_id}', response_model=Person)
async def update_person(person_id: int, person: Person, db: db_dependencies):
    # Fetch the person from the database
    db_person = db.query(models.Person).filter(models.Person.id == person_id).first()
    
    # If the person does not exist, return an error response
    if db_person is None:
        raise HTTPException(status_code=404, detail="Person not found")
    
    # Update the fields
    for key, value in person.dict().items():
        setattr(db_person, key, value)
    
    # Commit the changes
    db.commit()
    db.refresh(db_person)
    
    return db_person


@app.delete('/persons/{person_id}', response_model=Person)
async def delete_person(person_id: int, db: db_dependencies):
    # Fetch the person from the database
    db_person = db.query(models.Person).filter(models.Person.id == person_id).first()
    
    # If the person does not exist, raise a 404 error
    if db_person is None:
        raise HTTPException(status_code=404, detail="Person not found")
    
    # Delete the person
    db.delete(db_person)
    db.commit()
    
    return db_person