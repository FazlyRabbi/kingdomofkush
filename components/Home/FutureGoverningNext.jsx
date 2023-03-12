import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_4.jpg";
// import sliders
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

// import required modules
SwiperCore.use([Navigation, Autoplay]);

function FutureGoverningNext() {
  return (
    <section className="FutureGoverningNext">
      <div className=" py-[6rem] grid   items-center grid-cols-1 md:grid-cols-2 ">
        <div className=" py-[4rem] md:py-[1rem] 2xl:pl-[18rem]  px-[2rem] xl:px-0">
          <div className="content">
            <p className=" text-base pb-2 md:pr-[12rem] ">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>

        <div className=" 2xl:mr-[30rem]">
          <Swiper
            navigation
            autoplay={{ delay: 3000 }}
            className={`max-w-[23rem]  h-[35rem] transition-all duration-300`}
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
        </div>
      </div>
    </section>
  );
}

export default FutureGoverningNext;
