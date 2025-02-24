"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    companyName: "",
    companyReg: "",
    interests: [],
    message: "",
    gdpr: false,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const interestOptions = [
    "VTA Nanocarbon",
    "VTA Green-Tec 2000",
    "VTA Biocitran",
    "VTA Biokat",
    "VTA Biosolit",
    "VTA Nanofloc",
    "VTA Calcoferrit",
    "VTA Biocitran FORTE",
    "VTA Biolizer",
    "VTA Dolomin",
    "VTA Trioxsan",
    "VTA Hydroprompt FORTE",
    "VTA Biodol",
    "VTA Biomaltan",
    "Polymer flocculation agents",
    "VTA Plant engineering",
    "VTA mudinator",
    "VTA Storage tank",
    "Eurodos Customised dosing",
    "Post-dilution station",
    "Eurofloc 2KT",
    "VTA Inline Mixer",
    "VTA Microturbine",
    "VTA GSD",
    "VTA Polymer dissolving station",
    "Eurofloc 1K",
    "Eurofloc 2KT-R",
    "VTA Underground tank",
    "VTA service & Plant optimization",
    "VTA dosing station",
    "Eurofloc 2KP",
    "Eurofloc 3K",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "gdpr") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === "interests") {
      let newInterests = [...formData.interests];
      if (checked) {
        newInterests.push(value);
      } else {
        newInterests = newInterests.filter((item) => item !== value);
      }
      setFormData((prev) => ({ ...prev, interests: newInterests }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.phone ||
      !formData.companyName ||
      !formData.companyReg ||
      formData.interests.length === 0 ||
      !formData.message ||
      !formData.gdpr
    ) {
      setError("Toate câmpurile sunt obligatorii și trebuie să acceptați GDPR.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccess("Mesajul a fost trimis cu succes!");
        setFormData({
          name: "",
          surname: "",
          email: "",
          phone: "",
          companyName: "",
          companyReg: "",
          interests: [],
          message: "",
          gdpr: false,
        });
      } else {
        setError("A apărut o eroare la trimiterea mesajului.");
      }
    } catch (err) {
      setError("A apărut o eroare la trimiterea mesajului.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-center mb-8">
        <Image
          src="/logo.png"
          alt="PAC Water Logo"
          width={150}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-3xl font-bold">Contact</h1>
      </div>
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      {success && <p className="text-green-600 text-center mb-4">{success}</p>}
      {/* Wrap form and map in a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Prenume"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="surname"
              placeholder="Nume"
              value={formData.surname}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Adresă de email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Număr de telefon"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Numele companiei"
              value={formData.companyName}
              onChange={handleChange}
              className="border p-2 w-full"
            />
            <input
              type="text"
              name="companyReg"
              placeholder="Nr. înregistrare companie"
              value={formData.companyReg}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>
          <div>
            <p className="font-semibold mb-2">Interesat(ă) de:</p>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="border p-2 w-full text-left"
            >
              {formData.interests.length > 0
                ? formData.interests.join(", ")
                : "Selectează produsele sau echipamentele"}
            </button>
            {isDropdownOpen && (
              <div className="border p-2 mt-2 bg-white">
                {interestOptions.map((interest, index) => (
                  <label key={index} className="flex items-center py-1">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            )}
          </div>
          <textarea
            name="message"
            placeholder="Mesaj"
            value={formData.message}
            onChange={handleChange}
            className="border p-2 w-full"
            rows="5"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              name="gdpr"
              checked={formData.gdpr}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-sm">
              Sunt de acord cu{" "}
              <Link href="/gdpr" className="underline text-blue-600">
                Politica de Confidențialitate GDPR
              </Link>
              .
            </span>
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition"
          >
            Trimite
          </button>
        </form>
        {/* Google Maps iframe */}
        <div className="relative h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5534.179563592656!2d23.25983764804949!3d46.08918777523267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zUMSDdHLDom5nZW5pLCAzN2I!5e0!3m2!1sro!2sro!4v1740380644542!5m2!1sro!2sro"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="absolute inset-0 w-full h-full"
    title="Locația PAC Water"
  ></iframe>
</div>
            
      </div>
    </div>
  );
}
