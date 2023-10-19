import React, { useState } from "react";
import { QrCodeReader } from "../components/QrCodeReader";

const ScannerHtml = () => {
  const [result, setResult] = useState();
  const onNewScanResult = (decodedText) => {
    setResult(decodedText);
  };

  return (
    <div className="h-screen overflow-hidden relative">
      <QrCodeReader
        fps={10}
        qrbox={210}
        disableFlip
        qrCodeSuccessCallback={onNewScanResult}
      />

      <div className="w-ful rounded-t-lg bg-gray-100 px-6 pb-6 pt-8 z-20 -mt-2 absolute w-full bottom-0">
        <input
          value={result}
          type="text"
          className="border border-gray-400 w-full p-4"
        />
      </div>
    </div>
  );
};

export default ScannerHtml;
