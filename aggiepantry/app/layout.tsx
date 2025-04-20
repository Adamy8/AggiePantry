import type { Metadata } from 'next';
import './globals.css';
import Navbar from './navbar/navbar';

export const metadata: Metadata = {
  title: 'The Aggie Pantry',
  description: 'Welcome to The Aggie Pantry!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      
      <head />
      <body className="bg-neutral-100 font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
