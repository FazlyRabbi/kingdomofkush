import React, { useEffect } from "react";
import { API_URL } from "../config";
import { useRouter } from "next/router";

function admin() {
  const route = useRouter();

  useEffect(() => {
    if (route.pathname === "/admin") {
      route.push(`${API_URL}/admin`);
    }
  }, []);

  return (
    <div className="h-[30rem] flex justify-center items-center">
      <h1 className=" text-primary text-center font-bold text-[2rem] animate-pulse">
        {" "}
        Admin Dashboard is looding...
      </h1>
    </div>
  );
}

export default admin;
