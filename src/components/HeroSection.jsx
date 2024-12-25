import Background from "../images/hero_background.jpg";
const HeroSection = () => {
    const sectionStyle = {
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // clipPath: "ellipse(100% 90% at 50% 100%)",
    };
    return (
        <div className="relative">
            <div style={sectionStyle} className="h-screen w-ful" />
            <div className="px-5 h-screen w-full bg-gradient-to-b from-black/80 to-black/30 absolute top-0 flex flex-col justify-center items-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white w-auto md:w-[450px] text-center leading-tight">
                    Discover Your Next Favorite Movie
                </h1>
                <p className="text-[#737373] font-semibold w-auto md:w-[450px] text-center">
                    Your personalized movie guide is here. Explore, discover,
                    and fall in love with your next favorite film.
                </p>
                <button className="bg-white hover:bg-gray-200 rounded-md px-10 py-1 font-semibold">
                    Get Start
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
