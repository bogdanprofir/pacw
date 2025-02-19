
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-biocitran-forte" }];
}

export default function VtaBiocitranForte() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biocitran-forte-wastewater-treatment.jpg?h=9e075f6c&itok=FFHPGzR1"
          alt="VTA Biocitran FORTE"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            VTA Biocitran® FORTE
          </h1>
          <p className="text-xl md:text-2xl">
            Performanță în deshidratarea nămolului și controlul mirosurilor
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biocitran® FORTE reprezintă o soluție de ultimă generație în 
          deshidratarea nămolului, concepută pentru a crește substanța uscată 
          și a reduce consumul de polimeri. În plus, produsul ajută la eliminarea 
          mirosurilor neplăcute, îmbunătățind calitatea efluentului și 
          mediul de lucru.
        </p>
      </section>

      {/* Large Image Section with Overlay Text */}
      <section className="py-12">
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2020-05/VTA_Biocitran_forte_.jpg.webp?itok=3WzpzPEp"
            alt="VTA Biocitran FORTE"
            fill
            className="object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-[rgba(0,0,0,0.4)]">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Optimum sludge dewatering is the order of the day since the costs 
                involved in disposing of sewage sludge are rising rapidly. VTA Biocitran® FORTE 
                reliably increases dry substance and significantly reduces polymer consumption, 
                but the high performance product can do a lot more.
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                It ensures higher dewaterability, producing an increase in the dry 
                substance content while simultaneoulsy reducing the polymer requirement. <br />
                VTA Biocitran® FORTE eliminates odours and visibly improves the centrate. <br />
                Existing MAP deposits are dissolved and the formation of new deposits is prevented.
              </p>
            </div>
          </div>
        </div>
        {/* Text Beneath the Image */}
        <div className="mt-8">
          <h4 className="text-xl font-bold text-[#0B5079] mb-2">FORTE</h4>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our VTA Biocitran® FORTE substantially improves sludge dewatering.
          </p>
          <h5 className="font-bold text-gray-800">Vorteile</h5>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>IMPROVES DEWATERABILITY:</strong> Increases dry substance content 
              by up to 5%.
            </li>
            <li>
              <strong>REDUCES THE POLYMER REQUIREMENT:</strong> Reduces polymer consumption 
              by up to 25%.
            </li>
            <li>
              <strong>EFFECTIVE ODOUR PREVENTION:</strong> Targeted elimination of hydrogen 
              sulphide compounds.
            </li>
            <li>
              <strong>MAP DEPOSITS:</strong> Degrades existing deposits and prevents formation 
              of new deposits.
            </li>
          </ul>
        </div>
      </section>

      {/* Two-Card Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://vta.cc/sites/default/files/styles/widget/public/2025-01/biocitran-forte-zentrat.png.webp?itok=oEjI5HFD"
                alt="Zentrat/Filtratwerte"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-[#0B5079] mb-2">
                Zentrat/Filtratwerte
              </h4>
              <p className="text-gray-700">
  The centrate/filtrate produced reduces the backcharge to the biological stage
  <br />
  <strong>COD:</strong> Up to -50%<br />
  <strong>Ammonium:</strong> Up to -25%<br />
  <strong>Orthophosphate:</strong> Up to &gt; -90%<br />
  <strong>Turbidity:</strong> Up to -40%
</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://vta.cc/sites/default/files/styles/widget/public/2025-01/schlammaktivitaet.png.webp?itok=8NuSgGhd"
                alt="Schlammaktivität"
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-[#0B5079] mb-2">
                Schlammaktivität
              </h4>
              <p className="text-gray-700">
                Improves denitrification (and also biological phosphorus removal 
                in the right conditions) by increasing the sludge activity by up 
                to 50% (through centrate or filtrate recirculation).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
