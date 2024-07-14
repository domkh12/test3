import React from 'react'
import AticalComponent from './AticalComponent'
import { SecondButton } from './ButtonPrimary';
const NormalAtical = "flex flex-row justify-center gap-10 bg-atical-orange mx-60 rounded-xl p-10";
const ReverseAtical = "flex flex-row-reverse justify-center gap-10 bg-atical-violet mx-60 rounded-xl p-10";

function AticalSection() {
  return (
    <div>
    <div className='mx-60 flex flex-col items-center'>
      <small className="text-md text-marketing-main-color"><span className="text-violet-300">// </span>
        0 . 1 SERVICES
      </small>
      <h2 className='text-2xl w-[370px] text-marketing-main-color text-center'>Browse our content on growth marketing</h2>
    </div>
    <div className='mt-16'>
      <AticalComponent option="Marketing" date="SEPTEMBER 1, 2022" 
      aticalType={NormalAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to increase your Twitter reach by over 200% with this simple trick" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. "/>
    </div>
    <div className='mt-16'>
      <AticalComponent option="Condent" date="SEPTEMBER 1, 2022" 
      aticalType={ReverseAtical}
      image="./public/marketing/aticalimg.webp" 
      title="How to reach out for guest posts to increase your SEO authority" 
      desc="Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.  "/>
    </div>
    <div className='flex flex-row justify-center mt-10'>
    <SecondButton text='More Atical'/>
    </div>
    </div>
  )
}

export default AticalSection
