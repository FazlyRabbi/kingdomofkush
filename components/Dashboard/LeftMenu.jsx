import React, { useState } from "react";
import Link from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { CiMoneyBill } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { AiOutlineContacts } from "react-icons/ai";
import { MdOutlineStore , MdOutlineNoteAlt} from "react-icons/md";

import { useRouter } from "next/router";

function LeftMenu() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <>
      <CgMenuRightAlt
        className=" lg:hidden
         animate-pulse
        absolute cursor-pointer top-[2rem] right-[2rem] text-[2rem]"
        onClick={() => setOpen(!open)}
      />



      {/* // left manu */}
      <section
        className={`leftMenu shadow-xl rounded-lg 
    
    max-w-[15rem]
           transition-all duration-300
    absolute lg:static lg:z-0 z-10 top-0 left-0 
    
     
    w-full   mb-2 h-[100vh]  bg-[#F8F9FA]
 
    ${open ? "translate-x-0" : " -translate-x-[100rem] lg:translate-x-0"}
    
    `}
      >
        {/* left menu header */}
        <div className="leftMenu__header relative">
          <div className="flex justify-center ">
            <h5 className=" py-6  text-[1rem] font-bold">Dashboard</h5>
          </div>

          <span className=" mx-auto  bg-gradient-to-r from-transparent   via-[#E0E1E1] to-transparent   h-[1.2px]  w-[90%]"></span>
        </div>

        {/* left menu content */}
        <div className="leftMenu__content  transition-all duration-500 my-4 flex items-center justify-center flex-col">
          <Link
            href={`/dashboard`}
            className={`
          
           ${
             router.pathname === "/dashboard"
               ? ` 
           
            rounded-lg
        
            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] mt-2 flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <IoIosPeople className="  text-[1.3rem]  text-inherit" />
            </div>
            Members
          </Link>
          <Link
            href={`/dashboard/vendors`}
            className={`
          
           ${
             router.pathname === "/dashboard/vendors"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/vendors"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <MdOutlineStore className="  text-[1.3rem]  text-inherit" />
            </div>
            Vendors
          </Link>
          <Link
            href={`/dashboard/petition`}
            className={`
          
           ${
             router.pathname === "/dashboard/petition"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/petition"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <MdOutlineNoteAlt className="  text-[1.3rem]  text-inherit" />
            </div>
           Petition
          </Link>
          <Link
            href={`/dashboard/volunteers`}
            className={`
          
           ${
             router.pathname === "/dashboard/volunteers"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/volunteers"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <GrUserWorker className="   text-[1.3rem]  text-inherit" />
            </div>
           Volunteers
          </Link>
          <Link
            href={`/dashboard/invest`}
            className={`
          
           ${
             router.pathname === "/dashboard/invest"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/invest"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <CiMoneyBill className="  text-[1.3rem]  text-inherit" />
            </div>
           invest
          </Link>
          <Link
            href={`/dashboard/donation`}
            className={`
          
           ${
             router.pathname === "/dashboard/donation"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/donation"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <GiTakeMyMoney className="  text-[1.3rem]  text-inherit" />
            </div>
            Donation
          </Link>
          <Link
            href={`/dashboard/contacts`}
            className={`
          
           ${
             router.pathname === "/dashboard/contacts"
               ? ` 
           
            rounded-lg

            bg-white shadow-md`
               : ""
           }
           
           px-4 py-3
          w-[90%] flex justify-left gap-3 items-center text-base  font-normal
            
            text-[#394B6B] capitalize `}
          >
            <div
              className={`
          
            ${
              router.pathname === "/dashboard/contacts"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <AiOutlineContacts className="   text-[1.3rem]  text-inherit" />
            </div>
            Contacts
          </Link>
        </div>
      </section>
    </>
  );
}

export default LeftMenu;