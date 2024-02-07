import React from 'react';
import Link from 'next/link';
import styles from '@/app/globals.css';

export default function Home() {
  return (
    <div>
      <header>healthcare-dashboard</header>
      {/* Boutons stylisés */}
      <div className={styles.button-container}>
        <Link href="/dashboard">
          <button className={styles.button}>Dashboard</button>
        </Link>
        <Link href="/analytics">
          <button className={styles.button}>Analytics</button>
        </Link>
        <Link href="/extensions">
          <button className={styles.button}>Extensions</button>
        </Link>
      </div>
    </div>
  );
}
