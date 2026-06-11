import React from 'react';
import Sidebar from '../components/shared/Sidebar';
import TopNavbar from '../components/shared/TopNavbar';

export default function MainLayout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen bg-background">
        <TopNavbar title={title} />
        <div className="flex-1 bg-background">
          {children}
        </div>
      </main>
    </div>
  );
}