import { createContext, useState } from "react";
export const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  
  const membershipInitial = {
    Title: "",
    FirstName: "",
    MiddleName: "",
    FamilyLastName: "",
    Email: "",
    Number: "",
    StreetAddress: "",
    Apartment: "",
    State: "",
    City: "",
    PostalCode: "",
    Country: "",
    MemberhipPlan: "month",
    CardInfo: "",
    BillingName: "",
    BillingAddress: "",
    BillingApartment: "",
    BillingCity: "",
    BillingState: "",
    BillingPostalCode: "",
    BillingCountry: "",
    RegistrationId: null,
  };

  const [membership, setMembership] = useState(membershipInitial);


  return (
    <MembershipContext.Provider
      value={{ membership, setMembership,  membershipInitial }}
    >
      {children}
    </MembershipContext.Provider>
  );
};
