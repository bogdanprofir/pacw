"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation variant for scroll-in effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function VtaGsd() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-gsd_bg.jpg?h=9e075f6c&itok=nul6DhI4"
          alt="VTA GSD"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA GSD</h1>
          <p className="text-xl md:text-2xl">
            Costuri reduse datorită tratării îmbunătățite a nămolului de canalizare și a unui proces de digestie stabil.
          </p>
        </div>
      </motion.section>

      {/* SECTION 2 – ORIGINALUL: CU ULTRASUNETE */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">
          Originalul. Cu ultrasunete.
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4 text-center">
          Tratamentul optim al nămolului de canalizare, funcționarea stabilă a digestiei și reducerea costurilor – aceasta este oferta disintegrației cu flux invers (GSD) cu ultrasunete, un proces patentat de VTA Technologie GmbH.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Permițând ca substanțele organice legate în nămolul de canalizare să fie disponibile pentru degradarea biologică ulterioară (anaerobă sau aerobă).
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
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/pe9qCwocJvk"
            title="Video VTA GSD"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* SECTION 4 – AVANTAJE */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          VTA GSD
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-6">
          Tratamentul optim al nămolului de canalizare, funcționarea stabilă a digestiei și reducerea costurilor: aceasta este oferta disintegrației cu flux invers.
        </p>
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-04/VTA_Klaergas.jpg.webp?itok=uly6cubd"
            alt="VTA GSD – Imagine"
            fill
            className="object-contain"
          />
        </div>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Până la 30% mai mult biogaz: Valorificarea energiei din nămol duce la producția suplimentară de biogaz, convertibilă în electricitate și căldură.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Până la 20% mai puțin polimer: Reducerea semnificativă a necesarului de agenți de floculare.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Până la 20% mai puțin nămol: Reducerea volumului de nămol, economisind costuri de eliminare.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Fără spumare în digestor: Distrugerea bacteriilor filamentare previne spumarea.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Până la 15% capacitate suplimentară: Creșterea capacității de deshidratare a sistemului existent.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Perioadă scurtă de recuperare: Sistemul GSD se amortizează în doar 3 ani în condiții favorabile.
          </li>
        </ul>
      </motion.section>

      {/* FINAL SECTION: IMAGE ON LEFT, TEXT ON RIGHT */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Image on Left */}
          <div className="relative md:w-1/2 h-80 ">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/gsd-ultraschall-desintegration.png.webp?itok=BKD7J1uf"
              alt="Disintegrare ultrasonică VTA"
              fill
              className="object-contain"
            />
          </div>
          {/* Text on Right */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
              Disintegrare ultrasonică VTA
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Modul de acțiune al disintegrației cu flux invers în două etape: omogenizare și disintegrarea celulelor.
            </p>
          </div>
        </div>
      </motion.section>

      {/* LAST SECTION: 3 COLUMNS */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full h-80  mb-6">
          <Image
            src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/Wirkungsweise-der-Gegenstrom-Desintegration_en_1.png.webp?itok=wzm0kZAr"
            alt="Mod de acțiune"
            fill
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Provocarea */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Provocarea</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Digestie ineficientă: Studiile internaționale arată că 50% dintre stațiile de digestie funcționează sub standard.
            </p>
          </div>
          {/* Column 2: Soluția noastră */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Soluția noastră</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Disintegrarea cu ultrasunete cu flux invers: Celulele sunt descompuse, permițând creșterea cantității de gaz produs și producerea de energie electrică cu până la 30%.
            </p>
          </div>
          {/* Column 3: Rezultatul */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Rezultatul</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Economii de costuri prin creșterea producției de gaz și energie; stabilizarea și optimizarea procesului de digestie; reducerea consumului de nămol și polimer.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
