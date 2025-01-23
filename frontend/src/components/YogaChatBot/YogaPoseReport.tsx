import { useNavigate } from "react-router-dom";
import PoseReport from "./PoseReport";
import download from "../../assets/details/material-symbols-light_download.png";
import icon from "../../assets/details/fluent-mdl2_navigate-back (1).png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const YogaPoseReport = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDownloadReport = async () => {
    try {
      const reportElement = document.getElementById("pose-report");
      if (!reportElement) {
        console.error("PoseReport element not found.");
        return;
      }

      // Adjust styles to ensure proper rendering in PDF
      reportElement.style.background = "#ffffff"; // Ensure background is white

      // Capture the PoseReport content
      const canvas = await html2canvas(reportElement, { scale: 2 }); // Higher scale for better quality
      const imgData = canvas.toDataURL("image/png");

      // Create and configure the PDF
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("YogaPoseReport.pdf");
    } catch (error) {
      console.error("Error downloading the report:", error);
    }
  };

  return (
    <div className="w-full h-auto bg-[#18212C] flex flex-col md:flex-row md:gap-[200px] justify-center">
      <div className="mt-10">
        <button onClick={handleBackClick}>
          <img src={icon} alt="Back Icon" />
        </button>
      </div>

      <div
        id="pose-report"
        className="flex justify-center text-black  max-w-[800px] md:mt-10 md:mb-10 p-5 rounded-md shadow-lg"
      >
        {/* PoseReport component */}
        <PoseReport />
      </div>

      <div className="flex justify-center md:mt-10 mb-5">
        <button
          onClick={handleDownloadReport}
          className="flex h-[40px] min-w-[84px] max-w-[480px] px-[16px] justify-center items-center rounded-[20px] border border-[#D4D4D4] bg-[#3B827B] text-white hover:bg-[#2F6B66]"
        >
          Download Report
          <img src={download} alt="Download Icon" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default YogaPoseReport;
