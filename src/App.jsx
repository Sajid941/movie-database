import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <main className="max-w-[1920px] mx-auto">
                <header className="relative">
                    <Navbar />
                </header>
                <HeroSection/>
            </main>
        </>
    );
}

export default App;
