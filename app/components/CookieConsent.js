"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm">
        Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorului. Prin continuarea navigării, sunteți de acord cu utilizarea cookie-urilor.
      </p>
      <button
        onClick={handleAccept}
        className="mt-2 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Accept
      </button>
    </div>
  );
}
