import React from 'react';
import { Header } from 'widgets/Header';
import { MainContent } from 'widgets/MainContent';
import { Footer } from 'widgets/Footer';

export default function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
