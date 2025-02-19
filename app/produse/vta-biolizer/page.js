
import React from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ product: "vta-biolizer" }];
}

export default function VtaBiolizer() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biolizer-wastewater-treatment.png?h=9e075f6c&itok=-ohmn6C_"
          alt="VTA Biolizer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biolizer</h1>
          <p className="text-xl md:text-2xl">
            Efect maxim cu volum minim
          </p>
        </div>
      </section>

      {/* Main Description Section */}
      <section className="py-12">
        <p className="text-lg text-gray-700 leading-relaxed">
          Volum minim – efect maxim. Produsul sistem VTA Biolizer® a fost dezvoltat pentru a obține un impact maxim cu resurse minime. Mai multă capacitate în stadiul activat, o conservare sporită a resurselor: cheia succesului constă în formarea armonizată a bulelor pe care adăugarea VTA Biolizer® le produce în ecosistem.
        </p>
      </section>

      {/* First Advantages Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Avantaje</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Timpurile de aerare pot fi reduse semnificativ, deoarece oxigenul din zona de aerare este utilizat mult mai eficient.
          <br />
          Îmbunătățire semnificativă a comportamentului de sedimentare și îngroșare a nămolului activat.
          <br />
          Rezultate mai bune cu doze reduse și o reducere a costurilor energetice de aproape 30%.
        </p>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="relative w-full h-80 bg-gray-200">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-04/VTA_Biolizer.jpg.webp?itok=B-IDZ-nD"
            alt="VTA Biolizer – imagine de prezentare"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Detailed Advantages Section with Arrows */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">
          Avantaje Detaliate
        </h2>
        <ul className="space-y-4">
          {[
            "Până la 30% mai puțină energie de aerare",
            "Stabilitate mai mare a instalației – siguranță operațională sporită",
            "Crește oxigenarea",
            "Stimulează microbiologia",
            "Îmbunătățește comportamentul de sedimentare și îngroșare",
            "Optimizează structura flocului",
            "Eficient împotriva bacteriilor filamentare",
            "Proprietăți de oxidare îmbunătățite",
            "Capacitate sporită de degradare în ceea ce privește COD, amoniac și fosfat",
            "Îmbunătățește eficiența stadiului de nămol activat pentru apele uzate cu sarcină organică ridicată",
            "Separă eficient grăsimile și uleiurile emulsificate din apele uzate",
            "Legare țintită a sulfului"
          ].map((advantage, index) => (
            <li key={index} className="flex items-center text-lg text-gray-700">
              <svg
                className="w-5 h-5 text-[#0B5079] mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {advantage}
            </li>
          ))}
        </ul>
      </section>

      {/* Final Section: How an activated sludge process gets better */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-[#0B5079] text-center mb-4">
          Cum se îmbunătățește un proces de nămol activat
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Folosind exemplul stației de epurare Macher, se poate observa că procesul de nămol activat se îmbunătățește semnificativ: microorganismele se regenerează, dimensiunea și coeziunea flocului sunt restabilite, iar sistemul funcționează la parametrii optimi, asigurând o eficiență crescută și costuri operaționale reduse.
        </p>
      </section>
    </div>
  );
}
