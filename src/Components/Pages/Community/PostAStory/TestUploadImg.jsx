import React, { useState } from "react";

const TestUploadImg = () => {
  const [files, setFiles] = useState();

  const handleChange = (event) => {
    setFiles(event.target.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[0]);
    }

    fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data)).catch(err => console.log(err))
  };

  return (
    <div>
      <input type="file" onChange={handleChange} multiple />
      <button onClick={handleUpload}>upload</button>
    </div>
  );
};

export default TestUploadImg;
