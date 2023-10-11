export async function getFileInfo(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("error upload file");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = () => {
      reject("error read file");
    };
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onerror = () => {
        reject("error read file");
      };
      img.onload = () => {
        const info = {
          name: file.name,
          size: file.size,
          width: img.width,
          height: img.height,
          base64: reader.result,
          mime: file.type,
        };

        resolve(info);
      };
    };
  });
}

export async function getFileInfoFromCamera(base64) {
  return new Promise((resolve, reject) => {
    if (!base64) {
      reject("error get file");
      return;
    }

    const img = new Image();
    img.src = base64;
    img.onerror = () => {
      reject("error read file");
    };
    img.onload = () => {
      const info = {
        name: "",
        size: "",
        width: img.width,
        height: img.height,
        base64: base64,
        mime: "",
      };

      resolve(info);
    };
  });
}
