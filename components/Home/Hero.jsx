import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { BsPlayFill } from "react-icons/bs";
import YoutubeStyles from "../../styles/youtube.module.css";

function Hero() {
  return (
    <section className="Hero">
      <div className="text-heading text-black   top-[30%] md:top-[53%] left-[7%] absolute">
        <p className=" text-base font-bold  text-white mb-3">
          TOGETHER WE PROSPER. THE FUTURE IS NOW
        </p>
        <h1 className=" text-[2rem] md:text-[4rem] font-bold text-white md:leading-[4rem] leading-[2.5rem] ">
          Kingdom Of <br />
          Kush
        </h1>

        <div className=" flex  flex-wrap mt-12 space-x-[6rem]  justify-center items-center">
          <div className=" relative ">
            <div
              className=" flex justify-center  hover:scale-110 transition-all duration-300 z-[100] items-center  
            
            
            
            w-[3rem] h-[3rem]

            md:w-[3.5rem] md:h-[3.5rem]
            
            
            
            rounded-[100%] hover:border-[1px] border-primary  cursor-pointer"
            >
              <BsPlayFill className="  text-[2rem] z-[10]  " />
              <div className=" absolute  animate-ping h-[2.5rem] w-[2.5rem] rounded-full bg-black"></div>
              <div className=" absolute   h-[100%] w-[100%] rounded-full bg-white"></div>
            </div>
          </div>

          <Link href={`/contact`}>
            <Button
              className=" bg-black rounded-md  shadow-none   text-[.8rem]  cursor-pointer hover:shadow-none sm:w-[20rem] md:w-[35rem]   uppercase font-bold text-primary
            "
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={`${YoutubeStyles.youtubeContainer}   w-[100%] h-[100vh]  max-h-[40rem]  md:max-h-[100vh] `}
      >
        <iframe
          title="YouTube video player"
          src="https://www.youtube.com/embed/_eO9RyErOMM?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=0&playsinline=0&rel=0&enablejsapi=1"
          allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" w-[300%] -ml-[100%] h-[120%] -z-[999999]     max-h-[40rem] xl:max-h-[120%] lg:max-h-[100%]  md:max-h-[100%]  "
        ></iframe>
      </div>
    </section>
  );
}

export default Hero;
