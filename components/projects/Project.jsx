import React from 'react'
import bg from "../../img/Oji-String-Beans-Farm.jpg"
import {AiFillPlayCircle} from "react-icons/ai"
import Card from './Card'

const Project = () => {
  return (
    <>
       <section className=''>
             <div className='px-[2rem]'>
                   <div className='text-center mb-8'>
                        <ul className='flex flex-wrap justify-center gap-3'>
                            <li>Filter by</li>
                            <li className=''>
                                
                                <a><span className='text-[#cb9833] font-semibold'>All</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Angola</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Benin</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Burkina Faso</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>DRC</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Guinea</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Indonesia</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Ivory Coast</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Mali</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Nigeria</span></a>
                            </li>
                            <li>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Sudan</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Togo</span></a>
                            </li>
                            <li className='flex gap-2'>
                                /
                                <a><span className='text-[#cb9833] font-semibold'>Zimbawe</span></a>
                            </li>
                        </ul>
                   </div>
                   <div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-3'>
                            <Card />
                            <Card />
                            <Card />
                            
                            <Card />
                        </div>
                   </div>
             </div>
       </section>
    </>
  )
}

export default Project