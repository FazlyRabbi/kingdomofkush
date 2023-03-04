import React from 'react'
import Layout from '@/components/Layout';
import { CgProfile } from 'react-icons/cg';
import { HiArrowTrendingUp } from 'react-icons/hi2';

function petition() {
    return (
        <Layout title={"petition"}>
            <div>
                <h1 className='text-center font-bold text-[3rem] mx-[3rem] my-[2rem]'>Recognition of the Kingdom of Kush as a Sovereign State</h1>
                <div className="grid grid-cols-2">
                    <div className="h-[300px] mx-[3rem] rounded-lg">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Washitaw_Nation.gif" alt="" className='w-full h-full rounded-lg' />
                    </div>
                    <div className='flex flex-col justify-between gap-4 mx-[3rem]'>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-2xl'><span className='font-bold'>534 have signed.</span> Let's get to 1,000!</h1>
                            <div className="w-full h-5 bg-[#7f7e7e8e] rounded-full">
                <div className="w-2/3 h-full text-center text-xs text-white bg-gradient-to-r from-yellow-900 to-orange-900 rounded-full">
                </div>
            </div>
                        </div>
                        <div className="flex justify-between gap-4 mr-4">
                            <HiArrowTrendingUp className='h-8 w-10 p-1 font-bold rounded-full bg-green-800 text-white' />
                            <div>
                                <h1 className='text-2xl'>
                                    <span className='text-lg font-bold'>At 1000 signatures,</span> this petition is more likely to be <span className='font-bold'>Featured in recommendations!</span>
                            </h1>
                            </div>
                        </div>
                        
                        
                        <div className="flex flex-col gap-3">
                        <div className="flex gap-4 mr-4">
                            <CgProfile className='h-8 w-8 rounded-full bg-gray text-white' />
                            <div>
                            <h1><span className="font-bold">
                                        Cepren Kywhnp</span> signed 13 hours ago</h1>
                            </div>
                      </div>
                        <div className="flex gap-4 mr-4">
                            <CgProfile className='h-8 w-8 rounded-full bg-gray text-white' />
                            <div>
                            <h1><span className="font-bold">
                                        Jamal Tabidi</span> signed 2 days ago</h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
                {/* second section */}
                <div className='mx-[3.1rem]'>
                        <div className="grid grid-cols-2 my-5 ">
                        <div className="flex gap-4 mr-4">
                            <CgProfile className='h-8 w-8 rounded-full bg-gray text-white' />
                            <div>
                            <h1><span className="font-bold text-blue-300 border-b">
                                        kingdomofkush.org .</span> Started this petition </h1>
                                        <div className='flex flex-col gap-1'>
                                        <p className="font-bold">To the office of the president of thte united states of</p>
                                        <p className="font-bold">America</p>
                                        <p className="font-bold">White house</p>
                                        <p className="font-bold">1600 pennsylvania avenue</p>
                                        <p className="font-bold">Washington, DC 20515</p>
                                        </div>
                                        <div>
                                        <p className="font-bold">To the office of the house majority leader</p>
                                        <p className="font-bold">1226 Longworth h.o.b.</p>
                                        <p className="font-bold">Washington, dc 20514</p>
                                        </div>
                                        <div>
                                        <p className="font-bold">To the office of the house majority leader</p>
                                        <p className="font-bold">1226 Longworth h.o.b.</p>
                                        <p className="font-bold">Washington, dc 20514</p>
                                        </div>
                                        

                                        </div>
                        </div>
                        <div className="form">
                            <h1 className="font-bold text-xl">
                                Sign this petition
                            </h1>
                            <div>
                            <form action="">
        <div className="mb-6">
          <label for="name" className="block text-gray-800 font-bold">First Name</label>
          <input type="text" name="name" id="name" placeholder="username" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>
        <div className="mb-6">
          <label for="name" className="block text-gray-800 font-bold">Last Name</label>
          <input type="text" name="name" id="name" placeholder="username" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
        </div>

        <div>
          <label for="email" className="block text-gray-800 font-bold">Email:</label>
          <input type="text" name="email" id="email" placeholder="@email" className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />

          <div>
                                    <label className="block text-gray-500 font-bold" for="remember">
                                        <input className="ml-2 leading-tight" type="checkbox" id="remember" name="remember" />
                                        <span className="text-sm">
                                            Display my name and comment on this petition
                                        </span>
                                    </label>
                                </div>
        </div>
        <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Sign this petition</butt>
      </form>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        </Layout>
    )
}

export default petition