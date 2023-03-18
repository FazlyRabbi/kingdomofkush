import React from "react";
import DashboardIndex from "@/components/Dashboard/DashboardIndex";
import Head from "next/head";

function dashboard() {
  return (
    <>
       <Head>
        <title>Members</title>
      </Head>
      <DashboardIndex />
    </>
  );
}

export default dashboard;
