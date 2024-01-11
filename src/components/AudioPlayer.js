// AudioPlayer.js
import React from "react";
import { useRecoilValue } from "recoil";
import { audioFilesState } from "../store/index";
import AudioFile from "./AudioFile";
import Dropdown from "./Dropdown";

function AudioPlayer() {
  const audioFiles = useRecoilValue(audioFilesState);

  return (
    <div className="w-full max-w-md mt-8">
      {audioFiles.map((audio, index) => (
        <div
          key={index}
          className="mb-8 border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <AudioFile audio={audio} />
          <Dropdown audioFiles={audio} />
        </div>
      ))}
    </div>
  );
}

export default AudioPlayer;
