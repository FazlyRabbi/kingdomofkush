import { createContext, useState } from "react";
import { API_URL, API_TOKEN } from "@/config/index";
export const DonationContext = createContext();

export const DonationProvider = ({ children }) => {
  const donationInitial = {
    Name: "",
    Email: "",
    Amount: "2",
    Frequency: "on-time",
    CardInfo: "",
  };

  const [donation, setDonation] = useState(donationInitial);

  const sendMaildoantins = async () => {
    try {
      const res = await fetch(`/api/emails/donationmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },

        body: JSON.stringify({
          name: donation.Name,
          ammount: donation.Amount.toString(),
          email: donation.Email,
          frequency: donation.Frequency,
          subject: "Kingdomofkush Donations",
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postDonation = async () => {
    try {
      const res = await fetch(`${API_URL}/api/donations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: API_TOKEN,
        },
        body: JSON.stringify({
          data: {
            Name: donation.Name,
            Email: donation.Email,
            Amount: donation.Amount.toString(),
            Frequency: donation.Frequency,
            CardInfo: donation.CardInfo,
          },
        }),
      });

      sendMaildoantins();
      const data = await res.json();
      if (!res.ok) return;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DonationContext.Provider
      value={{ donation, setDonation, donationInitial, postDonation }}
    >
      {children}
    </DonationContext.Provider>
  );
};
