
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-trioxsan" }];
}

export default function VtaTrioxsan() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-trioxsan.png?h=9e075f6c&itok=Mrf8xLCF"
          alt="VTA Trioxsan"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Trioxsan</h1>
          <p className="text-xl md:text-2xl">
            Sustainable Wastewater Treatment for a Greener Future
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Trioxsan reprezintă o soluție durabilă și inovatoare pentru tratarea apelor uzate, concepută pentru a reduce impactul ecologic și a optimiza procesele de epurare. Sistemul se adaptează la diverse condiții de operare și se integrează perfect în stațiile de epurare moderne.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Inspirat de necesitatea unei epurări sustenabile, VTA Trioxsan combină tehnologia avansată cu soluții ecologice, reducând consumul de energie și costurile operaționale, asigurând în același timp respectarea standardelor de mediu.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Eficiență ridicată în reducerea poluanților din apele uzate</li>
          <li>Sistem flexibil adaptat pentru diverse tipuri de instalații</li>
          <li>Consum redus de energie și costuri operaționale minime</li>
          <li>Tehnologie sustenabilă, prietenoasă cu mediul</li>
        </ul>
      </section>

      {/* Sustainability & Performance Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Tehnologie Sustenabilă & Performanțe
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Trioxsan este proiectat pentru a oferi performanțe optime în tratarea apelor uzate, minimizând impactul asupra mediului. Sistemul reduce semnificativ consumul de energie și costurile operaționale, menținând în același timp un nivel ridicat de eficiență.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Rezultatele testelor de performanță arată că VTA Trioxsan îmbunătățește considerabil calitatea efluentului, contribuind la un mediu mai curat și la o utilizare sustenabilă a resurselor de apă.
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
            src="https://www.youtube.com/embed/FEq4YRXHXTg?start=3"
            title="VTA Trioxsan Video"
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
          VTA Trioxsan combină tehnologii avansate de tratare a apei cu soluții sustenabile pentru a oferi rezultate remarcabile în condiții diverse de operare. Sistemul este proiectat pentru a se integra perfect în infrastructura existentă, optimizând procesul de epurare și reducând costurile de exploatare.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Printre beneficiile sale se numără o creștere semnificativă a calității efluentului, reducerea emisiilor și un consum energetic minim, aspecte esențiale pentru un viitor sustenabil.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PAC Water, în calitate de distribuitor autorizat, oferă suport complet pentru implementarea și întreținerea acestui sistem, asigurându-se că fiecare instalație funcționează la parametrii optimi.
        </p>
      </section>
    </div>
  );
}
