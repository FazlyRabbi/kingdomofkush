import React from 'react'
import bg from "../../img/Oji-String-Beans-Farm.jpg"
import {AiFillPlayCircle} from "react-icons/ai"

const ShowProject = () => {
  return (
    <div>
          <div className='py-8 px-[4rem]'>
             <div className='grid grid-cols-1 md:grid-cols-4 mb-16'>
               <div >
                   <span className='text-[#cb9833]'>Indonesia</span>
                   <div>
                        <h1 className='font-semibold text-[44px] leading-[55px]'>Oji String Beans Farm</h1>
                   </div>
               </div>
              </div> 
               <div>
                   <img src={bg.src}/>
                  
               </div>
          </div>
    </div>
  )
}

export default ShowProject