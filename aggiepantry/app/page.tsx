import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-400">
      <div className="flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-200">Welcome to WebVision</h1>
        <p className="text-3xl font-bold text-black"> hello world! </p>
        
        <Link href="/about">
          <div className="px-4 py-2 text-2xl font-bold text-white bg-blue-400 rounded hover:bg-blue-500">
            About Page
          </div>
        </Link>

        <Link href="/vision">
          <div className="px-4 py-2 text-2xl font-bold text-white bg-pink-300 rounded hover:bg-pink-400">
            Vision Page
          </div>
        </Link>

      </div>
    </div>
  )
};