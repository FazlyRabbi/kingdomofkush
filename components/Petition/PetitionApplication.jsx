import React, { useRef } from "react";
import { TfiReload } from "react-icons/tfi";
import SignatureCanvas from "react-signature-canvas";

const PetitionApplication = () => {
  const sigPad = useRef();
  return (
    <div>
      <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
        <div>
          <h1
            className=" text-[1.5rem] font-bold
        mb-4"
          >
            Add your name to show your support for the campaign for action!
          </h1>
          <form action="">
            <div className="grid grid-cols-2 gap-x-8 mb-5">
              <div>
                <label
                  className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                  htmlFor="name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                  required
                />
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                  htmlFor="name"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                />
              </div>
            </div>
            
            
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-5">
              <div>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="number"
                  id="phoneNumber"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                />
                <p className=" invisible text-sm mt-[1px] text-red">
                  This field is required.
                </p>
              </div>
              <div c>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="zipCode"
                >
                  Email Address
                </label>
                <input
                  required
                  type="text"
                  placeholder="e-mail"
                  title="Please enter a your email"
                  id="zipCode"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                />
                <p className=" invisible text-sm mt-[1px] text-red">
                  This field is required.
                </p>
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <div>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="address_1"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="address_1"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                />
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <label className="after:pl-1 font-bold block" htmlFor="address_2">
                Address Line 2
              </label>
              <input
                type="text"
                id="address_2"
                className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
              />
            </div>
            {/* ///////// */}

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
                  placeholder="E.g sydney"
                  id="city"
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
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
                  placeholder="E.g New South Wales"
                  id="city"
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
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
                  placeholder="E.g 2000"
                  id="zipcode"
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
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
                  className=" rounded-sm  border border-softGray focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#ededed] text-[#787676e8]"
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
            {/* ///////// */}

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <div class="mb-5">
                <label
                  className="after:pl-1 font-bold block mb-2 after:content-['*'] after:text-red"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  rows="5"
                  cols="40"
                  className="border p-2 border-softGray w-[100%] rounded-sm  "
                ></textarea>
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <label
                className="after:pl-1 font-bold block after:content-['*'] after:text-red"
                htmlFor="address_2"
              >
                Signature
              </label>
              <div class="mb-5">
                <div className="relative">
                  <SignatureCanvas
                    penColor="black"
                    dotSize={1}
                    throttle={50}
                    backgroundColor="#eeee"
                    ref={sigPad}
                    canvasProps={{
                      width: 500,
                      height: 156,
                      className:
                        " cursor-crosshair     mb-6  rounded-sm bg-[#e6e6e6]",
                    }}
                  />
                  <TfiReload
                    onClick={(e) => {
                      sigPad.current.clear();
                    }}
                    className=" absolute top-[10px]   left-[29rem] text-[1rem] font-bold cursor-pointer hover:text-black text-[#3a3a3a]"
                  />
                </div>
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mt-6">
              <button
                type="submit"
                className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-primary py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetitionApplication;
