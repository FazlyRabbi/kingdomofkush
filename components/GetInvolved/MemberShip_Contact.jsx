import Image from 'next/image';
import React from 'react';

const MemberShip_Contact = () => {
    return (
        <div className='lg:mx-[50px] my-[3rem]'>
            <div className='w-full'>
                <h1 className='text-[34px]'>PERSONAL INFORMATION</h1>
            </div>
            <form action="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 mb-5 bg-[#fbfbfb] px-6 py-5 border-l-[10px] rounded-l-2xl border-[#ededed]">
            <div>
              <input
                type="text"
                placeholder='Prof.'
                id="name"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder='First (Given) Name'
                id="fname"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder='Middle Name'
                id="mname"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                type="text"
                placeholder='Family Name (Last Name'
                id="fname"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>

          {/* ///////////// */}
          <div className='bg-[#fbfbfb] px-6 py-5 border-l-[10px] rounded-l-2xl border-[#ededed] mb-5'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
            <div>
              <input
                type="email"
                placeholder='E.g. john@doe.com'
                id="email"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
              <input
                type="tel"
                placeholder='Phone Number'
                id="tel"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 ">
            <div>
            <label
                className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                htmlFor="address_1"
              >
                Street Address
              </label>
              <input
                type="text"
                placeholder='E.g 42 Wallaby Way'
                id="address_1"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the street address.
              </p>
            </div>
            <div>
            <label
                className="  after:pl-1   font-bold   block"
                htmlFor="address_1"
              >
                Apartment, suite, etc
              </label>
              <input
                type="text"
                placeholder=''
                id="fname"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
          <div>
            <label
                className="after:pl-1   font-bold   block"
                htmlFor="address_1"
              >
                City
              </label>
              <input
                type="text"
                placeholder='E.g sydney'
                id="city"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          <div>
            <label
                className="after:pl-1   font-bold   block"
                htmlFor="address_1"
              >
                State/Province
              </label>
              <input
                type="text"
                placeholder='E.g New South Wales'
                id="city"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          <div>
            <label
                className="after:pl-1   font-bold   block"
                htmlFor="address_1"
              >
            Zip / Postal Code
              </label>
              <input
                type="number"
                placeholder='E.g 2000'
                id="zipcode"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
              />
              <p className="text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          <div>
            <label
                className="after:pl-1   font-bold   block"
                htmlFor="address_1"
              >
                Country
              </label>
              <select
                id="countries"
                className=" bg-[#ededed] rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#ededed] text-[#787676e8]"
              >
                <option selected>Select country</option>
                <option value="US">Afghanistan</option>
                <option value="CA">Albania</option>
                <option value="FR">Algeria</option>
                <option value="DE">American Samoa</option>
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
          </div>
          </div>
            {/* Selected plan */}
          <div className='bg-[#fbfbfb] px-6 py-5 border-l-[10px] rounded-l-2xl border-[#ededed] mb-5'>
            <div className="grid grid-cols-1 gap-x-8">
                <div className="">
                    
                    <fieldset>
    <legend className='text-[#777771] pb-1'>Membership plan</legend>
      <div className='flex'>
      <input type="radio" id="contactChoice1" name="contact" value="email" className='mr-2 w-5 h-5  accent-black' />
      <label for="contactChoice1">Monthly</label>
      
      <input type="radio" id="contactChoice2" name="contact" value="phone" className='w-5 h-5 mr-2 ml-5 accent-black' />
      <label for="contactChoice2">Yearly</label>
    </div>
  </fieldset>
                </div>
                <div className='pt-10 pb-2'>
                    <h6 className='text-[#777771]'>Price</h6>
                    <p className='text-[18px] text-[#191f23] '>Currency Price 10$ / Monthly</p>
                </div>
            </div>
          </div>
        {/* payment card */}
          <div className="">
          <input
                type="number"
                placeholder='Card number'
                id="payment_card"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                Your card number is incomplete.
              </p>
          </div>
          {/* /////Billing Information////// */}
          <p className='py-2'>Billing address</p>
          <div className='bg-[#fbfbfb] px-6 py-5 border-l-[10px] rounded-l-2xl border-[#ededed] mb-5'>
          <div className="grid grid-cols-1 gap-x-8 ">
            <div>
            <label
                className="  after:pl-1 text-[#777771]  block"
                htmlFor="address_1"
              >
                Name
              </label>
              <input
                type="text"
                placeholder='E.g. John Doe'
                id="billing_name"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
            <label
                className="  after:pl-1 text-[#777771] after:content-['*'] after:text-red  block"
                htmlFor="address_1"
              >
                Street Address
              </label>
              <input
                type="text"
                placeholder='E.g. 42 Wallaby Way'
                id="billing_address_1"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <div>
            <label
                className="  after:pl-1 text-[#777771]  block"
                htmlFor="address_1"
              >
                Apartment, suite, etc
              </label>
              <input
                type="text"
                placeholder=''
                id="billing_address_2"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>   
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
            <div>
            <label
                className="  after:pl-1 text-[#777771]  block"
                htmlFor="billing_city"
              >
                City
              </label>
              <input
                type="text"
                placeholder='E.g Sydney'
                id="billing_city"
                className="py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
            <label
                className="  after:pl-1 text-[#777771]  block"
                htmlFor="billing_state"
              >
                State/Province
              </label>
              <input
                type="text"
                placeholder='E.g New South Wales'
                id="billing_state"
                className="py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
                required
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
            <label
                className="  after:pl-1 text-[#777771]  block"
                htmlFor="billing_zipcode"
              >
                ZIP / Postal Code
              </label>
              <input
                type="number"
                placeholder='E.g 2000'
                id="billing_zipcode"
                className=" py-3 rounded-md  w-[100%] px-2  bg-[#ededed]"
              />
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.Please enter the city.
              </p>
            </div>
            <div>
            <label
                className="after:pl-1 text-[#777771] font-bold block"
                htmlFor="billing_select_country"
              >
                Country
              </label>
              <select
                id="countries"
                className=" bg-[#ededed] rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#ededed] text-[#787676e8]"
              >
                <option selected>Select country</option>
                <option value="US">Afghanistan</option>
                <option value="CA">Albania</option>
                <option value="FR">Algeria</option>
                <option value="DE">American Samoa</option>
              </select>
              <p className=" text-sm mt-[1px] text-red invisible">
                This field is required.
              </p>
            </div>
            <label className='w-full'>
  <input type="checkbox" className='mr-2' /> Yes, I agree with the <span className='text-[#cb9833] cursor-pointer'>privacy policy</span> and <span className='text-[#cb9833] cursor-pointer'>terms and conditions</span>.
</label>
          </div>
          </div>
          
          {/* ///////// */}
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 mt-6">
            <div>
                <div className="border border-[#d3d3d3] bg-[#f9f9f9] shadow flex w-[300px] h-[100px] justify-center items-center ">
                <label className='w-full px-4 flex '>
  <input type="checkbox" className='w-5 h-5 mr-2' /> I'm not a robot
</label>
<Image 
className='my-4'
src="https://i.ibb.co/Xk6skZp/icons8-captcha-58.png"
alt="Picture of the recapcha"
width={60}
height={60} />
                </div>
            </div>
            <div>
            <label
                className="after:pl-1 font-bold block after:content-['*'] after:text-red"
                htmlFor="address_2"
              >
                Signature
              </label>
              <div class="mb-5">
          <input type="file" name="file" id="file" class="sr-only" />
          <label
            for="file"
            class="relative w-full flex min-h-[200px] items-center justify-center rounded-md border border-[#e0e0e0] p-12 text-center"
          >
            <div className='absolute border-b border-[#cdcbcb] w-[80%] mx-10'>
              
              
            </div>
          </label>
        </div>
            </div>
              
          </div>
          
          {/* ///////// */}
          <div className=" flex justify-between mt-6">
            <button
              type="submit"
              className=" bg-black rounded-md  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-white py-3">
              Previous
            </button>
            <button
              type="submit"
              className=" bg-black rounded-md  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-white py-3">
              Submit application
            </button>
          </div>
        </form>
        </div>
    );
};

export default MemberShip_Contact;