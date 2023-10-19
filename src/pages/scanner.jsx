import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { ViewFinder } from "../components/ViewFinder";

const Scanner = (props) => {
  const [data, setData] = useState("No result");

  return (
    <div style={{ height: "100vh" }}>
      <QrReader
        // ViewFinder={ViewFinder}
        videoId="video"
        scanDelay={500}
        constraints={{
          facingMode: "environment",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        // videoContainerStyle={{
        //   height: "700px",
        // }}
      />
      <p>{data}</p>
    </div>
  );
};

export default Scanner;
