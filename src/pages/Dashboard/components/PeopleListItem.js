import {Link} from "react-router-dom"

function PeopleListItem(props) {
  const { person, id } = props
  console.log("person", person, id)
  return (
    <li>
      <h3>
      {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/${id}`} state={{person}}>View Profile</Link>
    </li>
  )
}

export default PeopleListItem
