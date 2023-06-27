import './app.css'
import Nav from './components/nav/Nav.js'
import Main from './components/main/Main.js'
import Footer from './components/footer/Footer.js'

const App = () => {
  return(
    <div className='app'>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App