import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Web from "../src/images/rocket-maker.png";
import Common from './Common';
function Home() {
  return (
   <>
    <Common
        name=" Grow your bussines with"
        visit="/Service"
        imgsrc={Web}
        button="Get started"
    />
   </>
  )
}

export default Home
