import React from 'react';
import { Globe, Lightbulb, Users, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 px-6 bg-white text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-10 text-black">Qui suis je?</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-azul to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="./Image/me.png" 
              onError={(e) => { e.currentTarget.src = "https://picsum.photos/200/200"; }}
              alt="Waldemar d'Orey" 
              className="relative w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          
          <div className="text-left text-gray-700 leading-relaxed space-y-4 md:w-2/3">
            <p>
              Salut tout le monde, moi c’est <strong>Waldemar d’Orey</strong>, 19 ans et originaire d’Angola. Mon parcours scolaire a commencé au Lycée São José do Cluny, où j'ai obtenu mon Baccalauréat général avec une solide base en sciences. Initialement orienté vers l'ingénierie pétrolière en Angola, j'ai saisi l'opportunité d'une <span className="text-azul font-bold">bourse d’excellence</span> pour venir en France et élargir mes horizons.
            </p>
            <p>
              Cette transition internationale m'a appris l'adaptabilité et la persévérance. Après un cours intensif de français et une remise à niveau scientifique à l’Université du Mans, j’ai rejoint l’IUT de Saint-Nazaire. Aujourd'hui, je me spécialise en <strong>Génie Chimique et Génie des Procédés</strong>. Mon ambition est de devenir un ingénieur capable d'optimiser les procédés industriels pour réduire leur empreinte écologique tout en maintenant leur efficacité.
            </p>
            <p>
              En dehors des sciences, je cultive un équilibre de vie grâce au sport (natation, badminton, gym) qui m'apporte discipline et gestion du stress. La musique et la lecture nourrissent ma curiosité intellectuelle et ma créativité.
            </p>
          </div>
        </div>

        {/* Compétences et Langues */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          {/* Langues */}
          <div className="bg-cinza-claro p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-azul mb-4 flex items-center justify-center gap-2">
              <Globe size={24} /> Langues
            </h3>
            <ul className="space-y-3 text-left pl-4">
              <li className="flex justify-between">
                <span className="font-semibold">Portugais</span>
                <span className="text-gray-600">Langue maternelle</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Français</span>
                <span className="text-gray-600">Niveau Avancé (C1)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Anglais</span>
                <span className="text-gray-600">Intermédiaire (B2)</span>
              </li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="bg-cinza-claro p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-azul mb-4 flex items-center justify-center gap-2">
              <Brain size={24} /> Savoir-être
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">Adaptabilité culturelle</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">Rigueur scientifique</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">Travail d'équipe</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">Curiosité</span>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm">Résolution de problèmes</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;