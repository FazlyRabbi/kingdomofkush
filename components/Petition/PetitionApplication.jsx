import React, { useRef, useState, useEffect, useContext } from "react";
import { browserName, osName, fullBrowserVersion } from "react-device-detect";
import { API_URL, API_TOKEN } from "@/config/index";
import { toBlob } from "html-to-image";
// import { TfiReload } from "react-icons/tfi";
// import SignatureCanvas from "react-signature-canvas";
import { petitionContext } from "@/context/PetitioContext";
import { Button } from "@material-tailwind/react";
// alart and messages
import useSweetAlert from "../lib/sweetalert2";
import SharePetition from "./SharePetition";
import PhoneInput from "react-phone-number-input";
// import countryName from "../../public/country.json";
import ThankPetitionSubmit from "./ThankPetitionSubmit";
import { Country, State, City } from "country-state-city";

const PetitionApplication = () => {
  // showing alert
  const { showAlert } = useSweetAlert();
  const [sumitPetitionSuccess, setSumitPetitionSuccess] = useState(false);
  const [signatureText, setSignatureText] = useState(true);

  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [data, setData] = useState();
  const countryName = Country.getAllCountries();

  const showAlerts = () => {
    showAlert({
      text: "Your Petition Application Successfull!",
      icon: "success",
      confirmButtonText: "ClOSE",
      confirmButtonColor: "green",
      header: "hello",
    });
  };

  // const sigPad = useRef();
  const currentDate = new Date();

  const { petition, setPetition, petitionInitial } =
    useContext(petitionContext);

  // set states
  useEffect(() => {
    const handleStates = () => {
      const countryCode = countryName.find(
        (country) => country.name.toLowerCase() === data?.Country.toLowerCase()
      );
      const allStates = State.getStatesOfCountry(countryCode?.isoCode);
      setStates(allStates);
    };
    // const
    handleStates();
  }, [data?.Country]);
  // set cities
  useEffect(() => {
    const handleCities = () => {
      const countryCode = countryName.find(
        (country) => country.name.toLowerCase() === data?.Country.toLowerCase()
      );
      const allCities = City.getCitiesOfState(
        countryCode?.isoCode,
        petition?.State
      );
      setCities(allCities);
    };
    handleCities();
  }, [data?.Country, petition?.State]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const min = 10000000;
      const max = 99999999;
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      const actualNum = `khusPetetion${randomNumber}`;
      // Get petition data items from Local Storage
      const userString = localStorage.getItem("pititonData");
      const pititonDatas = JSON.parse(userString);
      setData(pititonDatas);
      setPetition({
        ...petition,
        RegistrationId: actualNum,
        FirstName: pititonDatas?.FirstName,
        LastName: pititonDatas?.LastName,
        Country: pititonDatas?.Country,
        Email: pititonDatas?.Email,
        DeviceRecentActivitys: {
          BrowserName: browserName,
          DeviceName: osName === "Windows" ? "Desktop" : "Mobile",
          OperatingSystemName: osName,
          IpAddress: fullBrowserVersion,
          Locations: pititonDatas?.Country,
          Date: currentDate.toLocaleDateString(),
        },
      });
    }
  }, []);

  const sig = useRef();
  const [textSig, setTextSig] = useState(null);

  const convertSigToBlob = () => {
    toBlob(sig.current)
      .then((blob) => {
        formData.append(`files.Signature`, blob, `${petition.FirstName}.png`);
        formData.append("data", JSON.stringify(petition));
        postpetitions();
        localStorage.removeItem("pititonData");
        setPetition(petitionInitial);
        setTextSig("");
        // sigPad.current.clear();
        showAlerts();
        setSumitPetitionSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formData = typeof window !== "undefined" ? new FormData() : "";

  const postpetitions = async () => {
    try {
      const res = await fetch(`${API_URL}/api/petitions`, {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
        },

        body: formData,
      });
      const data = await res.json();
      sendMailpetitions();
      if (!res.ok) return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    convertSigToBlob();
  };

  return (
    <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
      <div className=" container mx-auto py-[2rem] xl:mt-[2rem] xl:px-[4rem] px-[1rem] ">
        <div>
          <h1 className=" text-[1.5rem] font-bold mb-4 dark:text-white">
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
                <PhoneInput
                  international
                  className=" py-3 rounded-sm  w-[100%] px-2 border  border-[#ededed]"
                  defaultCountry="RU"
                  value={petition.Phone}
                  required
                  onChange={(e) => setPetition({ ...petition, Phone: e })}
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
                  Country
                </label>
                <input
                  disabled
                  type="text"
                  id="country"
                  value={data?.Country}
                  onChange={(e) =>
                    setPetition({ ...petition, Country: e.target.value })
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
                  State/Province
                </label>
                <select
                  id="state"
                  value={petition.State}
                  onChange={(e) =>
                    setPetition({ ...petition, State: e.target.value })
                  }
                  className=" border  border-softGray text-gray-900 text-sm rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select State</option>
                  {states?.length > 0
                    ? states?.map((state, stateIndex) => (
                        <option key={stateIndex} value={state?.isoCode}>
                          {state?.name}
                        </option>
                      ))
                    : ""}
                </select>
                {/* <input
                  type="text"
                  placeholder="E.g New South Wales"
                  id="state"
                  value={petition.State}
                  onChange={(e) =>
                    setPetition({ ...petition, State: e.target.value })
                  }
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
                /> */}
                <p className=" text-sm mt-[1px] text-red invisible">
                  This field is required.
                </p>
              </div>
              <div>
                <label
                  className="after:pl-1   font-bold   block"
                  htmlFor="address_1"
                >
                  City
                </label>
                <select
                  value={petition.City}
                  onChange={(e) =>
                    setPetition({ ...petition, City: e.target.value })
                  }
                  id="city"
                  className=" border  border-softGray text-gray-900 text-sm rounded-md focus:ring-blue-500  px-2 focus:border-softGray block w-full py-[.9rem]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Select City</option>
                  {cities?.length > 0
                    ? cities?.map((city, cityIndex) => (
                        <option key={cityIndex} value={city?.isoCode}>
                          {city?.name}
                        </option>
                      ))
                    : ""}
                </select>
                {/* <input
                  type="text"
                  placeholder="E.g sydney"
                  id="city"
                  className=" py-3 rounded-sm  border border-softGray  w-[100%] px-2 "
                  value={petition.City}
                  onChange={(e) =>
                    setPetition({ ...petition, City: e.target.value })
                  }
                /> */}
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
            </div>
            {/* ///////// */}

            {/* ///////// */}

            <div className="grid grid-cols-1 mb-5">
              <div className="after:pl-1 flex  font-bold  w-full  ">
                Signature <span className="text-red">*</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
              <input
                type="text"
                value={textSig}
                onChange={(e) => setTextSig(e.target.value)}
                ref={sig}
                placeholder="Enter Your Signature"
                className=" font-bold  text-center h-[8rem]
               py-3 rounded-sm  w-[80%] text-[1.8rem] px-2  bg-[#ededed]"
                required
              ></input>
            </div>

            {/* ///////// */}
            {/* <div className=" grid grid-cols-1 mb-5">
              <label
                className="after:pl-1 font-bold block after:content-['*'] after:text-red"
                htmlFor="address_2"
              >
                Signature
              </label>
              <div className="mb-5">
                <div className="relative">
                  <SignatureCanvas
                    penColor="black"
                    dotSize={1}
                    throttle={50}
                    backgroundColor="#eeee"
                    ref={sigPad}
                    canvasProps={{
                      width: 500,
                      height: 156,
                      className:
                        " cursor-crosshair     mb-6  rounded-sm bg-[#e6e6e6]",
                    }}
                  />
                  <TfiReload
                    onClick={(e) => {
                      sigPad.current.clear();
                    }}
                    className=" absolute top-[10px]   left-[29rem] text-[1rem] font-bold cursor-pointer hover:text-black text-[#3a3a3a]"
                  />
                </div>
              </div>
            </div> */}

            {/* ///////// */}
            <div className=" grid grid-cols-1 mt-6">
              <button
                type="submit"
                className=" bg-black rounded-sm  shadow-none capitalize text-base hover:shadow-none w-[40%] xl:w-[20%]    font-normal text-primary py-3"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ThankPetitionSubmit
        sumitPetitionSuccess={sumitPetitionSuccess}
        setSumitPetitionSuccess={setSumitPetitionSuccess}
      />
    </div>
  );
};

export default PetitionApplication;
