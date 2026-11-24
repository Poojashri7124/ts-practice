import { useState } from 'react'
import type React from 'react'
import Button from './Button'

function NameForm() {
  const [name, setName] = useState<string>('')
  const [greeting, setGreeting] = useState<string>('')

  // typing in the input: the event is a ChangeEvent of an <input>
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  // submitting the form: the event is a FormEvent of a <form>
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed === '') {
      setGreeting('Please type your name first.')
      return
    }
    setGreeting(`Hello, ${trimmed}!`)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          className="input"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={handleChange}
        />
        <button className="btn btn-primary" type="submit">
          Say hello
        </button>
        <Button label="Clear" variant="secondary" onClick={() => setGreeting('')} />
      </div>
      {greeting && <p className="greeting">{greeting}</p>}
    </form>
  )
}

export default NameForm