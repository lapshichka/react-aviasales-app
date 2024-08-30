import React from 'react';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { MainContent } from 'widgets/MainContent';

export default function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
