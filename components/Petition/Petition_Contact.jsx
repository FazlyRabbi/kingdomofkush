import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { petitionContext } from "@/context/PetitioContext";


const Petition_Contact = () => {

  const [ip, setIp] = useState("");

  const [countryData, setCountryData] = useState("");
  const { petition, setPetition } =

  useContext(petitionContext);

  const router = useRouter();


  // get visitor ip address
  const getIpAddress = async () => {
    try {
      const res = await fetch(`https://api.ipify.org/?format=json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setIp(data.ip);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getIpAddress();
  }, []);

  // get visitor ip address
  const getCountry = async () => {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`, {
        method: "GET",
      });

      const data = await res.json();
      setCountryData(data);
      setPetition({...petition, Country:data?.country_name})
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (ip) {
      getCountry();
    }
  }, [ip]);


  
  const handleSubmit = (e) => {
    e.preventDefault();
    const pititonData = {
      FirstName: petition.FirstName,
      LastName: petition.LastName,
      Email: petition.Email,
      Country: countryData?.country_name,
    };
    localStorage.setItem("pititonData", JSON.stringify(pititonData));
    router.push("/petition_application");
  };



  return (
    <form action="submit" onSubmit={handleSubmit}>
      <div>
        <label
          className="  font-bold  after:text-red  after:pl-1 block"
          htmlFor="name"
        >
          First Name
        </label>
        <input
          type="text"
          id="name"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
          value={petition.FirstName}
          onChange={(e) => {
            setPetition({ ...petition, FirstName: e.target.value });
          }}
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="  font-bold  after:pl-1 block" htmlFor="name">
          Last Name
        </label>
        <input
          type="text"
          id="name"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          value={petition.LastName}
          onChange={(e) => {
            setPetition({ ...petition, LastName: e.target.value });
          }}
          required
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      <div>
        <label className="  font-bold  after:pl-1 block" htmlFor="Email">
          Email
        </label>
        <input
          type="email"
          id="Email"
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          required
          value={petition.Email}
          onChange={(e) => {
            setPetition({ ...petition, Email: e.target.value });
          }}
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>

      <div>
        <label className="  font-bold  after:pl-1 block">Country</label>
        <input
          disabled
          type="text"
          value={countryData?.country_name}
          className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
          // value={petition.Email}
        />
        <p className=" text-sm mt-[1px] text-red invisible">
          This field is required.
        </p>
      </div>
      {/* {ip ? (
        <div>
          <label className="  font-bold  after:pl-1 block">IP location</label>
          <input
            disabled
            type="text"
            value={ip ? ip : "Not found"}
            className=" py-3 rounded-md  w-[100%] px-2 border-softGray border-[2px]"
            // value={petition.Email}
            // onChange={(e) => {
            //   setPetition({ ...petition, Email: e.target.value });
            // }}
          />
          <p className=" text-sm mt-[1px] text-red invisible">
            This field is required.
          </p>
        </div>
      ) : (
        ""
      )} */}
      <div>
        <label className="block text-gray-500" htmlFor="remember">
          <input
            className="mr-6 leading-tight w-5 h-5 rounded-xl"
            type="checkbox"
            id="remember"
            name="remember"
            required
          />
          <span className="text-[18px]">
            Display my name and comment on this petition
          </span>
        </label>
      </div>
      <button className="cursor-pointer py-2 px-4 block mt-6 bg-red text-white font-bold w-full text-center rounded">
        Sign this petition
      </button>
    </form>
  );
};

export default Petition_Contact;
