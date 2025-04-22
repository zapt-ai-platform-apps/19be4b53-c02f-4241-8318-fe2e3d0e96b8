import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ZaptBadge from './components/common/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<JobPage />} />
        </Routes>
      </main>
      <ZaptBadge />
      <Footer />
    </div>
  );
}