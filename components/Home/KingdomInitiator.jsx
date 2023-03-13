import React from "react";
import Styles from "../../styles/styles.module.css";

function KingdomInitiator() {
  return (
    <section className="KingdomInitiator">
      <div className="  transition-all duration-800 grid grid-cols-1 items-center md:grid-cols-2 2xl:grid-cols-3 ">
        <div className=" py-[4rem]  2xl:pl-[16.5rem] pl-[1rem] md:pl-[2rem] px-[2rem] md:px-[0]  ">
          <div className="content   pt-[5rem] ">
            <h1 className=" text-[2rem] xl:text-[3rem] mb-[4rem] font-bold  leading-tight">
              The Kingdom is already an initiator
            </h1>
            <p>
              developer and a supporter of growing agricultural and natural
              resource development projects that span over 25 countries. This
              blooming Kingdom has already obtained a legal right to{" "}
              <b className=" font-bold">30 million hectares of land</b> develop
              over , significant amounts of natural resources (such as gold,
              diamonds, copper, lithium, iron, cobalt mines as well as water,
              rubber and many other resources) and is in the process of engaging
              in additional natural resources, mining, de-desertification, and
              clean water initiatives. This development plan offers regionalized
              food security and viable commodity production for the world.
              Successful cultivation is already underway and currently producing
              over 100 tons of various agricultural products, such as:
            </p>
          </div>
        </div>

        <div
          className={`${Styles.findBg} 2xl:ml-[12rem] 2xl:col-span-2 h-[25rem] xl:h-[45rem] `}
        ></div>
      </div>
    </section>
  );
}

export default KingdomInitiator;
