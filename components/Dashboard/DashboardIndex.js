import React, { useEffect, useState } from "react";
import LeftMenu from "./LeftMenu";
import { API_URL, API_TOKEN } from "@/config/index";
import AreaCharts from "./AreaCharts";
import CustomShapeBarCharts from "./CustomShapeBarCharts";
import SimpleBarCharts from "./SimpleBarCharts";
import PieChartWithCustomizedLabels from "./PieChartWithCustomizedLabels";

function DashboardIndex() {
  return (
    <>
      <div className="lg:grid   px-10 lg:grid-cols-5 gap-5 justify-items-left p-[3rem] ">
        <LeftMenu />

        <div className=" grid-cols-1  min-h-[70rem] lg:min-h-0   grid lg:grid-cols-2 lg:col-span-4  mr-10 mt-14">
          <PieChartWithCustomizedLabels />
          <CustomShapeBarCharts />
          <AreaCharts />
          <SimpleBarCharts />
        </div>
      </div>
    </>
  );
}

export default DashboardIndex;
