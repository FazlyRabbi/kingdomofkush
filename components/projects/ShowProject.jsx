import React from "react";
import bg from "../../img/Oji-String-Beans-Farm.jpg";
import PhoneInput from "react-phone-number-input";
const ShowProject = () => {
  return (
    <div className="dark:bg-[#161519] dark:text-[#ffffffbf]">
      <div className="py-8">
        <div className="container mx-auto p-3">
          <div className="grid grid-cols-1 md:grid-cols-4 mb-10">
            <div>
              <span className="text-[#cb9833]">Indonesia</span>
              <div>
                <h1 className="font-semibold text-[44px] dark:text-white leading-[55px]">
                  Oji String Beans Farm
                </h1>
              </div>
            </div>
          </div>
          <div className="mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo
            ipsam porro ad aliquid, asperiores dignissimos cumque error minima
            rem tenetur consequuntur maxime quasi corporis veniam et accusamus
            facilis, quae doloribus quaerat sint dolor ab. Nihil voluptas
            consequuntur repellendus vel facilis qui, ipsa eos, dolorum
            blanditiis, maiores dolore officia delectus molestiae repudiandae
            laudantium a ex velit libero animi atque alias accusantium porro
            iure! Perferendis quia quae, repellat neque ex, libero illo tempore,
            quibusdam aliquid reprehenderit sed? Consequuntur cum ea ex,
            doloribus consectetur ut esse magnam quos eos sit, nulla ab sequi
            error. Inventore quibusdam aspernatur voluptatibus blanditiis
            sapiente iure quo, cum dolorum ad quisquam autem sit? Eveniet,
            quidem. Aspernatur, accusantium! Alias dignissimos veniam autem
            ullam deserunt earum. Voluptatum qui libero id suscipit minima ipsa
            et recusandae sed porro laborum quas iure at, expedita deleniti, eum
            cumque. Aliquid sunt impedit, facere odio cumque sit ex officiis
            dolorum animi ab aut accusamus!
          </div>
          <div>
            <img src={bg.src} />
          </div>
        </div>
        <div style={{ backgroundColor: "rgba(150, 144, 162, 0.06)" }}>
          <div className="my-8 pt-16 p-3 container mx-auto">
            <h4 className="text-[22px] font-semibold mb-5">Leave a replay</h4>
            <p className="mb-8 text-[15px]">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Name *</label>
                  <input
                    className="px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all"
                    type={"text"}
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Email *</label>
                  <input
                    className="px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all"
                    type={"text"}
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mb-2 font-medium">Phone *</label>
                  {/* <input
                    className="px-3 py-3 focus:bg-[#c8c7c970] text-black transition-all"
                    type={"text"}
                    placeholder="Website"
                  /> */}
                  <PhoneInput
                    international
                    className=" py-3 rounded-sm  w-[100%] px-2  bg-white"
                    defaultCountry="RU"
                    // value={value}
                    // onChange={setValue}
                    //     onChange={(e) => setMembership({ ...membership, Number: e })}
                  />
                </div>
              </div>
              {/* <div className="flex items-center gap-3 my-4">
                <input type={`checkbox`} className="w-4 h-5 accent-black" />
                <p className="text-[15px]">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div> */}
              {/* <div className="flex flex-col">
                <label className="font-medium mb-2">Comment</label>
                <textarea className="p-4"></textarea>
              </div> */}
              <div className="my-6">
                <button className="bg-black font-bold py-3 hover:bg-[#dc2828] transition px-4 rounded text-[#fff] text-[14px]">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
