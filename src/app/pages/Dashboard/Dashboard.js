import React from 'react';
import Layout from './components/Layout';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <h1>Dashboard</h1>
        <p>This is the Dashboard page content.</p>
        {/* Bouton pour naviguer vers la page Analytics */}
        <Link href="/analytics">
          <a>Go to Analytics</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Dashboard;
