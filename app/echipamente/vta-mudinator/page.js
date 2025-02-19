"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Framer Motion animation variant for scroll effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Arrow icon for bullet lists
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

export default function VtaMudinator() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* HERO SECTION */}
      <motion.section
        className="relative w-full h-96 bg-gray-200 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2020-04/VTA_mudinator_0.jpg?h=221e9d68&itok=nJbZV4vz"
          alt="VTA mudinator®"
          fill
          className="object-contain"
        />
      </motion.section>

      {/* TITLE & TAGLINE SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            VTA mudinator®
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Tratament cu ultrasunete și precondiționare pentru optimizarea ecologică a deshidratării nămolului.
          </p>
        </div>
      </motion.section>

      {/* DESCRIPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Schimbarea structurii nămolului cu un aport energetic redus poate fi obținută utilizând VTA mudinator®.
          </p>
          <p>
            Tratamentul cu ultrasunete realizat cu VTA mudinator® poate modifica structura nămolului, îmbunătățind astfel efectul polimerului.
          </p>
          <p>
            O balansare mai eficientă a sarcinii cu polimerul produce un floc mai stabil, capabil să elibereze apa mai rapid, astfel încât se obține un rezultat optimizat în deshidratare.
          </p>
          <p>
            În combinație cu agentul de condiționare a nămolului VTA Biocitran®, apar efecte sinergice în timpul tratamentului cu ultrasunete. Nămolul tratat poate fi deshidratat mult mai eficient, iar consumul de polimer poate fi redus.
          </p>
        </div>
      </motion.section>

      {/* IMAGE WITH CAPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-06/VTA_mudinator_einbau_1.jpg.webp?itok=1LriTxKV"
            alt="Instalare VTA mudinator®"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-700">
            Schimbarea structurii nămolului cu un aport energetic redus poate fi obținută utilizând VTA mudinator®.
          </p>
        </div>
      </motion.section>

      {/* ADVANTAGES SECTION 1 */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Avantaje
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
          <li className="flex items-center">
            <ArrowIcon />
            Tratament cu ultrasunete: Nămolul este tratat cu ultrasunete chiar înainte de adăugarea polimerului.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Balans de sarcină îmbunătățit: Modificarea structurii nămolului produce un balans mai bun cu polimerul ulterior.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Deshidratare îmbunătățită: Rezultatul este un floc stabil la forfecare, ceea ce conduce la o deshidratare mai bună.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Consum foarte redus de energie: Nu are loc disintegrarea completă, deci consumul de energie este minim.
          </li>
        </ul>
      </motion.section>

      {/* INNOVATIVE DESCRIPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            VTA mudinator® inovator se bazează pe mulți ani de experiență cu ultrasunete în disintegrarea cu flux invers (GSD) patentată.
          </p>
          <p>
            VTA mudinator® utilizează ultrasunetele pentru a trata nămolul. Spre deosebire de disintegrare, structurile celulare din nămol nu sunt rupte, ci doar modificate pentru a produce un balans optim de sarcină cu polimerul ulterior adăugat.
          </p>
        </div>
      </motion.section>

      {/* ADVANTAGES SECTION 2 */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Avantaje suplimentare
        </h2>
        <ul className="space-y-4 text-lg text-gray-700 max-w-3xl mx-auto">
          <li className="flex items-center">
            <ArrowIcon />
            Îmbunătățirea deshidratării datorită eliberării apei interstițiale.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Rezultatul deshidratării este crescut (până la 5 puncte procentuale).
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Necesitatea de polimer este redusă semnificativ.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Încărcarea inversă asupra ecosistemului instalației este redusă, în combinație cu VTA Biocitran®.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Costuri mai reduse datorită reducerii semnificative a volumului de nămol ce necesită eliminare.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Optimizare în adăugarea agenților de condiționare.
          </li>
          <li className="flex items-center">
            <ArrowIcon />
            Floc stabil la forfecare.
          </li>
        </ul>
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/5RhUq_sWGm0"
            title="Video VTA mudinator®"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* SOLUTION SECTION – 3 COLUMNS */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Soluție
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coloana 1: Provocarea */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Provocarea</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Deficiența în deshidratare: Nămolul netratat reține cantități mari de apă, iar uscarea devine ineficientă.
            </p>
          </div>
          {/* Coloana 2: Soluția noastră */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Soluția noastră</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              VTA mudinator® schimbă structura nămolului prin tratament cu ultrasunete înainte de deshidratare, permițând un balans optim de sarcină cu polimerul ulterior adăugat.
            </p>
          </div>
          {/* Coloana 3: Rezultatul */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Rezultatul</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Îmbunătățirea deshidratării cu până la 5 puncte procentuale, economii de costuri prin reducerea volumului de nămol și optimizarea adăugării agenților de condiționare și a polimerului.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
