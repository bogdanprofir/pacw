"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function VtaUndergroundTank() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <motion.section
  className="relative w-full h-96 md:h-[600px] overflow-hidden"
  initial="hidden"
  animate="visible" // Animate immediately on mount
  variants={sectionVariant}
>
  <Image
    src="https://vta.cc/sites/default/files/styles/hero/public/2020-04/Erdtank.jpg?h=221e9d68&itok=SFqFlSAh"
    alt="Rezervor subteran VTA"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
</motion.section>


      {/* HERO TEXT SECTION */}
      <motion.section
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B5079]">
            Rezervor subteran VTA
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Rezervorul subteran VTA asigură depozitarea și dozarea sigură a produselor lichide și contribuie la combaterea mirosurilor neplăcute. Este utilizat în principal în stațiile de pompare din sectorul municipal.
          </p>
          <ul className="mt-4 list-disc text-lg text-gray-700 space-y-2">
            <li>Unitate de dozare și tehnologie de măsurare integrate în puțul domului</li>
            <li>Volum: 1 - 3 m³</li>
            <li>Depozitare cât mai aproape de locul de utilizare; zona principală de aplicare este în stațiile de pompare din sectorul municipal</li>
            <li>Depozitare subterană în procesul de inginerie VTA Liquid pentru un control eficient al mirosurilor</li>
            <li>Deosebit de rezistent datorită designului cu pereți dubli</li>
          </ul>
        </div>
      </motion.section>

      {/* IMAGE SECTION */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <div className="relative w-full h-80 ">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-04/VTA_sauberes_Wasser_Kind.jpg.webp?itok=2_etkl4B"
            alt="Comparatie rezervor subteran VTA"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            Rezervorul subteran VTA oferă spațiu pentru produsele sistem VTA concepute pentru a neutraliza mirosurile neplăcute. De exemplu, VTA Calcoferrit poate fi depozitat și dozat cu ușurință.
          </p>
        </div>
      </motion.section>

      {/* SOLUTION SECTION – 3 COLUMNS */}
      <motion.section
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">Soluție</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coloana 1: Provocarea */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Provocarea</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Miros din canalizare: Când timpii de reținere sunt lungi și nivelurile apei scăzute, microorganismele produc mai mult sulfid de hidrogen, iar mirosul caracteristic de ouă stricate se evidențiază.
            </p>
          </div>
          {/* Coloana 2: Soluția noastră */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Soluția noastră</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Rezervorul subteran VTA cu stație de dozare integrată. Produsele pentru controlul mirosurilor, cum ar fi VTA Calcoferrit®, sunt depozitate în rezervoare subterane și introduse direct în canalizare.
            </p>
          </div>
          {/* Coloana 3: Rezultatul */}
          <div className="p-4">
            <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Rezultatul</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ideal pentru controlul mirosurilor în combinație cu VTA Calcoferrit®. Dozare economică și depozitare sigură, subteran și aproape de locul de utilizare.
            </p>
          </div>
        </div>
      </motion.section>

      {/* FINAL SECTION: POSSIBLE COMBINATION (TEXT LEFT, IMAGE RIGHT) */}
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
              Combinare posibilă
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sisteme de dozare și dizolvare de la Eurodos. Sistemele de dozare și dizolvare de înaltă performanță de la Eurodos sunt prima alegere pentru pregătirea și aplicarea soluțiilor polimerice.
              Răspunsul nostru la orice solicitare este rapid și direct, creând soluții individuale și complete, adaptate special cerințelor clienților.
              Timpul scurt de implementare garantează disponibilitate rapidă și pregătire pentru utilizare.
            </p>
          </div>
          {/* Image on Right */}
          <div className="relative md:w-1/2 h-80 ">
            <Image
              src="https://vta.cc/sites/default/files/styles/widget/public/2024-06/vta-eurodos-dosierbox.jpg.webp?itok=0ium2gnP"
              alt="Eurodos Dosierbox"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
