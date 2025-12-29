import React from 'react';
import Accordion from './Accordion';
import { FlaskConical, Settings, Calculator } from 'lucide-react';

// Composant pour afficher le contenu spécifique d'un TP (Images + Textes personnalisés)
interface TpDetailProps {
  objectifs: string;
  action: string; // Peut contenir du HTML
  conclusion: string;
}

const TpDetail: React.FC<TpDetailProps> = ({ objectifs, action, conclusion }) => {
  const randomId1 = Math.floor(Math.random() * 1000);
  const randomId2 = Math.floor(Math.random() * 1000);

  return (
    <div className="bg-white p-4 rounded-b-lg border-x border-b border-gray-200">
      {/* Section Images */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="w-full md:w-1/2 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-sm relative group">
          <img 
            src={`https://picsum.photos/400/300?random=${randomId1}`} 
            alt="Illustration TP" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-sm relative group">
          <img 
            src={`https://picsum.photos/400/300?random=${randomId2}`} 
            alt="Illustration TP" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Section Texte */}
      <div className="text-left space-y-5">
        <div>
          <h4 className="text-lg font-bold text-azul mb-2 border-b border-gray-100 pb-1">Objectifs</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {objectifs}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-azul mb-2 border-b border-gray-100 pb-1">Ce qu’on a fait</h4>
          <div className="text-gray-600 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: action }} />
        </div>

        <div>
          <h4 className="text-lg font-bold text-azul mb-2 border-b border-gray-100 pb-1">Conclusion</h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            {conclusion}
          </p>
        </div>
      </div>
    </div>
  );
};

const Academics: React.FC = () => {
  const subButtonClass = "bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm md:text-base border border-gray-300";

  return (
    <section id="tps" className="py-20 px-4 bg-cinza-claro text-center">
      <h2 className="text-3xl font-bold mb-6 text-black">Travaux Pratiques & Projets</h2>
      
      {/* Résumé des compétences techniques */}
      <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <FlaskConical className="text-azul mb-2" size={32} />
          <h3 className="font-bold text-gray-800">Génie Chimique</h3>
          <p className="text-xs text-gray-500 mt-1">Réacteurs, Cinétique, Thermodynamique, Saponification</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <Settings className="text-azul mb-2" size={32} />
          <h3 className="font-bold text-gray-800">Procédés & Séparation</h3>
          <p className="text-xs text-gray-500 mt-1">Colonnes à garnissage, Absorption, Distillation, Filtration</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center">
          <Calculator className="text-azul mb-2" size={32} />
          <h3 className="font-bold text-gray-800">Outils & Analyse</h3>
          <p className="text-xs text-gray-500 mt-1">Matlab, LabVIEW, Chromatographie (CPG, HPLC), Spectro</p>
        </div>
      </div>

      {/* Main Semester 3 Accordion */}
      <Accordion title="Semestre 3 : Approfondissement Technique" defaultOpen={true} className="mb-8">
        <div className="space-y-6">
          <p className="text-gray-600 mb-6 italic text-sm">
            Ce semestre a marqué un tournant vers des applications industrielles concrètes, combinant théorie avancée et manipulation d'unités pilotes.
          </p>
          
          {/* ================= CHIMIE ANALYTIQUE ================= */}
          <Accordion title="Chimie Analytique" buttonClass="bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              
              <Accordion title="Méthodes chromatographiques" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="L’objectif de ce TP était de nous familiariser avec les principales méthodes chromatographiques (CCM, colonne, CPG) utilisées pour le contrôle de pureté et la purification des composés organiques."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Réalisation d'une <strong>Chromatographie sur Couche Mince (CCM)</strong> pour trouver le meilleur éluant (éther de pétrole vs acétone) afin de séparer le ferrocène et l’acétylferrocène.</li>
                      <li>Mise en œuvre d'une <strong>chromatographie sur colonne</strong> d'alumine pour purifier le mélange réactionnel.</li>
                      <li>Utilisation de la <strong>Chromatographie en Phase Gazeuse (CPG)</strong> pour identifier les constituants de mélanges inconnus (hydrocarbures et alcools) en analysant leurs temps de rétention.</li>
                    </ul>
                  `}
                  conclusion="Ce TP nous a permis de manipuler trois techniques complémentaires. Nous avons observé l’influence de la polarité et de la volatilité sur la séparation et réussi à identifier la composition du mélange inconnu (Éthanol, Cyclohexane, n-Heptane)."
                />
              </Accordion>
              
              <Accordion title="Cinétique enzymatique de l’invertase" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Étudier la cinétique de l’invertase (B-fructosidase), déterminer ses constantes cinétiques (Vm et Km) et évaluer l’influence des paramètres physico-chimiques (pH, température)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Réalisation d'une gamme étalon pour doser le sucre inverti formé au DNS (réactif coloré).</li>
                      <li>Détermination des vitesses initiales (Vi) à différentes concentrations de substrat.</li>
                      <li>Tracé de la représentation de <strong>Lineweaver-Burk</strong> (1/Vi en fonction de 1/[S]) pour calculer Vmax (1,45 × 10⁻⁴ mol·L⁻¹·min⁻¹) et Km (0,021 mol·L⁻¹).</li>
                      <li>Tests d'activité à différents pH (optimum trouvé à 4,8) et étude de la dénaturation thermique à 55°C.</li>
                    </ul>
                  `}
                  conclusion="Nous avons caractérisé complètement l'enzyme. Les résultats confirment que l'invertase a un pH optimal acide et qu'elle est thermosensible (perte de 60% d'activité après 20 min à 55°C)."
                />
              </Accordion>
              
              <Accordion title="Composition en Acides Gras des Huiles" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Déterminer la composition précise en acides gras de deux huiles alimentaires (colza et olive) par chromatographie en phase gazeuse (CPG)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Transformation des triglycérides des huiles en <strong>esters méthyliques</strong> plus volatils par réaction de transestérification (NaOH/MeOH + BF3).</li>
                      <li>Extraction des esters dans l'heptane.</li>
                      <li>Injection en CPG et comparaison des temps de rétention obtenus avec ceux de standards connus (Palmitate, Stéarate, Oléate, Linoléate).</li>
                      <li>Calcul des pourcentages relatifs par intégration des aires des pics.</li>
                    </ul>
                  `}
                  conclusion="L'analyse a révélé que l'acide oléique (C18:1) est majoritaire dans les deux huiles (environ 62-66%), ce qui est cohérent avec les étiquetages commerciaux et la théorie des huiles végétales."
                />
              </Accordion>
              
              <Accordion title="Analyse HPLC : Dosage acides (vins)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Évaluer la composition chimique de vins (rouge, blanc) et jus de raisin en dosant les acides organiques par HPLC et en déterminant l'acidité totale."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Utilisation de la <strong>HPLC en phase inversée (C18)</strong> avec détection UV à 210 nm.</li>
                      <li>Construction de courbes d'étalonnage pour les acides tartrique, malique, lactique, acétique et succinique.</li>
                      <li>Mesure du pH et titrage de l'acidité totale par la soude (NaOH).</li>
                      <li>Comparaison des profils chromatographiques des différents échantillons.</li>
                    </ul>
                  `}
                  conclusion="Nous avons constaté que le vin rouge est le plus acide, riche en acide tartrique. L'absence notable d'acide lactique dans nos échantillons indique que la fermentation malolactique n'avait pas eu lieu."
                />
              </Accordion>
              
              <Accordion title="Gel filtration et dosage de vitamine C" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Séparer des molécules selon leur taille par chromatographie d'exclusion et doser la vitamine C par deux méthodes (chimique et enzymatique)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Séparation sur gel <strong>Séphadex G25</strong> d'un mélange Protéines / Lactose / NaCl. Calcul des volumes d'élution et fraction de pores accessibles.</li>
                      <li>Dosage chimique de la vitamine C par titrage oxydimétrique au DCPIP (décoloration du bleu à l'incolore).</li>
                      <li>Dosage enzymatique spécifique utilisant l'ascorbate oxydase et le MTT.</li>
                    </ul>
                  `}
                  conclusion="La chromatographie a permis une séparation efficace conforme à la taille des molécules. Les dosages de Vitamine C (~0,072 g/L) sont cohérents et valident la méthode enzymatique pour des milieux complexes."
                />
              </Accordion>
              
              <Accordion title="Spectrométrie Infrarouge" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Identifier les bandes d'absorption caractéristiques des oligosaccharides (fructose, glucose, saccharose) et tenter une analyse quantitative par ATR-IR."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Acquisition des spectres <strong>ATR</strong> de sucres solides purs pour identifier les fonctions chimiques (bandes C-O, O-H).</li>
                      <li>Préparation de solutions aqueuses et analyse spectrale avec correction du signal de l'eau.</li>
                      <li>Tentative de construction de droites d'étalonnage (Absorbance vs Concentration) pour des mélanges de sucres.</li>
                    </ul>
                  `}
                  conclusion="L'ATR-IR s'est révélée très efficace pour l'identification qualitative rapide des sucres. Bien que la quantification soit plus délicate, nous avons observé une relation linéaire prometteuse pour les concentrations élevées."
                />
              </Accordion>

            </div>
          </Accordion>

          {/* ================= MICROBIOLOGIE ================= */}
          <Accordion title="Microbiologie" buttonClass="bg-green-600 hover:bg-green-700 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              <Accordion title="TP1 : Découverte et Techniques (7h)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Se familiariser avec le monde microbien : techniques de culture, facteurs de croissance, dénombrement et identification, tout en respectant strictement les règles d'hygiène et de sécurité (asepsie)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li><strong>Séance 1 :</strong> Coulage de géloses PCA, observation de bouillons (E. coli, S. aureus) et repiquage sur milieux spécifiques (Chapman, Viande-Levure) pour tester la température, la pression osmotique et l'O2. Méthode des cadrans pour l'isolement.</li>
                      <li>Dénombrement de la flore du lait (cru, pasteurisé) et yaourt par dilutions en cascade (10<sup>0</sup> à 10<sup>-6</sup>).</li>
                      <li>Tests d'hygiène : empreintes de doigts, cheveux sur gélose, pétrifilm sur surfaces et utilisation d'un ATPmètre pour contrôler les paillasses.</li>
                      <li><strong>Séance 2 :</strong> Lecture des résultats, calcul des dénombrements, tests biochimiques (oxydase, catalase) et observations microscopiques (état frais, coloration de Gram).</li>
                    </ul>
                  `}
                  conclusion="Ce TP nous a permis de maîtriser la manipulation aseptique, de différencier les bactéries Gram+ (S. aureus) et Gram- (E. coli), de comprendre l'influence du milieu sur la croissance et de quantifier la charge microbienne."
                />
              </Accordion>

              <Accordion title="TP2 : Analyse Bactériologique (3 séances)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Réaliser une analyse bactériologique complète d'une eau de consommation selon les normes en vigueur et identifier une souche d'entérobactérie via une galerie biochimique standardisée."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li><strong>Analyse de l'eau :</strong> Recherche des germes témoins de contamination fécale sur 3 séances.
                        <ul class="list-disc list-inside pl-4 text-xs">
                          <li>J1 : Ensemencement flore revivifiable (20°C/37°C), Coliformes totaux (Bouillon lactosé BCP), Streptocoques fécaux (Rothe) et Anaérobies sulfito-réducteurs (après choc thermique 80°C).</li>
                          <li>J2 : Repiquage des positifs sur milieux sélectifs (Schubert à 44°C, Litsky) et lecture des géloses.</li>
                          <li>J3 : Test de l'Indole (Kovacs) pour E. coli, lecture finale et calcul du NPP (Nombre le Plus Probable).</li>
                        </ul>
                      </li>
                      <li><strong>Identification :</strong> Utilisation d'une galerie <strong>API 20E</strong>. Préparation de l'inoculum et lecture des 20 tests biochimiques pour déterminer le profil de la bactérie.</li>
                    </ul>
                  `}
                  conclusion="Nous avons pu statuer sur la potabilité de l'eau en comparant nos résultats (NPP) aux normes. La galerie API nous a permis d'identifier précisément l'espèce bactérienne inconnue grâce à son profil biochimique."
                />
              </Accordion>
            </div>
          </Accordion>

          {/* ================= CHIMIE THERMO ================= */}
          <Accordion title="Chimie Thermodynamique" buttonClass="bg-red-500 hover:bg-red-600 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              <Accordion title="Détermination constante d’équilibre (Potentiométrie)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Déterminer la constante de formation du complexe diamine argent Ag(NH3)2+ par potentiométrie et vérifier la loi de Nernst à l'aide d'une pile de concentration."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Vérification préalable des titres des solutions (dosage de l'ammoniac par HCl et des ions Ag+ par la méthode de Mohr).</li>
                      <li>Construction d'une pile de concentration avec deux électrodes d'argent et vérification de la loi de Nernst par dilutions successives.</li>
                      <li>Suivi potentiométrique de la formation du complexe par ajout progressif d'ammoniac dans la solution d'ions argent.</li>
                    </ul>
                  `}
                  conclusion="Les mesures de potentiel nous ont permis de calculer les concentrations à l'équilibre. Nous avons ainsi déterminé la constante de stabilité du complexe et l'enthalpie libre standard de réaction."
                />
              </Accordion>
              
              <Accordion title="Étude d’un équilibre de solubilité (Ca(OH)2)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Déterminer le produit de solubilité (Ks) de l'hydroxyde de calcium à différentes températures afin d'en déduire les grandeurs thermodynamiques (Enthalpie et Entropie de réaction)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Préparation de solutions saturées de Ca(OH)2 à température ambiante, 50°C, 70°C et 90°C.</li>
                      <li>Filtration et dosage des ions hydroxydes (par HCl) et calcium (par EDTA) pour chaque température.</li>
                      <li>Calcul de la solubilité et du Ks pour chaque point.</li>
                      <li>Exploitation graphique selon la loi de Van't Hoff (ln Ks en fonction de 1/T).</li>
                    </ul>
                  `}
                  conclusion="Nous avons observé l'évolution de la solubilité avec la température. Le tracé de Van't Hoff nous a permis d'extraire l'enthalpie et l'entropie standards de la réaction de dissolution."
                />
              </Accordion>
            </div>
          </Accordion>

          {/* ================= INIT REGULATION ================= */}
          <Accordion title="Initiation à la Régulation" buttonClass="bg-purple-600 hover:bg-purple-700 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              <Accordion title="Régulateur PID (Simulation LabVIEW)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Étudier l'influence des paramètres Gr (Gain), Ti (Intégrale) et Td (Dérivée) sur la précision et le temps de réponse d'un procédé. Mettre au point les réglages d'un régulateur PID par la méthode des approches successives via un simulateur."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li><strong>Étude en Boucle Ouverte :</strong> Analyse de la réaction du procédé (1er ordre) face à des perturbations de charge (+/- 10%) et détermination de la plage de variation.</li>
                      <li><strong>Pilotage Manuel vs Automatique :</strong> Tentative de maintien de la consigne manuellement face aux perturbations, puis comparaison avec l'action du régulateur.</li>
                      <li><strong>Influence des paramètres :</strong> Analyse de l'impact de <em>Gr</em> (action P) sur le dépassement et l'erreur statique, puis de <em>Ti</em> (action I) sur la précision.</li>
                      <li><strong>Réglage par approches successives :</strong> Méthodologie appliquée sur un système du 2nd ordre : réglage de P pour un dépassement de ~10%, ajout de D pour réduire le dépassement à ~3%, et ajustement de I pour la précision finale.</li>
                    </ul>
                  `}
                  conclusion="La simulation a mis en évidence qu'un gain trop fort déstabilise le système, que l'action intégrale est indispensable pour annuler l'erreur statique, et que la dérivée permet d'anticiper. La méthode des approches successives a permis d'obtenir un compromis optimal entre rapidité, stabilité et précision."
                />
              </Accordion>
            </div>
          </Accordion>

          {/* ================= REACTEURS ================= */}
          <Accordion title="Réacteurs" buttonClass="bg-orange-500 hover:bg-orange-600 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              <Accordion title="Synthèse de l’acide benzoïque" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Produire environ 10 moles d'acide benzoïque par réaction de précipitation et maîtriser les opérations de filtration industrielle et de calculs de rendements."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Dissolution de 1,6 kg de <strong>Benzoate de Sodium</strong> dans un réacteur agité avec de l'eau.</li>
                      <li>Préparation d'une solution diluée d'acide sulfurique.</li>
                      <li>Réalisation de la réaction de synthèse : <em>2 C6H5CO2Na + H2SO4 → 2 C6H5CO2H + Na2SO4</em>.</li>
                      <li><strong>Filtration</strong> de la suspension obtenue sur filtre-presse pour séparer le gâteau d'acide benzoïque du filtrat.</li>
                      <li>Essorage à l'air comprimé, séchage à l'étuve et calculs du bilan massique et du rendement.</li>
                    </ul>
                  `}
                  conclusion="La manipulation a permis d'illustrer concrètement la production d'un solide par voie chimique. L'utilisation du filtre-presse a mis en évidence l'importance de la séparation liquide-solide dans les procédés industriels."
                />
              </Accordion>
              
              <Accordion title="Etude d'un pilote d'agitation monophasique" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Caractériser le fonctionnement d'une cuve agitée, déterminer l'influence du type de mobile (Axial vs Radial) et des chicanes sur la puissance consommée, le vortex et le temps de mélange."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Comparaison de deux mobiles : <strong>Turbine Rushton</strong> (flux radial) et <strong>Hélice Marine</strong> (flux axial).</li>
                      <li>Mesure du couple en fonction de la vitesse de rotation pour déterminer le Nombre de Puissance (<em>Np</em>) en régime turbulent.</li>
                      <li>Observation et mesure de la hauteur du <strong>vortex</strong> en l'absence de chicanes.</li>
                      <li>Mesure du <strong>temps de mélange</strong> (tm) par conductimétrie suite à l'injection d'un traceur salin (NaCl).</li>
                    </ul>
                  `}
                  conclusion="Nous avons vérifié que la Turbine Rushton consomme plus de puissance (Np élevé) que l'hélice. L'ajout de chicanes est indispensable pour briser le vortex et transformer le mouvement tangentiel en turbulence efficace pour le mélange."
                />
              </Accordion>
              
              <Accordion title="Etude pratique réacteur fermé (Saponification)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Étudier cinétiquement la réaction de saponification de l'acétate d'éthyle par la soude en réacteur fermé (Batch) et valider le modèle d'ordre 2 par suivi conductimétrique."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Réaction : <em>AcOEt + NaOH → EtOH + NaOAc</em>.</li>
                      <li>Utilisation d'un réacteur parfaitement agité discontinu avec un excès de soude (ou proportions stœchiométriques).</li>
                      <li>Suivi de la conductivité de la solution au cours du temps. La baisse de conductivité est liée à la consommation des ions OH- (très conducteurs) et formation d'ions Acétate (moins conducteurs).</li>
                      <li>Calcul de l'avancement X(t) à partir de la conductivité et comparaison avec le modèle théorique cinétique.</li>
                    </ul>
                  `}
                  conclusion="La méthode conductimétrique s'est avérée précise pour suivre cette réaction rapide. Les résultats expérimentaux ont confirmé la cinétique globale d'ordre 2 de la saponification."
                />
              </Accordion>
              
              <Accordion title="Etude pratique réacteurs continus (RCPA vs Piston)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Comparer les performances (taux de conversion) de deux types de réacteurs ouverts : le Réacteur Continu Parfaitement Agité (RCPA) et le Réacteur Piston (Tubulaire)."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li>Mise en œuvre de la même réaction de saponification en régime permanent.</li>
                      <li>Alimentation continue des réactifs dans un RCPA mécanique et un Tube rempli de billes (Piston).</li>
                      <li>Mesure de la conductivité en sortie pour déterminer la conversion finale.</li>
                      <li>Comparaison des conversions obtenues pour un même temps de passage (τ) avec les modèles idéaux.</li>
                    </ul>
                  `}
                  conclusion="Pour un même temps de séjour, le réacteur Piston a montré une conversion supérieure au RCPA, se rapprochant du comportement du réacteur fermé, ce qui est conforme à la théorie des réacteurs idéaux."
                />
              </Accordion>
            </div>
          </Accordion>

          {/* ================= TECHNO SEPARATION ================= */}
          <Accordion title="Technologies de Séparation" buttonClass="bg-teal-600 hover:bg-teal-700 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
              <Accordion title="Absorption Gaz - Liquide" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Étudier l'hydrodynamique d'une colonne à garnissage (pertes de charge, engorgement) et réaliser l'absorption de l'ammoniac (NH3) contenu dans l'air par de l'eau en contre-courant. Déterminer l'efficacité de la colonne via les concepts de NUT et HUT."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li><strong>Hydrodynamique :</strong> Mesure des pertes de charge en fonction des débits de gaz et de liquide pour identifier les points de charge et d'engorgement du garnissage (Anneaux Raschig).</li>
                      <li><strong>Absorption :</strong> Mise en contact air+NH3 et eau à contre-courant. Suivi de l'établissement du régime permanent.</li>
                      <li><strong>Analyses :</strong> Titrage de l'ammoniac dans le liquide de sortie. Analyse du gaz de sortie par piégeage dans des barboteurs acides (HCl) et dosage en retour.</li>
                      <li><strong>Calculs :</strong> Bilan matière, détermination du rendement, calcul du Nombre d'Unités de Transfert (NUT) et de la Hauteur d'une Unité de Transfert (HUT).</li>
                    </ul>
                  `}
                  conclusion="Ce TP a permis de dimensionner l'efficacité d'une colonne à garnissage. Nous avons observé que l'efficacité du transfert dépend fortement de l'hydrodynamique et de la surface de contact offerte par le garnissage."
                />
              </Accordion>
              
              <Accordion title="Traitement de l'eau (Coagulation-Floculation-Décantation)" buttonClass={subButtonClass}>
                <TpDetail 
                  objectifs="Optimiser le processus de clarification d'une eau chargée (modèle amidon) par coagulation-floculation. Déterminer les conditions optimales par Jar-Test et les appliquer sur un pilote industriel continu."
                  action={`
                    <ul class="list-disc list-inside space-y-1">
                      <li><strong>Jar-Tests (Essais Batch) :</strong> Comparaison de l'efficacité de coagulants ($Al_2(SO_4)_3$ vs $FeCl_3$) et détermination de la dose optimale pour annuler le potentiel Zêta.</li>
                      <li><strong>Floculation :</strong> Ajout de soude pour ajuster le pH et favoriser la formation de flocs d'hydroxydes décantables.</li>
                      <li><strong>Analyse :</strong> Suivi de la turbidité et de la vitesse de décantation (Courbes de Kynch, Loi de Stokes).</li>
                      <li><strong>Pilote Continu (MP 50) :</strong> Transposition des paramètres (débits réactifs) pour traiter un flux continu d'eau polluée.</li>
                    </ul>
                  `}
                  conclusion="L'étude a montré que la neutralisation des charges colloïdales est cruciale pour l'agrégation. Le passage du laboratoire (Jar-Test) au pilote industriel a validé la méthodologie de dimensionnement des stations de traitement d'eau."
                />
              </Accordion>
            </div>
          </Accordion>

           {/* ================= SAÉS ================= */}
           <Accordion title="SAÉs (Situation d'Apprentissage et d'Évaluation)" buttonClass="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md">
            <div className="flex flex-col gap-3 p-2">
                
                {/* SAÉ 3.1 : Réacteur & Absorption */}
                <Accordion title="SAÉ 3.1 : Conduite et analyse critique (Réacteur & Absorption)" buttonClass={subButtonClass}>
                  <TpDetail 
                    objectifs="Conduire et analyser de manière critique deux unités de production représentatives du Génie Chimique : un Réacteur industriel et une Colonne d'Absorption. L'objectif est de modéliser le fonctionnement, de proposer des protocoles de conduite et de confronter la théorie (dimensionnement) à la pratique."
                    action={`
                      <div class="space-y-4">
                        <div>
                          <h5 class="font-bold text-indigo-700">Partie 1 : Réacteur (A → B)</h5>
                          <ul class="list-disc list-inside space-y-1">
                            <li><strong>Modélisation Continue Isotherme :</strong> Établissement des équations de bilan matière et thermique pour un réacteur continu parfaitement agité (1,5 m³) avec une réaction de 1er ordre. Tracé du taux de conversion en fonction de la température (20-120°C).</li>
                            <li><strong>Modélisation Continue Adiabatique :</strong> Identification du point de fonctionnement (Conversion, Température) par résolution graphique des bilans matière et enthalpique (avec T entrée = 38°C).</li>
                            <li><strong>Modélisation Batch Adiabatique :</strong> Adaptation des équations au fonctionnement discontinu et analyse de la température finale à conversion totale pour évaluer le risque d'emballement thermique.</li>
                          </ul>
                        </div>
                        <div>
                          <h5 class="font-bold text-indigo-700">Partie 2 : Absorption (Ammoniac)</h5>
                          <ul class="list-disc list-inside space-y-1">
                            <li><strong>Conduite :</strong> Réalisation d'un schéma PID détaillé (Instrumentation/Robinetterie) et rédaction d'un protocole de démarrage/arrêt pour opérateur.</li>
                            <li><strong>Dimensionnement Théorique :</strong> Calcul du débit liquide minimum ($L_{min}$) et du nombre d'étages théoriques pour abattre 99% de NH3.</li>
                            <li><strong>Dimensionnement Hydrodynamique :</strong> Détermination du diamètre de colonne (Diagramme d'Eckert) et des pertes de charge (Corrélation de Leva).</li>
                            <li><strong>Hauteur de Garnissage :</strong> Calcul de la hauteur théorique via la méthode NUT/HUT (Nombre et Hauteur d'Unités de Transfert) et comparaison avec la hauteur réelle du pilote.</li>
                          </ul>
                        </div>
                      </div>
                    `}
                    conclusion="Cette SAÉ nous a permis de passer du stade expérimental au stade ingénierie. Nous avons mis en évidence les divergences entre le dimensionnement théorique idéal et la réalité du pilote industriel, soulignant l'importance des facteurs de sécurité et de l'hydrodynamique réelle."
                  />
                </Accordion>

                 {/* SAÉ 3.2 : Estérification */}
                 <Accordion title="SAÉ 3.2 : Étude de réactions d’estérification (Cinétique)" buttonClass={subButtonClass}>
                  <TpDetail 
                    objectifs="Étudier la cinétique et la thermodynamique d'une réaction d'estérification (Alcool + Acide Carboxylique ⇌ Ester + Eau) en réacteur fermé. L'objectif est d'identifier les conditions opératoires (Température, Catalyseur, Excès) permettant d'optimiser la vitesse de réaction et le rendement final."
                    action={`
                      <ul class="list-disc list-inside space-y-1">
                        <li><strong>Plan d'expérience :</strong> Étude de l'influence de trois paramètres clés :
                          <ul class="list-disc list-inside pl-4 text-xs">
                             <li>Présence de catalyseur (Acide Sulfurique $H_2SO_4$).</li>
                             <li>Température (Ambiante vs Chauffage au bain-marie).</li>
                             <li>Proportions initiales (Mélange équimolaire vs Excès d'un réactif).</li>
                          </ul>
                        </li>
                        <li><strong>Suivi Cinétique :</strong> Réalisation de la réaction en tubes à essais avec trempe chimique (eau glacée) à différents instants pour figer l'équilibre.</li>
                        <li><strong>Dosage :</strong> Titrage de l'acide acétique restant par la soude (NaOH) en présence de phénolphtaléine pour déterminer l'avancement au cours du temps.</li>
                        <li><strong>Modélisation :</strong> Détermination des constantes de vitesse ($k_1$ réaction directe, $k_2$ réaction inverse), de la constante d'équilibre ($K_c$) et du taux de conversion à l'équilibre.</li>
                      </ul>
                    `}
                    conclusion="L'étude a confirmé que le catalyseur et la température accélèrent la cinétique sans modifier l'état final, tandis que l'excès de réactif permet de déplacer l'équilibre (Loi de Le Chatelier) et d'augmenter le rendement de production de l'ester."
                  />
                </Accordion>

              </div>
          </Accordion>

        </div>
      </Accordion>
    </section>
  );
};

export default Academics;