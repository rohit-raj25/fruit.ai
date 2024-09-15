import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-blue-300 to-blue-200 flex flex-col items-center justify-center p-6">
        

      {/* Content Section */}
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md  text-center ">
        <h1 className="text-3xl font-bold  p-4">Fruit.Ai</h1>
        <p className="text-gray-600 p-4">
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
        </p>

        {/* About Button */}
       <button className="!bg-black text-white py-2 px-6 rounded-full text-sm hover:!bg-gray-800">
  ABOUT
</button>

      </div>
    </div>
  );
};

export default About;
