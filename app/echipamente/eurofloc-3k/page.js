"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variant for scroll-in effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Eurofloc3K() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <motion.section
        className="relative w-full h-96 md:h-[600px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-05/Eurodos_Polymerl%C3%B6sestation_Eurofloc_3K.jpg?h=b0da823c&itok=0ywyW7eC"
          alt="Eurofloc 3K"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* TITLE & SUBTITLE SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            Eurofloc 3K
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Sistem complet automat cu trei camere pentru polielectroliti sub formă de pulbere și/sau lichid.
          </p>
        </div>
      </motion.section>

      {/* SYSTEM DESCRIPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Sistemele 3K constau din trei camere interconectate. Soluția polimerică este pregătită în prima cameră și ajunge în a doua cameră folosind principiul deplasării. În acest timp, soluția se maturizează. Soluția de lucru finală este apoi deplasată în a treia cameră, denumită camera de dozare, de unde poate fi dozată continuu.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Potrivit pentru înălțimi reduse, chiar și pentru sisteme de mari dimensiuni.</li>
            <li>Camerele separate asigură evitarea scurtcircuitării.</li>
            <li>Ușor de utilizat datorită înălțimii reduse.</li>
            <li>Concept dovedit.</li>
          </ul>
        </div>
      </motion.section>

      {/* FLOW DIAGRAM SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-[#0B5079]">Diagramă de flux</h2>
        </div>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/inline-images/Flow_diagram_Eurofloc_3K.jpg"
            alt="Diagramă de flux Eurofloc 3K"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg text-gray-700">
            Pentru informații suplimentare, contactați-ne la:{" "}
            <a
              href="mailto:pacwater@gmail.com"
              className="font-bold text-blue-600 underline"
            >
              pacwater@gmail.com
            </a>
          </p>
        </div>
      </motion.section>

      {/* DETAILS & SPECIAL SERVICES SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-6">
          Detalii, proiectări și servicii speciale
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>
              3 camere interconectate din PP (cameră de pregătire, maturare și cameră de dozare) echipate cu sisteme de agitare electrică și indicatori de nivel.
            </li>
            <li>
              Conexiuni pentru apă: rețele de conducte PVC, linie de apă cu valvă de oprire, reductoare de presiune, valvă solenoid și contor de apă cu contact, conform standardelor producătorului.
            </li>
            <li>
              Mixer cu duză, cu conexiune pentru apă de dizolvare și conexiune suplimentară pentru dozarea polimerului lichid.
            </li>
            <li>
              Panou de control cu PLC și afișaj de operare pentru setări și funcționare.
            </li>
            <li>
              Concentrația soluției este reglabilă liber de la 0,05 la 0,5 % (opțional până la 1 %) la o vâscozitate maximă de 2.500 cP.
            </li>
            <li>
              Timpul de maturare depinde de debitul de trecere.
            </li>
            <li>
              Apă de proces: tehnic pură, minim 3 bar.
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
