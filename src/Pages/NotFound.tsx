import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center'>
        <h1 className='text-6xl mt-28 text-center gradient-text-blue'>Took a wrong turn ?</h1>
        <h1 className='text-center text-2xl mt-4'>Looks like you are lost stranger, You are not supposed to be here.</h1>
        <h1 className='text-center text-2xl'>You can go back to the <a href='/' className='text-blue-500'>Home page</a> </h1>
        <h1 className='text-center mt-8 text-2xl'>Or you can watch this bouncing seal</h1>
        <img className='mx-auto mt-12' src='https://media.tenor.com/GTzxMSVt2dAAAAAd/seal-bouncing.gif'></img>
        <a href='/'>
        <h2 className="bg-blue-500 font-bold rounded inline-block text-bold text-gray7 px-6 py-4 text-2xl mt-8 shadow-xl">
           Go home
          </h2>
        </a>
      
        </div>
  )
}

export default NotFound