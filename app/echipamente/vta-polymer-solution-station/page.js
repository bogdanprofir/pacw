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

export default function VtaPolymerDissolvingStation() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/vta-eurodos-dosierbox.jpg?h=9e075f6c&itok=ZbXXYTfh"
          alt="VTA Polymer‑Dizolvantă"
          fill
          className="object-contain"
        />
      </motion.section>

      {/* TITLE & DESCRIPTION SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079] mb-4">
            VTA Polymer‑Dizolvantă
          </h1>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Competențele de bază ale Eurodos constau în sisteme complet automate de pregătire și dozare pentru polielectroliti. Cu Eurodos, dvs. setați ritmul. Timpul scurt de livrare este firesc pentru noi. Acest principiu se aplică și sistemelor de dizolvare și stațiilor de dozare, personalizate exact conform nevoilor dumneavoastră.
            </p>
            <p>
              Eficiența excelentă a sistemelor garantează un consum foarte economic.
            </p>
            <p>
              Timpul optim de maturare este garantat.
            </p>
            <p>
              Cu sau fără PLC dedicat.
            </p>
            <p>
              Sistem tip turn, sistem pendul, sistem cu 3 camere.
            </p>
            <p>
              Potrivit atât pentru concentrate sub formă de pulbere, cât și pentru concentrate lichide.
            </p>
            <p>
              Nu este necesară utilizarea apei potabile.
            </p>
            <p>
              Livrare la cheie, la cerere.
            </p>
            <p>
              Asamblat și sudat la fața locului.
            </p>
          </div>
        </div>
      </motion.section>

      {/* VIDEO SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/U1BjXCvkStA"
            title="Video VTA Polymer‑Dizolvantă"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      {/* ADVANTAJE SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Avantaje
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 max-w-3xl mx-auto">
          <li>Potrivit atât pentru concentrate sub formă de pulbere, cât și pentru concentrate lichide</li>
          <li>Eficiența excelentă a sistemelor garantează un consum foarte economic</li>
          <li>Timpul optim de maturare este garantat</li>
          <li>Nu este necesară utilizarea apei potabile</li>
          <li>Livrare la cheie, la cerere</li>
          <li>Servicii speciale sunt personalizate exact pentru dumneavoastră</li>
        </ul>
      </motion.section>

      {/* CUSTOMIZED SOLUTIONS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Soluții personalizate
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p>
            Flexibilitatea este punctul nostru forte. Ne ocupăm rapid și direct de fiecare solicitare,
            rezultând soluții complete și personalizate, adaptate cerințelor clienților.
            Timpurile scurte de realizare garantează disponibilitate rapidă și pregătire operațională.
          </p>
          <p>
            Disponibil în design personalizat (planificat și instalat individual, adaptat condițiilor spațiale)
          </p>
          <p>
            Opțional, cu bază înclinată și golire reziduală
          </p>
          <p>
            Disponibil cu opțiuni suplimentare (pompă pentru concentrate, pompă pentru soluție, alimentator de material uscat...)
          </p>
          <p>
            Opțional, cu control individual al sistemului
          </p>
          <p>
            Instalare profesională și punere în funcțiune direct la fața locului.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
