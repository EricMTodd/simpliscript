import './main.css'
import { Routes, Route } from 'react-router-dom'
import CallNotes from '../call-notes/CallNotes.js'

const Main = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<CallNotes />} />
      </Routes>
    </main>
  )
}

export default Main