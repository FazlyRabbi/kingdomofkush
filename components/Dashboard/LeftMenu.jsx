import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosPeople } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { CiMoneyBill } from "react-icons/ci";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiOpenproject } from "react-icons/si";
import { FiMessageSquare } from "react-icons/fi";
import { AiOutlineContacts } from "react-icons/ai";
import { BsMicrosoftTeams, BsMotherboard } from "react-icons/bs";
import { MdOutlineStore, MdOutlineNoteAlt } from "react-icons/md";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import logo from "../../img/logo.png";

function LeftMenu() {
  const router = useRouter();

  const { open } = useContext(AuthContext);

  return (
    <>
      <section
        className={`leftMenu shadow-xl rounded-lg 
    
    max-w-[15rem]
           transition-all duration-300
    absolute lg:static lg:z-0 z-30  mt-[1.8rem] left-0 
    
     
    w-full   md:overflow-y-auto  overflow-y-scroll  mb-2 h-[100vh] lg:h-[90vh]  bg-[#F8F9FA]
 
    ${open ? "translate-x-0" : " -translate-x-[100rem] lg:translate-x-0"}
    
    `}
      >
        {/* left menu header */}
        <div className="leftMenu__header relative">
          <div className="flex flex-col justify-center items-center py-4 ">
            <Image src={logo} height={10} width={70} alt="logo" />
            <Link href={`/dashboard`}>
              <h5 className=" py-2  text-[1rem] font-bold">Dashboard</h5>
            </Link>
          </div>

          {/* <span className=" mx-auto  bg-gradient-to-r from-transparent   via-[#d59620] to-transparent   h-[1.2px]  w-[90%]"></span> */}
        </div>

        {/* left menu content */}
        <div className="leftMenu__content  transition-all duration-500 my-4 flex items-center justify-center flex-col">
          <Link
            href={`/dashboard/members`}
            className={`
          
           ${
             router.pathname === "/dashboard/members"
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
              router.pathname === "/dashboard/members"
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
          <Link
            href={`/dashboard/projects`}
            className={`
          
           ${
             router.pathname === "/dashboard/projects"
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
              router.pathname === "/dashboard/projects"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <SiOpenproject className="   text-[1.3rem]  text-inherit" />
            </div>
            Projects
          </Link>
          <Link
            href={`/dashboard/about`}
            className={`
          
           ${
             router.pathname === "/dashboard/about"
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
              router.pathname === "/dashboard/about"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <FiMessageSquare className="   text-[1.3rem]  text-inherit" />
            </div>
            About
          </Link>
          <Link
            href={`/dashboard/teams`}
            className={`
          
           ${
             router.pathname === "/dashboard/teams"
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
              router.pathname === "/dashboard/teams"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <BsMicrosoftTeams className="   text-[1.3rem]  text-inherit" />
            </div>
            Teams
          </Link>
          <Link
            href={`/dashboard/others`}
            className={`
          
           ${
             router.pathname === "/dashboard/others"
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
              router.pathname === "/dashboard/others"
                ? `
            
                bg-gradient-to-r from-cyan-500 to-blue-500 text-white
            
            `
                : ``
            }
          
          p-[5px] rounded-lg shadow-md`}
            >
              <BsMotherboard className="   text-[1.3rem]  text-inherit" />
            </div>
            Others
          </Link>
        </div>
      </section>
    </>
  );
}

export default LeftMenu;
