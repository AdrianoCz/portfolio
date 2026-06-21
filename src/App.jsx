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
function Portfolio(){
  const projects = [{name: "Minecraft website", desc: "My first actual project, kinda proud of this one", link: "https://adrianocz.github.io/minecraft-web-assignment/"},{name: "Runnow", desc: "App made for my friends' project", link:"https://adrianocz.github.io/runnow/"},{ name: "Etch a Sketch", desc:"Just a simple Etch a Sketch recreation", link:"https://adrianocz.github.io/etch-a-sketch/"}] 
  return(
    <main className='portfolio'>
      {projects.map((project => 
      <div className='container projectContainer'>
        <div className="nameDesc">
          <h2>{project.name}</h2>
          <p>{project.desc}</p>
        </div>
        <a href={project.link} target='_blank' className="linkButton">Access</a>
      </div>))}
    </main>
  )
}
function App() {
  const [count, setCount] = useState(0)
  const linkButtonStyle = ({ isActive }) => { isActive ? { backgroundColor: 'white', color: '#00a2ff' } : {} }
  return (
    <BrowserRouter basename='/portfolio'>
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
        <Route path='/portfolio' element={<Portfolio/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
