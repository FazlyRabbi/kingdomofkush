import { useContext, useState } from "react";
import { contactContext } from "@/context/ContactContext";
// alart and messages
import useSweetAlert from "../lib/sweetalert2";
import PhoneInput from "react-phone-number-input";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
const Form = () => {
  // showing alert
  const { showAlert } = useSweetAlert();

  const showAlerts = () => {
    showAlert({
      text: "Thanks for Connecting with us!",
      icon: "success",
      confirmButtonText: "ClOSE",
      confirmButtonColor: "green",
    }).then((result) => {});
  };

  const { contact, setContact, pstContact, contactInitial } =
    useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setContact(contactInitial);
    pstContact();
    showAlerts();
  };

  return (
    <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
      <div
        className=" lg:pt-24  pb-8 p-2 container mx-auto scroll-smooth  transition-all duration-200 "
        id="contact"
      >
        <form action="submit" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name <span className="text-red">*</span>
              </label>
              <input
                className="shadow border-[#ccc]  border rounded w-full py-4 px-3 text-gray-700 "
                id="name"
                type="text"
                placeholder="Your name"
                value={contact.Name}
                onChange={(e) =>
                  setContact({ ...contact, Name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Phone
              </label>
              <PhoneInput
                required
                international
                className=" py-4  w-[100%] px-2 border rounded-md border-softGray"
                defaultCountry="RU"
                onChange={() => ""}
                // onChange={(e) =>
                //   setVolunteer({ ...volunteer, Phone: e.target.value })
                // }
              />
              {/* <input
              className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
              id="phone"
              type="text"
              placeholder="Your Actual Phone Number"
              value={contact.Phone}
              onChange={(e) =>
                setContact({ ...contact, Phone: e.target.value })
              }
              required
            /> */}
            </div>
            <div>
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Email <span className="text-red">*</span>
              </label>
              <input
                className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
                id="email"
                type="email"
                placeholder="Your Working Email"
                value={contact.Email}
                onChange={(e) =>
                  setContact({ ...contact, Email: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="mt-7">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Message
            </label>
            <textarea
              className="resize border border-[#ccc] rounded-md w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="Enter your message"
              value={contact.Message}
              onChange={(e) =>
                setContact({ ...contact, Message: e.target.value })
              }
            ></textarea>
          </div>
          <div>
            <ReCAPTCHA
              sitekey="6LeEsh8lAAAAAH9hNk3ao0VVxJDsxALlbyIU_spT"
              onChange={() => console.log(value)}
            />
            <div className="border border-[#d3d3d3] dark:bg-[#878688] bg-[#f9f9f9] shadow flex w-[300px] h-[100px] justify-center items-center ">
              <label className="w-full px-4 flex ">
                <input type="checkbox" className="w-5 h-5 mr-2" /> I'm not a
                robot
              </label>
              <Image
                className="my-4"
                src="https://i.ibb.co/Xk6skZp/icons8-captcha-58.png"
                alt="Picture of the recapcha"
                width={60}
                height={60}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-black mt-5 text-[#cb9833] py-2 pl-3 pr-3 rounded-lg flex items-center gap-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
