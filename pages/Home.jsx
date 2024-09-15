import React from 'react';
import { FaGoogle, FaCommentAlt, FaQuestionCircle, FaInfoCircle } from 'react-icons/fa';
import { SiGoogletranslate } from "react-icons/si";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">Fruit.Ai</h1>
        <p className="text-xl text-pink-600 font-semibold">"Be Healthy!"</p>
        
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Chat Button */}
        <button className="bg-orange-200 h-32 w-32 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
          
          <span className="text-3xl font-bold text-pink-600 ml-2">Chat.</span>
        </button>

        {/* Chat Button */}
        <button className="bg-green-100 h-32 w-32 rounded-xl flex items-center justify-center transition-all">
          
          <span className="text-2xl font-bold text-pink-600 ml-2"></span>
        </button>

        {/* Translate Button */}
        <button className="bg-yellow-100 h-32 w-32 rounded-xl flex items-center justify-center  transition-all">
          
        </button>
        {/* Translate Button */}
        <button className="bg-blue-200 h-32 w-32 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
        <SiGoogletranslate  className="text-5xl text-blue-600" />
        </button>

        {/* FAQs Button */}
        <button className="bg-purple-200 h-32 w-32 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
          
          <span className="text-3xl font-bold text-indigo-600 ml-2">FAQs</span>
        </button>

        {/* About Button */}
        <button className="bg-pink-200 h-32 w-32 rounded-xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all">
          
          <span className="text-3xl font-bold text-purple-600 ml-2">About</span>
        </button>
      </div>

      {/* Indicator */}
      <div className="flex justify-center mt-8">
        <span className="bg-white rounded-full h-2 w-2 mx-1"></span>
        <span className="bg-gray-300 rounded-full h-2 w-2 mx-1"></span>
        <span className="bg-gray-300 rounded-full h-2 w-2 mx-1"></span>
      </div>
    </div>
  );
};

export default Home;
