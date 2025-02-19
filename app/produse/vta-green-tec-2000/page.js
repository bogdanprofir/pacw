"use client";
import React from "react";
import Image from "next/image";

export default function GreenTec2000() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/widget/public/2024-11/greentec2000.png.webp?itok=HUP78VaG"
          alt="VTA Green-Tec 2000"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Green-Tec 2000</h1>
          <p className="text-xl md:text-2xl">
            The future is green
          </p>
        </div> */}
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Green-Tec 2000 este o soluție avansată de tratare a apelor uzate, 
          concepută pentru a reduce încărcările de fosfați dizolvați, ce depășesc 
          frecvent limitele permise în numeroase stații de epurare. Prin tehnologia 
          sa inovatoare și durabilă, VTA Green-Tec 2000 asigură rezultate optime și 
          respectarea standardelor de mediu.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Inspirată de procesele naturale, tehnologia Green-Tec 2000 contribuie 
          la menținerea echilibrului ecologic și la obținerea unor performanțe 
          remarcabile în epurarea apelor. Astfel, costurile de operare sunt 
          optimizate, iar calitatea efluentului respectă cerințele stricte 
          impuse de legislație.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Reduce semnificativ încărcările de fosfați și alte substanțe nedorite</li>
          <li>Adaptare continuă la cerințele moderne de tratare a apelor uzate</li>
          <li>Diminuarea costurilor de operare și întreținere</li>
          <li>Tehnologie ecologică, inspirată de ciclurile naturale</li>
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
            src="https://www.youtube.com/embed/YcJ74dpVn_Y?start=3"
            title="VTA Green-Tec 2000 Video"
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
          VTA Green-Tec 2000 se bazează pe compuși chimici avansați, 
          capabili să fixeze fosfații și să prevină acumularea lor în efluent. 
          Rezultatul constă într-un proces de epurare mai eficient, cu costuri 
          de exploatare reduse și un impact minim asupra mediului înconjurător.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          În plus, sistemul oferă un grad ridicat de flexibilitate, putând fi 
          integrat cu ușurință în stațiile de epurare existente. PAC Water, în 
          calitate de distribuitor autorizat, furnizează atât consultanță, cât 
          și asistență tehnică pentru a asigura implementarea cu succes a 
          tehnologiei VTA Green-Tec 2000.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Optează pentru o soluție durabilă și performantă, care te ajută să 
          menții conformitatea cu standardele de mediu și să protejezi 
          resursele de apă pentru generațiile viitoare.
        </p>
      </section>
    </div>
  );
}
