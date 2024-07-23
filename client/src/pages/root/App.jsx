import { useSelector } from "react-redux"
import useApi from "../../hooks/useApi"
import { selectUser } from "../../redux/features/auth/authSlice"

// import './App.module.css'
function App() {
  const Client = useApi()
  const user = useSelector(selectUser)
  const handleClick = async () => {
    Client.get('/test').then(r => console.log(r)).catch(e => console.log(e))
  }
  return (
    <>
      This is main page - public page
      <p>
        user: {user?.name}
      </p>
      <button onClick={handleClick}>
        Get profile
      </button>
    </>
  )
}

export default App
