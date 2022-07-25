import PeopleListItem from "./PeopleListItem"
//import { useState, useEffect } from "react"


function PeopleList(props) {
  const { people } = props




  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} id={index} />
      ))}
            
    </ul>
  )
}

export default PeopleList
