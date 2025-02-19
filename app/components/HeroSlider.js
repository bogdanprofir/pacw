"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sliderItems = [
  {
    id: 1,
    videoSrc: "https://vta.cc/sites/default/files/2024-11/vta-trioxsan-green-deal.mp4",
    productName: "VTA Trioxsan",
    productLink: "/produse/vta-trioxsan",
  },
  {
    id: 2,
    videoSrc: "https://vta.cc/sites/default/files/2024-12/vta-greentek2000_en.mp4",
    productName: "VTA Green-Tec 2000",
    productLink: "/produse/vta-green-tec-2000",
  },
  {
    id: 3,
    videoSrc: "https://vta.cc/sites/default/files/2024-06/vta-anlagenbau-neueste-version1.mp4",
    productName: "VTA Plant engineering",
    productLink: "/produse/vta-green-tec-2000",
  },
  {
    id: 4,
    videoSrc: "https://vta.cc/sites/default/files/2024-07/vta-nanocarbon-wastewater-treatment_comp.mp4",
    productName: "VTA Nanocarbon",
    productLink: "/produse/vta-nanocarbon",
  },
  {
    id: 5,
    videoSrc: "https://vta.cc/sites/default/files/2024-11/vta-nanofloc-hero-en.mp4",
    productName: "VTA Nanofloc",
    productLink: "/produse/vta-nanofloc",
  },
  {
    id: 6,
    videoSrc: "https://vta.cc/sites/default/files/2024-11/vta-biosolit-hero-en.mp4",
    productName: "VTA Biosolit",
    productLink: "/produse/vta-biosolit",
  },
  {
    id: 7,
    videoSrc: "https://vta.cc/sites/default/files/2024-11/vta-calcoferrit-en.mp4",
    productName: "VTA Calcoferrit",
    productLink: "/produse/vta-calcoferrit",
  },
  {
    id: 8,
    videoSrc: "https://vta.cc/sites/default/files/2024-10/vta-biocitran_thumbnail.mp4",
    productName: "VTA Biocitran",
    productLink: "/produse/vta-calcoferrit",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-advance the slide every 25 seconds.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderItems.length);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  const currentItem = sliderItems[current];

  // Framer Motion variants for fade-in/out animation
  const sliderVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative w-full h-[350px] md:h-[600px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentItem.id}
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Entire slide is clickable, linking to the product page */}
          <Link href={currentItem.productLink} className="cursor-pointer block">
            <video
              className="w-full h-full object-cover"
              src={currentItem.videoSrc}
              autoPlay
              muted
              loop
            />
          </Link>
          {/* Overlay with product name and "Afla mai multe" button */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 bg-gradient-to-t from-[#0B5079] via-transparent">
            <h2 className="text-3xl md:text-5xl text-white font-bold mb-4">
              {currentItem.productName}
            </h2>
            <Link href={currentItem.productLink} className="cursor-pointer">
              <button className="bg-white text-[#0B5079] px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                Afla mai multe
              </button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dots navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {sliderItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-opacity ${
              index === current ? "bg-white" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
