import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Dashboard from '/Users/talebmohamed/Tp_Nextjs/healthcare-dashboard/src/app/pages/Dashboard/Dashboard';
import Analytics from '/Users/talebmohamed/Tp_Nextjs/healthcare-dashboard/src/app/pages/Analytics/Analytics.js';
import Extensions from '/Users/talebmohamed/Tp_Nextjs/healthcare-dashboard/src/app/pages/Extensions/Extensions';
import "../app/globals.css"; 

interface FormData {
  searchQuery: string;
}
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Barre de navigation */}
      <nav className="bg-gray-800 w-full p-4">
        <div className="container mx-auto flex justify-between">
          <div>
            <Link href="/">
              <span className="text-white text-lg font-semibold">Healthcare Dashboard</span>
            </Link>
          </div>
          <div className="flex items-center">
            {/* Liens de navigation */}
            <div>
              <Link href="/dashboard">
                <span className="text-white mr-4">Dashboard</span>
              </Link>
              <Link href="/analytics">
                <span className="text-white mr-4">Analytics</span>
              </Link>
              <Link href="/extensions">
                <span className="text-white">Extensions</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Contenu de la page */}
      <div className="flex flex-col items-center justify-center flex-1">
        <header className="mt-8">Welcome to the Healthcare Dashboard</header>
        {/* Boutons stylisés */}
        <div className="flex flex-col items-center mt-8">
          <div className='buttonPrimary'>
            <Link href="/dashboard">
              <button className="button">Dashboard</button>
            </Link>
          </div>
          <div className='buttonSecondary mt-4'>
            <Link href="/analytics">
              <button className="button">Analytics</button>
            </Link>
          </div>
          <div className='buttonTertiary mt-4'>
            <Link href="/extensions">
              <button className="button">Extensions</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
