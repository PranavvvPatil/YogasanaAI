import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import YogasanasData from "../../Yogasanas.json"; // Import the JSON file
import logo from "../../assets/PHOTO-2025-01-21-19-10-33.jpg"
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
      // Handle any non-standard feedback items
      return {
        category: "Unknown",
        feedback: "No feedback available or invalid format.",
      };
    }
  });
};

const PoseDetails: React.FC = () => {
  const location = useLocation();
  const { predicted_pose, feedback, visualization, reference_image_link } = location.state as PoseDetailsProps;

  const [poseData, setPoseData] = useState<YogaPose | null>(null);

  // Capitalize the first letter of the predicted pose name
  const capitalizedPoseName = predicted_pose.charAt(0).toUpperCase() + predicted_pose.slice(1);

  // Fetch pose data based on the capitalized pose name
  useEffect(() => {
    const yogasanasData = (YogasanasData as YogasanasJson).yoga_poses;
    const pose = yogasanasData.find((pose: YogaPose) => pose.pose_name === capitalizedPoseName);
    setPoseData(pose || null);
  }, [capitalizedPoseName, predicted_pose]);

  if (!predicted_pose || !feedback || !visualization || !reference_image_link || !poseData) {
    return <div className="text-center text-white">No pose details data available.</div>;
  }

  // Ensure feedbackItems is defined by transforming the feedback
  const feedbackItems = transformFeedback(feedback);

  return (
    <div className="w-[350px] md:w-[600px] h-auto p-6 bg-white border rounded-lg shadow-md overflow-x-auto">
      {/* Header */}
      <header className=" flex justify-between text-center mb-4">
        <img src={logo} alt="" className="w-[100px] h-auto" />
        <h1 className=" font-bold text-[#4CAF50] font-spaceGrotesk text-base  leading-normal">
        YogasanaAI Report
        </h1>
      </header>
      <div className="md:w-[521px] w-[300px] h-[2px] bg-[#4CAF50] mx-auto mb-6"></div>

      {/* Detected Pose Section */}
      <section className="text-center mb-8">
        <img
          src={reference_image_link}
          alt={predicted_pose}
          className="w-[164.759px] h-[155px] max-w-sm mx-auto mt-4 rounded-md shadow-lg"
        />
        <h2 className="mt-4 text-[#4CAF50] font-spaceGrotesk text-[20px] font-bold leading-23px">
          Detected Pose: <span className="text-[#4CAF50]">{predicted_pose}</span>
        </h2>
        <p className="text-[#000] text-center mt-2 font-spaceGrotesk text-[12px] font-normal leading-[23px]">
          Detected Accuracy:  
          <span className="font-bold text-[#000] text-[14px]"> 88%</span>
        </p>
        <p className="text-[#000] text-center  font-spaceGrotesk text-[12px] font-normal leading-[23px]">
          Detection Time:
          <span className="font-bold text-[#000] text-[14px]"> 2.5 sec</span>
        </p>
      </section>

      {/* Feedback Insights */}
      <section className="mt-6 w-[528px] h-auto flex-shrink-0 rounded-[15px]  mb-3  ">
        <h2 className="text-14px font-medium leading-21px text-customBlack font-spaceGrotesk mb-4">Feedback Insights</h2>
        {feedbackItems.length > 0 ? (
          <table className="table-auto mb-6 mt-2 w-full rounded-lg text-left item-center  ">
            <thead>
              <tr>
                <th className="ml-4 p-3 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px border-t border-r border-l border-b border-[#19D3C1] bg-transparent">Parameter</th>
                <th className="ml-4 p-3 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px border-t border-r border-l border-b border-[#19D3C1] bg-transparent">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {feedbackItems.map((item, index) => (
                <tr key={index}>
                  <td className=" ml-4 p-3 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px border-t border-l border-b border-r border-[#19D3C1] bg-transparent">{item.category}</td>
                  <td className="ml-4 p-3 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px border-t border-l border-b border-r border-[#19D3C1] bg-transparent">{item.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="ml-6 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px">
            No feedback insights available.
          </p>
        )}
      </section>

      {/* Pose Description */}
      <section className="mb-8">
        <h3 className="text-14px font-medium leading-21px text-customBlack font-spaceGrotesk mb-4">Pose Description</h3>
        <div>
          <h4 className="text-[12px] font-medium leading-22px text-[#4CAF50] font-spaceGrotesk mb-2">Steps:</h4>
          <ul className="list-disc ml-6 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px">
            {poseData.how_to_do_it.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-[12px] font-medium leading-22px text-[#4CAF50] font-spaceGrotesk mb-2">Benefits:</h4>
          <ul className="list-disc ml-6 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px">
            {poseData.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-[12px] font-medium leading-22px text-[#4CAF50] font-spaceGrotesk mb-2">Precautions:</h4>
          <ul className="list-disc ml-6 text-customBlack font-spaceGrotesk text-[12px] font-normal leading-22px">
            {poseData.precautions.map((precaution, index) => (
              <li key={index}>{precaution}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="md:w-[521px] w-[300px] h-[2px] bg-[#4CAF50] mx-auto mt-6"></div>

      {/* Footer */}
      <footer className="text-center  mt-2 mb-4 h-[15px] self-stretch text-[#424242] font-spaceGrotesk text-[12px]  ">
  ©️ 2024 YogasanaAI. All rights reserved. <br />
  Website:{" "}
  <a href="http://www.yogaposedetector.com" className="text-blue-500">
    www.YogasanaAI.com
  </a>
</footer>

    </div>
  );
};

export default PoseDetails;
