import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const nav = useNavigate()

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => nav('/auth')}>To Auth</button>
    </div>
  )
}
