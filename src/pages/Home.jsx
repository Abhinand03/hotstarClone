import React from 'react'
import MenuBar from '../component/menuBar/MenuBar'
import Banner from '../component/home/Banner'
import VerticalPosters from '../component/home/VerticalPosters'

function Home() {
  return (
    <div> 
       <Banner/>
       <VerticalPosters/>
    </div>
  )
}

export default Home