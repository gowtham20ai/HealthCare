import React, { useEffect, useState } from 'react';

const AIchat = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="cdn.jotfor.ms/agent/embedjs"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jotfor.ms/agent/embedjs/019c18634396768f97dcf9f6e951f4cf28b4/embed.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Auto-close loading after 4 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 4000);
      };
      document.head.appendChild(script);
    } else {
      // Auto-close loading after 4 seconds even if script exists
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      {/* About AIchatBot Section */}
      <div className="mb-8 text-center animate-fade-in-down">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2 drop-shadow-md">
          AI Health Chatbot
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto animate-fade-in-up">
          Your intelligent health companion powered by advanced AI technology. 
          Get instant answers to your health queries and personalized guidance 
          for a healthier lifestyle.
        </p>
        <div className="mt-4 flex justify-center gap-4 animate-slide-in-bottom">
          <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            🤖 AI-Powered
          </span>
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            💬 24/7 Available
          </span>
          <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            🔒 Secure
          </span>
        </div>
      </div>

      {/* Centered Chatbot Container */}
      <div className="flex items-center justify-center">
        <div 
          id="JotForm-agent-embed-019c18634396768f97dcf9f6e951f4cf28b4"
          className={`transition-all duration-1000 transform ${isLoading ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}
        >
          {isLoading && (
            <div className="flex items-center justify-center w-96 h-96 bg-white rounded-2xl shadow-2xl">
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
                <p className="text-indigo-600 font-semibold animate-pulse">
                  Loading chatbot...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="mt-8 flex space-x-2 animate-bounce">
        <div className="w-3 h-3 bg-indigo-400 rounded-full"></div>
        <div className="w-3 h-3 bg-indigo-500 rounded-full delay-100"></div>
        <div className="w-3 h-3 bg-indigo-600 rounded-full delay-200"></div>
      </div>
    </div>
  );
};

export default AIchat;
