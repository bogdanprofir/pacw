"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Container variants for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for each child element (logo and text)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function AboutUs() {
  return (
    <motion.section
      className="py-16 px-4 md:px-16 bg-blue-100"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo at the top (on all screen sizes) */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <Image
            src="/logo.png"
            alt="PAC WATER Logo"
            width={300}
            height={200}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Text below the logo */}
        <motion.div
          className="mt-8 text-gray-700 text-justify leading-relaxed indent-8 px-4"
          variants={itemVariants}
        >
          <p className="mb-6">
            Societatea <strong>PAC WATER</strong> a fost înființată în 1998, având
            ca domeniu de activitate producerea sulfatului de aluminiu. Având în vedere
            evoluția utilizării de noi produse chimice pentru tratarea apei în vederea
            potabilizării, cât și a epurării apelor uzate, societatea a renunțat la
            producerea de substanțe și a devenit, începând cu anul 2010, distribuitor
            autorizat în România a produselor firmei <strong>VTA AUSTRIA GMBH</strong>.
          </p>
          <p className="mb-6">
            Societatea își desfășoară activitatea în orașul Zlatna, județul Alba, având o
            experiență îndelungată în comercializarea reactivilor chimici pentru:
            <br />
            • tratarea apelor în scopul potabilizării,
            <br />
            • epurarea apelor uzate municipale sau a celor provenite din diverse
            ramuri industriale (industria hârtiei, industria alimentară, industria cosmeticelor,
            industria petrolieră etc).
          </p>
          <p className="mb-6">
            <strong>PAC WATER SRL</strong> se străduiește să fie mereu informată despre
            produsele, soluțiile și sistemele comercializate, atât cele clasice, cât și ultimele
            noutăți, în încercarea de a tria raportul calitate-preț produs finit, în favoarea
            clientului.
          </p>
          <p className="mb-6">
            <strong>Misiunea noastră</strong>
            <br />
            Misiunea noastră este să oferim partenerilor produse de calitate, la prețuri
            competitive, în raport cu cantitatea de produs consumată pe flux tehnologic.
          </p>
          <p className="mb-6">
            <strong>Gamă diversificată de produse</strong>
            <br />
            La PAC WATER ai posibilitatea de a alege dintr-o gamă variată de produse din
            profilul firmei <strong>VTA AUSTRIA GmbH</strong>.
          </p>
          <p className="mb-6">
            <strong>Logistică și depozitare</strong>
            <br />
            PAC WATER dispune de logistica necesară atât pentru depozitare, cât și pentru transportul de
            produse (cisternă chimică, containere IBC).
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
