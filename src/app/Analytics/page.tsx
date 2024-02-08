import React from 'react';
import Layout from '../layout'; // Modifier le chemin d'import
import Link from 'next/link';

const Analytics = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to the Healthcare-Analytics</h1>
        <p>This is the Analytics page content.</p>
        {/* Bouton pour naviguer vers la page Dashboard */}
        <Link href="/Dashboard"> {/* Modifier le href */}
          <span>Go to Dashboard</span>
        </Link>
        {/* Bouton pour naviguer vers la page Extensions */}
        <Link href="/Extensions"> {/* Modifier le href */}
          <span>Go to Extensions</span>
        </Link>
      </div>
    </Layout>
  );
};

export default Analytics;
