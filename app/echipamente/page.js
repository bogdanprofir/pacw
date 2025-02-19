"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Scroll animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Equipment cards constant array
const equipmentCards = [
  {
    id: 1,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-gsd_bg.jpg.webp?itok=bT7g9iB7",
    title: "VTA GSD",
    description: "Tratare optimizată a nămolului de epurare, proces stabil de digestie și reducere a costurilor.",
    href: "/echipamente/vta-gsd", // Replace with actual link
  },
  {
    id: 2,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-dosiertechnik-close.jpg.webp?itok=tst5b43_",
    title: "Tehnologia de dozare VTA",
    description: "Soluții de dozare durabile și eficiente.",
    href: "/echipamente/vta-dosing-technology", // Replace with actual link
  },
  {
    id: 3,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-lagertank.jpg.webp?itok=I46hSfWD",
    title: "Rezervor stocare VTA",
    description: "Rezervorul de stocare face manipularea precipitanților și a altor substanțe chimice mai sigură, mai precisă și mai convenabilă.",
    href: "/echipamente/vta-storage-tank", // Replace with actual link
  },
  {
    id: 4,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-erdtank_bg.jpg.webp?itok=DFzE1msm",
    title: "Rezervor subteran VTA",
    description: "Rezervorul nostru subteran VTA oferă opțiunea de depozitare și dozare în siguranță a produselor lichide în subteran.",
    href: "/echipamente/vta-underground-tank", // Replace with actual link
  },
  {
    id: 5,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-eurodos-dosierbox.jpg.webp?itok=cRCJs_SV",
    title: " Stație Soluție Polimer VTA ",
    description: "Stațiile de dizolvare a polimerilor VTA garantează o eficiență excelentă a sistemului și un consum extrem de economic.",
    href: "/echipamente/vta-polymer-solution-station", // Replace with actual link
  },
  {
    id: 6,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-dosierstation_.png.webp?itok=6YY_p8RE",
    title: "Stație de dozare VTA",
    description: "Stații de precipitare Eurodos ca soluție completă economică.",
    href: "/echipamente/vta-dosing-station", // Replace with actual link
  },
  {
    id: 7,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-microturbine-querschnitt.jpg.webp?itok=nNYL4vYX",
    title: "VTA Microturbine",
    description: "Cu MicroTurbine, VTA revoluționează generarea de energie electrică și căldură în stațiile de epurare.",
    href: "/echipamente/vta-microturbine", // Replace with actual link
  },
  {
    id: 8,
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-06/vta-mudinator.jpg.webp?itok=NV5XvH4o",
    title: "VTA Mudinator",
    description: "Reducerea costurilor cu VTA mudinator® prin reducerea semnificativă a cantității de nămol care trebuie eliminat.",
    href: "/echipamente/vta-mudinator", // Replace with actual link
  },
  
];

export default function EquipmentMainPage() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <motion.section
  className="relative w-full h-96 md:h-[600px] overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariant}
>
  <video
    className="w-full h-full object-cover"
    src="https://vta.cc/sites/default/files/2024-07/anlagenbau-690x610.mp4"
    autoPlay
    muted
    loop
  />
  <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Instalații VTA
    </h1>
    <p className="text-xl md:text-2xl">
      Tehnologie personalizată pentru tratarea apelor uzate
    </p>
    <p className="mt-2 text-base md:text-lg">
      Experții noștri vă însoțesc de la început până la sfârșit și chiar mai departe!
    </p>
  </div>
</motion.section>

      {/* INTRODUCTORY TEXT SECTION */}
      <motion.section
  className="py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariant}
>
  <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
    <p>
      Descoperiți o dimensiune complet nouă în tehnologia apei și ingineria instalațiilor.
      Partenerul dumneavoastră pentru soluții complete în domeniul tratamentului apelor uzate.
    </p>
    <p>
      Datorită experienței noastre îndelungate în tratarea apelor uzate, realizăm analize temeinice.
    </p>
    <p>
      Ca producător în ingineria instalațiilor, oferim clienților noștri o soluție completă dintr-o singură sursă.
    </p>
    <p>
      Producția noastră internă ridicată ne permite să oferim soluții flexibile de cea mai înaltă calitate.
    </p>
    <p>
      Personalul nostru specializat dispune de expertiza necesară pentru a gestiona sarcinile profesionist.
    </p>
    <p>
      Realizăm proiecte cu precizie, folosind utilaje moderne.
    </p>
    <p>
      Serviciul nostru 24/7 garantează răspunsuri rapide și suport continuu.
    </p>
  </div>
</motion.section>


      {/* VIDEO + TEXT SECTION */}
      <motion.section
  className="py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariant}
>
  <div className="space-y-6">
    <div
      className="relative"
      style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/z5qr8gnV2Bg"
        title="Video Proces Echipamente"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <p className="text-lg text-gray-700 leading-relaxed">
      De la analizarea apei uzate brute până la punerea în funcțiune și instruirea de către ingineri experimentați – sprijinim întregul proces. 
      Expertiza noastră constă în producția de componente pentru soluții de dozare, rezervoare din plastic, conducte și multe altele. 
      Cu vizualizări 3D și planificare detaliată, ne asigurăm că procesele de tratare a apei uzate funcționează eficient și fiabil. 
      Spațiile noastre generoase de producție ne permit să fabricăm componente de înaltă calitate, care sunt instalate la fața locului de echipa noastră experimentată de asamblare. 
      După punerea în funcțiune cu succes, predăm sistemul clientului și oferim un serviciu post-vânzare complet pentru suport pe termen lung.
    </p>
  </div>
</motion.section>


      {/* CUSTOMIZED SOLUTIONS SECTION */}
      <motion.section
  className="py-12"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={sectionVariant}
>
  <h2 className="text-3xl font-bold text-[#0B5079] mb-4 text-center">
    Soluții personalizate
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
    Aproape fiecare unitate de producție generează ape uzate cu compoziții diferite.
    Aceasta înseamnă că cerințele pentru o stație de epurare sunt întotdeauna diferite și necesită metode variate de tratare.
    VTA utilizează expertiza sa aprofundată pentru a planifica și realiza stația de epurare potrivită nevoilor dumneavoastră.
  </p>
  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 max-w-2xl mx-auto">
    <li>Cernere</li>
    <li>Sedimentare</li>
    <li>Precipitație / Despicare</li>
    <li>Neutralizare</li>
    <li>Flotare</li>
    <li>Curățare biologică</li>
    <li>Decalcifiere</li>
    <li>Deshidratare</li>
    <li>Floculare</li>
  </ul>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div className="relative w-full h-64 bg-gray-200">
      <Image
        src="https://vta.cc/sites/default/files/styles/gallery/public/2024-06/anlagenbau-loesungen2.jpg?h=6ffbc7a9&itok=J_3OA-Ep"
        alt="Imagine soluție 1"
        fill
        className="object-cover"
      />
    </div>
    <div className="relative w-full h-64 bg-gray-200">
      <Image
        src="https://vta.cc/sites/default/files/styles/gallery/public/2024-06/anlagenbau-loesungen1.jpg?h=6ffbc7a9&itok=T0z-jrQ_"
        alt="Imagine soluție 2"
        fill
        className="object-cover"
      />
    </div>
  </div>
  <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
    Gama noastră de servicii include construcția de conducte, stații de pompare, fabricarea rezervoarelor, sisteme de ecranare și flotare, stații de dozare, reactoare/floculatoare, unități de deshidratare a nămolului, instalații de suflare și aerare, tratamentul aerului evacuat (scrubbere, biofiltre, cărbune activ etc.), construcția de tablouri de distribuție și programare PLC.
  </p>
  <div className="relative mt-6" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/G1b3XdAyalo"
      title="Video Servicii Echipamente"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</motion.section>


      {/* SOLUTION CARDS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
        Tehnologie de ultimă oră
        </h2>
        <p className="text-center text-lg text-gray-700 leading-relaxed mb-8">
          Proiectăm și producem sisteme de tratare a apei de înaltă performanță, încorporând cele mai moderne
          tehnologii, personalizabile la orice dimensiune necesară și realizate la cele mai riguroase standarde de calitate.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {equipmentCards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              className="bg-white rounded-lg overflow-hidden shadow transition duration-300 cursor-pointer"
            >
              <Link href={card.href}>
                <div className="relative w-full h-56 bg-gray-200">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-[#0B5079] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
