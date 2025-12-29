import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-screen flex flex-col items-center justify-center text-center text-black px-4"
      style={{
        // Using a clear tech/abstract background placeholder
        background: `url('https://picsum.photos/1920/1080?grayscale&blur=2') center/cover no-repeat`,
      }}
    >
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
          Salut, je suis Waldemar D'OREY
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold mb-6 drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] text-azul-dark">
          Futur ingénieur en Génie des Procédés
        </h3>
        <p className="text-lg md:text-xl font-medium mb-8 text-gray-800 leading-relaxed drop-shadow-sm">
          Étudiant passionné par la transformation de la matière, l'énergie et l'environnement. 
          Je cherche à concevoir des solutions industrielles durables et innovantes.
        </p>
        <button 
          onClick={() => document.getElementById('tps')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-azul hover:bg-azul-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Découvrez mes projets académiques
        </button>
      </div>
    </section>
  );
};

export default Hero;