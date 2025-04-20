// pages/index.tsx
"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [role, setRole] = useState('');

  return (
    <div className="flex flex-row items-center justify-center min-h-screen bg-white pl-15">
      <div 
        style={{ backgroundColor: '#FDEED8' }} 
        className="text-left mb-8 px-20 py-20 rounded-2xl shadow-lg w-3/4"  
      >
        <h1 className="text-6xl font-bold italic text-gray-900 pl-0">Welcome to</h1>
        <Image
            src="/basket.svg"
            alt="Aggie Pantry Logo"
            className="mx-auto w-105 h-105"
            width={105}
            height={105}
        />
      </div>

      <div className="flex justify-end items-center h-screen pr-8">
        <div className="text-center">
          <h3 className="text-md font-medium mb-4 text-gray-900">Select Your Role</h3>
          <div className="flex flex-col items-center space-y-8">
            <div 
              onClick={() => setRole('shopper')}
              className={`p-6 rounded-lg cursor-pointer transition-all ${role === 'shopper' ? 'border-1 border-white' : ''}`}
            >
              <div className="flex flex-col items-center">
                <Image
                    src="/Shopper.svg"
                    alt="Shopper Icon"
                    className="mx-auto w-65 h-65"
                    width={65}
                    height={65}
                />
              </div>
            </div>

            <div 
              onClick={() => setRole('admin')}
              className={`p-6 rounded-lg cursor-pointer transition-all ${role === 'admin' ? 'border-1 border-white' : ''}`}
            >
              <div className="flex flex-col items-center">
                <Image
                    src="/Admin.svg"
                    alt="Admin Icon"
                    className="mx-auto w-65 h-65"
                    width={65}
                    height={65}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
