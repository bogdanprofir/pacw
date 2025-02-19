"use client";
import HeroSlider from "./components/HeroSlider";
import AboutUs from "./components/AboutUs";
import Advantages from "./components/Advantages";
import Stats from "./components/Stats";
import ProductsOverview from "./components/ProductsOverview";

export default function Home() {
  return (
    
          <div>
            <HeroSlider />
            <AboutUs />
            <Advantages />
            <div className="w-full">
              <Stats />
            </div>
            <ProductsOverview />
          </div>
        );
      }
      

