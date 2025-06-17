import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Launching <Shoury.dev/>...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Split `.dev` from the rest once it's visible
  const dotDevIndex = text.indexOf(".dev");
  const before = dotDevIndex !== -1 ? text.substring(0, dotDevIndex) : text;
  const dotDev =
    dotDevIndex !== -1 ? text.substring(dotDevIndex, dotDevIndex + 4) : "";
  const after = dotDevIndex !== -1 ? text.substring(dotDevIndex + 4) : "";

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {before}
        <span className="text-blue-500">{dotDev}</span>
        {after}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
