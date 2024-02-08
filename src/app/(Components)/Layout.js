import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/Dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li>
            <Link href="/Analytics">
              <a>Analytics</a>
            </Link>
          </li>
          <li>
            <Link href="/Extensions">
              <a>Extensions</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
