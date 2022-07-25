import { useState } from "react"
import "./styles.css"
import { Link, Routes, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PersonProfile from "./pages/PersonProfile"



export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const hirePerson = (person, wage) => {
    person.wage = wage
    
    const personIsHired = hiredPeople.filter(hiredPerson => hiredPerson.id.value === person.id.value).length > 0
    if(personIsHired) return
    setHiredPeople([...hiredPeople, person])
  }
  // above, check if person is already hired, if not
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
        path="/"
        element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
        path="/view/:id"
        element={<PersonProfile hirePerson={hirePerson}/>} />
      </Routes>
      
    </>
  )
}
