
const Form = () => {
    return (
        <div className="lg:p-10 p-2">
            <form action="">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name <span className="text-red">*</span>
                        </label>
                        <input
                            className="shadow border-[#ccc]  border rounded w-full py-4 px-3 text-gray-700 "
                            id="name"
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Phone
                        </label>
                        <input
                            className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
                            id="phone"
                            type="text"
                            placeholder="Your Actual Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Email <span className="text-red">*</span>
                        </label>
                        <input
                            className="shadow border-[#ccc] border rounded w-full py-4 px-3 text-gray-700"
                            id="email"
                            type="email"
                            placeholder="Your Working Email"
                            required
                        />
                    </div>
                </div>
                <div className="mt-7">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                        Message
                    </label>
                    <textarea
                        className="resize border border-[#ccc] rounded-md w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                        placeholder="Enter your message"
                    ></textarea>
                </div>
                <button type="submit" className=" bg-[#eee] mt-2 text-[#fff] border-solid border-2 border-[#ddd] py-2.5 px-3.5 hover:bg-red">Send</button>
            </form>
        </div>
    );
};

export default Form;