
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-hydroprompt-forte" }];
}

export default function VtaHydropromptForte() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-hydroprompt-forte-bewirkt-eine-wirkungsvolle-faellung-und-flockung-in-der-abwasserreinigung.jpg?h=9e075f6c&itok=CBm_IdYU"
          alt="VTA Hydroprompt Forte"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Hydroprompt Forte</h1>
          <p className="text-xl md:text-2xl">
            Controlul mirosurilor și îmbunătățirea sedimentării în tratarea apelor uzate
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Hydroprompt Forte oferă o soluție avansată pentru controlul mirosurilor din sistemele de tratare a apei uzate. 
          Acest sistem inovator combină tehnologii de floculare și sedimentare pentru a reduce eficient emisiile de compuși volatili, 
          îmbunătățind astfel calitatea aerului și a efluentei, reducând totodată costurile operaționale.
        </p>
      </section>

      {/* Advantages Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Avantaje</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[400px] mb-6">
            <Image
              src="https://vta.cc/sites/default/files/2020-08/VTA_Hydroprompt-Forte1_EN.gif"
              alt="VTA Hydroprompt Forte Avantaje"
              fill
              className="object-contain"
            />
          </div>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Reducere eficientă a sarcinii de germeni chiar și la doze reduse</li>
            <li>Îmbunătățirea sedimentării materiei în suspensie</li>
            <li>Floculare eficientă – formarea unui macrofloc stabil</li>
            <li>Rată crescută de sedimentare și adâncime de vizibilitate îmbunătățită</li>
            <li>Eliminare fiabilă a fosfaților</li>
            <li>Reducerea consumului de precipitant</li>
          </ul>
        </div>
      </section>

      {/* Additional Technical Details Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Detalii Tehnice & Beneficii
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Hydroprompt Forte integrează tehnologii avansate pentru a asigura un control optim al mirosurilor, 
          îmbunătățind simultan procesul de sedimentare. Sistemul este proiectat pentru a funcționa eficient 
          în diverse condiții de operare, reducând costurile de exploatare și consumul de energie.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Beneficiile sale includ o creștere semnificativă a calității efluentului și o reducere a emisiilor, 
          contribuind astfel la un mediu mai curat și la o utilizare sustenabilă a resurselor de apă.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PAC Water, în calitate de distribuitor autorizat, asigură implementarea și suportul tehnic necesar 
          pentru ca fiecare instalație să funcționeze la parametrii optimi.
        </p>
      </section>
    </div>
  );
}
