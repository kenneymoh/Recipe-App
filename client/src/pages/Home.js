import React from 'react'
import projo from '../assets/projo.mp4'



function Home() {
  return (
    <div className='m-0 p-0 font-sans'>
      <div className='w-full h-screen'>
        <div className='main w-full h-full object-cover'>
            <video src={projo} autoPlay loop muted style={{ width: '100%', minHeight: '100px'}}/>
            <div className='absolute w-full h-full top-full flex flex-col justify-center items-center text-white'>
              <h1> Welcome</h1>
              <p>to my site</p>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Home
