// AudioFiles.js
import React from "react";

function AudioFile({ audio }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {audio.mainAudioFile.title}
      </h3>
      <audio controls className="w-full">
        <source src={audio.mainAudioFile.url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioFile;
