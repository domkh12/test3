import React from 'react'
import TestimonialComponent from './TestimonialComponent'

function TestimonialSection() {
  return (
    <div className='mt-32'>
        <div className='flex flex-col'>
      <small className="text-md text-marketing-main-color"><span className="text-orange-400">// </span>
      03 . TESTIMONIAL
      </small>
      <h2 className='text-2xl w-[370px] text-marketing-main-color'>
      We work with customers across all industries
        </h2>
    </div>
    <div className='mt-16 flex flex-row gap-5'>
      <TestimonialComponent 
      image="./public/marketing/company.jpg"
      title="Company"
      desc="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. "
      profile=""
      fullname="John Carter"
      dep="Marketing Lead at Google"
      />
      <TestimonialComponent 
      image="./public/marketing/company.jpg"
      title="Company"
      desc="Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. "
      profile=""
      fullname="John Carter"
      dep="Marketing Lead at Google"
      />
      </div>
    </div>
  )
}

export default TestimonialSection
