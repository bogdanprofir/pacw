"use client";
import React from "react";
import Image from "next/image";

export default function VtaNanocarbon() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image 
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-08/vta-nanocarbon-abwasserreinigung.png?h=9e075f6c&itok=pBniNQmW" 
          alt="VTA Nanocarbon" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Nanocarbon</h1>
          <p className="text-xl md:text-2xl">
            Tehnologie de ultimă generație pentru tratarea apelor uzate
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Nanocarbon® reprezintă o soluție avansată pentru purificarea apelor uzate, optimizând atât procesul de tratare, cât și costurile de operare. Dezvoltat în laboratoarele VTA, acest produs se adaptează continuu la cerințele actuale din domeniul tehnologiei apei uzate, oferind performanțe remarcabile și o eficiență sporită.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Eficiență ridicată în purificarea apelor uzate</li>
          <li>Adaptabilitate la cerințele moderne de tratament</li>
          <li>Reducerea costurilor operaționale</li>
          <li>Tehnologie inovatoare inspirată de ciclurile naturale</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Videoclip Informativ
        </h2>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/uxRq3510e5s"  // Replace with your actual YouTube video ID
            title="VTA Nanocarbon Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Detalii Tehnice & Beneficii
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Nanocarbon® nu este doar un produs, ci o platformă tehnologică care redefinește standardele în tratarea apei uzate. Beneficiile includ o reducere semnificativă a costurilor operaționale, o eficiență crescută a proceselor de purificare și o adaptabilitate excelentă la diverse condiții de operare.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Distribuitorul PAC Water, cu experiență și expertiză în domeniu, asigură implementarea și suportul necesar pentru ca fiecare instalație să funcționeze la parametrii optimi.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Descoperă cum VTA Nanocarbon® poate transforma sistemul tău de tratare a apei, aducând inovație și eficiență la cel mai înalt nivel.
        </p>
      </section>
    </div>
  );
}
