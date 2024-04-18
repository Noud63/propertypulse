import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: "PorpertyPulse | Find the perfect Rental",
    description: "Find the perfect Rental",
    keywords: "rental, find rentals, find properties"
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default MainLayout
