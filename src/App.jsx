import { useState } from 'react'
import './App.css'
import { Navbar } from './react_assignments/intro/nav'
import { Main } from './react_assignments/intro/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    {/* day-1 assignments from react-assignmnets/intro */}
      <Navbar/>
      <Main/>
   {/* day-1 assignments from react-assignmnets/intro */}

    </div>
  )
}

export default App
