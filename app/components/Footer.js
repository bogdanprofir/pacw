"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-sky-100 text-blue-900 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Company Info Section */}
        <div className="m-4 mr-12">
          <h2 className="font-bold text-lg">PAC Water</h2>
          <p className="mt-2">Distribuitor de produse pentru tratarea apei.</p>
          <p className="mt-1">Adresa: Patrangeni, Alba</p>
          <p className="mt-1">
            Telefon: <a href="tel:+40722277303" className="underline text-blue-900">+40722277303</a>
          </p>
          <p className="mt-1">
            Email: <a href="mailto:pacwater@gmail.com" className="underline text-blue-900">pacwater@gmail.com</a>
          </p>
        </div>

        {/* External Logos Section */}
        <div className="flex flex-col items-center justify-center m-4">
          <a href="https://anpc.ro/" target="_blank" rel="noreferrer">
            <Image
              src="https://anpc.ro/wp-content/uploads/brizy/imgs/wp-7af89f9c287bc8c5cecef1fdd442bffc-185x87x0x0x185x87x1701197532.png"
              alt="ANPC"
              width={185}
              height={87}
              className="mb-4"
            />
          </a>
          <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO" target="_blank" rel="noreferrer">
            <Image
              src="https://ec.europa.eu/consumers/odr/resources/public2/images/YourEU-logo%20panton%20monochrom%20horisontal.svg"
              alt="YourEU"
              width={185}
              height={87}
            />
          </a>
        </div>

        {/* Useful Links Section */}
        <div className="m-4 ml-12">
          <h2 className="font-bold text-lg">Link-uri utile</h2>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/produse">Produse</Link>
            </li>
            <li>
              <Link href="/echipamente">Echipamente</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PAC Water. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
