import React from 'react'
import bg from "../../img/Oji-String-Beans-Farm.jpg"
import {AiFillPlayCircle} from "react-icons/ai"

const Card = () => {
  
  return (
    <div>
      <div class="projectCard w-full h-[15rem] overflow-hidden relative border-1 border-red rounded-md">
          <div class="project-img w-full h-full transition-all bg-center bg-cover bg-no-repeat" style={{background:`url(${bg.src})`,backgroundSize:"100% 100%"}}></div>
          <div className='absolute w-full top-[5px]'>
             <div className='grid grid-cols-1 p-3'>
                     <div className='flex justify-center items-center mt-[78px] w-full'>
                         <button class="icon-button">
                             <AiFillPlayCircle className='text-[53px]'
                               onMouseOver={({target})=>target.style.color="#cb9833"}
                               onMouseOut={({target})=>target.style.color="black"}
                             />
                        </button>
                     </div>
                     <div className='flex flex-col justify-end'>
                         <h4 className='text-[1.55rem] font-bold text-[#fff]'>Oji String Beans Farm</h4>
                         <div className='h-[1.8rem] transition-all overflow-hidden'>
                             <div className='show'>
                                 <span className='text-[#cb9833]'>Indonesia</span>
                             </div>
                             <div className=''>
                                 <span className='text-[#cb9833]'>Show Project</span>
                             </div>
                         </div>
                     </div>
              </div>     
          </div>
      </div>
    </div>
  )
}

export default Card