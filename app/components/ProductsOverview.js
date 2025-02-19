"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductsOverview() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title & Subtitle */}
        <h2 className="text-4xl font-bold mb-4">
          Prezentare generală a produselor
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Purificăm apa pe baza nanotehnologiei de ultimă generație
        </p>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: VTA system */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 group transition duration-300"
          >
            <div className="w-full h-56 bg-[#f0f4f8] flex items-center justify-center">
              <img
                src="https://vta.cc/sites/default/files/styles/widget/public/2024-12/vta-zertifikate_en_0.png.webp?itok=sNL1B776"
                alt="VTA system"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-6 flex items-center w-full justify-between">
              <h3 className="text-2xl text-[#0B5079] font-bold">VTA system</h3>
              <Link href="/produse" className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-[#0B5079] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-gray-600 text-center">
            Produsele de sistem personalizate de la VTA optimizează purificarea apei uzate și tratarea apei. Acestea sunt dezvoltate în laboratoarele VTA și sunt în continuă adaptare la cerințele actuale din domeniul tehnologiei apelor uzate, precum și la cerințele clienților.
            </p>
          </motion.div>

          {/* Card 2: VTA Plant-engineering */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 group transition duration-300"
          >
            <div className="w-full h-56 bg-[#f0f4f8] flex items-center justify-center">
              <img
                src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/vta-anlagenbau-kreislauf.png.webp?itok=XwBs9oN-"
                alt="VTA Plant-engineering"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-6 flex items-center w-full justify-between">
              <h3 className="text-2xl text-[#0B5079] font-bold">VTA Plant-engineering</h3>
              <Link href="/echipamente" className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-[#0B5079] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-gray-600 text-center">
            Tehnologia VTA se remarcă datorită soluțiilor sale inovatoare, de pionierat, care oferă performanțe remarcabile în aplicarea practică. Aceasta include, de exemplu, sistemul patentat de tratare cu ultrasunete VTA GSD pentru nămolul de canalizare, VTA mudinator® pentru îmbunătățirea proceselor de deshidratare a nămolului și MicroTurbine VTA pentru crearea de energie electrică din biogaz.
            </p>
          </motion.div>

          {/* Card 3: Eurodos dosing technology */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 group transition duration-300"
          >
            <div className="w-full h-56 bg-[#f0f4f8] flex items-center justify-center">
              <img
                src="https://vta.cc/sites/default/files/styles/hero/public/2024-06/eurodos_logo_neu.png?h=b0da823c&itok=swsd5_0f"
                alt="Eurodos dosing technology"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-6 flex items-center w-full justify-between">
              <h3 className="text-2xl text-[#0B5079] font-bold">Eurodos dosing technology</h3>
              <Link href="/echipamente/eurodos-customised-dosing" className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-[#0B5079] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
            <p className="mt-4 text-gray-600 text-center">
            Eurodos este specialistul în tehnologie de dozare care intră sub umbrela Grupului VTA. Datorită multor ani de experiență și tehnologiei de producție de ultimă generație, creează sisteme individuale pentru dozarea fiabilă a produsului, în conformitate cu cererea.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
