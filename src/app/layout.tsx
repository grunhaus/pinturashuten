import React from 'react'
import type { Metadata } from 'next'
import { Roboto, Roboto_Serif } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pinturas Hüten | Recubrimientos Industriales de Excelencia',
  description: 'Fabricante líder de pinturas anticorrosivas industriales en Venezuela. Más de 20 años protegiendo la industria con excelencia y compromiso.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${roboto.variable} ${robotoSerif.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  )
}
