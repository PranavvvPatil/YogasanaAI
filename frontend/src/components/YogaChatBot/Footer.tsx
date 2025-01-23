import { Link } from 'react-router-dom'; // Import Link from React Router
import insta from '../../assets/footer2/Instagram.png';
import twit from '../../assets/footer2/Twitter.png';
import face from '../../assets/footer2/facebook.png';

const Footer = () => {
  return (
    <div className="w-full">
      {/* Border Line */}
      <div className="border-b border-[#E5E8EB] w-full"></div>

      <footer className="bg-[#18212C] text-white h-[80px] md:h-[149px] py-10 px-4 text-center font-spaceGrotesk text-[8px] md:text-[16px] font-normal">
        <div className="flex items-center justify-between">
          <div className="ml-2 md:ml-10">
            <p>NeuSpaarX Technologies Pvt.Ltd</p>
          </div>

          <div className="flex justify-center md:space-x-[100px] space-x-[10px]">
            <Link to="/privacy-policy" className="hover:text-gray-400">Help</Link>
            <Link to="/reach-out" className="hover:text-gray-400">Contact Us</Link>
            <Link to="/privacy-policy" className="hover:text-gray-400">Terms</Link>
          </div>

          <div className="flex justify-center md:space-x-6 md:mr-10 space-x-2">
            <img src={insta} alt="Instagram" className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]" />
            <img src={twit} alt="Twitter" className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]" />
            <img src={face} alt="Facebook" className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
