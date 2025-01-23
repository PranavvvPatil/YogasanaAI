import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import detect from "../../assets/details/Progressbar.png";
import YogasanasData from "../../Yogasanas.json"; // Import the JSON file directly
import scrol from "../../assets/PHOTO-2025-01-21-20-04-00.jpg";

// Interface definitions for Feedback, PoseDetails, and YogaPose
interface FeedbackItem {
  category: string;
  feedback: string;
}

interface PoseDetailsProps {
  predicted_pose: string;
  feedback: string[];
  visualization: string;
  reference_image_link: string;
}

interface YogaPose {
  pose_name: string;
  how_to_do_it: string[];
  benefits: string[];
  precautions: string[];
}

interface YogasanasJson {
  yoga_poses: YogaPose[];
}

const transformFeedback = (feedback: string[]): FeedbackItem[] => {
  return feedback.map((item) => {
    if (item.includes(", off by")) {
      const [category, feedbackText] = item.split(", off by");
      return {
        category: category.trim(),
        feedback: `Adjust your ${category.trim()}, off by ${feedbackText.trim()}°`,
      };
    } else {
      return {
        category: "Unknown",
        feedback: "No feedback available or invalid format.",
      };
    }
  });
};

const PoseDetails = () => {
  const location = useLocation();
  const { predicted_pose, feedback, visualization, reference_image_link } =
    (location.state || {}) as PoseDetailsProps;

  const [poseData, setPoseData] = useState<YogaPose | null>(null);
  const [showScrollImage, setShowScrollImage] = useState(true);

  const feedbackTableRef = useRef<HTMLTableElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const capitalizedPoseName = predicted_pose.charAt(0).toUpperCase() + predicted_pose.slice(1);

  useEffect(() => {
    const yogasanasData = (YogasanasData as YogasanasJson).yoga_poses;
    const pose = yogasanasData.find((pose: YogaPose) => pose.pose_name === capitalizedPoseName);
    setPoseData(pose || null);
  }, [capitalizedPoseName, predicted_pose]);

  const handleScroll = () => {
    if (benefitsRef.current) {
      const bottom = benefitsRef.current.getBoundingClientRect().bottom;
      const isScrolledToBottom = bottom <= window.innerHeight;

      setShowScrollImage(!isScrolledToBottom);
    }
  };

  const scrollToBenefits = () => {
    if (benefitsRef.current) {
      benefitsRef.current.scrollIntoView({ behavior: "smooth" });
      setShowScrollImage(false);
      setTimeout(() => setShowScrollImage(true), 3000);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!predicted_pose || !feedback || !visualization || !reference_image_link || !poseData) {
    return <div className="text-center text-white">No pose details data available.</div>;
  }

  const feedbackItems = transformFeedback(feedback);

  return (
    <div className="p-6 bg-[#000] text-white  md:w-full md:h-auto rounded-lg shadow-md">
      <div className="flex flex-col gap-5">
        {/* Detected Pose Section */}
        <div className="w-[528px] h-auto flex flex-col justify-center items-center flex-shrink-0 rounded-[24px] bg-[#18212C]">
          <div className="flex justify-center w-[500px] h-[38px] px-[22px] py-[9px] mt-8 flex-col items-center gap-[10px] flex-shrink-0 rounded-[8px] border border-[#FFF] bg-[#18212C] overflow-hidden">
            <h1 className="flex justify-center text-white text-[12px] font-normal leading-[28px] text-center font-space-grotesk">
              Detected Pose: 
              <span className="ml-3 text-green-400 text-[18px] font-medium leading-[28px] font-space-grotesk">
                {capitalizedPoseName}
              </span>
            </h1>
          </div>

          <div className="flex gap-2 justify-between items-center mb-4 p-4 rounded-lg">
            <div className="flex justify-center w-[260px] h-[36px] p-[9px_22px] gap-2 items-center flex-shrink-0 rounded-[8px] border border-white bg-[#18212C]">
              <img src={detect} alt="Detection" className="w-[20px] h-[20px]" />
              <p>Detected Accuracy: <span className="text-green-400 font-semibold">88%</span></p>
            </div>
            <div className="flex justify-center w-[230px] h-[36px] p-[9px_22px] items-center flex-shrink-0 rounded-[8px] border border-white bg-[#18212C]">
              <p>Detection Time: <span className="text-green-400 font-semibold">2.5 sec</span></p>
            </div>
          </div>
        </div>

        {/* Feedback Insights Table */}
        <div className="mt-6 w-[528px] h-auto flex-shrink-0 rounded-[15px] border border-[#CACACA] bg-[#18212C]">
          <h2 className="text-xl font-bold mb-2 mt-2 px-4">Feedback Insights</h2>
          <table
            ref={feedbackTableRef}
            className="table-auto mb-6 mt-2 w-full rounded-lg text-left border-collapse bg-[#0F141B]"
          >
            <thead>
              <tr>
                <th className="px-4 py-2 border-t border-l border-b border-[#19D3C1] bg-transparent">Parameter</th>
                <th className="px-4 py-2 border-t border-l border-b border-[#19D3C1] bg-transparent">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {feedbackItems.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-t border-l border-b border-[#19D3C1] bg-transparent">{item.category}</td>
                  <td className="px-4 py-2 border-t border-l border-b border-[#19D3C1] bg-transparent">{item.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Do It */}
        <div className="mt-6 w-[528px] h-auto flex-shrink-0 rounded-[15px] border border-[#CACACA] bg-[#18212C]">
          <h2 className="text-xl font-bold mt-4 mb-2 ml-4">How to Do It</h2>
          <ul className="list-disc pl-5 mb-4 ml-2 mr-3">
            {poseData.how_to_do_it.map((step, index) => (
              <li key={index} className="text-white">{step}</li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="mt-6 w-[528px] h-auto flex-shrink-0 rounded-[15px] border border-[#CACACA] bg-[#18212C]">
          <h2 className="text-xl font-bold mt-4 mb-2 ml-4">Benefits</h2>
          <ul className="list-disc pl-5 mb-4 ml-2 mr-3">
            {poseData.benefits.map((benefit, index) => (
              <li key={index} className="text-white">{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Precautions */}
        <div className="mt-6 w-[528px] h-auto flex-shrink-0 rounded-[15px] border border-[#CACACA] bg-[#18212C]">
          <h2 className="text-xl font-bold mt-4 mb-2 ml-4">Precautions</h2>
          <ul className="list-disc pl-5  mb-4 ml-2 mr-3">
            {poseData.precautions.map((precaution, index) => (
              <li key={index} className="text-white">{precaution}</li>
            ))}
          </ul>
        </div>

        {showScrollImage && (
          <div
            onClick={scrollToBenefits}
            className="absolute top-1/2 left-1/2 transform translate-x-[250px] translate-y-[130px] cursor-pointer"
          >
            <img src={scrol} alt="Scroll Down" className="w-8 rounded-full animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PoseDetails;
