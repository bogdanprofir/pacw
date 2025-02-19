
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-biodol" }];
}

export default function VtaBiodol() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biodol-wastewater-treatment.png?h=9e075f6c&itok=4o6liS7K"
          alt="VTA Biodol"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biodol</h1>
          <p className="text-xl md:text-2xl">
            Soluție inovatoare pentru tratarea apelor uzate și optimizarea nămolului
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biodol® reprezintă o soluție inovatoare în procesul de tratare a apelor uzate, concentrându-se pe optimizarea calității nămolului și reducerea costurilor operaționale. Prin intermediul tehnologiilor avansate, VTA Biodol® contribuie la o epurare mai eficientă și la o gestionare optimă a nămolului.
        </p>
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
            src="https://www.youtube.com/embed/0fQRfEBln2s"
            title="VTA Biodol Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Comparison Image Section */}
      <section className="py-12">
        <div className="relative w-full h-96 bg-gray-200 overflow-hidden">
          <Image
            src="https://vta.cc/sites/default/files/styles/original/public/2024-07/vta-biodol-with-and-without.jpg.webp?itok=Ne_-rjmj"
            alt="Comparatie Biodol"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-2xl font-bold text-[#0B5079] mb-2">Biodol</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            VTA Biodol® a fost autorizat de Oficiul Federal German pentru Siguranța Alimentelor ca aditiv vegetal pentru utilizare ca aditiv în nămol în agricultură.
          </p>
        </div>
      </section>
    </div>
  );
}
