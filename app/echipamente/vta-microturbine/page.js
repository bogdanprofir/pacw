"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variant for scroll-in effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Arrow icon for bullet points
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

export default function VtaMicroTurbine() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION – only background image */}
      <motion.section
        className="relative w-full h-96 md:h-[600px] overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-microturbine-querschnitt.jpg?h=9e075f6c&itok=JuJBX2so"
          alt="VTA MicroTurbine"
          fill
          className="object-cover"
        />
        {/* Optional: remove overlay since text is separate */}
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
            VTA MicroTurbine
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Energie din gazul de digestie: curată, eficientă, cu întreținere redusă.
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
            Utilizarea economică și ecologică a gazului de canalizare: Cu MicroTurbine, VTA revoluționează generarea de electricitate și căldură în stațiile de epurare. Sistemul este curat, cu costuri reduse și întreținere minimă, cu emisii extrem de scăzute. Zgomotul este redus, fără vibrații și insensibil la variațiile calității gazului.
          </p>
          <p>
            Tehnologia cu rulmenți de aer fără întreținere – fără lubrifianți sau lichid de răcire – reprezintă punctul de referință. Turbinele sunt disponibile în diferite dimensiuni și se potrivesc stațiilor de epurare de orice mărime.
          </p>
          <p>
            Cerințele reduse de întreținere, emisiile extrem de scăzute și sensibilitatea redusă la variațiile calității gazului sunt avantaje esențiale în comparație cu stațiile termice de tip bloc.
          </p>
          <p>
            MicroTurbine pot fi integrate fără probleme în operațiunile existente și pot fi instalate atât în interior, cât și în exterior. Sistemele sunt compacte, testate și complet fiabile.
          </p>
        </div>
      </motion.section>

      {/* GSD SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-04/VTA_GSD_image.jpg.webp?itok=S3GkMRoC"
            alt="Imagine GSD"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            GSD: Cerințe reduse de întreținere, emisii extrem de scăzute de gaze de evacuare și zgomot, și sensibilitate redusă la variațiile calității gazului – acestea sunt avantajele esențiale ale MicroTurbine.
          </p>
        </div>
      </motion.section>

      {/* ADVANTAGES SECTION */}
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
          {[
            "Practic fără întreținere datorită rulmenților de aer",
            "Fără costuri de forță de muncă, intervale de service ridicate (8.000 de ore)",
            "Fără lubrifianți, fără lichid de răcire",
            "Costuri de întreținere extrem de scăzute",
            "Emisii de evacuare extrem de scăzute (NOx < 15 ppm)",
            "Zgomot redus, fără vibrații",
            "Design compact, ușor",
            "Comportament excelent la sarcini parțiale de la 0 la 100%",
            "Poate fi operată în izolare (surse de energie de urgență)",
            "Livrare la cheie dintr-o singură sursă"
          ].map((advantage, index) => (
            <li key={index} className="flex items-center">
              <ArrowIcon />
              {advantage}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* INNOVATIVE TECHNOLOGY SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          TEHNOLOGIE INOVATOARE
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Cu module în clase de putere de la 30 kWel până la 200 kWel, unitățile inovatoare de la producătorul Capstone sunt potrivite pentru stații de epurare de orice dimensiune.
            În funcție de sistem (proces de combustie continuă), MicroTurbine pot face față excelent gazelor regenerabile precum gazul de digestie, biogazul sau gazele de la depozitele de deșeuri, iar comportamentul lor la sarcini parțiale este impresionant.
          </p>
          <p>
            Eficiențe generale de până la 85% se obțin atunci când sunt utilizate în cogenerare (producție combinată de căldură și electricitate).
          </p>
          <p>
            MicroTurbine pot fi integrate fără dificultate în operațiunile existente și pot fi instalate atât în interior, cât și în exterior.
            Unitățile au fost testate în practică și sunt complet fiabile.
          </p>
          <p>
            Generatorul funcționează la aceeași viteză ca turbina (până la 96.000 rpm), deoarece magnetul permanent se află direct pe arborele de transmisie.
          </p>
          <p>
            Curentul alternativ de înaltă frecvență (1.600 Hz) generat astfel este redresat în electronica de putere a turbinei și apoi inversat în curent alternativ (50 Hz / 400 V).
          </p>
          <p>
            Nu este necesar niciun control autonom al frecvenței; frecvența dorită este furnizată de rețeaua electrică, asigurând că turbina funcționează sincron cu rețeaua.
          </p>
        </div>
        <div className="relative mt-6 h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/widget/public/2020-04/VTA_MicroTurbine.jpg.webp?itok=N9Pw8W3i"
            alt="VTA MicroTurbine"
            fill
            className="object-contain"
          />
        </div>
      </motion.section>

      {/* A CLEAN MACHINE SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Text on Left */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-[#0B5079] mb-4">
              O mașină curată
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ieșirea turbinei este controlată prin viteză – datorită "cutiei de viteze electronice". Aceasta înseamnă că se pierde practic nicio eficiență chiar și la sarcini parțiale.
              Aceasta este protecția climatului: datorită funcționalității tehnice, MicroTurbine atinge valori extrem de scăzute de emisii (NOx &lt; 15 ppm, bazate pe 15% O2) care nu pot fi atinse de nicio tehnologie comparabilă.
            </p>
          </div>
          {/* Image on Right */}
          <div className="relative md:w-1/2 h-80 bg-gray-200">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2020-04/Grafik_Mikroturbine_0.png.webp?itok=0WB_hgWN"
              alt="Grafik MicroTurbine"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>

      {/* FUNCTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Funcționare
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            MicroTurbine a fost dezvoltată pe baza industriei de turboîncărcătoare și a aviației. Similar cu sistemele auxiliare din avioane, electricitatea este generată de un generator cu magneți permanenți care rulează rapid, conectat fără a necesita o cutie de viteze mecanice.
          </p>
          <p>
            Rulmenții de aer fără întreținere înseamnă că utilizarea lubrifianților este complet inutilă.
          </p>
          <p>
            Aerul de combustie intră în MicroTurbine prin generator, se răcește și este comprimat la aproximativ 4 bar în compresor.
          </p>
          <p>
            Combustibilul este adăugat în camera de combustie și ars, iar gazele fierbinți rezultate sunt expandate în turbină pentru a acționa asupra compresorului și generatorului.
          </p>
          <p>
            Datorită tehnologiei recuperatoare (preîncălzirea aerului de către gazele de evacuare fierbinți), se pot obține eficiențe electrice de 26–33%.
          </p>
          <p>
            Magnetul permanent este amplasat direct pe arborele de transmisie, astfel încât generatorul funcționează la aceeași viteză ca turbina (până la 96.000 rpm).
          </p>
          <p>
            Curentul alternativ de înaltă frecvență (1.600 Hz) generat astfel este redresat în electronica de putere și apoi inversat în curent alternativ (50 Hz / 400 V).
          </p>
          <p>
            Nu este necesar niciun control autonom al frecvenței; frecvența dorită este furnizată de rețeaua electrică, asigurând funcționarea sincronă a turbinei.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
