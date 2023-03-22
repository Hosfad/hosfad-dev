import React from 'react'
import { Link } from 'react-router-dom';
// @ts-ignore
import fav from "../assets/favicon.png";
// @ts-ignore
import fire from "../assets/fire.gif";
function NavBar() {
  return (
    <div className='flex flex-row w-screen border-2 border-gray6 h-28 bg-gray7'>
      <h1 className='mx-auto mt-8 text-6xl'>
      <Link to="/">
        Hosfad<span className="gradient-text">.dev</span> 
      </Link>
        </h1>
    </div>
  )
}

export default NavBar