import React from 'react';
import Link from 'next/link';
import NavBar from './Navbar/page';
import Layout from './layout'; // Assurez-vous que le chemin est correct
import "../app/globals.css";

interface FormData {
  searchQuery: string;
}

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col h-screen">
          <div className="container mx-auto flex justify-between">
            <div className="flex items-center">
            </div>
          </div>
        {/* Contenu de la page */}
        <div className="flex flex-col items-center justify-center flex-1">
          <header className="mt-8">Welcome to the Healthcare Dashboard</header>
            </div>
          </div>
    </Layout>
  );
}

export default Home;
