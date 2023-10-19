// file = Html5QrcodePlugin.jsx
import { Html5Qrcode, Html5QrcodeScanType } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
export const createConfig = (props) => {
  let config = {
    supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    aspectRatio: 16 / 9,
  };

  if (props.fps) {
    config.fps = props.fps;
  }
  if (props.qrbox) {
    config.qrbox = props.qrbox;
  }
  if (props.aspectRatio) {
    config.aspectRatio = props.aspectRatio;
  }
  if (props.disableFlip !== undefined) {
    config.disableFlip = props.disableFlip;
  }
  return config;
};

export const QrCodeReader = (props) => {
  useEffect(() => {
    const config = createConfig(props);

    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);
    const didStart = html5QrcodeScanner?.start(
      { facingMode: "environment" },
      config,
      props.qrCodeSuccessCallback,
      props?.qrCodeErrorCallback
    );

    return () => {
      didStart
        .then(() => html5QrcodeScanner.stop())
        .catch(() => {
          console.log("error stopping scanner");
        });
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={qrcodeRegionId} />;
};
