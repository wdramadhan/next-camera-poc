import React, { useState } from "react";
import { QrCodeReader } from "../components/QrCodeReader";

const ScannerHtml = () => {
  const [result, setResult] = useState();
  const onNewScanResult = (decodedText) => {
    setResult(decodedText);
  };

  return (
    <div>
      <QrCodeReader
        fps={10}
        qrbox={210}
        disableFlip
        qrCodeSuccessCallback={onNewScanResult}
      />
      <p>{result}</p>
    </div>
  );
};

export default ScannerHtml;
