"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Framer Motion animation variant
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function VtaStorageTank() {
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
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-lagertank-neu.png?h=9e075f6c&itok=3dqZCxZ3"
          alt="Rezervor de stocare VTA"
          fill
          className="object-cover"
        />
      </motion.section>

      {/* CARACTERISTICI TEHNICE */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-6">
          Caracteristici tehnice
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 max-w-3xl mx-auto">
          <li>
            Control PLC pentru dozare optimizată din punct de vedere al costurilor (opțional)
          </li>
          <li>
            Planificare conform standardelor și reglementărilor în vigoare, inclusiv rapoarte de acceptare
          </li>
          <li>Pompe de la producători de top</li>
          <li>
            Containere rotunde cu pereți dubli, realizate din PE-100, cu o capacitate de până la 50 m³
          </li>
          <li>Realizate exact conform dorințelor dumneavoastră</li>
          <li>Echipamente de siguranță și tehnologie de măsurare</li>
        </ul>
      </motion.section>

      {/* A doua IMAGINE */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2024-09/lagertank-quer.jpg.webp?itok=wDHX9HLt"
            alt="Imagine rezervor de stocare VTA"
            fill
            className="object-contain"
          />
        </div>
      </motion.section>

      {/* AVANTAJELE STAȚIILOR NOASTRE DE STOCARE */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-6">
          Avantajele stațiilor noastre de stocare
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 max-w-3xl mx-auto">
          <li>
            Containere rotunde cu pereți dubli, realizate din PE-100, cu o capacitate de până la 50 de metri cubi
          </li>
          <li>Dimensionate exact conform cerințelor clienților</li>
          <li>
            Control PLC pentru dozare optimizată din punct de vedere al costurilor (opțional)
          </li>
          <li>
            Proiectare și fabricație efectuate cu avizul specialiștilor privind conformitatea cu legislația apei și aprobarea de tip
          </li>
          <li>
            Toate echipamentele de siguranță conform WHG (protecție împotriva suprasarcinii și monitorizare a scurgerilor pentru rezervoare, pompe și linii de dozare), inclusiv valvă de protecție pentru sifon
          </li>
          <li>
            Pompe de la producători de top (Grundfos, Prominent etc.)
          </li>
        </ul>
      </motion.section>
    </div>
  );
}
