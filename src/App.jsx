import HeroSection from "./components/HeroSection";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <main className="max-w-[1920px] mx-auto scroll-smooth">
                <header className="relative">
                    <Navbar />
                </header>
                <HeroSection/>
                <Movies/>
            </main>
        </>
    );
}

export default App;
