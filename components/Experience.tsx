import React from 'react';
import Accordion from './Accordion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="xp" className="py-20 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-black">Expériences professionnelles</h2>

      <div className="space-y-4">
        <Accordion title="Employé polyvalent - Chez Carrefour" defaultOpen={true}>
          <div className="text-left">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 border-b border-gray-200 pb-2">
              <h3 className="text-xl font-bold text-azul flex items-center gap-2">
                <Briefcase size={20}/> Carrefour Saint-Nazaire
              </h3>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                Juin 2025 – Août 2025
              </span>
            </div>
            
            <p className="text-gray-600 italic mb-4">
              Expérience saisonnière nécessitant autonomie et réactivité dans un environnement dynamique.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-azul mt-1.5 font-bold">•</span>
                <span>
                  <strong>Relation Client :</strong> Accueil, conseil et orientation des clients dans le magasin, gestion des demandes avec courtoisie.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-azul mt-1.5 font-bold">•</span>
                <span>
                  <strong>Logistique & Gestion :</strong> Mise en rayon efficace (produits frais et secs), rotation des stocks (FIFO) et contrôle rigoureux des dates de péremption pour limiter le gaspillage.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-azul mt-1.5 font-bold">•</span>
                <span>
                  <strong>Organisation :</strong> Maintien de la propreté et du rangement des rayons pour assurer la sécurité et l'attractivité du magasin.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-azul mt-1.5 font-bold">•</span>
                <span>
                  <strong>Savoir-être :</strong> Grande adaptabilité aux horaires et polyvalence selon les besoins de l’équipe (caisse, rayon, réserve).
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Compétences développées</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">Gestion du stress</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">Travail en équipe</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">Autonomie</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded border border-blue-100">Rigueur</span>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;