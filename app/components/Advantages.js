"use client";
import { motion } from "framer-motion";

export default function Advantages() {
  return (
    <section className="py-16 px-4 md:px-16 bg-[#f0f4f8]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Avantajele utilizării produselor PAC Water
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Soluții inovatoare și eficiente pentru tratarea apei.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Distribuitor PAC Water */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
            className="p-6 bg-white rounded-lg shadow transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#0B5079]" >
              Distribuitor oficial VTA Austria 
            </h3>
            <p className="text-gray-600">
              PAC Water distribuie produsele inovatoare ale VTA AUSTRIA, un lider global în tehnologia de tratare a apelor uzate. Ca distribuitor autorizat, PAC Water asigură soluții de înaltă performanță, cost-eficiente și durabile, inspirate de natură și de ciclurile sale.
            </p>
            
          </motion.div>

          {/* Card 2: Inovare */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
            className="p-6 bg-white rounded-lg shadow transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#0B5079]">
              Inovare
            </h3>
            <p className="text-gray-600">
              Ne mândrim cu adoptarea continuă a celor mai noi tehnologii pentru tratarea apei. Soluțiile noastre inovatoare stabilesc standarde în ingineria de mediu, oferind performanță maximă, eficiență economică și sustenabilitate.
            </p>
          </motion.div>

          {/* Card 3: Experiență */}
          <motion.div
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" }}
            className="p-6 bg-white rounded-lg shadow transition"
          >
            <h3 className="text-xl font-bold mb-2 text-[#0B5079]">
              Experiență
            </h3>
            <p className="text-gray-600">
              Cu o experiență vastă în tratarea apei, PAC Water a acumulat expertiză solidă în distribuția și implementarea soluțiilor de purificare a apei. Această experiență se traduce în rezultate optime și satisfacție pentru clienți.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
