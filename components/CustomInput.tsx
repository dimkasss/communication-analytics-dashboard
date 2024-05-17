"use client";

import axios from "axios";
import { useRef, useState } from "react";

const Input = () => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef(null);

  const sendFile = () => {
    if (files == null) {
      alert("Файлы не выбраны!");
      return;
    }
    const formData = new FormData();

    // Update the formData object
    // formData.append(
    //   "myFile",
    //   this.state.selectedFile,
    //   this.state.selectedFile.name
    // );

    Array.from(files).forEach((file) => {
      console.log("@file", file);
      formData.append(file.name, file);
    });

    // Details of the uploaded file

    // Request made to the backend api
    // Send formData object
    axios.post("api/audio", formData).then((res) => {
      console.log("@response", res);
      return res;
    });
    // axios.get("/api/audio").then((res) => {
    //   console.log("@response", res);
    //   return res;
    // });
  };

  return (
    <div className="p-3 bg-slate-300">
      Upload
      <input
        ref={inputRef}
        multiple
        onChange={(e) => {
          setFiles(e.target.files);
        }}
        type="file"
      />
      <button onClick={sendFile}>Отправить</button>
    </div>
  );
};

export default Input;
