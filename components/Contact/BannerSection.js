import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="relative max-h-[5rem] h-[10rem]">
      <div
        className="bg-cover   bg-top  "
        style={{

          backgroundImage: `url('https://i.postimg.cc/5txLS635/oh-img158-1.jpg',
       
          )`,
        }}
      >
        <div className="text-white p-10 absolute bottom-0 left-0 right-0 container mx-auto">
          <p className=" text-[60px] font-bold">Contact</p>
          <p className="mt-5 font-bold">LET'S SHARE WORDS TOGETHER.</p>
          <Link href={`#contact`}>
            <button className="bg-black mt-5 text-[#cb9833] py-3  px-4 rounded-md font-bold">
              Send Us and Email
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
