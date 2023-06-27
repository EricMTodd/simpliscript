import './call-notes.css'
import { useState } from 'react'

const CallNotes = () => {
  const [caller, setCaller] = useState('')
  const [callBackNumber, setCallBackNumber] = useState('')
  const [address, setAddress] = useState('')
  const [issues, setIssues] = useState('')
  const [troubleshooting, setTroubleshooting] = useState('')
  const [resolution, setResolution] = useState('')

  return(
    <div className='call-notes-container'>
      <h1>Call notes container</h1>
      <form className='editable'>
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
        <input type='text' id='address-input' autoComplete='off' value={address} onChange={e => setAddress} />
        <label htmlFor='issues-textarea'>
          <strong>Issues reported: </strong>
        </label>
        <textarea id='issues-textarea' value={issues} onChange={e => setIssues} />
        <label htmlFor='troubleshooting-textarea'>
          <strong>Troubleshooting: </strong>
        </label>
        <textarea id='toubleshooting-textarea' value={troubleshooting} onChange={e => setTroubleshooting(e.target.value)} />
        <label htmlFor='resolution-textarea'>
          <strong>Resolution: </strong>
        </label>
        <textarea id='resolution-textarea' value={resolution} onChange={e => setResolution(e.target.value)} />
        <div className='form-buttons-container'>
          <button type='button'>Format</button>
          <button type='button'>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default CallNotes