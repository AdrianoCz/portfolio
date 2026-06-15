import { useState } from 'react'
import { Link, NavLink, BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import pfp from '/235764285.png'

function Home() {
  return <>
    <main className='home'>
      <div className='resume container'>
        <div>
          <h1>AdrianoCz</h1>
          <img className='pfp' src={pfp} />
          </div>
        <div className='learnMore'>
          <h2>Learn More about me :) </h2>
          <Link className='linkButton' to='/about'>About Me</Link>
          <Link className='linkButton' to="portfolio">Portfolio</Link>
        </div>
      </div>
    </main>

  </>
}
function AboutMe(){
  return(
    <main className="aboutMe">
      <div className="container about">
        <h1>About Me</h1>
        <p>My name is Adriano Cezar, i'm just starting my journey as a programmer but my history and love for technology tracks back to my childhood days, for now i would say my expertise centers around front-end development.</p>
      </div>
    </main>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const linkButtonStyle = ({ isActive }) => { isActive ? { backgroundColor: 'white', color: '#00a2ff' } : {} }
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}>
          About me
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "linkButton activeLink" : "linkButton"}>
          Portfolio
        </NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutMe />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
