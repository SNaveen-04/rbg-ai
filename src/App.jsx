import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
import Home from './Pages/Home/Home'
import ResearchPage from './Pages/Research/ResearchPage'
import About from './Pages/About/About'
import Policy from './Pages/Policy'


function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/research' element={<ResearchPage/>}/>
            <Route path='/policy' element={<Policy/>}/>
            <Route path='/projects'>
                <Route/>
                <Route/>
                <Route/>
            </Route>
            <Route/>
          </Route>
        </Routes>
    </React.Fragment>
  )
}

export default App
