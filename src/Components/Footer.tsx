import React from 'react'
import ImgReveal from './ImgReveal'

function Footer() {
  return (
    <div className='mx-auto text-center w-fit'>
    <h1 className="mt-8 text-2xl">
      Proud founder of{" "}
      <span className="gradient-text">Sabia enterprises</span>
    </h1>
    <ImgReveal startOffset={150} translateY={-130} src="https://media.tenor.com/ASGuOCPGrKEAAAAS/kekw-kek.gif">
    <h1 className="mb-8 ">
      Soon™ (Winter 2020)
    </h1></ImgReveal></div>
  )
}

export default Footer