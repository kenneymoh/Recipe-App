import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
function Landing() {

  const navigate = useNavigate()
  const [name, setName] = useState('hhvv')
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [])
  return (
    <form>
      <button onClick={() => { localStorage.removeItem('token')}}>Logout</button>
    </form>
  )

}
export default Landing
