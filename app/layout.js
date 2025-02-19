import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'PAC Water',
  description: 'Site oficial - Distribuitor de produse pentru tratarea apei',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
