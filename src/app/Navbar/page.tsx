// components/NavBar.tsx
import React from 'react';
import Link from 'next/link';
import Layout from '../layout';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 w-full p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <div id="dateTime" className="text-white"></div>
          <Link href="/">
            <span className="text-white text-lg font-semibold">Healthcare Dashboard</span>
          </Link>
        </div>
        <div className="flex items-center">
          {/* Liens de navigation */}
          <div>
            <Link href="/Dashboard">
              <span className="text-white mr-4">Dashboard</span>
            </Link>
            <Link href="/Analytics">
              <span className="text-white mr-4">Analytics</span>
            </Link>
            <Link href="/Extensions">
              <span className="text-white">Extensions</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
