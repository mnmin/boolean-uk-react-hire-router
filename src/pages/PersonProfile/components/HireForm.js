import { useState, } from "react"
import { useNavigate } from "react-router-dom"



function HireForm(props) {
  const [wage, setWage] = useState()

  const navigate = useNavigate()

  return (
    <form >
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button onClick={() => {
        props.hirePerson(props.person, wage)
        navigate("/")
      }}>Hire</button>
      
    </form>
  )
}

export default HireForm
