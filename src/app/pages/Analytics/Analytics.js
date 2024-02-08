import React from 'react';
import Layout from './components/Layout';
import Link from 'next/link';

const Analytics = () => {
  return (
    <Layout>
      <div>
        <h1>Analytics</h1>
        <p>This is the Analytics page content.</p>
        {/* Bouton pour naviguer vers la page Dashboard */}
        <Link href="/dashboard">
          <a>Go to Dashboard</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Analytics;
