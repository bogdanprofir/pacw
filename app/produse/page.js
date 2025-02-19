"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    slug: "vta-nanocarbon",
    name: "VTA Nanocarbon",
    image:
      "https://vta.cc/sites/default/files/styles/hero/public/2024-08/vta-nanocarbon-abwasserreinigung.png?h=9e075f6c&itok=pBniNQmW",
    description:
      "VTA Nanocarbon® este enorm de eficient și economisește bani în tratarea apelor uzate, chiar și cu cele mai mici cantități de dozare.",
  },
  {
    slug: "vta-nanofloc",
    name: "VTA Nanofloc",
    image:
      "https://vta.cc/sites/default/files/styles/widget/public/2020-06/VTA_Nanofloc.jpg.webp?itok=LqIubTfz",
    description:
      "Puternic, eficient și economic în tratarea apelor uzate.",
  },
  {
    slug: "vta-trioxsan",
    name: "VTA Trioxsan",
    image:
      "https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-trioxsan.png?h=9e075f6c&itok=Mrf8xLCF",
    description:
      "Reliable dosing technology specialist under the VTA Group, creating individual systems for accurate product dosing.",
  },
  {
    slug: "vta-green-tec-2000",
    name: "VTA Green-Tec-2000",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-10/greentec-2000.jpg.webp?itok=bIJcRCmi",
    description: "VTA Green-Tec 2000® reduce costurile de deshidratare a nămolului de apă uzată într-un mod durabil. Procesul realizează deshidratare crescută, stabilitate mai bună a floculului și un concentrat vizibil mai clar, reducând în același timp cantitatea de floculant."

  },
  {
    slug: "vta-calcoferrit",
    name: "VTA Calcoferrit",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-calcoferrit-der-biologische-%26-effiziente-schutz-gegen-geruchsbildung-und-korrosion-im-kanalnetz-und-fuer-die-abwasserreinigung.jpg.webp?itok=uOMoNosx",
    description: "Produsele noastre avansate, cum ar fi VTA Calcoferrit®, elimină sau previn rapid, permanent și fiabil problemele de miros în ingineria apelor uzate."

  },
  {
    slug: "vta-hydroprompt-forte",
    name: "VTA Hydroprompt FORTE ",
    image: "https://vta.cc/sites/default/files/styles/hero/public/2024-09/vta-hydroprompt-forte-bewirkt-eine-wirkungsvolle-faellung-und-flockung-in-der-abwasserreinigung.jpg?h=9e075f6c&itok=CBm_IdYU",
    description: "VTA Hydroprompt® FORTE este utilizat în tratarea apelor uzate pentru a îndepărta eficient contaminanții microbieni, cum ar fi agenții patogeni și germenii multirezistenți din apă și pentru a reduce consumul de precipitanți."

  },
  {
    slug: "vta-biocitran",
    name: "VTA Biocitran",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biocitran-wastewater-treatment.jpg.webp?itok=K0ap8by4",
    description: "VTA Biocitran este un produs inovator cu aditivi selectați asigură o deshidratare crescută, o stabilitate mai bună a floculului și un concentrat clar mai clar."

  },
  {
    slug: "vta-biocitran-forte",
    name: "VTA Biocitran FORTE",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biocitran-forte-wastewater-treatment.jpg.webp?itok=CiwEu-EV",
    description: "Deshidratare mai bună, economii duble – cu VTA Biocitran FORTE. Substanța uscată este crescută în mod fiabil, iar consumul de polimeri este mult redus. Cu toate acestea, noul produs de înaltă performanță poate face mult mai mult."

  },
  {
    slug: "vta-biodol",
    name: "VTA Biodol",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biodol-wastewater-treatment.png.webp?itok=_YK4h3xJ",
    description: "Aditiv pentru suspensie VTA Biodol® pe bază organică. Utilizarea întregului potențial al gunoiului de grajd lichid. Îmbunătățirea fluidității și pompabilității gunoiului de grajd lichid."

  },
  {
    slug: "vta-biokat",
    name: "VTA Biokat",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biokat-naturally-increases-the-biological-purification-capacity-of-wastewater-treatment-plants-in-wastewater-treatment.jpg.webp?itok=rJ1Ks6mP",
    description: "Acest produs unic de sistem nu este doar convingător ca precipitant: oferă fiecărei plante exact microorganismele de care are nevoie – personalizate, bine concepute și complet naturale."

  },
  {
    slug: "vta-biolizer",
    name: "VTA Biolizer",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biolizer-wastewater-treatment.png.webp?itok=Ab5lKG27",
    description: "Și mai multă eficiență la etapa activată, și mai multă conservare a resurselor: adăugarea de VTA Biolizer în ecosistem promovează armonizarea formării bulelor."

  },
 
  {
    slug: "vta-biomaltan",
    name: "VTA Biomaltan",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/biological-wastewater-treatment-in-food-processing-plants-with-vta-biomaltan.jpg.webp?itok=HiY-Z-D0",
    description: "Proprietăți remarcabile de floculare pe bază pur organică: VTA Biomaltan® gestionează acest act de echilibru. Acest produs de înaltă performanță pe bază de amidon de porumb este biodegradabil."

  },
  {
    slug: "vta-biosolit",
    name: "VTA Biosolit",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/vta-biosolit-the-perfect-all-rounder-in-wastewater-treatment.jpg.webp?itok=ghaRzog2",
    description: "VTA Biosolit acționează ca bioactivator în stația de epurare. Stimulează microorganismele din biocenoza nămolului activat să fie mai active crescând astfel semnificativ capacitatea lor de degradare."

  },
  {
    slug: "vta-dolomin",
    name: "VTA Dolomin",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/reliable-odour-control-with-vta-dolomin-in-wastewater-treatment.png.webp?itok=HpmHqHns",
    description: "VTA Dolomin este un produs special, foarte concentrat, bogat în oxigen, realizat din rocă naturală alpină, care este utilizat pentru controlul mirosurilor în sectorul municipal, în comerț și industrie și în agricultură."

  },
  {
    slug: "polymere",
    name: "Polymere",
    image: "https://vta.cc/sites/default/files/styles/portrait/public/2024-09/polymer-flocculants-from-vta-optimum-support-for-wastewater-treatment.png.webp?itok=E5qEDn8c",
    description: "Floculanți polimerici pentru optimizarea epurării chimice și industriale a apelor uzate. Personalizat pentru cerințele dumneavoastră, disponibil în diferite densități de încărcare, greutăți moleculare și complet biocompatibil."

  },

];

export default function ProductsMainPage() {
  return (
    <section className="py-16 px-4 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Produsele Noastre</h1>
        
        {/* We use a vertical list (space-y-8) so each card is in its own row */}
        <div className="space-y-8">
          {products.map((product) => (
            <motion.div
              key={product.slug}
              whileHover={{ scale: 1.02, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              className="bg-white rounded-lg overflow-hidden shadow transition duration-300"
            >
              <Link href={`/produse/${product.slug}`} className="block">
                {/* Flex container: text on left, image on right for md+ screens */}
                <div className="flex flex-col md:flex-row">
                  {/* Text Section */}
                  <div className="md:w-1/2 p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2 text-[#0B5079]">
                      {product.name}
                    </h2>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative md:w-1/2 h-56 bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
