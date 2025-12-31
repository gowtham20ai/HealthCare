import React, { useEffect, useState } from 'react';


const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-fit  mt-8 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
          Welcome to Your Healthcare Dashboard
        </h1>

      

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-left">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">Appointments</h3>
            <p className="text-gray-600">View and manage your upcoming appointments</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
            <h3 className="text-xl font-semibold mb-2 text-green-600">Medical Records</h3>
            <p className="text-gray-600">Access your medical history and records</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-up">
            <h3 className="text-xl font-semibold mb-2 text-purple-600">AI Chat</h3>
            <p className="text-gray-600">Get instant health advice from our AI assistant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
