"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// A simple scroll animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Arrow icon for lists
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

export default function VtaBiosolitPhosphatePrecipitation() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <motion.section
        className="relative w-full h-96 bg-gray-200 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biosolit-the-perfect-all-rounder-in-wastewater-treatment.jpg?h=9e075f6c&itok=tFjfu629"
          alt="VTA Biosolit®"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biosolit®</h1>
          <p className="text-xl md:text-2xl">
            Soluția inteligentă all-in-one pentru epurarea apelor uzate
          </p>
        </div>
      </motion.section>

      {/* OVERVIEW SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Descrierea produsului</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biosolit® impresionează prin efectul său de durată, fiind economic și ecologic. Precipitația fosfaților, legarea sulfului, formarea unui floc compact și încărcarea nămolului – toate acestea sunt posibile cu VTA Biosolit®, soluția perfectă all-in-one pentru epurarea apelor uzate.
        </p>
      </motion.section>

      {/* CHARACTERISTICS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">Caracteristici</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          VTA Biosolit® conține o sursă externă de carbon ușor disponibilă, crescând performanța denitrificării. Bacteriile filamentare sunt controlate eficient, iar substanțele odorifere (compuși de sulf) sunt legate de produs.
        </p>
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">Videoclip Informativ</h2>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/OS-Qvf-8grI"
            title="VTA Biosolit® Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* DETAILED ADVANTAGES SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">Avantaje Detaliate</h2>
        <div className="space-y-4">
          <div className="flex items-center text-lg text-gray-700">
            <ArrowIcon />
            <span>
              Floculare – îmbunătățește sedimentabilitatea nămolului, formând un floc compact prin optimizarea echilibrului var-acid carbonic.
            </span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <ArrowIcon />
            <span>
              Precipitație – asigură o precipitație rapidă și fiabilă a fosfaților, mărind capacitatea de tampon a apei.
            </span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <ArrowIcon />
            <span>
              Bioactivator – stimulează activitatea biocenozei, îmbunătățind degradarea COD, amoniac și fosfat, și stabilizând nitrificarea.
            </span>
          </div>
          <div className="flex items-center text-lg text-gray-700">
            <ArrowIcon />
            <span>
              Legarea sulfului – controlează eficient mirosurile neplăcute și asigură formarea unui floc compact.
            </span>
          </div>
        </div>
      </motion.section>

      {/* FINAL SECTION: THE PERFECT ALLROUNDER */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          SOLUȚIA PERFECTĂ – „7 ALL IN ONE GO”
        </h2>
        <ul className="space-y-2 text-lg text-gray-700 text-center">
          {[
            "Precipitație de fosfați",
            "Floc compact și stabil",
            "Încărcare de nămol",
            "Rată de sedimentare crescută",
            "Capacitate de tampon crescută",
            "Stabilizare pH",
            "Legarea sulfului"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center justify-center">
              <ArrowIcon />
              {item}
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
