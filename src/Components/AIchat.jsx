import  { useState, useRef } from 'react';

const AIchat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const toggleCamera = async () => {
    if (cameraOpen) {
      // Close camera
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      setCameraOpen(false);
    } else {
      // Open camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setCameraOpen(true);
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access camera. Please check permissions.');
      }
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Placeholder for AI API call - replace with actual AI service integration
      const response = await generateResponse(input);
      const aiMessage = { text: response, sender: 'ai' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage = { text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const generateResponse = async (query) => {
    // Mock AI response - replace with actual AI API call
    // For healthcare chatbot, this should integrate with an AI service like OpenAI, Google AI, etc.
    if (query.toLowerCase().includes('code') || query.toLowerCase().includes('fill')) {
      return `Here's a sample code snippet for a healthcare component:\n\n\`\`\`jsx\nimport React from 'react';\n\nconst HealthComponent = () => {\n  return (\n    <div>\n      <h2>Healthcare Component</h2>\n      <p>This is a sample component.</p>\n    </div>\n  );\n};\n\nexport default HealthComponent;\n\`\`\``;
    } else {
      return `As an AI healthcare assistant, I'm here to help with medical questions, appointment scheduling, symptom checking, and code generation for healthcare applications. How can I assist you today?`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex mt-10  flex-col h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 rounded-2xl ">
        <h1 className="text-xl font-bold">AI Healthcare Chatbot</h1>
        <p className="text-sm">Ask medical questions or request code snippets</p>
      </div>

      {/* Camera Preview */}
      {cameraOpen && (
        <div className="mb-4 rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full max-h-64 object-cover"
          />
          <div className="p-2 bg-gray-800 text-white text-center">
            <span className="text-sm">Camera Active</span>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border'
              }`}
            >
              <pre className="whitespace-pre-wrap font-sans">{message.text}</pre>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border px-4 py-2 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span>Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex space-x-2 items-center">
          {/* Camera Button */}
          <button
            onClick={toggleCamera}
            className={`p-2 rounded-lg transition-all duration-300 ${
              cameraOpen 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            title={cameraOpen ? 'Close Camera' : 'Open Camera'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a healthcare question or request code..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIchat;
