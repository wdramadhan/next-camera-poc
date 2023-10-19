import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scanner = (props) => {
  const [data, setData] = useState("No result");

  return (
    <div style={{ height: "100vh" }}>
      <QrReader
        constraints={{
          facingMode: "environment",
          aspectRatio: 9 / 16,
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        videoContainerStyle={{
          background: "blue",
          height: "700px",
        }}
      />
      <p>{data}</p>
    </div>
  );
};

export default Scanner;
