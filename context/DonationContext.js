import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const donationInitial = {
    Name: "",
    Email: "",
    Amount: 2,
    Frequency: "on-time",
    CardInfo: "",
  };

  const [donation, setDonation] = useState(donationInitial);

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
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DonationContext.Provider value={{ donation, setDonation, donationInitial }}>
      {children}
    </DonationContext.Provider>
  );
};
