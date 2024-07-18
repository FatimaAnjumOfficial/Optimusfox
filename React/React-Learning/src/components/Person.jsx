import React from "react";

function Person({ person }, { key }) {
  return (
    <div>
      {key} {person.name}. Age: {person.age}
    </div>
  );
}

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Fatima",
      age: 20,
    },
    {
      id: 2,
      name: "Nimra",
      age: 18,
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}

export default NameList;
