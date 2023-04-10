import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NoMobile from "./components/NoMobile";
import scroll from "./components/animations/scroll";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    scroll();
  });
  return (
    <main className="bg-gradient-to-r from-[#16161d] to-[#1f1f3a] min-h-screen overflow-hidden">
      <div className="hidden lg:block">
        <Navbar />
        <Hero />
      </div>

      <div className="block lg:hidden bg-white h-screen">
        <NoMobile />
      </div>
    </main>
  );
};

export default App;
