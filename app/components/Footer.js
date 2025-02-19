'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0B5079] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-between items-start">
        
        {/* Secțiunea cu datele companiei */}
        <div className='m-4 mr-12'>
          <h2 className="font-bold text-lg">PAC Water</h2>
          <p className="mt-2">Distribuitor de produse pentru tratarea apei.</p>
          <p className="mt-1">Adresa: Patrangeni,Alba</p>
          <p className="mt-1">Telefon: +40722277303</p>
          <p className="mt-1">Email: pacwater@gmail.com </p>
        </div>

        {/* Link-uri utile (placeholder) */}
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

      {/* Placeholder pentru logouri/alte linkuri */}
      {/* Poți pune aici două imagini cu link, de exemplu:
          <div className="flex space-x-4 mt-6">
            <a href="https://exemplu.ro" target="_blank" rel="noreferrer">
              <Image src="/logo-partener1.png" alt="Partener 1" width={60} height={60} />
            </a>
            <a href="https://exemplu2.ro" target="_blank" rel="noreferrer">
              <Image src="/logo-partener2.png" alt="Partener 2" width={60} height={60} />
            </a>
          </div>
      */}

      {/* Copyright */}
      <div className="mt-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} PAC Water. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
