import React from 'react';

const InvestForm = () => {
    return (
        <div className='mt-[100px]'>
            <div className='m-10 shadow-xl shadow-lg shadow-gray-500 shadow-blur-3  bg-[#FFFFFF]'>
                <form action="">
                    <div className='lg:m-10 border-l-4 border-gray-500 shadow-xl rounded shadow-gray-500 shadow-blur-2 grid md:grid-cols-2 grid-cols-1 pt-[20px] pb-[30px] pl-[25px] pr-[20px] gap-10 bg-[#FFFFFF]  opacity-50'>
                        <div>
                            <input type="text" placeholder='First Name' className='w-full rounded bg-[#EDEDED]  p-2 text-[16px]' required />
                        </div>
                        <div>
                            <input type="text" placeholder='Last Name' className='w-full rounded bg-[#EDEDED] p-2 text-[16px]' required />
                        </div>
                    </div>
                    <div className='lg:m-10 border-l-4 border-gray-500 shadow-xl rounded shadow-gray-500 shadow-blur-2 grid md:grid-cols-2 grid-cols-1 pt-[20px] pb-[30px] pl-[25px] pr-[20px] gap-5 bg-[#FFFFFF] opacity-50'>
                        <div >
                            <input type="email" placeholder='Email' className='w-full bg-[#EDEDED] rounded p-2 text-[16px]' required />
                        </div>
                        <div class="relative">
                            <input type="email" placeholder='Email' className='w-full bg-[#EDEDED] rounded p-2 text-[16px]' required />

                        </div>
                    </div>
                    <div className='lg:m-10 border-l-4 border-gray-100 shadow-xl rounded shadow-gray-500 shadow-blur-2 pt-[20px] pb-[30px] pl-[25px] pr-[20px] bg-[#FFFFFF]  opacity-50'>
                        <div className=' grid md:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 '>
                            <div>
                                <h1>Project categories <span className='text-red mb-3'>*</span></h1>
                                <input type="checkbox" name="Agriculture" id="Agriculture" />
                                <label className='p-1' for="Agriculture">Agriculture</label><br></br>
                                <input type="checkbox" name="Housing" id="Housing" />
                                <label className='p-1' for="Housing">Housing</label><br></br>
                                <input type="checkbox" name="Clean" id="Clean" />
                                <label className='p-1' for="Clean">Clean</label><br></br>
                                <input type="checkbox" name="Healthcare" id="Healthcare" />
                                <label className='p-1' for="Healthcare">Healthcare</label><br></br>
                                <input type="checkbox" name="Infrastructure" id="Infrastructure" />
                                <label className='p-1' for="Infrastructure">Infrastructure</label><br></br>
                                <input type="checkbox" name="Power" id="Power" />
                                <label className='p-1' for="Power">Power</label><br></br>
                                <input type="checkbox" name="Communication" id="Communication" />
                                <label className='p-1' for="Communication">Communication</label><br></br>
                                <input type="checkbox" name="Tourism" id="Tourism" />
                                <label className='p-1' for="Tourism">Tourism</label><br></br>
                            </div>
                            <div>
                                <h1>Investor Type <span className='text-red'>*</span></h1>
                                <input type="radio" name="individual" id="individual" />
                                <label className='p-1' for="individual">Individual</label><br></br>
                                <input type="radio" name="individual" id="Business" />
                                <label className='p-1' for="Business">Business/ Corporation</label><br></br>
                            </div>
                            <div>
                                <h1> Preferred Investment Location <span className='text-red'>*</span></h1>
                                <input type="checkbox" name="Angola" id="Angola" />
                                <label className='p-1' for="Angola">Angola</label><br></br>
                                <input type="checkbox" name="Benin" id="Benin" />
                                <label className='p-1' for="Benin">Benin</label><br></br>
                                <input type="checkbox" name="Burkina" id="Burkina" />
                                <label className='p-1' for="Burkina">Burkina Faso</label><br></br>
                                <input type="checkbox" name="" id="" />
                                <label className='p-1' for="Burkina">Burkina Faso</label><br></br>
                                <input type="checkbox" name="Guinea" id="Guinea" />
                                <label className='p-1' for="Guinea">Guinea</label><br></br>
                                <input type="checkbox" name="Indonesia" id="Indonesia" />
                                <label className='p-1' for="Indonesia">Indonesia</label><br></br>
                                <input type="checkbox" name="Ivory" id="Ivory" />
                                <label className='p-1' for="Ivory">Ivory Coast</label><br></br>
                                <input type="checkbox" name="Mali" id="Mali" />
                                <label className='p-1' for="Mali">Mali</label><br></br>
                                <input type="checkbox" name="Nigeria" id="Nigeria" />
                                <label className='p-1' for="Nigeria">Nigeria</label><br></br>
                                <input type="checkbox" name="Sudan" id="Sudan" />
                                <label className='p-1' for="Sudan">Sudan</label><br></br>
                                <input type="checkbox" name="Togo" id="Togo" />
                                <label className='p-1' for="Togo">Togo</label><br></br>
                                <input type="checkbox" name="Zimbabwe" id="Zimbabwe" />
                                <label className='p-1' for="Zimbabwe">Zimbabwe</label><br></br>
                            </div>
                        </div>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5  mt-5'>
                            <div>
                                <h1> Preferred Investment Amount (USD) <span className='text-red'>*</span></h1>
                                <input type="text" placeholder='$' className='w-full rounded bg-[#EDEDED]  p-1 text-[16px]' />
                            </div>
                            <div className='mr-3'>
                                <h1> Preferred Investment Start Time <span className='text-red'>*</span></h1>
                                <select className="select bg-[#EDEDED] p-1 rounded select-accent w-full">
                                    <option selected>Immediate</option>
                                    <option>1 week</option>
                                    <option>3 week</option>
                                    <option>4 week</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='lg:m-10 mt-5'>
                        <button className='text-white bg-black p-2 mb-10'>I am Interested in Investing</button>
                    </div>
                </form >
            </div >
        </div >
    );
};

export default InvestForm;