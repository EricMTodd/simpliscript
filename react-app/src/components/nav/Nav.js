import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <nav>
      <Link to='/'>simpliscript</Link>|
      <Link to='/notes/history'>call notes</Link>
    </nav>
  )
}

export default Nav