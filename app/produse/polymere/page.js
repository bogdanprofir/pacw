"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PolymerFlocculationAgents() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/polymer-flocculants-from-vta-optimum-support-for-wastewater-treatment.png?h=9e075f6c&itok=SIMGkx_p"
          alt="Agenți de floculare polimerică"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Agenți de floculare polimerică
          </h1>
          <p className="text-xl md:text-2xl">
            Suport optim pentru tratarea apelor uzate chimice și industriale
          </p>
        </div>
      </motion.section>
      
      {/* PRODUCT OVERVIEW SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Pentru suport optim al tratamentului apelor uzate chimice și industriale, VTA asigură flocularea optimă pentru fiecare formă specifică de impuritate și locație, fie în sectorul municipal, fie în cel industrial.
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
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Caracteristici</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>
            Produse sub formă de pulbere cu sarcini cationice, anionice sau neionice
          </li>
          <li>
            Produse lichide cu sarcini cationice, anionice sau neionice
          </li>
        </ul>
      </motion.section>
      
      {/* COMPARISON IMAGE & ADVANTAGES SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full h-80  overflow-hidden">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-08/VTA_Klaeranlage_2.jpg.webp?itok=mf46D1Zl"
            alt="Comparatie polymeri"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-[#0B5079] mb-4">Polimeri</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Complet biocompatibile</li>
            <li>Disponibile în diferite densități de sarcină și greutăți moleculare</li>
            <li>Disponibile în structuri variate (liniară, parțial sau complet reticulată)</li>
            <li>Adaptate cerințelor tale</li>
            <li>Consultanță individuală de la experții VTA</li>
            <li>Formarea unui floc stabil pentru toate unitățile de deshidratare</li>
          </ul>
        </div>
      </motion.section>
      
      {/* POSSIBLE COMBINATION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Text on Left */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Combinație posibilă</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sisteme de dozare și dizolvare de la Eurodos. Sistemele de dozare și dizolvare de înaltă performanță de la Eurodos sunt prima alegere pentru pregătirea și aplicarea soluțiilor polimerice. Răspunsul nostru la fiecare solicitare este rapid și direct, creând soluții individuale și complete, adaptate special cerințelor clienților. Timpuri scurte de implementare garantează disponibilitate rapidă și pregătire pentru utilizare.
            </p>
          </div>
          {/* Image on Right */}
          <div className="relative md:w-1/2 h-80 ">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/vta-eurodos-dosierbox.jpg.webp?itok=0ium2gnP"
              alt="Eurodos Dosierbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
