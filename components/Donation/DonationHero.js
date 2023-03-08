// stripe related import
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useState, useContext } from "react";
import { BiShapePolygon } from "react-icons/bi";
import { CgPathCrop } from "react-icons/cg";
import img from "../../img/donation/donationHero.jpg";
import { DonationContext } from "@/context/DonationContext";

const DonationHero = () => {
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [packages, setPackages] = useState(0);

  const [cardError, setCardError] = useState(null);
  const [button, setButton] = useState(true);

  const { donation, setDonation, donationInitial } =
    useContext(DonationContext);

  const styling = {
    backgroundImage: `url('${img.src}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  };

  ///////////////////////////////////
  //  stripe related funtionality

  // to access stripe server
  const stripe = useStripe();
  // to access card element
  const elements = useElements();

  // createMonthlySubscription
  const createOntimePayment = async () => {
    try {
      if (elements.getElement("card") === null) return;

      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"), // for card info
      });

      if (error) {
        setCardError(error);
        return;
      }

      const res = await fetch(`/api/chargepayment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donation.Amount,
        }),
      });

      setButton(false);

      if (!res.ok) return alert("Payment unsuccessfull!");

      const data = await res.json();

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement("card"),
          },
        });

      console.log(paymentIntent);
      if (confirmError) return alert("Payment unsuccessfull!");
      setButton(true);

      alert("Payment successfull!");
    } catch (err) {
      console.error(err);
      alert("Payment Faild!" + err.message);
    }
  };
  // createMonthlySubscription
  const createMonthlySubscription = async () => {
    try {
      if (elements.getElement("card") === null) return;

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"), // for card info
      });

      if (error) {
        setCardError(error);
        return;
      }

      const res = await fetch(`/api/monthlysubscripton`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: donation.Name,
          email: donation.Email,
          time: donation.Frequency,
          amount: donation.Amount,
          paymentMethod: paymentMethod.id,
        }),
      });
      setButton(false);
      if (!res.ok) return alert("Payment unsuccessfull!");

      const data = await res.json();

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(data.clientSecret.client_secret, {
          payment_method: {
            card: elements.getElement("card"),
          },
        });

      if (confirmError) {
        console.log(confirmError);
        return;
      }
      setButton(true);
      console.log(paymentIntent);
      alert("Payment successfull! Subscripton active");
    } catch (err) {
      console.error(err);
      alert("Payment Faild!" + err.message);
    }
  };
  //////////////////////////////////

  // handle selectedAmount
  const handleSubmit = (e) => {
    e.preventDefault();
    setDonation(donationInitial);
    setSelectedAmount(0);
    if (packages === 1) {
      createMonthlySubscription();
      return;
    } else if (packages === 0) {
      createOntimePayment();
      return;
    }
  };

  const amount = [2, 10, 15, 25, 50, 75, 100, "Other"];

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
      <div
        className="donation-left w-full lg:col-span-1 lg:pt-0 pt-52 flex items-end justify-end"
        style={styling}
      >
        <div className="bg-black p-5 text-white w-full lg:w-3/4 ml-auto flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <CgPathCrop size={42} />
              <h1 className="font-bold text-[3rem] text-primary">20+</h1>
            </div>
            <p className="text-primary">years in the making</p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <BiShapePolygon size={42} />
              <h1 className="font-bold text-[3rem] text-primary">3000+</h1>
            </div>
            <p className="text-primary">years of histroy</p>
          </div>
        </div>
      </div>
      <div className="donation-right w-full lg:col-span-1 lg:max-w-md">
        <div className="p-5">
          <div>
            <h3 className="uppercase">kingdom of kush</h3>
            <h1 className="font-bold text-[3rem]">Donations</h1>

            <div className="amount">
              <h1 className="text-lightGray font-bold text-sm mb-2">
                Donation amount
              </h1>

              <div className="amount-box-container flex flex-wrap  gap-3 items-center justify-between">
                {amount.map((item, index) => (
                  <div
                    key={index}
                    className={`py-2 shadow-md border border-softGray hover:border-link transition-all duration-200 px-3  rounded ${
                      selectedAmount === index
                        ? "bg-gray text-primary"
                        : "bg-white text-gray"
                    }`}
                    onClick={() => {
                      setSelectedAmount(index);
                      setDonation({ ...donation, Amount: item });
                    }}
                  >
                    <p className="font-bold text-sm">
                      {typeof item === "string" ? null : "$"}
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`custom-box my-3  ${
                  selectedAmount === amount.length - 1 ? "" : "hidden"
                }`}
              >
                <div className="flex border w-1/2 overflow-hidden border-gray rounded  bg-softGray focus:border-link">
                  <span className="px-4 py-3 bg-white text-lightGray">$</span>
                  <input
                    type="number"
                    value={donation.Amount}
                    onChange={(e) =>
                      setDonation({
                        ...donation,
                        Amount: Number(e.target.value),
                      })
                    }
                    className="px-4 py-3 focus:bg-softGray bg-white transition-all duration-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-lightGray font-bold text-sm mb-2">
              Donation frequency
            </h1>

            <div className="packages flex items-center justify-center font-bold">
              <button
                className={`w-full border-softGray py-2 rounded shadow-md border border-r-0 rounded-r-none ${
                  packages === 0 ? "bg-gray text-primary" : ""
                }`}
                onClick={() => {
                  setPackages(0);
                  setDonation({ ...donation, Frequency: "one-time" });
                }}
              >
                One-time
              </button>
              <button
                className={`w-full border-softGray py-2 rounded shadow-md border border-l-0 rounded-l-none ${
                  packages === 1 ? "bg-gray text-primary" : ""
                }`}
                onClick={() => {
                  setPackages(1);
                  setDonation({ ...donation, Frequency: "month" });
                }}
              >
                Monthly
              </button>
            </div>

            <form className="my-3" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-lightGray font-bold text-sm mb-2 block"
                >
                  E-mail address
                </label>

                <input
                  type="email"
                  className="rounded py-3 px-4 border block w-full border-softBlack focus:bg-softGray focus:border-link focus:border-2"
                  value={donation.Email}
                  onChange={(e) =>
                    setDonation({ ...donation, Email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-lightGray font-bold text-sm mb-2 block"
                >
                  Cardholder’s name
                </label>

                <input
                  type="text"
                  id="name"
                  className="rounded py-3 px-4 border block w-full border-softBlack focus:bg-softGray focus:border-link focus:border-2"
                  value={donation.Name}
                  onChange={(e) =>
                    setDonation({ ...donation, Name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-lightGray font-bold text-sm mb-2 block"
                >
                  Card info
                </label>
                <CardElement className=" border p-3  rounded-md" />
              </div>

              <button
                className={`px-6 py-3 mt-4 font-bold bg-softBlack text-sm text-primary rounded  ${
                  button ? "" : "cursor-not-allowed"
                } `}
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHero;
