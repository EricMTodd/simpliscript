import './index.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Show from './Show.js'

const Index = () => {
  const [history, setHistory] = useState([])

  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem('history'))
    let sortedNotes = notes.reverse()

    if (sortedNotes) {
      setHistory(sortedNotes)
    }
  }, [])

  const clearHistory = () => {
    localStorage.setItem('history', JSON.stringify([]))
    localStorage.setItem('id', JSON.stringify(0))
    setHistory([])
  }
  

  return(
    <div className='notes-index-container'>
      <div className='notes-index-header'>
        <h1>History</h1> 
        <div>
          <Link to='/notes/new'>new call note</Link> | 
          <button type='button' onClick={() => clearHistory()}>clear history</button>
        </div>
      </div>
      <ul>
        {history.map(note => <li key={note.id}><Show createdAt={note.createdAt} caller={note.caller} callBackNumber={note.callBackNumber} address={note.address} issues={note.issues} troubleshooting={note.troubleshooting} resolution={note.resolution} /></li>)}
      </ul>
    </div>
  )
}

export default Index