
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-calcoferrit-odour-control" }];
}

export default function VtaCalcoferritOdourControl() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://vta.cc/sites/default/files/2024-06/vta-1%20Calcoferrit%20690X610.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            VTA Calcoferrit Odour Control
          </h1>
          <p className="text-xl md:text-2xl">
            Effective odour control for a cleaner environment
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Calcoferrit® Odour Control reprezintă o soluție inovatoare destinată reducerii mirosurilor neplăcute în sistemele de tratare a apei uzate. Folosind tehnologii avansate, produsul neutralizează compușii volatili, contribuind la îmbunătățirea calității aerului și la crearea unui mediu de lucru mai sigur și mai curat.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Neutralizează eficient mirosurile neplăcute</li>
          <li>Reduce emisiile de compuși volatili</li>
          <li>Îmbunătățește calitatea aerului din incinte</li>
          <li>Soluție sustenabilă și economică</li>
        </ul>
      </section>

      {/* Sustainability & Performance Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Performanță și Sustenabilitate
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Calcoferrit Odour Control este conceput pentru a asigura o reducere semnificativă a mirosurilor, contribuind la un mediu de lucru mai sănătos și o operațiune eficientă a stațiilor de epurare. Sistemul optimizează procesele de tratare, reducând costurile operaționale și consumul de energie.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Testele de performanță au demonstrat că implementarea acestui sistem aduce îmbunătățiri semnificative în calitatea aerului și a efluentei, asigurând un impact minim asupra mediului.
        </p>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Videoclip Informativ
        </h2>
        <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/aVA2kebPUps?start=3"
            title="VTA Calcoferrit Odour Control Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Additional Technical Details Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Detalii Tehnice & Beneficii
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Calcoferrit Odour Control nu doar neutralizează mirosurile, ci și optimizează procesul de tratare a apei uzate, îmbunătățind astfel calitatea efluentului. Sistemul integrează tehnologie avansată și soluții ecologice pentru a oferi performanțe remarcabile într-un mediu de operare variat.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Ușor de integrat în infrastructura existentă, acest sistem este susținut de PAC Water, distribuitor autorizat, care oferă consultanță și suport tehnic pentru implementarea optimă a tehnologiilor VTA.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Descoperă cum VTA Calcoferrit Odour Control poate transforma operațiunile de tratare a apei uzate, asigurând un mediu curat și eficient, cu costuri reduse și impact ecologic minim.
        </p>
      </section>
    </div>
  );
}
