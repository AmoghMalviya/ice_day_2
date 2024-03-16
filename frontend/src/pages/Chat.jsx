import React from 'react'
import { GoogleGeminiEffectDemo } from "@/widgets/ui/gemoniDemo";


function Chat() {
  return (
    <>
      <div className="absolute flex flex-col items-center justify-center w-full h-screen text-white z-10">
        <h1 className="text-3xl font-bold mb-8">Chat</h1>
        <div className="flex flex-col items-center w-full h-full">
          <input type="text" disabled className="h-1/2 w-1/3 px-4 py-2 bg-gray-200 rounded " />
          <input type="text" placeholder="Enter your message" className="w-1/3 px-6 py-4 mt-14 text-black bg-gray-200 rounded-3xl" />
        </div>
      </div>
      <GoogleGeminiEffectDemo />
    </>
  );
}

export default Chat
