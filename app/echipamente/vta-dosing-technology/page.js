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
      {/* HERO SECTION – only image */}
      <motion.section
        className="relative w-full h-96 md:h-[600px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/eurodos_logo_neu.png?h=b0da823c&itok=swsd5_0f"
          alt="Eurodos - Dozare personalizată"
          fill
          className="object-contain"
        />
        {/* Optional subtle overlay */}
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.3)]"></div>
      </motion.section>

      {/* TITLE SECTION – moved below hero */}
      <motion.section
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            Eurodos - Dozare personalizată
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Tehnologia de dozare este specialitatea noastră.
          </p>
        </div>
      </motion.section>

      {/* PRODUCT DESCRIPTION SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Competențele de bază ale Eurodos constau în stații de epurare complet automate pentru polielectroliti,
            precum și rezervoare de stocare și sisteme de dozare pentru precipitanți. Sistemele noastre reprezintă
            ultimele inovații tehnologice, iar sistemele de dozare sunt deosebit de puternice, precise, eficiente,
            fiabile și durabile.
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
  <li>Soluții complete personalizate, adaptate nevoilor dumneavoastră.</li>
  <li>Timp scurt de implementare garantează disponibilitate rapidă.</li>
  <li>Ne ocupăm de fiecare cerere într-un mod flexibil și simplu.</li>
  <li>Ușurință garantată în utilizare.</li>
  <li>Calitatea superioară a tuturor componentelor folosite.</li>
  <li>Manuale de operare de primă clasă.</li>
</ul>

        </div>
      </motion.section>

      {/* DOSING TECHNOLOGY SPECIALITY SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Tehnologia de dozare este specialitatea noastră.
        </h2>
        <p className="text-xl text-gray-700 text-center mb-6">
          Cele mai înalte expertize și cea mai bună calitate sunt declarația noastră.
        </p>
        <div
          className="relative mt-6"
          style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Xx60-YAVttM"
            title="Video Eurodos"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
