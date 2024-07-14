import React from 'react'
import { CardBoxComponent } from './CardBoxComponent'

function ServiceSection() {
  return (
    <div className='mx-60'>
        <br />
        <div>
      <small className="text-md text-white"><span className="text-yellow-300">// </span>
                0 . 1 SERVICES
            </small>
            <h2 className='text-2xl w-[40%] text-white'>High-impact services to take your business to the next level</h2>
            </div>
            <div className='flex flex-row flex-wrap gap-5 mt-16'>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="./public/marketing/Chat Marketing.png" name="Social Media Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
            </div>
    </div>
  )
}

export default ServiceSection
