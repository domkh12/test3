import React from 'react'
import { SecondButton } from './ButtonPrimary'

function AticalComponent({aticalType, option, date, image, title, desc}) {
  return (
    <div className={aticalType}>
    <div className='flex flex-col w-[50%] gap-5'>
      <div className='flex flex-row justify-between'>
        <p className='border rounded-3xl p-2 border-marketing-main-color'>{option}</p>
        <p>{date}</p>
      </div>
      <div>
        <h3 className='text-2xl'>
          {title}
        </h3>
        <p>
          {desc}
        </p>
      </div>
      <div>
        <SecondButton text='Read More'/>
      </div>
      </div>
      <div>
        <img src={image} alt="atical image" className='w-[450px] h-[250px] rounded-xl mx-auto'/>
      </div>
    </div>
  )
}

export default AticalComponent
