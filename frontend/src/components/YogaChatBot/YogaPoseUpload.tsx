import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import trash from "../../assets/yogaupload/Frame 427318923.png";
import upload from "../../assets/yogaupload/bxs_file-jpg.png";
import img from "../../assets/yogaupload/material-symbols-light_upload.png";

const YogaPoseUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setSelectedFile(null);
    setCapturedImage(null);
  };

  const handleAnalyze = async () => {
    if (!selectedFile && !capturedImage) return;

    setIsLoading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    } else if (capturedImage) {
      const blob = await fetch(capturedImage).then((res) => res.blob());
      formData.append("file", blob, "captured_image.png");
    }

    try {
      const response = await fetch(

        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching prediction");
      }

      const data = await response.json();

      // Navigate to the result page and pass the response data
      navigate("/pose-result", { state: data });
    } catch (error) {
      console.error("Error during request:", error);
      alert("Failed to analyze the pose. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartLive = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      })
      .catch((err) => {
        console.error("Error accessing camera:", err);
        alert("Unable to access the camera. Please check permissions.");
      });
  };

  const handleCapture = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setCapturedImage(canvas.toDataURL("image/png"));
        setIsCameraOpen(false);

        // Stop the camera stream
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#18212C] text-white">
      <h1 className="md:text-3xl font-bold text-white text-center font-spaceGrotesk leading-7 mb-1 md:mb-6">
        Upload Your Yoga Pose for Analysis
      </h1>
      <div className="md:w-[800px] md:h-[56px] mr-3 ml-3">
        <p className="text-center text-white font-spaceGrotesk text-sm md:text-base mb-5 md:font-normal md:leading-7 md:mb-8">
          Please choose how you would like to provide your yoga pose. You can
          either upload an image or video, or use your live camera capture.
        </p>
      </div>

      <div className="flex flex-col items-center md:mt-10 md:mb-10 md:flex-row gap-10 md:gap-[105px]">
        <div className="flex flex-col gap-y-2 items-center">
          {!selectedFile && !capturedImage ? (
            <div className="flex flex-col w-[300px] h-[160px] md:w-[450px] md:h-[200px] p-[20px_10px] md:p-[38px_27px] justify-center items-center rounded-lg border border-[#617E7A] bg-[#193330] text-center">
              <img src={img} alt="" />
              <h2 className="md:text-xl font-semibold md:mb-2">Upload</h2>
              <p className="text-sm md:mb-4">
                Upload an image or video from your device.
              </p>
              <button
                onClick={handleBrowseClick}
                className="flex h-10 px-4 justify-center items-center rounded-full border border-[#D4D4D4] bg-[#3B827B] text-white hover:bg-[#327369] mb-2 md:mb-0"
              >
                Browse
              </button>
            </div>
          ) : (
            <div className="flex flex-col w-[300px] h-[160px] md:w-[450px] md:h-[200px] p-[20px_10px] md:p-[38px_27px] justify-center items-center rounded-lg border border-[#617E7A] bg-[#193330] text-center">
              {capturedImage ? (
                <img src={capturedImage} alt="Captured Pose" className="w-[100px] h-auto object-cover rounded-lg" />
              ) : (
                <img src={upload} alt="" />
              )}
              <h2 className="md:text-xl font-semibold md:mb-2">Uploaded</h2>
              <p className="text-sm md:mb-4">{selectedFile?.name || "Captured Image"}</p>
              <button
                onClick={handleDelete}
                className="mt-1 text-red-500 hover:text-red-700"
              >
                <img src={trash} alt="" />
              </button>
            </div>
          )}
          <p className="text-center text-[#94C7C2] text-sm font-normal md:leading-[21px]">
            Accepted file types: jpg, png, mp4. Max file size: 10mb
          </p>
        </div>

        <div className="flex flex-col gap-y-2 items-center">
          <div className="flex flex-col w-[300px] h-[160px] md:w-[450px] md:h-[200px] p-[20px_10px] md:p-[38px_27px] justify-center items-center rounded-lg border border-[#617E7A] bg-[#193330] text-center">
            <img src={img} alt="" />
            <h2 className="md:text-xl font-semibold md:mb-2">Capture</h2>
            <p className="text-sm md:mb-4">
              Use your camera to capture a live pose
            </p>
            <button
              onClick={handleStartLive}
              className="flex h-[40px] min-w-[84px] max-w-[480px] px-[16px] justify-center items-center rounded-[20px] border border-[#D4D4D4] bg-[#B0B0B0] text-white hover:bg-[#A0A0A0]"
            >
              <span className="text-[#424242]">Start Live</span>
            </button>
          </div>
          <p className="text-center underline text-[#94C7C2] text-sm font-normal md:leading-[21px]">
            Give access to camera
          </p>
        </div>
      </div>

      {isCameraOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
          <div className="relative">
            <video ref={videoRef} className="rounded-lg" />
            <canvas ref={canvasRef} className="hidden" width={450} height={300} />
            <button
              onClick={handleCapture}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-[#3B827B] text-white rounded-full"
            >
              Capture
            </button>
          </div>
        </div>
      )}

      <div className="flex mt-5">
        <button
          onClick={handleAnalyze}
          className={`inline-flex h-8 md:h-10 px-4 justify-center items-center text-[#424242] rounded-full ${
            selectedFile || capturedImage ? "bg-[#1AE5D1]" : "bg-[#B0B0B0]"
          }`}
          disabled={!selectedFile && !capturedImage}
        >
          {isLoading ? "Loading..." : "Analyze"}
        </button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,video/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default YogaPoseUpload;
