import { useState } from 'react'

import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TaskForm />
    </>
  )
}

export default App
