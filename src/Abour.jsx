import React from 'react'
import Web from "../src/images/ab.webp"
import Common from './Common'
function Abour() {
  return (
    <>
    <Common
        name=" welcome to About page"
        visit="/contact"
        imgsrc={Web}
        button="contact now"
    />
   </>
  )
}

export default Abour
