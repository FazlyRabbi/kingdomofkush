const BannerSection = () => {
    return (
        <div className="relative">
            <div className="bg-cover   bg-top  h-screen" style={{ backgroundImage: `url('https://i.postimg.cc/5txLS635/oh-img158-1.jpg')` }}>
                <div className="text-white p-10 absolute bottom-0 left-0 right-0 container mx-auto">
                    <p className=" text-[60px] font-bold">Contact</p>
                    <p className="mt-5 font-bold">LET'S SHARE WORDS TOGETHER.</p>
                    <button className="bg-black mt-5 text-[#cb9833] py-2 pl-3 pr-3 rounded-lg font-bold">Send Us and Email</button>
                </div>
            </div>

        </div>
    );
};

export default BannerSection;