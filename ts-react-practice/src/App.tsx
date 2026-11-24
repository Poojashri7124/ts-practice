import Button from './components/Button'
import Card from './components/Card'
import Counter from './components/Counter'
import NameForm from './components/NameForm'
import UserList from './components/UserList'
import ReduxCounter from './components/ReduxCounter'


function App() {
  return (
    <main className="page">
      <h1>React + TypeScript practice</h1>

      <Card title="Button">
        <div className="row">
          <Button label="Primary" onClick={() => alert('Primary clicked')} />
          <Button
            label="Secondary"
            variant="secondary"
            onClick={() => alert('Secondary clicked')}
          />
        </div>
      </Card>

      <Card title="Counter">
        <Counter />
      </Card>
            <Card title="Redux counter (Redux Toolkit + TypeScript)">
        <ReduxCounter />
      </Card>
      
      <Card title="Controlled input and form">
        <NameForm />
      </Card>

      <Card title="Users from an API">
        <UserList />
      </Card>
    </main>
  )
}

export default App