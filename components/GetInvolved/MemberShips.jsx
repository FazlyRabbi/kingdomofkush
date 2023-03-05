import React from "react";
import styles from "../../styles/styles.module.css";
import MemberShip_Contact from "./MemberShip_Contact";
// imports imgage

function MemberShips() {
  return (
    <>
      <section>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:justify-items-start  items-center bg-white lg:pb-[70px] ">
            <div className={` ${styles.memberBg} min-h-[36rem] `}></div>
            <div className=" py-[4rem]  px-4 2xl:pl-[8rem] md:pl-[6rem] md:pr-8">
              <div className="content mb-[1.5rem] mt-4 lg:p-5">
                <h1 className="leading-[3rem] xl:hidden font-bold  text-[2.8rem] ">
                  Membership application.
                </h1>

              <h1 className="    leading-[1]  hidden xl:block font-bold text-[5rem] font-sans">
                  Membershi <br /> p <br /> application.
                </h1>
                <p className="font-base mt-12">
                  Feel a new experience in an incredible project
                </p>
                <p
                  className="font-base font-bold
            "
                >
                  Kingdom of Kush
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* application form */}
        <div className="p-[50px] mb-[20px] bg-white lg:mx-[100px] shadow-2xl">
          <div className="flex flex-col justify-between gap-8 items-center pb-10">
            <h1 className="text-[30px] lg:text-[23px] leading-6 uppercase text-[#CB9833]">
              APPLICANT INFORMATION FORM
            </h1>
            <div>
              <h2 className="font-bold">
                <strong>Please provide all responses in English.</strong>
              </h2>
              <p>Required fields are indicated by an asterisk *</p>
            </div>
          </div>

          <div
            className="relative flex lg:mx-[50px] border-b-4 justify-evenly
        "
          >
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Checkout</p>
              <span className="w-5 h-5 rounded-full bg-black absolute -bottom-3"></span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="pb-3">Finish</p>
              <span className="w-5 h-5 rounded-full bg-black absolute -bottom-3"></span>
            </div>
          </div>
          {/* ////// */}
          <div id="membership-contract">
            <MemberShip_Contact />
          </div>
        </div>
      </section>
    </>
  );
}

export default MemberShips;
