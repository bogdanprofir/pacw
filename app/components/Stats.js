"use client";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// A reusable CountUp component that animates from 1 to the target value.
function CountUp({ target, suffix = "", duration = 2, start }) {
  const [display, setDisplay] = useState(1);

  useEffect(() => {
    if (!start) return;
    const controls = animate(1, target, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => setDisplay(Math.round(value)),
    });
    return () => controls.stop();
  }, [target, duration, start]);

  return <span>{display}{suffix}</span>;
}

// Framer Motion variants for the circle animations
const circleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8 },
  },
};

// A single stat item component
function StatItem({ target, suffix, additionalUnit, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {/* Circle */}
      <motion.div
        className="
          w-36 h-36
          md:w-40 md:h-40
          rounded-full
          bg-transparent
          border-2 border-white
          flex items-center justify-center
          flex-shrink-0
          overflow-hidden
        "
        variants={circleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="text-4xl font-bold leading-none flex items-center whitespace-nowrap">
          <CountUp target={target} suffix={suffix} duration={2} start={isInView} />
          {additionalUnit && <span className="text-lg ml-1">{additionalUnit}</span>}
        </div>
      </motion.div>
      {/* Text below the circle */}
      <p className="mt-4 text-sm font-extrabold max-w-xs">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16 px-4 md:px-16 bg-gray-900 text-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/earth.png')" }}
      />
      <div className="relative max-w-6xl w-full mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">APA curată pentru toți</h2>
        {/* Grid: 1 col on mobile, 4 on lg */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <StatItem
            target={250}
            suffix="M"
            label="Beneficiază zilnic de tratarea apei uzate (nepotabile)"
          />
          <StatItem
            target={65}
            label="Produsele VTA sunt distribuite în peste 65 de țări la nivel global"
          />
          <StatItem
            target={18}
            additionalUnit="ani"
            label="de experiență în tratarea apei"
          />
          <StatItem
            target={100}
            suffix="+"
            label="branduri și patente, tehnologii inovatoare"
          />
        </div>
      </div>
    </section>
  );
}
