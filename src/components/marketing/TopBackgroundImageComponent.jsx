import React from 'react'
import { NavbarComponent } from './NavbarComponent'

function TopBackgroundImageComponent({text, moreText}) {
  return (
    <div>
      <div className='bg-bg-about h-[500px] bg-cover bg-center' >
        <div className='mx-60'>
            <NavbarComponent />
            <br />
            <div className='flex items-center justify-center text-5xl font-semibold mt-52'>
            <h1>
                {text} 
                <span className='text-blue-500'>
                {moreText}
                </span>
            </h1>
            </div>
            </div>
            <div>
            </div>
    </div>
    </div>
  )
}

export default TopBackgroundImageComponent
