"use client";
import React from "react";

export default function GDPRPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Politica de Confidențialitate și GDPR</h1>
      <p className="mb-4">
        Această politică de confidențialitate descrie modul în care <strong>PAC WATER SRL</strong> (CUI: 12364790, Nr. înregistrare Registrul Comerțului: J01/209/1998, EUID: R OONRC.J1/209/1998) colectează, utilizează și protejează datele personale ale utilizatorilor săi, conform Regulamentului General privind Protecția Datelor (GDPR).
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Colectarea Datelor</h2>
      <p className="mb-4">
        Colectăm datele personale pe care le furnizați voluntar prin intermediul formularelor de contact, abonării la newsletter sau altor interacțiuni cu site-ul nostru. Aceste date pot include numele, prenumele, adresa de email, numărul de telefon, numele companiei, numărul de înregistrare și alte informații relevante.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Utilizarea Datelor</h2>
      <p className="mb-4">
        Datele colectate sunt folosite pentru a răspunde solicitărilor dvs., pentru a vă oferi informații relevante despre produsele și serviciile noastre și pentru a îmbunătăți experiența utilizatorilor pe site. Prelucrarea datelor se face pe baza consimțământului dvs. și în conformitate cu prevederile GDPR.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Drepturile Dvs.</h2>
      <p className="mb-4">
        Aveți dreptul de a accesa, corecta, șterge, restricționa prelucrarea sau de a vă opune prelucrării datelor dvs. De asemenea, aveți dreptul la portabilitatea datelor. Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați la:{" "}
        <a href="mailto:pacwater@gmail.com" className="underline text-blue-600">
          pacwater@gmail.com
        </a>.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Securitatea Datelor</h2>
      <p className="mb-4">
        Ne angajăm să protejăm datele dvs. personale prin măsuri tehnice și organizatorice adecvate, astfel încât să prevenim accesul neautorizat, divulgarea, modificarea sau distrugerea acestora.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Modificări ale Politicii</h2>
      <p className="mb-4">
        Ne rezervăm dreptul de a actualiza această politică de confidențialitate în orice moment. Orice modificări vor fi publicate pe această pagină.
      </p>

      <p className="mt-6">
        Data ultimei actualizări: {new Date().toLocaleDateString("ro-RO")}.
      </p>
    </div>
  );
}
