"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variant for scroll effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function EurodosCustomisedDosing() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/eurodos_logo_neu.png?h=b0da823c&itok=swsd5_0f"
          alt="Eurodos - Dozare Personalizată"
          fill
          className="object-contain"
        />
      </motion.section>

      {/* TITLE & DESCRIPTION SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            Eurodos – Dozare Personalizată
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Competențele de bază ale Eurodos constau în stații de epurare complet automate pentru polielectroliti, 
            precum și rezervoare de stocare și sisteme de dozare pentru precipitanți. Sistemele noastre reprezintă 
            ultimele inovații tehnologice.
          </p>
        </div>
      </motion.section>

      {/* CHARACTERISTICS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto">
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>
              Sistemele noastre tehnic sofisticate se caracterizează prin cea mai înaltă calitate, făcându-le deosebit de puternice, precise, eficiente, fiabile și durabile.
            </li>
            <li>
              Soluții complete personalizate, adaptate nevoilor dumneavoastră.
            </li>
            <li>
              Timpuri scurte de realizare garantează disponibilitate rapidă.
            </li>
            <li>
              Ne ocupăm de fiecare solicitare într-un mod flexibil și simplu.
            </li>
            <li>
              Ușurință garantată în utilizare.
            </li>
            <li>
              Calitatea superioară a tuturor componentelor utilizate.
            </li>
            <li>
              Manuale de operare de primă clasă.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl font-bold text-[#0B5079]">
            Tehnologia de dozare este specialitatea noastră.
          </h2>
          <p className="mt-2 text-xl text-gray-700">
            Cele mai înalte expertize și cea mai bună calitate sunt afirmația noastră.
          </p>
        </div>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Xx60-YAVttM"
            title="Video Tehnologie de dozare"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
