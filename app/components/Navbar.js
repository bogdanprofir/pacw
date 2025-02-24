"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProduseOpen, setIsProduseOpen] = useState(false);
  const [isEchipamenteOpen, setIsEchipamenteOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset nested menus when closing main menu
    if (isOpen) {
      setIsProduseOpen(false);
      setIsEchipamenteOpen(false);
    }
  };

  const productLinks = [
    { name: "VTA Nanocarbon", href: "/produse/vta-nanocarbon" },
    { name: "VTA Green-Tec 2000", href: "/produse/vta-green-tec-2000" },
    { name: "VTA Biocitran", href: "/produse/vta-biocitran" },
    { name: "VTA Biokat", href: "/produse/vta-biokat" },
    { name: "VTA Biosolit", href: "/produse/vta-biosolit" },
    { name: "VTA Nanofloc", href: "/produse/vta-nanofloc" },
    { name: "VTA Calcoferrit", href: "/produse/vta-calcoferrit" },
    { name: "VTA Biocitran® FORTE", href: "/produse/vta-biocitran-forte" },
    { name: "VTA Biolizer", href: "/produse/vta-biolizer" },
    { name: "VTA Dolomin", href: "/produse/vta-dolomin" },
    { name: "VTA Trioxsan", href: "/produse/vta-trioxsan" },
    { name: "VTA Hydroprompt® FORTE", href: "/produse/vta-hydroprompt-forte" },
    { name: "VTA Biodol", href: "/produse/vta-biodol" },
    { name: "VTA Biomaltan®", href: "/produse/vta-biomaltan" },
    { name: "Polymer flocculation agents", href: "/produse/polymere" },
  ];

  const equipmentLinks = [
    { name: "VTA mudinator®", href: "/echipamente/vta-mudinator" },
    { name: "Rezervor de stocare VTA", href: "/echipamente/vta-storage-tank" },
    { name: "Dozare personalizată Eurodos", href: "/echipamente/eurodos-customised-dosing" },
    { name: "Stație post-diluare", href: "/echipamente/post-dilution-station" },
    { name: "Eurofloc 2KT", href: "/echipamente/eurofloc-2kt" },
    { name: "VTA Inline Mixer", href: "/echipamente/vta-inline-mixer" },
    { name: "VTA Microturbine", href: "/echipamente/vta-microturbine" },
    { name: "VTA GSD", href: "/echipamente/vta-gsd" },
    { name: "Stație de dizolvare a polimerilor VTA", href: "/echipamente/vta-polymer-solution-station" },
    { name: "Eurofloc 1K", href: "/echipamente/eurofloc-1k" },
    { name: "Eurofloc 2KT-R", href: "/echipamente/eurofloc-2kt-r" },
    { name: "Rezervor subteran VTA", href: "/echipamente/vta-underground-tank" },
    { name: "Service & Optimizare Instalații VTA", href: "/echipamente/vta-service-plant-optimization" },
    { name: "Stație de dozare VTA", href: "/echipamente/vta-dosing-station" },
    { name: "Eurofloc 2KP", href: "/echipamente/eurofloc-2kp" },
    { name: "Eurofloc 3K", href: "/echipamente/eurofloc-3k" },
  ];
  
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <nav className="sticky top-0 z-50 bg-sky-100 text-blue-900 shadow-md">
      <div className="mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="PAC Water Logo"
              width={150}
              height={100}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-1">
            <span className="block h-1 w-8 bg-[#0B5079]"></span>
            <span className="block h-1 w-8 bg-[#0B5079]"></span>
            <span className="block h-1 w-8 bg-[#0B5079]"></span>
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="font-bold hover:text-blue-600 transition-colors">
            Home
          </Link>

          {/* Dropdown for "Produse" */}
          <div className="relative group">
            <button className="hover:text-blue-600 font-bold transition-colors">
              Produse
            </button>
            <div className="absolute left-0 hidden w-80 bg-sky-100 text-blue-900 group-hover:block shadow-md">
              {productLinks.map((prod) => (
                <Link
                  key={prod.href}
                  href={prod.href}
                  className="block px-4 py-2 hover:bg-sky-200 transition-colors"
                >
                  {prod.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Dropdown for "VTA Plant engineering" */}
          <div className="relative group">
            <button className="hover:text-blue-600 font-bold transition-colors">
              VTA Plant engineering
            </button>
            <div className="absolute left-0 hidden w-80 bg-sky-100 text-blue-900 group-hover:block shadow-md">
              {equipmentLinks.map((eq) => (
                <Link
                  key={eq.href}
                  href={eq.href}
                  className="block px-4 py-2 hover:bg-sky-200 transition-colors"
                >
                  {eq.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className="font-bold hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu (side-drawer) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={drawerVariants}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-sky-100 text-[#0B5079] shadow-lg z-50 overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-blue-300">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="PAC Water Logo"
                  width={80}
                  height={80}
                  className="cursor-pointer"
                />
              </Link>
              <button onClick={toggleMenu} aria-label="Close menu" className="text-blue-900 text-xl font-bold">
                ✕
              </button>
            </div>
            <div className="p-4 space-y-4">
              <Link
                href="/"
                className="block hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={() => setIsProduseOpen(!isProduseOpen)}
                  className="font-semibold mb-2 w-full text-left hover:text-blue-600 transition-colors"
                >
                  Produse
                </button>
                {isProduseOpen && (
                  <ul className="ml-4 space-y-1">
                    {productLinks.map((prod) => (
                      <li key={prod.href}>
                        <Link
                          href={prod.href}
                          className="block hover:text-blue-600 transition-colors"
                          onClick={toggleMenu}
                        >
                          {prod.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsEchipamenteOpen(!isEchipamenteOpen)}
                  className="font-semibold mb-2 w-full text-left hover:text-blue-600 transition-colors"
                >
                  VTA Plant engineering
                </button>
                {isEchipamenteOpen && (
                  <ul className="ml-4 space-y-1">
                    {equipmentLinks.map((eq) => (
                      <li key={eq.href}>
                        <Link
                          href={eq.href}
                          className="block hover:text-blue-600 transition-colors"
                          onClick={toggleMenu}
                        >
                          {eq.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Link
                href="/contact"
                className="block hover:text-blue-600 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
