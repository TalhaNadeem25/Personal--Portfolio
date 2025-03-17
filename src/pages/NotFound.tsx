
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-6">
      <div className="text-center max-w-md w-full mx-auto">
        <div className="mb-6 flex justify-center">
          <AlertCircle className="w-16 h-16 text-black/30" />
        </div>
        
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">404</h1>
        
        <h2 className="text-2xl font-medium mb-6 text-gray-800">Page Not Found</h2>
        
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate(-1)} 
            className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            Go Back
          </button>
          
          <a 
            href="/" 
            className="px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
