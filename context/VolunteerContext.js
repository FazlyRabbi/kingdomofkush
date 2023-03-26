import { createContext,  useState } from "react";
export const VolunteerContext = createContext();

export const VolunteerProvider = ({ children }) => {
  const volunteerInitial = {
    FirstName: "",
    LastName: "",
    Email: "",
    DateofBirth: "",
    Phone: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    PostalCode: "",
    Country: "",
    Skills: "",
    InterestAreas: "",
    InterestPlace: "Choose a country",
    EmergencyEmail: "",
    EmergencyPhone: "",
    RegistrationId: null,
  };

  const [volunteer, setVolunteer] = useState(volunteerInitial);

  const sendMailVolunteers = async () => {
    try {
      const res = await fetch(`/api/emails/vendoremail`, {
        method: "POST",
        headers: {
          Authorization: API_TOKEN,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: volunteer.Email,
          subject: "Volunteer Application",
          message: `Thank you so much ${volunteer.FirstName} for volunteering , Your willingness to give your time and service is greatly appreciated. Your support of allows us to continue to fulfill our mission and serve people in our community each year.`,
        }),
      });

      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VolunteerContext.Provider
      value={{ volunteer, setVolunteer, sendMailVolunteers, volunteerInitial }}
    >
      {children}
    </VolunteerContext.Provider>
  );
};

