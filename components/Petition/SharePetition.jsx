import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function SharePetition({ open, setOpen }) {
  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Share </DialogHeader>
        <DialogBody divider>
          <div className="flex  px-6 justify-evenly items-center">
            <div className="w-[45px] h-[45px] bg-[#4267B2] text-white text-center rounded-full">
              <Link href={"https://www.facebook.com/royalkingdomofkush"}>
                <FaFacebookF className=" text-[1.2rem] cursor-pointer mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#1DA1F2] text-white text-center rounded-full">
              <Link href={"https://twitter.com/eKingdomofKush"}>
                <AiOutlineTwitter className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#0077b5] text-white text-center rounded-full">
              <Link href={"https://www.linkedin.com/company/kingdomofkush/"}>
                <AiFillLinkedin className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#c4302b] text-white text-center rounded-full">
              <Link
                href={
                  "https://www.youtube.com/channel/UCrl79VUm6Mklxwu9pG5JUAA"
                }
              >
                <AiFillYoutube className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
            <div className="w-[45px] h-[45px] bg-[#3f729b] text-white text-center rounded-full">
              <Link href={"https://www.instagram.com/royalkingdomofkush/"}>
                <AiOutlineInstagram className=" text-[1.2rem] cursor-pointer  mx-auto mt-3" />
              </Link>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
