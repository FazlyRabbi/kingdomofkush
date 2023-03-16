import React, { useState } from "react";
import Styles from "../../styles/styles.module.css";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function GoverningStructure() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <section className="GoverningStructure">
      <div className="pr-5 grid grid-cols-1 md:grid-cols-2 py-10 gap-x-[1.5rem]">
        <div
          className={`${Styles.aboutBg} py-10 
       h-[25rem] md:h-[40rem]
      `}
        ></div>

        <div className=" py-[2rem] md:py-[1rem]   px-[2rem] xl:px-0">
          <div className="content">
            <p className=" text-base pb-2 2xl:pr-[18rem]">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>

            <div>
              <Accordion open={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse text-black"
                >
                  (1) the 6th Region
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  of the AU African Diaspora policies as an integral stakeholder
                  that has established the preliminary framework for a cohesive
                  developmental paradigm;
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-base border-b-0 [&>span]:ml-0  justify-end flex-row-reverse pb-2 text-black"
                >
                  (2) Development of the new platform
                </AccordionHeader>

                <AccordionBody className="text-base 2xl:pr-[22rem]">
                  and resolution that will establish the United Nations (UN)
                  Permanent Forum of Peoples of African Descent to legally
                  address global inequities. Already 193-member body unanimously
                  adopted a resolution that established the UN Permanent Forum
                  of People of African Descent, a 10-member advisory body that
                  works closely with the Geneva-based Human Rights Council.
                </AccordionBody>
              </Accordion>
              <p className=" text-base pb-2 2xl:pr-[18rem] mt-6">
                The Kingdom of Kush is committed to put in place the first of
                its kind, a legally binding instrument of commitment to these UN
                and AU major initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoverningStructure;
