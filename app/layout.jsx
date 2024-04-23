import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
    title: "PorpertyPulse | Find the perfect Rental",
    description: "Find the perfect Rental",
    keywords: "rental, find rentals, find properties"
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default MainLayout
