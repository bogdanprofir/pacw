
import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ product: "vta-biocitran" }];
}

export default function VtaBiocitran() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-gray-200 overflow-hidden">
        <Image
          src="https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-biocitran-wastewater-treatment.jpg?h=9e075f6c&itok=0qsIEO7n"
          alt="VTA Biocitran Sludge Dewatering"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(11,80,121,0.6)]"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">VTA Biocitran</h1>
          <p className="text-xl md:text-2xl">
            Eficiență în deshidratarea nămolului
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Descrierea produsului
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          VTA Biocitran® este o soluție inovatoare destinată deshidratării nămolului în stațiile de epurare. Produsul asigură o separare eficientă a solidelor de lichide, îmbunătățind calitatea nămolului și facilitând o gestionare optimă a deșeurilor. Această tehnologie reduce costurile operaționale și oferă un proces de epurare sustenabil și eficient.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Caracteristici Cheie
        </h2>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Îmbunătățește separarea solidelor de lichide</li>
          <li>Reduce costurile operaționale în stațiile de epurare</li>
          <li>Crește eficiența proceselor de deshidratare a nămolului</li>
          <li>Sisteme inovatoare pentru o gestionare optimă a deșeurilor</li>
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
            src="https://www.youtube.com/embed/6HWiT1R5ZyM"
            title="VTA Biocitran Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Additional Advantages Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Avantaje Adiționale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Advantage Card 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://media.istockphoto.com/id/840662136/ro/fotografie/pic%C4%83tur%C4%83-de-ap%C4%83-care-cade-%C3%AEn-suprafa%C8%9Ba-apei.jpg?s=612x612&w=0&k=20&c=CCvBEsMkXAjtQsNrVu3mIouYYS3UsXFetET-D0vpKzg="
                alt="Avantaj 1"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
            Bazat pe o dezvoltare inovatoare, acest produs conține aditivi special
        selectați pentru a crește dewaterabilitatea, a îmbunătăți stabilitatea
        flocului și a obține un centrat mult mai clar.
            </p>
          </div>
          {/* Advantage Card 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://media.istockphoto.com/id/2159125875/photo/molecule-and-green-cosmetics-liquid-ball-background-3d-rendering.webp?b=1&s=612x612&w=0&k=20&c=GUU2ydhYGcg9E0mjHeLe96zjche-aNFSN3sxzMY2h6I="
                alt="Avantaj 2"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
            Inspirat de ciclul citratului, produsul asigură performanțe stabile și
        îmbunătățite în procesul de curățare, este complet biocompatibil și
        garantează precipitare rapidă și sigură a fosfaților.
            </p>
          </div>
          {/* Advantage Card 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-64 bg-gray-200">
              <Image
                src="https://media.istockphoto.com/id/1181632037/ro/fotografie/analiza-probelor.jpg?s=612x612&w=0&k=20&c=hqgNw50nb0u2o0H5mDtx4CIi00miBuJKTCtHsMBOkzU="
                alt="Avantaj 3"
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
            Se recomandă dozarea VTA Biocitran® într-un punct turbulent amonte de
        unitatea de deshidratare, pentru a asigura o amestecare optimă și un
        efect sporit al produsului.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Technical Details Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold mb-4 text-[#0B5079]">
          Detalii Tehnice & Beneficii
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          VTA Biocitran® oferă o soluție completă pentru deshidratarea nămolului, combinând eficiența tehnologiilor moderne cu aditivi selectați pentru a spori dewaterabilitatea și stabilitatea flocului.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Implementarea acestui sistem duce la un centrat mai clar, cu un proces de sedimentare optimizat, ceea ce contribuie la o gestionare eficientă a deșeurilor și la reducerea costurilor operaționale.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          PAC Water, în calitate de distribuitor autorizat, oferă suport tehnic complet, asigurând implementarea optimă a tehnologiilor VTA și maximizând beneficiile obținute.
        </p>
      </section>
    </div>
  );
}
