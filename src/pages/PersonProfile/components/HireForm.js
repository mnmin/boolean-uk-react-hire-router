import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Dashboard from "../../Dashboard"


function HireForm(props) {
  const [wage, setWage] = useState(0)

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button onClick={() => navigate("/")}>Hire</button>
    </form>
  )
}

export default HireForm
