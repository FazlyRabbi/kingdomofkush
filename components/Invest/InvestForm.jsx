import React from 'react'
import { Alert } from "@material-tailwind/react";

function InvestForm() {
    return (
        <div className='InvestForm  py-10'> <div className='container px-[3rem] mx-auto pt-[5rem] '>


            <div className=' shadow-xl min-h-[20rem] p-[3rem] '>

                <form className='' action='submit'>

                    <div className='grid  md:justify-items-start mdjustify-items-center    rounded-md border-l-4 border-[#eaeaea] grid-cols-1  space-y-5  md:space-y-0   md:grid-cols-2 md:space-x-8 p-[1rem]  bg-[#fbfbfb]'>
                        <div className='w-[100%]'>

                         <input type="text" className=' w-[100%]  placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2' placeholder='First Name' />
                            <Alert className=' bg-[#f9e4e8] text-red text-[12px]  rounded-none py-1 mt-1'>Name is required..</Alert>
                        </div>
                        <div className='w-[100%]'>

                            <input type="text" className=' w-[100%] placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2' placeholder='Last Name' />
                            <Alert className=' bg-[#f9e4e8] text-red text-[12px]  rounded-none py-1 mt-1'>Name is required..</Alert>
                        </div>


                    </div>


                    <div className='grid  mt-8 md:justify-items-start mdjustify-items-center    rounded-md border-l-4 border-[#eaeaea] grid-cols-1  space-y-5  md:space-y-0   md:grid-cols-2 md:space-x-8 p-[1rem]  bg-[#fbfbfb]'>
                        <div className='w-[100%]'>

                         <input type="email" className=' w-[100%]  placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2' placeholder='Email' />
                            <Alert className=' bg-[#f9e4e8] text-red text-[12px]  rounded-none py-1 mt-1'>Email is required..</Alert>
                        </div>
                        <div className='w-[100%]'>

                            <input type="number" className=' w-[100%] placeholder-black border-l-2 border-red bg-[#eaeaea] text-black px-2 py-2' placeholder='Phone' />
                            <Alert className=' bg-[#f9e4e8] text-red text-[12px]  rounded-none py-1 mt-1'>Please input a valid international phone number.</Alert>
                        </div>


                    </div>

                    <div className='grid  mt-8 md:justify-items-start mdjustify-items-center    rounded-md border-l-4 border-[#eaeaea] grid-cols-1  space-y-5  md:space-y-0   md:grid-cols-3 md:space-x-8 p-[1rem]  bg-[#fbfbfb]'>
                       


                    </div>



                </form>

            </div>
        </div></div>
    )
}

export default InvestForm