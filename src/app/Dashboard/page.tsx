// Dashboard.js
import React from 'react';
import Layout from '../layout'; // Modifier le chemin d'import
import Link from 'next/link';

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to the Healthcare-Dashboard</h1>
        <p>This is the Dashboard page content.</p>
        {/* Bouton pour naviguer vers la page Extensions */}
        <Link href="/Extensions"> {/* Modifier le href */}
          <span>Go to Extensions</span>
        </Link>
        {/* Bouton pour naviguer vers la page Analytics */}
        <Link href="/Analytics"> {/* Laisser le href tel quel */}
          <span>Go to Analytics</span>
        </Link>
      </div>
    </Layout>
  );
};

export default Dashboard;
