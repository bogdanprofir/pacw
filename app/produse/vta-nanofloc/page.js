
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-nanofloc" }];
}

export default function VtaNanofloc() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://vta.cc/sites/default/files/2024-06/VTA_Nanofloc-680X610.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Nanofloc</h1>
          <p className="text-xl md:text-2xl">
            Soluția inovatoare pentru coagulație și floculare în tratarea apelor uzate
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Nanofloc® reprezintă o soluție inovatoare în procesul de coagulație și floculare, 
          optimizând claritatea și sedimentarea apei uzate. Această tehnologie avansată contribuie 
          la o epurare eficientă și rapidă, reducând costurile operaționale și sporind eficiența 
          proceselor de tratare.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Îmbunătățește sedimentarea și claritatea efluentei</li>
          <li>Optimizează procesele de coagulație și floculare</li>
          <li>Reduce costurile operaționale prin eficiență sporită</li>
          <li>Adaptabil la diverse tipuri de ape uzate</li>
        </ul>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Videoclip Informativ
        </h2>
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/vRyswMPwR70"
            title="VTA Nanofloc® Informativ"
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
          VTA Nanofloc® nu doar îmbunătățește sedimentarea, dar și accelerează reacția chimică necesară 
          pentru floculare, asigurând un proces de epurare mai eficient și de înaltă calitate.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Tehnologia sa permite o adaptare rapidă la condițiile specifice ale apei uzate, 
          reducând astfel impactul asupra mediului și costurile de exploatare.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PAC Water, în calitate de distribuitor autorizat, oferă suport tehnic complet pentru 
          implementarea și optimizarea acestor soluții, garantând performanțe optime în tratarea apei.
        </p>
      </section>
    </div>
  );
}
