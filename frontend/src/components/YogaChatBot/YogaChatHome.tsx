import upload from "../../assets/home/upload.png"
import yoga from "../../assets/home/yogapose.png"
import brain from "../../assets/home/brain.png"
import page from "../../assets/home/page.png"
import cam from "../../assets/home/cam.png"
import tick from "../../assets/home/tick.png"
import img from "../../assets/home/img.png"
import tright from "../../assets/home/tr.png"
import tleft from "../../assets/home/tl.png"
import bright from "../../assets/home/br.png"
import bleft from "../../assets/home/bl.png"
import clock from "../../assets/home/clock.png"
import { useNavigate } from "react-router-dom";

const YogaChatHome = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="bg-[#18212C] text-white h-auto flex flex-col w-full items-center justify-center px-4 gap-y-[50px] ">
      <div className="md:flex mt-[40px] md:mt-[100px] md:gap-[60px] justify-center items-center p-6 ">
       <div className="flex flex-col gap-[38px] w-[490px] mb-[60px]">
       <h1 className="text-[50px] font-bold text-[#D6DDE6] md:text-[70px] text-center leading-[120px] tracking-[-1.4px] font-[Plus Jakarta Sans]">
        Your AI Yoga Companion
      </h1>
      <div className="flex justify-center">
      <button className="flex items-center justify-center h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-[#1AE5D1] text-black hover:bg-[#19d3c1]" onClick={() => handleNavigate("/upload")}>
        Get Started
      </button>
      </div>
      

        </div>
      
        <div className="flex justify-center mb-8">
  <div className="relative">

    <img
      src={tleft} // Top-left corner image
      alt="Top-left Corner"
      className="absolute top-[-24px] left-[-24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
    />
    <img
      src={tright} // Top-right corner image
      alt="Top-right Corner"
      className="absolute top-[-24px] right-[-24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
    />
    <img
      src={bleft} // Bottom-left corner image
      alt="Bottom-left Corner"
      className="absolute bottom-[-24px] left-[-24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
    />
    <img
      src={bright} // Bottom-right corner image
      alt="Bottom-right Corner"
      className="absolute bottom-[-24px] right-[-24px] w-[90px] h-[90px]" // Adjust positioning outside the main image
    />
    

    <img
      src={yoga} // Main yoga image
      alt="Yoga Pose"
      className="rounded-2xl w-[300px] h-[300px] md:w-[615px] md:h-[576px]"
    />
  </div>
        </div>

      </div>


      {/* input method */}
      <div className="flex flex-col p-6 gap-[49px]">
        <h1 className="text-[22px] font-bold text-white leading-[28px] font-spaceGrotesk font-space ">Choose your Input method</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[46px] text-center  mb-4">
          
          <div className="flex flex-col  w-[280px] md:w-[340px] md:h-[202px] pt-8 rounded-[16px] border-[1.5px] border-white/20 bg-[#193330] p-6">
             <h3 className="text-[16px] font-bold text-[#D6DDE6] text-center leading-[32px] font-spaceGrotesk " onClick={() => handleNavigate("/upload")} >Upload Image</h3>
             <p  className="text-[14px] font-medium text-[#D6DDE6] text-center font-spaceGrotesk">Analyze your yoga pose from an image.</p>
             <div className="">
             <button className=" mt-[26px]  h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-white text-black hover:bg-gray-200" >
               Upload
             </button>
             </div>
             
          </div>

          <div className="flex flex-col w-[280px] md:w-[340px] md:h-[202px] pt-8 rounded-[16px] border-[1.5px] border-white/20 bg-[#193330] p-6">
             <h3 className="text-[16px] font-bold text-[#D6DDE6] text-center leading-[32px] font-spaceGrotesk">Upload Video</h3>
             <p  className="text-[14px] font-medium text-[#D6DDE6] text-center font-spaceGrotesk">Analyze your yoga pose from an video.</p>
             <div className="">
             <button className=" mt-[26px]  h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-white text-black hover:bg-gray-200">
               Upload
             </button>
             </div>
             
          </div>

          <div className="flex flex-col w-[280px] md:w-[340px] md:h-[202px] pt-8 rounded-[16px] border-[1.5px] border-white/20 bg-[#193330] p-6">
             <h3 className="text-[16px] font-bold text-[#D6DDE6] text-center leading-[32px] font-spaceGrotesk " onClick={() => handleNavigate("/upload")}>Live Camera</h3>
             <p  className="text-[14px] font-medium text-[#D6DDE6] text-center font-spaceGrotesk">Analyze your yoga pose in real-time.</p>
             <div className="">
             <button className=" mt-[26px]  h-10 min-w-[84px] max-w-[480px] px-4 rounded-[20px] bg-white text-black hover:bg-gray-200">
               Upload
             </button>
             </div>
             
          </div>
        
      </div>
      </div>
      
      {/* features */}
      <div className=" flex  flex-col gap-8 justify-center mt-2 mb-4">
        <h2 className="text-[18px] font-bold text-white leading-[23px] font-spaceGrotesk dlig-on">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[25px]  max-w-4xl  ">
        {/* Feature 1 */}
        <div className="flex flex-col items-start w-[300px] md:w-[450px]  border-t-2 border-[#19E5D1] ">
          <div className="flex flex-col gap-[15px] mt-[15px] ">
            <div className="">
            <img src={cam} alt="" className=" w-[15px] h-[15px]"/>
            </div>
            <div className="flex flex-col">
            <h3 className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">Live Camera</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">
            Use your webcam to get real-time feedback
            </p>
            </div>
            
            </div>
            
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-start  w-[300px] md:w-[450px] border-t-2 border-[#19E5D1]">
          <div className="flex flex-col gap-[15px] mt-[15px] ">
            <div className="">
            <img src={img} alt="" className=" w-[15px] h-[15px]"/>
            </div>
            <div className="flex flex-col">
            <h3 className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">Upload</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">
            Upload a photo/video of your pose to get instant analysis
            </p>
            </div>
            
            </div>
            
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-start w-[300px] md:w-[450px] border-t-2 border-[#19E5D1]">
          <div className="flex flex-col gap-[15px] mt-[15px] ">
            <div className="">
            <img src={tick} alt="" className=" w-[15px] h-[15px]"/>
            </div>
            <div className="flex flex-col">
            <h3 className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">Instant Feedback</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">
            Our AI will give you detailed feedback on your pose
            </p>
            </div>
            
            </div>
            
        </div>

        {/* Feature 4 */}
        <div className="flex flex-col items-start w-[300px] md:w-[450px]  border-t-2 border-[#19E5D1]">
          <div className="flex flex-col gap-[15px] mt-[15px] ">
            <div className="">
            <img src={clock} alt="" className=" w-[15px] h-[15px]"/>
            </div>
            <div className="flex flex-col">
            <h3 className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">Fast Results</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] font-spaceGrotesk dlig-on">
            Get results in seconds, not minutes
            </p>
            </div>
            
            </div>
            
        </div>
        </div>
      </div>

       {/* How It Works Section */}
       <div id="how-it-works" className="flex flex-col mt-2  max-w-5xl gap-[35px] mb-[100px]">
        <h2 className="text-[22px] font-bold text-white font-spaceGrotesk leading-none self-stretch dlig-on">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
          {/* Upload */}
          <div className="flex flex-col items-start gap-3 w-[301px] p-3 rounded-[8px] border border-[#19E5D1] bg-[rgba(29,29,29,0.60)] self-stretch flex-shrink-0">
            <img src={upload} alt="" />
            <h3 className="text-[16px] font-bold text-white leading-[20px] font-spaceGrotesk dlig-on">Upload</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] leading-[21px] font-spaceGrotesk dlig-on">
              Upload your yoga pose image or video.
            </p>
          </div>

          {/* AI Analysis */}
          <div className="flex flex-col items-start gap-3 w-[301px] p-3 rounded-[8px] border border-[#19E5D1] bg-[rgba(29,29,29,0.60)] self-stretch flex-shrink-0">
            <img src={brain} alt="" />
            <h3 className="text-[16px] font-bold text-white leading-[20px] font-spaceGrotesk dlig-on">AI Analysis</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] leading-[21px] font-spaceGrotesk dlig-on">
            Our advanced AI analyzes your pose.
            </p>
          </div>

          {/* Instant Report */}
          <div className="flex flex-col items-start gap-3 w-[301px] p-3 rounded-[8px] border border-[#19E5D1] bg-[rgba(29,29,29,0.60)] self-stretch flex-shrink-0">
            <img src={page} alt="" />
            <h3 className="text-[16px] font-bold text-white leading-[20px] font-spaceGrotesk dlig-on">Instant Report</h3>
            <p className="text-[14px] font-normal text-[#94C7C2] leading-[21px] font-spaceGrotesk dlig-on">
            Get instant detailed feedback.
            </p>
          </div>


        </div>
      </div>

    </div>

  )
}

export default YogaChatHome