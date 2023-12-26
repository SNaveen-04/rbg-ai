import React from 'react'
import Comone from './Comone'
import Comtwo from './Comtwo'
import Comthree from './Comthree'
import Results from './Results'
import Embed from './Embed'
import Header1 from '../Header1'

const title="Enhanced object detection in floor-plan through super-resolution"
const content="Dev Khare, NS Kamal, HB Barathi Ganesh, V Sowmya & VV Sajith Variyar"

const Floor = () => {
  return (
    <div>
        <Header1 title={title} content={content}/>
        <Comone/>
        <Comtwo/>
        <Comthree/>
        <Results/>
        <Embed/>
    </div>
  )
}

export default Floor