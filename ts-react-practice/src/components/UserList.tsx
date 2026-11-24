import { useState, useEffect } from 'react'
import type { User } from '../types'

function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }
        const data: User[] = await res.json()
        setUsers(data)
      } catch (err) {
        setError('Could not load the users. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  if (loading) return <p className="muted">Loading…</p>
  if (error) return <p className="error">{error}</p>
  if (users.length === 0) return <p className="muted">No users found.</p>

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id} className="user-item">
          <span className="user-name">{user.name}</span>
          <span className="muted">{user.email}</span>
        </li>
      ))}
    </ul>
  )
}

export default UserList