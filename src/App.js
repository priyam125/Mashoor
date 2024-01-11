// App.js
import React from "react";
import { RecoilRoot } from "recoil";
import AudioPlayer from "./components/AudioPlayer";
import Popular from "./assets/Popular.jpg";
import "./App.css"; // Import your custom CSS for global styles

function App() {
  return (
    <RecoilRoot>
      <div className="bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold text-white mb-6">Mashoor</h1>
        <div className="rounded-md overflow-hidden shadow-lg">
          <img src={Popular} alt="Album Art" className="w-64 h-64" />
        </div>
        <AudioPlayer />
      </div>
    </RecoilRoot>
  );
}

export default App;
