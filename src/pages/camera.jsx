/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import { getFileInfo } from "@/lib/helpers";

export default function Camera() {
  const [selectedImages, setSelectedImages] = useState([]);
  const inputGalleryRef = useRef(null);
  const webcamRef = useRef(null);

  function handleGaleryClick() {
    inputGalleryRef.current?.click();
  }

  function capture() {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
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
      <button
        onClick={handleGaleryClick}
        className="bg-gray-600 h-12 w-12 rounded-lg ml-4 mt-4"
      />
      <input
        ref={inputGalleryRef}
        type="file"
        id="id"
        name="id"
        accept="image/*"
        className="hidden"
        capture="environment"
        onChange={handleInputChange}
      />
      <div className="flex flex-col gap-3 mt-">
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
