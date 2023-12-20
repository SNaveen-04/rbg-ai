import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Layout from './Pages/Layout'
function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route/>
            <Route/>
            <Route/>
          </Route>
        </Routes>
    </React.Fragment>
  )
}

export default App
