import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home/Home'
import ResearchPage from './Pages/Research/ResearchPage'
import About from './Pages/About/About'
import Policy from './Pages/Policy'
import Mfr from './Pages/projects/MFR/Mfr'
import Llm from './Pages/Workshops/LLM/Llm'
import Workshop from './Pages/Workshops/Workshop'
import Project from './Pages/projects/Project'
import Corepool from './Pages/projects/CorePool/Corepool'

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='research' element={<ResearchPage/>}/>
            <Route path='policy' element={<Policy/>}/>
            <Route path='projects' element={<Project/>}>
                <Route path='mfr' element={<Mfr/>}/>
                <Route path='corepool' element={<Corepool/>}/>
                {/* <Route/> */}
            </Route>
            <Route path='workshop' element={<Workshop/>}>
                <Route path='llm' element={<Llm/>}/>
            </Route>
            <Route path='/:id' element={<Home/>}/>
          </Route>
        </Routes>
    </React.Fragment>
  )
}

export default App
