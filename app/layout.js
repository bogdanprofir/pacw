import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CookieConsent from "./components/CookieConsent";

export const metadata = {
  title: 'PAC Water',
  description: 'Site oficial - Distribuitor de produse pentru tratarea apei',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
