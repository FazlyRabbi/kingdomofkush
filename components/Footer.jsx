import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Foot() {
  return (
    <footer className="bg-[#F9F8FA] ">
      <div className="container mx-auto max-w-[75rem] 2xl:max-w-[85rem]">
        <div className=" grid grid-cols-1 md:grid-cols-4 py-[5rem]  gap-x-[3.5rem]   border-softGray   px-4 space-y-10 border-spacing-2 border-b-[1px]   ">
          <div className="  self-center">
            <Image src={Logo} width={60} height={60} alt="logo" />
          </div>
          <div className=" flex md:flex-col   flex-wrap  ">
            <p className=" text-base font-bold">Kingdom of Kush LLC</p>
            <p className=" text-base">One World Trade Center</p>
            <p className=" text-base">Floor 85</p>
            <p className=" text-base">New York, NY 10007</p>
            <p className=" text-base">USA</p>
          </div>
          <div className=" flex md:flex-col flex-wrap">
            <p className=" text-base">Interested in working with us?</p>
            <p className=" text-base text-primary hover:underline font-bold">
              info@kingdomofkush.org?
            </p>
          </div>
          <div>
            <Link href={"/donation"}>
              <Button
                className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[100%]    font-normal text-primary
            "
              >
                Donation
              </Button>
            </Link>
          </div>
        </div>
        <div className="footer__bottom   flex justify-between  text-left  py-6 px-4">
          <p
            className=" 
          "
          >
            © 2023 <span className=" text-primary">Kingdom of Kush.</span> All
            rights reserved
          </p>

          <div className="social__logo flex   space-x-8 justify-between items-center">
                <FaFacebookF className=" text-[1.2rem] cursor-pointer" />

                <AiOutlineTwitter className=" text-[1.2rem] cursor-pointer" />

                <AiFillLinkedin className=" text-[1.2rem] cursor-pointer" />

                <AiFillYoutube className=" text-[1.2rem] cursor-pointer" />

                <AiOutlineInstagram className=" text-[1.2rem] cursor-pointer" />
              </div>
        </div>
      </div>
    </footer>
  );
}
