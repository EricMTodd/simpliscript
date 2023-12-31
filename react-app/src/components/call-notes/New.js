import './new.css'
import { useState } from 'react'

const New = () => {
  const [caller, setCaller] = useState('')
  const [callBackNumber, setCallBackNumber] = useState('')
  const [address, setAddress] = useState('')
  const [issues, setIssues] = useState('')
  const [troubleshooting, setTroubleshooting] = useState('')
  const [resolution, setResolution] = useState('')

  const toggleFormatting = () => {
    let editable = document.querySelector('.editable')
    let formatted = document.querySelector('.formatted')
    if (editable.style.display !== 'none' && formatted.style.display !== 'flex') {
      editable.style.display = 'none'
      formatted.style.display = 'flex'
    } else if (editable.style.display !== 'flex' && formatted.style.display !== 'none') {
      editable.style.display = 'flex'
      formatted.style.display = 'none'
    }
  }

  const clearNotes = () => {
    setCaller('')
    setCallBackNumber('')
    setAddress('')
    setIssues('')
    setTroubleshooting('')
    setResolution('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    let history = JSON.parse(localStorage.getItem('history'))
    let id = JSON.parse(localStorage.getItem('id'))
    let newNote = {
      id: id,
      createdAt: new Date(),
      caller: caller,
      callBackNumber: callBackNumber,
      address: address,
      issues: issues,
      troubleshooting: troubleshooting,
      resolution: resolution
    }

    history.push(newNote)
    id += 1
    localStorage.setItem('history', JSON.stringify(history))
    localStorage.setItem('id', JSON.stringify(id))
    clearNotes()

    let editable = document.querySelector('.editable')
    let formatted = document.querySelector('.formatted')
    if (editable.style.display !== 'flex' && formatted.style.display !== 'none') {
      editable.style.display = 'flex'
      formatted.style.display = 'none'
    }
  }

  return(
    <div className='new-call-note-container'>
      <h1>Call notes</h1>
      <form className='editable' onSubmit={handleSubmit}>
        <label htmlFor='caller-input'>
          <strong>Talking to: </strong>
        </label>
        <input type='text' id='caller-input' autoComplete='off' value={caller} onChange={e => setCaller(e.target.value)} />
        <label htmlFor='call-back-number-input'>
          <strong>Call back number: </strong>
        </label>
        <input type='text' id='call-back-number-input' autoComplete='off' value={callBackNumber} onChange={e => setCallBackNumber(e.target.value)} />
        <label htmlFor='address-input'>
          <strong>Address: </strong>
        </label>
        <input type='text' id='address-input' autoComplete='off' value={address} onChange={e => setAddress(e.target.value)} />
        <label htmlFor='issues-textarea'>
          <strong>Issues reported: </strong>
        </label>
        <textarea id='issues-textarea' value={issues} onChange={e => setIssues(e.target.value)} />
        <label htmlFor='troubleshooting-textarea'>
          <strong>Troubleshooting: </strong>
        </label>
        <textarea id='toubleshooting-textarea' value={troubleshooting} onChange={e => setTroubleshooting(e.target.value)} />
        <label htmlFor='resolution-textarea'>
          <strong>Resolution: </strong>
        </label>
        <textarea id='resolution-textarea' value={resolution} onChange={e => setResolution(e.target.value)} />
        <div className='form-buttons-container'>
          <button type='button' onClick={() => toggleFormatting()}>Format</button>
          <button type='Submit'>Clear and save</button>
        </div>
      </form>

      <form className='formatted' onSubmit={handleSubmit} style={{display: 'none'}}>
        <div>
          <strong>Talked to: </strong>{caller}
        </div>
        <div>
          <strong>Call back number: </strong>{callBackNumber}
        </div>
        <div>
          <strong>Issues reported: </strong>{issues}
        </div>
        <div>
          <strong>Troubleshooting: </strong>{troubleshooting}
        </div>
        <div>
          <strong>Resolution: </strong>{resolution}
        </div>
        <div className='form-buttons-container'>
          <button type='button' onClick={() => toggleFormatting()}>Edit</button>
          <button type='submit'>Clear and Save</button>
        </div>
      </form>
    </div>
  )
}

export default New