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

export default function VtaServicePlantOptimisation() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-service-car.jpg?h=9e075f6c&itok=gBa8wjjf"
          alt="VTA Service & Optimizare Instalații"
          fill
          className="object-cover"
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
            VTA Service & Optimizare Instalații
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Mulți ani de experiență ai specialiștilor noștri de service ajută la reducerea costurilor prin scăderea cerințelor energetice.
          </p>
        </div>
      </motion.section>

      {/* VTA ENERGY & PLANT CHECK SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
            Verificare Energetică & a Instalației VTA
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            În orice stație de epurare, compoziția apelor uzate se poate schimba ca urmare a modificărilor minore ale proceselor de curățare și/sau producție. Acest lucru poate duce la funcționarea neoptimă a instalației sau la costuri suplimentare.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            De aceea, noi la VTA oferim o verificare a instalației:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Testare de proces</li>
            <li>Test de funcționare al sistemului</li>
            <li>Testarea sarcinii hidraulice</li>
            <li>Testarea sarcinii de contaminanți</li>
            <li>Analiza valorilor efective ale procesului și a valorilor limită</li>
            <li>Prezentarea analizei și identificarea potențialelor optimizări</li>
          </ul>
        </div>
      </motion.section>

      {/* RESPONSIVE CARDS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="space-y-8">
          {/* Card 1: Service */}
          <div className="w-full border rounded-lg p-6 shadow-md">
            <div className="relative w-full h-64 bg-gray-200 mb-4">
              <Image
                src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/vta-anlagencheck-service-ma.jpg.webp?itok=zcQXlGOh"
                alt="Service"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Service</h3>
            <p className="text-lg text-gray-700">
              Echipa noastră puternică de service nu inspectează și întreține doar sistemele construite de noi, ci și sistemele existente care nu au fost instalate de VTA la cerere. Datorită unui modem de întreținere la distanță integrat, putem efectua rapid diagnostice și rezolva multe solicitări de service just-in-time.
            </p>
          </div>

          {/* Card 2: Optimizare sistem */}
          <div className="w-full border rounded-lg p-6 shadow-md">
            <div className="relative w-full h-64 bg-gray-200 mb-4">
              <Image
                src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/anlagencheck-servicecheck.jpg.webp?itok=sxkzh1mh"
                alt="Optimizare sistem"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Optimizare sistem</h3>
            <p className="text-lg text-gray-700">
              Indiferent dacă este vorba de sistemul de flotare, filtrare sau unitatea de deshidratare a nămolului, obținem cele mai bune rezultate din fiecare componentă. Mulți ani de experiență ai specialiștilor noștri de service contribuie la reducerea costurilor prin scăderea cerințelor energetice, a consumului de substanțe chimice și/sau a volumului de nămol produs.
            </p>
          </div>

          {/* Card 3: Dimensionare instalație */}
          <div className="w-full border rounded-lg p-6 shadow-md">
            <div className="relative w-full h-64 bg-gray-200 mb-4">
              <Image
                src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/vta-eurodos-dosierbox.jpg.webp?itok=0ium2gnP"
                alt="Dimensionare instalație"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Dimensionare instalație</h3>
            <p className="text-lg text-gray-700">
              Doriți să aflați ce dimensiune a sistemului de dizolvare și a stației de dozare se potrivește cel mai bine cerințelor dumneavoastră? Calculați-o simplu cu instrumentul nostru online practic pentru dimensionarea instalațiilor!
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA BUTTON SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition"
          >
            Contactați-ne
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
