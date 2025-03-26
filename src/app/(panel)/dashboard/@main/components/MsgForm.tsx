import React from 'react'

const MsgForm = () => {
  return (
    <form className="flex flex-col h-screen bg-gray-50 font-sans">
    <div className="flex-1 flex flex-col p-5 overflow-auto">
      {/* Chat messages would appear here */}
    </div>
    <div className="flex p-4 border-t border-black bg-white shadow-sm">
      <input 
        type="text" 
        placeholder="Type to search" 
        className="flex-1 px-4 py-3 rounded-full border border-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button 
        className="ml-2 px-5 py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
      >
        Send
      </button>
    </div>
  </form>
  )
}

export default MsgForm