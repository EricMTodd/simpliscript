import './show.css'

const Show = ({
  createdAt,
  caller,
  callBackNumber,
  address,
  issues,
  troubleshooting,
  resolution
}) => {
  return(
    <div className='call-note'>
      <div><strong>Created at: </strong>{createdAt}</div>
      <div><strong>Talked to: </strong>{caller}</div>
      <div><strong>Call back number: </strong>{callBackNumber}</div>
      <div><strong>Address: </strong>{address}</div>
      <div><strong>Issues reported: </strong>{issues}</div>
      <div><strong>Troubleshooting: </strong>{troubleshooting}</div>
      <div><strong>Resolution: </strong>{resolution}</div>
    </div>
  )
}

export default Show