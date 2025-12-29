import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 px-4 bg-cinza-claro">
      <h2 className="text-3xl font-bold mb-10 text-center text-black">Contactez moi</h2>
      
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        
        {/* Email Card */}
        <div className="w-80 p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 group hover:bg-white/30">
          <a 
            href="mailto:waldemar.d-orey@etu.univ-nantes.fr?subject=Contact%20depuis%20portfolio" 
            className="text-center w-full"
          >
            <div className="text-azul text-4xl mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 flex justify-center">
              <Mail size={48} />
            </div>
            <h3 className="text-lg font-bold mb-2">Adresse e-mail</h3>
            <span className="text-sm text-gray-800 break-words hover:text-azul transition-colors">
              waldemar.d-orey@etu.univ-nantes.fr
            </span>
          </a>
        </div>

        {/* Phone Card */}
        <div className="w-80 p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 group hover:bg-white/30">
          <div className="text-azul text-4xl mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 flex justify-center">
            <Phone size={48} />
          </div>
          <h3 className="text-lg font-bold mb-2">Appelez moi</h3>
          <span className="text-base text-gray-800 font-semibold">
            +33 633-894-725
          </span>
        </div>

        {/* Address Card */}
        <div className="w-80 p-6 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 shadow-xl flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 group hover:bg-white/30">
          <a 
            href="https://maps.app.goo.gl/ioGiSnubag4V3UTj8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center w-full"
          >
            <div className="text-azul text-4xl mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 flex justify-center">
              <MapPin size={48} />
            </div>
            <h3 className="text-lg font-bold mb-2">Adresse</h3>
            <p className="text-sm text-gray-800 hover:text-azul transition-colors">
              60 RUE MICHEL ANGE,<br/>
              Saint-Nazaire, 44600,<br/>
              France
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;