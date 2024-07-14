import React from 'react'
import NavBarComponent from '../../components/homepage/NavBarComponent'
import { Navbardashboard } from '../../components/dashboard/Navbardashboard'
import { SidebarComponent } from '../../components/dashboard/SidebarComponent'
import { BiColor } from 'react-icons/bi'
import { BsBack } from 'react-icons/bs'
import { Minibar } from '../../components/dashboard/Minibar'
import { MainConponent } from '../../components/dashboard/MainComponent'
import { ImagComponent } from '../../components/dashboard/ImagComponent'



function Dashboard() {
  // const heading={
  //   color:'White',
  //   backgroundColor:"blue",  
    
  // }
  return (
    <div>
    <Navbardashboard/>
    <SidebarComponent/>
    
    <div className=" absolute left-72 ">
        <sectio>
          <MainConponent/>
          <h3 className='mt-3 '>Your design</h3>
      </sectio>
      <section className='mt-6'> 
          <Minibar/> 
      </section>
      <div className="flex m-5">
        <ImagComponent/>
        <ImagComponent/>
        <ImagComponent/>
      </div>
    </div>
    
  
    

    </div>
    
  )
}

export default Dashboard

