import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_3.jpg";

// import sliders
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// import required modules
SwiperCore.use([Navigation, Autoplay]);

function BloomingVison() {
  return (
    <section className="BloomingVison">
      <div className=" py-[6rem] grid  items-center justify-items-end grid-cols-1 md:grid-cols-2 xl:gap-x-[3rem]">
   

<Swiper
  navigation
  autoplay={{ delay: 3000 }}
  className={`max-w-[25rem]
h-[34rem] transition-all duration-[1s] mr-[5rem]`}
>
  <SwiperSlide>
    <Image src={s1} height={650} width={500} alt="slider image" />
  </SwiperSlide>
  <SwiperSlide>
    <Image src={s1} height={650} width={500} alt="slider image" />
  </SwiperSlide>
  <SwiperSlide>
    <Image src={s1} height={650} width={500} alt="slider image" />
  </SwiperSlide>
  <SwiperSlide>
    <Image src={s1} height={650} width={500} alt="slider image" />
  </SwiperSlide>
</Swiper>


        <div className=" py-[4rem] md:py-[1rem]   px-[2rem] xl:px-0">
          <div className="content">
            <h4 className=" font-bold text-[2.5rem] lg:text-[3rem]  leading-tight 2xl:pr-[20rem] px-[2rem] md:py-0 py-[4rem]">
              A Blooming Vision of Business & Industry
            </h4>
            <p className=" text-base pb-2 px-2  2xl:pr-[20rem]">
              With plans to become the next Dubai and Singapore-like business
              hub centered around the pursuit of knowledge and intellectual
              endeavors,{" "}
              <b className="font-bold">
                the Kingdom actively welcomes advanced research
              </b>{" "}
              and development in all areas of business connecting Africa and the
              rest of the world. Significant financial commitments have already
              been made toward a thriving business community helping to
              stabilize the region economically and support the global economy.
              It will be necessary to continue funding the industrial ecosystem
              in order to meet community needs involving energy, natural
              resources, agriculture, and mining.{" "}
              <b className="font-bold">
                The Kingdom’s goal is to turn Africa into a financial supporter
                of the global economy, not to remain its beneficiary.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BloomingVison;
