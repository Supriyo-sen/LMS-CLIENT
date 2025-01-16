// src/pages/LiveClass.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

const LiveClass = () => {
  const [isMicOn, setMicOn] = useState(true);
  const [isCameraOn, setCameraOn] = useState(true);

  const toggleMic = () => setMicOn((prev) => !prev);
  const toggleCamera = () => setCameraOn((prev) => !prev);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">
        Live Class: React for Beginners
      </h1>
      <div className="bg-black w-full md:w-3/4 h-96 flex items-center justify-center text-white rounded-lg mb-6">
        {/* Placeholder for video stream */}
        {isCameraOn ? (
          <p className="text-lg">Your Video Stream</p>
        ) : (
          <p className="text-lg">Camera is Off</p>
        )}
      </div>

      <div className="flex space-x-4">
        <Button onClick={toggleMic} variant={isMicOn ? "default" : "outline"}>
          {isMicOn ? "Mute Mic" : "Unmute Mic"}
        </Button>
        <Button
          onClick={toggleCamera}
          variant={isCameraOn ? "default" : "outline"}
        >
          {isCameraOn ? "Disable Camera" : "Enable Camera"}
        </Button>
        <Button variant="destructive">Leave Class</Button>
      </div>
    </div>
  );
};

export default LiveClass;
