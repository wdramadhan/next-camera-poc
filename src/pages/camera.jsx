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
    <main className="p-4">
      <button
        onClick={handleGaleryClick}
        className=" text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Select image
      </button>
      <input
        ref={inputGalleryRef}
        type="file"
        id="id"
        name="id"
        accept=".jpeg, .jpg, .png"
        className="hidden"
        multiple
        onChange={handleInputChange}
      />
      <div className="flex flex-wrap gap-3 mt-4">
        {selectedImages.map((image, index) => (
          <img
            src={image.base64}
            alt={image.name}
            key={index}
            className="h-[100px] w-[100px] max-w-lg object-cover border-2 rounded-lg"
          />
        ))}
      </div>
    </main>
  );
}
