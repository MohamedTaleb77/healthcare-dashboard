// Extensions.js
import React from 'react';
import Layout from '../layout'; // Modifier le chemin d'import
import Link from 'next/link';

const Extensions = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to the Healthcare-Extensions</h1>
        <p>This is the Extensions page content.</p>
        {/* Bouton pour naviguer vers la page Dashboard */}
        <Link href="/Dashboard"> {/* Modifier le href */}
          <span>Go to Dashboard</span>
        </Link>
        {/* Bouton pour naviguer vers la page Analytics */}
        <Link href="/Analytics"> {/* Laisser le href tel quel */}
          <span>Go to Analytics</span>
        </Link>
      </div>
    </Layout>
  );
};

export default Extensions;
