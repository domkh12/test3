import React from 'react'
import TopBackgroundImageComponent from './TopBackgroundImageComponent'
import { ImageButton } from './ButtonPrimary'

function AboutTopSection() {
  return (
    <div>
        <div>
      <TopBackgroundImageComponent text="About" moreText="Us"/>
      </div>
      <div className='bg-marketing-main-color'>
      <div className='flex flex-row justify-center text-white mx-60'>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>325</h2>
            <span className='text-blue-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>CLIENTS</p>
            <p>WORLDWIDE</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>975</h2>
            <span className='text-red-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>PROJECTS</p>
            <p>COMPLETED</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>70</h2>
            <span className='text-yellow-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>TEAMS</p>
            <p>MEMBERS</p>
        </section>
        </div>
        <div className='flex flex-row gap-3 p-16'>
        <section className='flex flex-row'>
            <h2 className='text-4xl'>83m</h2>
            <span className='text-green-500 text-3xl'>+</span>
        </section>
        <section className='text-sm'>
            <p>REVENUE</p>
            <p>GENDERATED</p>
        </section>
        </div>
        </div>
      </div>
      <div>
      <small className="text-md">
        <span className="text-yellow-300">//</span>
            AGENCY
        </small>
        <h2 className='text-3xl'>
        The #1 digital marketing services company
        </h2>
        <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div>
            <ImageButton image="./public/marketing/buttonImage.png" text="Developement Scale"/>
        </div>
      </div>
    </div>
  )
}

export default AboutTopSection

