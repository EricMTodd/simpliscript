import './app.css'
import { useEffect } from 'react'
import Nav from './components/nav/Nav.js'
import Main from './components/main/Main.js'
import Footer from './components/footer/Footer.js'

const App = () => {

  useEffect(() => {
    let history = localStorage.getItem('history')
    if (!history) {
      localStorage.setItem('history', JSON.stringify([]))
    }
    
    let id = localStorage.getItem('id')
    if (!id) {
      localStorage.setItem('id', JSON.stringify(0))
    }
  }, [])

  return(
    <div className='app'>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App