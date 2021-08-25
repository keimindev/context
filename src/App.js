import React, { useState, useContext } from "react";

const data = [
  { id:1, name: 'Koko' }, 
  { id:2, name: 'James'},
  { id:3, name: 'Wendy'},
  { id:4, name: 'Andy'}
]

function App() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => { 
      return people.filter( (person) => person.id !== id)})
  }
  return (
    <>
    <h3>Prop drilling</h3>
    <List people={people} removePerson={removePerson}/>
    </>
  );
}

const List = ( {people, removePerson}) => {
  return(
    <>
    {people.map(person => {
      return(
        <>
        <SinglePerson key={person.id} {...person} removePerson={removePerson}/>
        </>
      )
    })}
    </>
  )
}

const SinglePerson = ( {id, name, removePerson}) => {
  return(
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}

export default App;
