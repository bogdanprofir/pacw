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

export default function VtaDosingStation() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-dosierstation_.png?h=9e075f6c&itok=ljExnRDV"
          alt="Stație de dozare VTA"
          fill
          className="object-contain"
        />
      </motion.section>

      {/* TITLE SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            Stație de dozare VTA
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Stații de precipitare Eurodos: Soluția completă economică.
          </p>
        </div>
      </motion.section>

      {/* DESCRIPTION / ADVANTAGES SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Flexibilitatea este punctul nostru forte. Fiecare stație de dozare este fabricată exact conform specificațiilor dumneavoastră și la un raport preț-performanță imbatabil.
            </li>
            <li>
              Stațiile de precipitare Eurodos, ca soluție completă economică.
            </li>
            <li>
              Dimensionate exact conform cerințelor dumneavoastră.
            </li>
            <li>
              Versiune cu capcane pentru murdărie, conexiuni de clătire, bypass de siguranță și etanșare cu diafragmă.
            </li>
            <li>
              Opțional, cu interfață electrică pentru control automatizat al întregului sistem.
            </li>
            <li>
              Potrivită pentru instalare atât în interior, cât și în exterior.
            </li>
            <li>
              Pompe, supape, fitinguri, senzori și materiale de asamblare de la producători de top.
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
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/U1BjXCvkStA"
            title="Video Stație de dozare VTA"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
