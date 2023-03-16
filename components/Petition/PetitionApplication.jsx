import React, { useRef, useState, useEffect, useContext } from "react";
import { browserName, osName, fullBrowserVersion } from "react-device-detect";
import { TfiReload } from "react-icons/tfi";
import SignatureCanvas from "react-signature-canvas";
import { petitionContext } from "@/context/PetitioContext";
import { Button } from "@material-tailwind/react";
// alart and messages
import useSweetAlert from "../lib/sweetalert2";
import SharePetition from "./SharePetition";

import countryName from "../../public/country.json";

const PetitionApplication = () => {
  const { petition, setPetition, petitionInitial, sendMailpetitions } =
    useContext(petitionContext);

  const [signature, setSignature] = useState(null);

  const formData = typeof FormData !== "undefined" ? new FormData() : null;
  // showing alert
  const { showAlert } = useSweetAlert();
  const [open, setOpen] = useState(false);

  const showAlerts = () => {
    showAlert({
      text: "Your Petition Application Successfull!",
      icon: "success",
      confirmButtonText: "ClOSE",
      confirmButtonColor: "green",
      header: "hello",
    }).then((result) => {
      console.log(result);
    });
  };

  const sigPad = useRef();

  const currentDate = new Date();

  const [data, setData] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get petition data items from Local Storage
      const userString = localStorage.getItem("pititonData");
      const pititonDatas = JSON.parse(userString);
      setData(pititonDatas);
    }
    // =========================== Random Number
    const min = 10000000;
    const max = 99999999;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const actualNum = `khuspeti${randomNumber}`;

    setPetition({
      ...petition,
      RegistrationId: actualNum,
      DeviceRecentActivitys: {
        IpAddress: fullBrowserVersion,
        BrowserName: browserName,
        OperatingSystemName: osName,
        Locations: petition.AddressLine,
        Date: currentDate.toLocaleDateString(),
      },
    });
  }, []);

  const handleConvertToImage = () => {
    toPng(sigPad.current, { quality: 1, backgroundColor: "#fff" })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
        console.log(dataUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const postpetitions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/petitions`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },
        body: JSON.stringify({
          data: {
            ...petition,
          },
        }),
      });
      const data = await res.json();
      sendMailpetitions();
      console.log(data);
      if (!res.ok) return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postpetitions();
    showAlerts();
    localStorage.removeItem("pititonData");
    setPetition(petitionInitial);
    handleConvertToImage();
    setSignature(null);
  };

  return (
    <div>
      <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
        <div>
          <h1
            className=" text-[1.5rem] font-bold
        mb-4"
          >
            Add your name to show your support for the campaign for action!
          </h1>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-8 mb-5">
              <div>
                <label
                  className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                  htmlFor="name"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  readOnly
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                  required
                  value={data?.FirstName}
                />
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="  font-bold after:content-['*'] after:text-red  after:pl-1 block"
                  htmlFor="name"
                >
                  Last Name
                </label>
                <input
                  required
                  type="text"
                  readOnly
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                  value={data?.LastName}
                />
              </div>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 mb-5">
              <div>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  required
                  type="number"
                  id="phoneNumber"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                  value={petition.Phone}
                  onChange={(e) =>
                    setPetition({ ...petition, Phone: e.target.value })
                  }
                />
                <p className=" invisible text-sm mt-[1px] text-red">
                  This field is required.
                </p>
              </div>
              <div c>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="zipCode"
                >
                  Email Address
                </label>
                <input
                  required
                  type="text"
                  placeholder="e-mail"
                  title="Please enter a your email"
                  id="zipCode"
                  readOnly
                  value={data?.Email}
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                />
                <p className=" invisible text-sm mt-[1px] text-red">
                  This field is required.
                </p>
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <div>
                <label
                  className="  after:pl-1   font-bold after:content-['*'] after:text-red  block"
                  htmlFor="address_1"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="address_1"
                  className=" py-3 rounded-sm  w-[100%] px-2 border-softGray border-[1px]"
                  required
                  value={petition.StreetAddress}
                  onChange={(e) =>
                    setPetition({ ...petition, StreetAddress: e.target.value })
                  }
                />
              </div>
            </div>

            {/* ///////// */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 ">
              <div>
                <label
                  className="after:pl-1   font-bold   block"
                  htmlFor="address_1"
                >
                  City
                </label>
                <input
                  type="text"
                  placeholder="E.g sydney"
                  id="city"
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
                  value={petition.City}
                  onChange={(e) =>
                    setPetition({ ...petition, City: e.target.value })
                  }
                />
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="after:pl-1   font-bold   block"
                  htmlFor="address_1"
                >
                  State/Province
                </label>
                <input
                  type="text"
                  placeholder="E.g New South Wales"
                  id="state"
                  value={petition.State}
                  onChange={(e) =>
                    setPetition({ ...petition, State: e.target.value })
                  }
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
                />
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="after:pl-1   font-bold   block"
                  htmlFor="address_1"
                >
                  Zip / Postal Code
                </label>

                <input
                  type="number"
                  placeholder="E.g 2000"
                  id="zipcode"
                  value={petition.PostalCode}
                  onChange={(e) =>
                    setPetition({ ...petition, PostalCode: e.target.value })
                  }
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
                />
                <p className="text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="after:pl-1   font-bold   block"
                  htmlFor="address_1"
                >
                  Country
                </label>
                <select
                  id="countries"
                  value={petition.Country}
                  onChange={(e) =>
                    setPetition({ ...petition, Country: e.target.value })
                  }
                  className=" rounded-sm  border border-softGray focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-[#ededed] text-[#787676e8]"
                >
                  <option selected>Select country</option>

                  {countryName?.map((country, countryIndex) => (
                    <option key={countryIndex} value={country?.code}>
                      {country?.name}
                    </option>
                  ))}
                </select>
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
            </div>
            {/* ///////// */}

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <div className="mb-5">
                <label
                  className="after:pl-1 font-bold block mb-2 after:content-['*'] after:text-red"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                  rows="5"
                  cols="40"
                  required
                  value={petition.Message}
                  onChange={(e) =>
                    setPetition({ ...petition, Message: e.target.value })
                  }
                  className="border p-2 border-softGray w-[100%] rounded-sm  "
                ></textarea>
              </div>
            </div>

            {/* ///////// */}
            <div className=" grid grid-cols-1 mb-5">
              <label
                className="after:pl-1 mb-2 font-bold block after:content-['*'] after:text-red"
                htmlFor="signature"
              >
                Signature
              </label>
              <div className="mb-5">
                <div className="relative">
                  <div
                    className="sig__pad w-[15rem] md:w-[20rem] h-[8rem] bg-softGray"
                    ref={sigPad}
                  >
                    <input
                      id="signature"
                      type="text"
                      placeholder="Type your Signature"
                      className="w-[100%] text-[1.3rem] md:text-[1.8rem] h-[100%]   bg-softGray text-center font-bold"
                      value={signature}
                      onChange={(e) => setSignature(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ///////// */}
            <div className=" mt-6">
              <Button onClick={() => setOpen(true)} variant="gradient">
                Share
              </Button>
            </div>
            {/* ///////// */}
            <div className=" grid grid-cols-1 mt-6">
              <button
                type="submit"
                className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-primary py-3 mb-3"
              >
                Submit
              </button>
            </div>

            <input
              type="file"
              className=" bg-red px-10 py-5"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
      <SharePetition open={open} setOpen={setOpen} />
    </div>
  );
};

export default PetitionApplication;
