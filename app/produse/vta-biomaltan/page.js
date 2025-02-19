
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-biomaltan" }];
}

export default function VtaBiomaltan() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image 
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/biological-wastewater-treatment-in-food-processing-plants-with-vta-biomaltan.jpg?h=9e075f6c&itok=VAWIjaxr" 
          alt="VTA Biomaltan" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biomaltan®</h1>
          <p className="text-xl md:text-2xl">
            Revoluția biologică – din natură pentru natură. Apă curată datorită forței naturii. 
            Acum acest lucru se concretizează prin VTA Biomaltan®.
          </p>
        </div>
      </section>

      {/* PRODUCT OVERVIEW SECTION */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biomaltan® este un produs de înaltă performanță, pe bază de amidon de porumb, biodegradabil, care răspunde cerințelor viitoare. 
          Cu proprietăți de floculare remarcabile, pe bază pur organică, acest produs reușește să susțină curățarea biologică a instalațiilor de epurare, restabilind echilibrul natural.
        </p>
      </section>

      {/* ADVANTAGES IMAGE SECTION */}
      <section className="py-12">
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
          <Image 
            src="https://vta.cc/sites/default/files/styles/original/public/2020-04/VTA_Biomaltan_image.jpg.webp?itok=N7iVc8Ce"
            alt="VTA Biomaltan – Imagine de comparație"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-[#0B5079] mb-4">
            VTA Biomaltan® – Avantaje
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Multe companii din industria alimentară a așteptat tratamentul organic al apelor uzate. Soluția este acum aici – VTA Biomaltan®! Produsul nu doar că reduce volumul nămolului, ci furnizează și microorganisme complementare, cultivate prin fermentație internă, care stimulează metabolismul ecosistemului instalației tale.
          </p>
        </div>
      </section>

      {/* PROPERTIES & HANDLING SECTION */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079] text-center">
          Proprietăți & Manipulare
        </h2>
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <div>
            <strong>Aspect:</strong> lichid clar până la ușor tulbure, de culoare galben pal.
          </div>
          <div>
            <strong>Densitate:</strong> aproximativ 1.2 g/cm³.
          </div>
          <div>
            <strong>Solubilitate:</strong> complet miscibil cu apă.
          </div>
          <div className="mt-4">
            <strong>Depozitare:</strong> Se recomandă utilizarea exclusivă a rezervorilor și conductelor din materiale precum polietilena, polipropilena, PVC sau oțel căptușit cu cauciuc pentru depozitare și transport. VTA Biomaltan® poate fi depozitat timp de cel puțin 8–12 luni. O ușoară tulburare nu îi afectează eficacitatea.
          </div>
          <div className="mt-4">
            <strong>Manipulare:</strong> Produsul trebuie depozitat și dozat în concentrația de livrare. Cantitatea de dozare necesară depinde de calitatea apei, de performanța de curățare dorită și de condițiile din stația de epurare. Dacă diluțiile (max. 1:10) sunt necesare, acestea trebuie utilizate rapid, deoarece eficacitatea scade în timp.
          </div>
          <div className="mt-4">
            <strong>Ambalare:</strong> VTA Biomaltan® este disponibil vrac, în tancuri, sau în containere de 1.200 kg.
          </div>
        </div>
      </section>
    </div>
  );
}
