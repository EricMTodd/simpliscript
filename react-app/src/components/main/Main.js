import './main.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../home/Home.js'
import New from '../call-notes/New.js'
import Index from '../call-notes/Index.js'

const Main = () => {
  return(
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes/new' element={<New />} />
        <Route path='/notes/history' element={<Index />} />
      </Routes>
    </main>
  )
}

export default Main