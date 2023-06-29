import './index.css'
import { useState, useEffect } from 'react'
import Show from './Show.js'

const Index = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem('history'))

    if (notes) {
      setHistory(JSON.parse(localStorage.getItem('history')))
    }
  }, [])

  const clearHistory = () => {
    localStorage.clear()
    setHistory([])
  }
  

  return(
    <div className='notes-index-container'>
      <div className='notes-index-header'>
        <h1>History</h1> 
        <button type='button' onClick={() => clearHistory()}>clear history</button>
      </div>
      <ul>
        {history.map(note => <li key={note.createdAt}><Show createdAt={note.createdAt} caller={note.caller} callBackNumber={note.callBackNumber} address={note.address} issues={note.issues} troubleshooting={note.troubleshooting} resolution={note.resolution} /></li>)}
      </ul>
    </div>
  )
}

export default Index