import Link from 'next/link';
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-15 flex items-center justify-between">
      {/* Logo and Title */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="The Aggie Pantry" width={48} height={48} />
        <h1 className="text-l font-semibold text-gray-800 pt-2">The Aggie Pantry</h1>
      </div>

      {/* Nav Links */}
      <div className="flex items-right space-x-6 ml-auto pr-12">
        <Link href="/the-pantry" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded transition duration-200">The Pantry</Link>
        <Link href="/the-freedge" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded transition duration-200">The Freedge</Link>
        <Link href="/contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-200 p-2 rounded transition duration-200">Contact</Link>
      </div>

      {/* Sign In / Register Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/auth/login">
          <button style={{ backgroundColor: '#658147' }} className="px-4 py-2 text-white rounded-lg hover:bg-green-500 transition duration-300">
            Sign In
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
