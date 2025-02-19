"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Animation variant for scroll effects
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function RethinningStation() {
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
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/eurodos_nachverduennungsstation.png?h=9e075f6c&itok=mKhwm6Kw"
          alt="Stație de diluare"
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
            Stație de diluare
          </h1>
          <p className="mt-4 text-xl text-gray-700">
            Pentru diluarea unei soluții concentrate la concentrația necesară pentru dozare.
          </p>
        </div>
      </motion.section>

      {/* OUR DESIGNS SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-6">
            Designurile noastre
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
            <li>Montată pe o placă de montare din PP</li>
            <li>
              Aparatură de apă cu reductoare de presiune, valvă solenoid și contor de debit cu zonă variabilă
            </li>
            <li>
              Mixer static cu conexiune pentru apă de diluare și conexiune pentru dozarea polimerului
            </li>
            <li>Conducte din PVC</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}
