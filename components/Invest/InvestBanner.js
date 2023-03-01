
const InvestBanner = () => {
    return (
        <div>
            <div className="lg:flex justify-center items-center gap-10">
                <div className="lg:w-1/2">
                    <div>
                        <iframe
                            className="w-full h-[400px]"
                            title="YouTube video player"
                            src="https://www.youtube.com/embed/7Mz2zq98Ifo?controls=1&start=0&mute=1&autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; 
                       encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="lg:w-1/2 m-3">
                    <p className="text-[60px] leading-10 font-bold">Invest into <br /> Project</p>
                    <p className="mt-4">Through This Form, You Can Express Your Interest To Invest In The KUSH KINGDOM. Please Fill In The Form And We Shall Contact You.</p>
                </div>
            </div>

        </div>
    );
};

export default InvestBanner;