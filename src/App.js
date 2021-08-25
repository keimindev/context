import React, { useState, useContext } from "react";

//more components
// fix- context api, redux (for more complex cases)

const data = [
  { id:1, name: 'Koko' }, 
  { id:2, name: 'James'},
  { id:3, name: 'Wendy'},
  { id:4, name: 'Andy'}
]

const PersonContext = React.createContext();
// two components - Provider, Consumer


function ContextAPI() {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => { 
      return people.filter( (person) => person.id !== id)})
  }
  return (
    <>
    <PersonContext.Provider value={{removePerson, people}}>
    <h3>Context API / useContext</h3>
    <List />
    </PersonContext.Provider>
    </>
  );
}

const List = () => {
  const mainData = useContext(PersonContext)

  return(
    <>
    {mainData.people.map(person => {
      return(
        <>
        <SinglePerson key={person.id} {...person}/>
        </>
      )
    })}
    </>
  )
}

const SinglePerson = ( {id, name}) => {
  const {removePerson}= useContext(PersonContext)
  return(
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}

export default ContextAPI;
