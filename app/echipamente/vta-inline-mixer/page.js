"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variant for scroll effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Arrow icon component for bullet lists
const ArrowIcon = () => (
  <svg
    className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function VtaInlineMixer() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-10/vta-inline-mischer.jpg?h=9e075f6c&itok=sSybQTwy"
          alt="VTA Inline Mixer"
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
            VTA Inline Mixer
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Tehnologie inovatoare cu eficiență economică
          </p>
          <p className="mt-2 text-lg text-gray-700">
            Eficiență, flexibilitate și durabilitate într-un pachet complet.
          </p>
        </div>
      </motion.section>

      {/* SISTEM DESCRIPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Oferă un amestec ideal pentru o varietate de floculanți (coagulante) și aditivi floculanți (polimeri) în fluxul de ape uzate sau în nămolul excedentar.
          </p>
          <p>
            VTA Inline Mixer combină tehnologia inovatoare cu eficiența economică. Echipat cu motoare asincrone puternice și o gamă variabilă de viteză de la 150 la 1.500 rpm, oferă o flexibilitate ridicată și costuri operaționale reduse.
          </p>
        </div>
      </motion.section>
      <motion.section
  className="py-12"
  initial="hidden"
  animate="visible"
  variants={sectionVariant}
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-6">
      Soluție completă pentru energie mare de amestecare
    </h2>
    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
      <ul className="list-disc pl-6 space-y-3">
        <li>Motoare cu convertor de frecvență atașat</li>
        <li>Elemente de interfață și control</li>
        <li>Capabilă să inverseze direcția de rotație pentru a preveni formarea de fire</li>
      </ul>
      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>Montare intermediară la flanșă disponibilă din PE sau oțel inoxidabil</li>
        <li>Diametre diferite disponibile, standard DN80 sau DN100</li>
      </ul>
      <ul className="list-disc pl-6 space-y-3 mt-6">
        <li>Inspecție, întreținere și înlocuire ușoară a agitatoarelor</li>
        <li>Motorul nu trebuie demontat pentru a schimba agitatoarele</li>
      </ul>
      <p className="mt-6">
        Designul este disponibil atât din plastic, cât și din oțel inoxidabil și garantează o durată lungă de viață. Pachetul complet include motoare, convertoare de frecvență și elemente de control versatile, care permit integrarea ușoară în sistemele existente. Designul prietenos cu întreținerea face inspecția și întreținerea o joacă de copil – fără a demonta mixerul.
      </p>
    </div>
  </div>
  <div className="py-8">
    <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/fdM3g_QNFqk"
        title="Tehnologia de dozare este specialitatea noastră. Cele mai înalte expertize și cea mai bună calitate sunt afirmația noastră."
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</motion.section>


      {/* MINI SECTION 1: Local Video on Left, List on Right */}
      <motion.section
        className="py-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        {/* Left: Local Video from Public Folder */}
        <div className="relative w-full md:w-1/2 h-64 bg-gray-200">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="/loop_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            crossOrigin="anonymous"
          >
            Browserul dumneavoastră nu suportă elementul video.
          </video>
        </div>
        {/* Right: Advantages list */}
        <div className="w-full md:w-1/2">
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
              <ArrowIcon />
              Instalare simplă
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Poate fi retrofitat în orice conductă existentă
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Secțiuni scurte de amestec necesare
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Gamă largă de reglaj pentru energia necesară amestecării
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Reduce consumul de floculanți și aditivi floculanți
            </li>
          </ul>
        </div>
      </motion.section>

      {/* MINI SECTION 2: Image on Left, Advantages List on Right */}
      <motion.section
        className="py-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 h-64 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/widget/public/2024-12/inline-mischer-cfd-analyse.png.webp?itok=VH5EMQ1Z"
            alt="Analiză CFD Inline Mixer"
            fill
            className="object-contain"
          />
        </div>
        {/* Right: Advantages list for performance */}
        <div className="w-full md:w-1/2">
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li className="flex items-center">
              <ArrowIcon />
              Optimizarea fluxului de amestec
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Omogenitate îmbunătățită a soluției polimerice
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Consum energetic redus pentru amestecare
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Stabilitate sporită a procesului
            </li>
            <li className="flex items-center">
              <ArrowIcon />
              Integrare eficientă în sistemele existente
            </li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
