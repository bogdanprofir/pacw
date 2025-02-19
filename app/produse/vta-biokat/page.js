
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-biokat" }];
}

export default function VtaBiokat() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biokat-naturally-increases-the-biological-purification-capacity-of-wastewater-treatment-plants-in-wastewater-treatment.jpg?h=9e075f6c&itok=Flp4UT_k"
          alt="VTA Biokat"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biokat®</h1>
          <p className="text-xl md:text-2xl">
            Totul în echilibru. Acest produs sistem sprijină și crește capacitatea de
            curățare biologică a oricărei stații de epurare a apelor uzate, într-un mod
            complet natural. Folosește-l pentru a redobândi vitalitatea instalației tale.
            Produsul unic nu doar acționează ca precipitant, ci furnizează exact
            microorganismele de care are nevoie fiecare stație – personalizate, bine
            proiectate și complet naturale.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biokat® este o soluție revoluționară care nu doar stimulează puterea de curățare
          biologică a stației tale de epurare, dar și oferă microorganisme complementare. Aceste
          microorganisme sunt cultivate și stabilizate prin fermentație internă, conform unei formule
          definite individual, asigurând un mediu optim pentru regenerarea și activarea naturală a
          sistemului de tratare.
        </p>
      </section>

      {/* Comparison Section */}
      <section className="py-12">
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-05/VTA_sauberes_Wasser.jpg.webp?itok=rA85ool7"
            alt="Comparatie Biokat"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center px-4">
            <div className="text-center text-white max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                În plus față de componentele de precipitare extrem de eficiente,
                VTA Biokat® furnizează microorganisme complementare.
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                Aceste microorganisme sunt cultivate și stabilizate prin fermentație internă,
                conform unei formule definite individual. Rezultatul este un produs care stimulează
                metabolismul în ecosistemul instalației tale.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h4 className="text-xl font-bold text-[#0B5079] mb-2">Biokat</h4>
          <p className="text-lg text-gray-700 leading-relaxed">
            VTA Biokat® acționează ca un tratament imunitar pentru instalația ta și activează puterea
            sa naturală de curățare.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">Avantaje</h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>
            <strong>100% ORGANIC:</strong> Activează și crește puterea de curățare biologică a stației
            tale de epurare într-un mod complet natural și biocompatibil.
          </li>
          <li>
            <strong>100% INDIVIDUAL:</strong> Personalizat pentru nevoile instalației tale, cu microorganisme
            cultivate specific, componente de precipitare și micronutrienți adaptați ecosistemului.
          </li>
          <li>
            <strong>100% EFICIENT:</strong> Îmbunătățește performanța de curățare și proprietățile nămolului,
            controlează excesul de nămol și spuma, reducând costurile prin consumul mai redus de energie și
            produse, fără riscul introducerii de substanțe străine.
          </li>
        </ul>
      </section>

      {/* Three-Card Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Diagnoză */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://vta.cc/sites/default/files/styles/portrait/public/2024-07/vta-mikrobiologische-analytik.jpg.webp?itok=etSO0ODl"
                alt="Diagnoză"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
              Diagnoză – Diagnosticul inițial efectuat de departamentul biologic VTA a arătat doar descompunerea
              flocului sub microscop. O parte majoră din nămolul activ era compusă din filamente groase și lungi, de tipul
              bacteriilor filamentare 021N și alte filamente industriale, ceea ce făcea sedimentarea practic imposibilă.
            </p>
          </div>

          {/* Card 2: Tratament */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://vta.cc/sites/default/files/styles/portrait/public/2024-07/spurenstoff-analyse_.jpg.webp?itok=kKdbFHn2"
                alt="Tratament"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
              Tratament – La doar câteva zile după începerea dozării cu VTA Biokat®, s-a observat o reducere semnificativă a filamentelor, iar bacteriile benefice din floc au recuperat rapid, întărind considerabil coeziunea.
            </p>
          </div>

          {/* Card 3: Rezultat */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://vta.cc/sites/default/files/styles/portrait/public/2024-12/gruene-klaeranlage.jpeg.webp?itok=5COeKiYR"
                alt="Rezultat"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
              Rezultat – Cu dozaj VTA Biokat®, bacteriile din nămol s-au regenerat complet, iar dimensiunea și structura flocului au revenit la normal, asigurând o funcționare optimă a stației de epurare.
            </p>
          </div>
        </div>
      </section>

      {/* Final Section */}
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
