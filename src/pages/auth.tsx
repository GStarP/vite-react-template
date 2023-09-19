import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const nav = useNavigate()

  return (
    <div>
      <h1>Auth</h1>
      <button onClick={() => nav('/')}>To Login</button>
    </div>
  )
}
