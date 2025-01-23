import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/YogaChatBot/Navbar";
import Footer from "../components/YogaChatBot/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Check if the current route is the home page
  const isHomePage = pathname === "/";

  return (
    <div className={`flex justify-center relative ${isHomePage ? "w-full" : ""}`}>
      <div
        className={`flex flex-col items-center ${
          isHomePage ? "w-full" : "max-w-[1600px] w-full"
        }`}
      >
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
