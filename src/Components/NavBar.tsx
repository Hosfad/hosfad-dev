import React from 'react'
// @ts-ignore
import fav from "../assets/favicon.png";
// @ts-ignore
import fire from "../assets/fire.gif";
function NavBar() {
  return (
    <div className='flex flex-row w-screen border-2 border-gray6 h-28 bg-gray7'>
        <h1 className='text-6xl mx-auto mt-8'>Hosfad<span className="gradient-text">.dev</span> </h1>
    </div>
  )
}

export default NavBar