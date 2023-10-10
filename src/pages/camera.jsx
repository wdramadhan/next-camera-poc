/* eslint-disable @next/next/no-img-element */
import { useCallback, useRef, useState } from "react";
import { getFileInfo } from "@/lib/helpers";
import Webcam from "react-webcam";

const videoConstraints = {
  height: 1280,
  width: 720,
  facingMode: "environment",
};

export default function Camera() {
  const [selectedImages, setSelectedImages] = useState([]);
  const inputGalleryRef = useRef(null);
  const webcamRef = useRef(null);

  function handleGaleryClick() {
    inputGalleryRef.current?.click();
  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log("GGWP", imageSrc);
  }, [webcamRef]);

  async function handleInputChange(e) {
    try {
      const files = Array.from(e.target.files);
      if (!files.length) return;

      const fileInfo = files.map(async (file) => {
        return await getFileInfo(file);
      });

      const result = await Promise.all(fileInfo);
      setSelectedImages(result);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main>
      <div className="relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={720}
          height={1280}
          videoConstraints={videoConstraints}
        />
        <button
          onClick={capture}
          className="absolute bottom-5 left-[40%] bg-red-400 h-16 w-16 rounded-full"
        />
        <button
          onClick={handleGaleryClick}
          className="absolute bottom-7 left-4 bg-gray-600 h-12 w-12 rounded-lg"
        />
      </div>
      <input
        ref={inputGalleryRef}
        type="file"
        id="id"
        name="id"
        accept="image/png,image/jpeg"
        multiple
        className="hidden"
        //   capture="environment"
        onChange={handleInputChange}
      />
      <div className="flex flex-col gap-3 mt-4">
        {selectedImages.map((image, index) => (
          <img
            src={image.base64}
            alt={image.name}
            key={index}
            width={400}
            height={400}
          />
        ))}
      </div>
    </main>
  );
}
