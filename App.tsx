import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;