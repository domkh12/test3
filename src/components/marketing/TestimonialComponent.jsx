import React from 'react'
import { FaStar } from "react-icons/fa6";

function TestimonialComponent({image, title, desc, profile, fullname, dep}) {
  return (
    <div className='bg-testimonial-bg-color p-5 w-[600px] rounded-xl'>
        <div className='shadow-md bg-white p-5 rounded-xl'>
      <div className='flex justify-between'>
        <section className='flex flex-row text-xl font-semibold gap-2'>
            <img src={image} alt="" className='w-10 h-10 bg-red-500'/>
            <h2 className='mt-2'>{title}</h2>
        </section>
        <section className='flex gap-1 text-orange-400 mt-3'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </section>
      </div>
      <hr class="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"/>
      <p>
        {desc}
      </p>
      </div>
      <div className='flex flex-row gap-1 pt-10'>
        <div>
      <img src={profile} alt="profiel image" className='w-12 h-12 bg-red-500 rounded-3xl'/>
      </div>
      <div>
        <p>{fullname}</p>
        <small>{dep}</small>
      </div>
      </div>
    </div>
  )
}

export default TestimonialComponent
