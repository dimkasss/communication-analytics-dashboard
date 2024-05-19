"use client";

import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface AudioSampleForListening {
  name: string;
  url: string;
}

const Input = () => {
  const [files, setFiles] = useState<FileList | null>();
  const [urls, setUrls] = useState<AudioSampleForListening[]>([]);
  const audioRef = useRef(null);

  useEffect(() => {
    console.log("@urls changed", urls);
  }, [urls]);

  const pushAudioToUrls = () => {
    if (files == null) {
      alert("Файлы не выбраны!");
      return;
    }
    setUrls([]);
    Array.from(files).forEach((file) => {
      setUrls((urls) => [
        ...urls,
        {
          name: file.name,
          url: URL.createObjectURL(file),
        },
      ]);
    });
  };

  const sendFile = () => {
    if (files == null) {
      alert("Файлы не выбраны!");
      return;
    }
    const formData = new FormData();

    // Array.from(files).forEach((file) => {
    //   console.log("@file", file);
    //   formData.append(file.name, file);
    // });

    console.log("@@", Array.from(files)[0]);

    formData.append("file", Array.from(files)[0]);

    // http://158.160.128.49:8000/conversation/file
    // api/audio
    axios
      .post("http://158.160.128.49:8000/conversation/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // should not affect the result but whatever
        },
      })
      .then((res) => {
        console.log("@response", res);
        return res;
      });
  };

  return (
    <div className="p-3 bg-slate-300">
      <h1>Отправка аудио (.mp3, .wav)</h1>
      <input
        name="audio"
        accept=".mp3, .wav"
        multiple
        onChange={(e) => {
          setFiles(e.target.files);
        }}
        type="file"
      />
      <button onClick={pushAudioToUrls} className="p-2 border">
        Прослушать
      </button>
      <button onClick={sendFile} className="p-2 border">
        Отправить
      </button>

      {urls.map((audioSample) => (
        <>
          <h4>{audioSample.name}</h4>
          <audio
            controls
            src={audioSample.url}
            key={new Date().getMilliseconds()}
          />
        </>
      ))}
    </div>
  );
};

export default Input;
