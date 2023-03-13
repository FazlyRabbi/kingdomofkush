import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const contactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [time, setTime] = useState("month");

  const contactInitial = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  };

  const [contact, setContact] = useState(contactInitial);

  const sendMailContact = async () => {
    try {
      const res = await fetch(`/api/sendmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: contact.Email,
          subject: "KingdomofKush",
          message: `Dear customer, Thank you for reaching out! You are an invaluable part of everything we do here. And we’re absolutely thrilled to hear from you.`,
        }),
      });

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const pstContact = async () => {
    try {
      const res = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },

        body: JSON.stringify({
          data: {
            ...contact,
          },
        }),
      });
      // const data = await res.json();
      sendMailContact;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <contactContext.Provider
      value={{ contact, setContact, pstContact, contactInitial, time, setTime }}
    >
      {children}
    </contactContext.Provider>
  );
};
