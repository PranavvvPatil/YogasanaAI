import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import tleft from "../../assets/home/tl.png";
import tright from "../../assets/home/tr.png";
import bleft from "../../assets/home/bl.png";
import bright from "../../assets/home/br.png";
import download from "../../assets/details/material-symbols-light_download.png";
import msg from "../../assets/details/ph_chat-light (1).png";

import PoseDetails from "./PoseDetails";
import ChatBot from "./ChatBot"; // Import ChatBot component

const PoseResult = () => {
  const location = useLocation();
  const { reference_image_link } = location.state || {}; // Get reference image link from PoseDetails state
  const data = location.state || {};
  console.log (data)
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to handle popup visibility
  const [showChatBot, setShowChatBot] = useState(false); // State to handle ChatBot visibility
  const navigate = useNavigate();
   // Initialize the useNavigate hook

  if (!reference_image_link) {
    return <div className="text-center text-white">No reference image available.</div>;
  }

  // Function to toggle the popup visibility
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
   
  const handleDownload = () => {
    navigate("/yoga-pose-report",{state: data})
  }
  // Function to navigate to the "/upload" page
  const handleAnalyzeNextImage = () => {
    navigate("/upload"); // Navigate to the upload page
  };

  // Function to handle the question button click
  const handleAskQuestion = () => {
    setShowChatBot(true); // Show ChatBot when clicked
  };

  // Function to handle the cancel button inside ChatBot
  const handleCancelChat = () => {
    setShowChatBot(false); // Close ChatBot when cancel is pressed
  };

  return (
    <div className="w-full h-auto flex flex-col md:flex-row p-8 gap-[70px] justify-center bg-[#18212C]">
      <div className="flex flex-col mt-10 ">
        {/* Image Section */}
        <div className="relative bg-[#193330] w-[300px] h-[300px] md:w-[495px] md:h-[495px]">
          <img
            src={tleft} // Top-left corner image
            alt="Top-left Corner"
            className="absolute top-[24px] left-[24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
          />
          <img
            src={tright} // Top-right corner image
            alt="Top-right Corner"
            className="absolute top-[24px] right-[24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
          />
          <img
            src={bleft} // Bottom-left corner image
            alt="Bottom-left Corner"
            className="absolute bottom-[24px] left-[24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
          />
          <img
            src={bright} // Bottom-right corner image
            alt="Bottom-right Corner"
            className="absolute bottom-[24px] right-[24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
          />

          <div className="flex mt-[60px] justify-center">
            <img
              src={reference_image_link} // Display reference image instead of yoga image
              alt="Reference Pose"
              className="rounded-2xl w-[200px] h-[200px] md:w-[395px] md:h-[372px]"
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col md:flex-row mt-10 gap-[20px] md:gap-[40px] justify-center items-center ">
            <button
              onClick={handleAnalyzeNextImage} // Navigate to /upload when clicked
              className="flex h-[40px] min-w-[84px] max-w-[200px] px-[16px] justify-center items-center  rounded-[20px] border border-[#D4D4D4] bg-[#3B827B] text-white hover:bg-[#2F6B66]"
            >
              Analyze Next Image
            </button>

            <button
              onClick={handleDownload}
              className="flex   py-[8px] max-w-[200px] px-[16px] justify-center items-center rounded-[20px] gap-2 border border-[#D4D4D4] bg-[#FFF] text-black hover:bg-[#F5F5F5]"
            >
              Download Report
              <img src={download} alt="icon" className="" />
            </button>
          </div>

          <div className="flex md:flex-row justify-center">
            <button
              onClick={handleOpenPopup} // Open the popup when clicked
              className="flex h-[40px] min-w-[84px] max-w-[200px] px-[16px] py-[8px] justify-center items-center rounded-[20px] border border-[#D4D4D4] bg-[#3B827B] text-white hover:bg-[#2F6B66]"
            >
              Reference Image
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10  ">
        <div className="w-[300px] h-[500px] md:w-[595px] md:h-[506px] flex-shrink-0 rounded-[15px] border border-[#19E5D1] bg-[#000] overflow-y-auto">
          {/* Render PoseDetails or ChatBot based on state */}
          {!showChatBot ? (
            <PoseDetails />
          ) : (
            <ChatBot onCancel={handleCancelChat} /> // Pass handleCancelChat to ChatBot
          )}
        </div>
        
        {/* This button is always visible when chat is not open */}
        {!showChatBot && (
          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={handleAskQuestion} // Open ChatBot page when clicked
              className="inline-flex w-[600px] gap-5 items-center px-[18px] py-[12px] rounded-[15px] border border-[#617E7A] bg-[#193330] text-white"
            >
              <img src={msg} alt="chat icon" />
              <span className="text-[#94C7C2] font-spaceGrotesk text-[14px] font-normal leading-[28px]">
                Ask a question about yoga pose..
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Popup Modal for Reference Image */}
      {isPopupOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-[#193330] p-7 rounded-lg max-w-[80vw] max-h-[80vh] overflow-hidden">
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-[#FF6666] text-2xl"
            >
              &times;
            </button>
            <img
              src={reference_image_link}
              alt="Reference Pose"
              className="w-[600px] h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PoseResult;
