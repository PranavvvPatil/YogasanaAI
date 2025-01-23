import vector from '../../assets/navbar/Vector - 0.png';
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between items-center py-4 px-8 bg-black text-white">
        <div className="flex items-center gap-2 md:gap-2">
          <img src={vector} alt="Logo" className="w-[16px] h-[16px]" />
          {/* Wrap the YogasanaAI text with a Link component */}
          <Link to="/" className="text-[15px] md:text-18px font-spaceGrotesk font-semibold text-white">
            YogasanaAI
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {/* Modify the "How It Works" link */}
            <li>
              <a
                href="#how-it-works"
                className="font-spaceGrotesk font-dlig text-14px font-medium text-white hover:text-gray-400"
              >
                How It Works
              </a>
            </li>
            <li>
              <Link to="/privacy-policy" className="font-spaceGrotesk font-dlig text-14px font-medium text-white hover:text-gray-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/reach-out" className="font-spaceGrotesk font-dlig text-14px font-medium text-white hover:text-gray-400">
                Contact Us
              </Link>
            </li>
          </ul>
          <a
            href="#"
            className="flex items-center justify-center h-10 w-[120px] md:min-w-[84px] md:max-w-[480px] px-4 rounded-full bg-[#1AE5D1] text-black hover:bg-[#19d3c1]"
            onClick={() => handleNavigate("/upload")}
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Border Line */}
      <div className="border-b border-[#E5E8EB] w-full"></div>
    </div>
  );
};

export default Navbar;
