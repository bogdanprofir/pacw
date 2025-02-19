"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function VtaDolomin() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/reliable-odour-control-with-vta-dolomin-in-wastewater-treatment.png?h=9e075f6c&itok=GGWQizvW"
          alt="VTA Dolomin®"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Dolomin®</h1>
          <p className="text-xl md:text-2xl">
            Controlul mirosurilor, preventiv și sigur, pe bază organică
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
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Descrierea produsului</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Dolomin® este un produs special, foarte concentrat și bogat în oxigen, realizat din rocă alpină naturală. Este folosit pentru controlul mirosurilor în sectorul municipal, în comerț, industrie și agricultură.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Controlul mirosurilor pe bază organică, preventiv și sigur – aceasta este esența VTA Dolomin®.
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
          <li>Suprimă procesele de digestie din sistemele de deșeuri și ape uzate.</li>
          <li>
            Previnde formarea H<sub>2</sub>S, mercaptanilor și aminelor, asigurând că mirosurile neplăcute și coroziunea nu apar.
          </li>
          <li>Promovează bioactivitatea în apele uzate și deșeuri.</li>
          <li>
            Conține elemente micro esențiale pentru susținerea microorganismelor din stația de epurare.
          </li>
          <li>Leagă H<sub>2</sub>S, mercaptanii și aminele.</li>
          <li>
            Previnde riscurile pentru sănătate prin minimizarea compușilor toxici (H<sub>2</sub>S).
          </li>
        </ul>
      </motion.section>
      
      {/* IMAGE SECTION (REPLACING VIDEO) */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-06/VTA_Dolomin_image_.jpg.webp?itok=8QvJ5TS2"
            alt="VTA Dolomin – Imagine"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Dolomin</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            VTA Dolomin® conține ingrediente active naturale și elemente micro esențiale pentru procesele biologice.
            <br />
            <strong>Avantaje:</strong>
            <br />
            - Depozitare și dozare ușoară
            <br />
            - Influență pozitivă asupra tratamentului ulterior al apelor uzate
            <br />
            - Efect cu spectru larg împotriva substanțelor care provoacă miros
            <br />
            - Soluție personalizată adaptată la aplicația specifică
            <br />
            - Nici toxic, nici corosiv
            <br />
            - pH neutru, deci nu reprezintă un pericol
          </p>
        </div>
      </motion.section>
      
      {/* AREAS OF APPLICATION SECTION */}
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
            <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Domenii de aplicare</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
              <li>Ape municipale și industriale, apă de proces și de circuit</li>
              <li>Sisteme de canalizare, stații de pompare, rețele de conducte</li>
              <li>Corpuri de apă stagnante și zone de infiltrare</li>
              <li>Tratamentul percolatelor de la depozite de deșeuri</li>
              <li>Tratamentul excretelor lichide</li>
              <li>Tratamentul nămolului</li>
              <li>Compostare</li>
            </ul>
          </div>
          {/* Image on Right */}
          <div className="relative md:w-1/2 h-80 ">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2020-04/VTA_Klaeranlage1.jpg.webp?itok=y8Hxx9Ua"
              alt="Domenii de aplicare"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>
      
      {/* OUR SERVICE SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">Serviciile VTA</h2>
        <ul className="space-y-2 text-lg text-gray-700">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            VTA oferă tehnologie revoluționară de măsurare, reglare și control, adaptată la sarcina de lucru.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Un modul de control automat determină doza în funcție de parametrii de intrare, inclusiv valorile măsurate curente.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Înregistrare și documentare automată a diferitelor măsurători (temperatură, pH, volum, etc.).
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Crearea unui model de dozare individual pe baza analizei sistemului de către specialiști VTA.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Acces rapid, simplu și sigur la datele înregistrate online.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Măsurare continuă a nivelului pentru a reduce sarcina administrativă.
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Gestionarea ușoară a mai multor aplicații de dozare prin interfața programului furnizată.
          </li>
        </ul>
      </motion.section>
      
      {/* FINAL SECTION: Text on Left, Image on Right */}
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
            <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
              Hidrogenul sulfurat (H2S) – Pericolul ascuns
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              În majoritatea cazurilor, acesta este principala cauză a mirosurilor neplăcute din sistemele de canalizare. Este un gaz incolor, inflamabil, cu miros de ouă stricate, extrem de toxic (comparabil cu cianura), periculos chiar și în concentrații scăzute, corosiv – acționează direct asupra țevilor de cupru, precum și indirect după conversia biogenică la acid sulfuric pe componentele din beton – și mai greu decât aerul, acumulându-se în puțuri și canale.
            </p>
          </div>
          {/* Image on Right */}
          <div className="relative md:w-1/2 h-80 ">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2020-04/VTA_Calcoferrit_Kanaldeckel.jpg.webp?itok=6IOVv2nQ"
              alt="H2S – Pericol ascuns"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
