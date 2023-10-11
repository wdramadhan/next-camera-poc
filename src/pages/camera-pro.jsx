/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { getFileInfo } from "@/lib/helpers";
import { Camera } from "react-camera-pro";

export default function CameraPro() {
  const [selectedImages, setSelectedImages] = useState([]);
  const inputGalleryRef = useRef(null);
  const webcamRef = useRef(null);

  function handleGaleryClick() {
    inputGalleryRef.current?.click();
  }

  function capture() {
    const imageSrc = webcamRef.current.takePhoto();
    console.log(imageSrc);
  }

  function handleSwitchCamera() {
    webcamRef.current.switchCamera();
  }

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
        <Camera ref={webcamRef} aspectRatio={9 / 16} />
        <button
          onClick={handleSwitchCamera}
          className="absolute top-8 right-8 bg-blue-400 h-8 w-8 rounded-full"
        />
        <button
          onClick={capture}
          className="absolute bottom-5 left-40 bg-red-400 h-16 w-16 rounded-full"
        />
        <button
          onClick={handleGaleryClick}
          className="absolute bottom-6 left-6 bg-gray-600 h-12 w-12 rounded-lg"
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
