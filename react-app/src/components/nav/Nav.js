import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <nav>
      <Link to='/'>simpliscript</Link>|
      <Link to='/notes/new'>create note</Link> | 
      <Link to='/notes/history'>notes history</Link>
    </nav>
  )
}

export default Nav