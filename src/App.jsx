import './App.css'
import React from 'react'
import Profile from './components/Profile'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Left Side - Empty but responsive */}
      <div className="hidden lg:block lg:w-1/2"></div>

      {/* Right Side - Widgets */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 p-6 lg:p-8">
      < Profile />
      < Gallery />
      </div>
    </div>
  );
}

export default App;
