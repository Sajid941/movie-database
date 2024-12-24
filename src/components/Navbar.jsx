const Navbar = () => {
    return (
        <div className="flex justify-between items-center z-10 absolute w-full mt-5 px-5 md:px-20 lg:px-32">
            <h1 className="text-2xl lg:text-4xl font-bold text-white">MovGuide</h1>
            <div>
                <button className="px-3 py-1 rounded-md bg-white hover:bg-white/90 font-semibold">
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default Navbar;
