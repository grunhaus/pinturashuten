'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'pt-4' : ''
    }`}>
      <div className={`transition-all duration-300 ${
        isScrolled
          ? 'mx-auto w-fit rounded-full bg-white/95 backdrop-blur-md shadow-lg px-6'
          : 'bg-white w-full'
      }`}>
        <div className={isScrolled ? '' : 'container'}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 gap-8' : 'h-20'
          }`}>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-huten.avif"
                alt="Pinturas Hüten"
                width={180}
                height={64}
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-16'}`}
                priority
              />
            </Link>

            {/* Nav Links */}
            <nav className={`hidden lg:flex items-center text-base font-medium transition-all duration-300 ${
              isScrolled ? 'gap-6 text-sm' : 'gap-10'
            }`}>
              {/* Aplicaciones Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 transition-colors hover:text-foreground text-foreground/70">
                  Aplicaciones
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-border/50 shadow-lg rounded-xl min-w-[220px] text-sm overflow-hidden">
                    <Link
                      href="/aplicaciones/vehiculos"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Vehículos y Maquinaria
                    </Link>
                    <Link
                      href="/aplicaciones/naval"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Naval y Marítima
                    </Link>
                    <Link
                      href="/aplicaciones/construccion"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Construcción
                    </Link>
                    <Link
                      href="/aplicaciones/energia"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Energía
                    </Link>
                    <Link
                      href="/aplicaciones/petroleo"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Petróleo y Gas
                    </Link>
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 transition-colors hover:text-foreground text-foreground/70">
                  Productos
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-border/50 shadow-lg rounded-xl min-w-[200px] text-sm overflow-hidden">
                    <Link
                      href="/productos/fondo-esmalte"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Fondo + Esmalte
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/colores" className="transition-colors hover:text-foreground text-foreground/70">
                Colores
              </Link>

              {/* Empresa Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 transition-colors hover:text-foreground text-foreground/70">
                  Empresa
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-border/50 shadow-lg rounded-xl min-w-[200px] text-sm overflow-hidden">
                    <Link
                      href="/nosotros"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Nosotros
                    </Link>
                    <Link
                      href="/sostenibilidad"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Sostenibilidad
                    </Link>
                    <Link
                      href="/noticias"
                      className="block px-4 py-3 text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                    >
                      Noticias
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/contacto" className="transition-colors hover:text-foreground text-foreground/70">
                Contacto
              </Link>
            </nav>

            {/* CTA */}
            <Button className={`bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full transition-all duration-300 ${
              isScrolled ? 'text-sm h-9 px-4' : ''
            }`} asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main footer */}
      <div className="container py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo-huten.avif"
                alt="Pinturas Hüten"
                width={160}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Más de 20 años liderando la industria de recubrimientos anticorrosivos en Venezuela.
              Excelencia, innovación y compromiso en cada producto.
            </p>
            <div className="flex items-center gap-2 text-accent text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Certificación de Calidad
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">Productos</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/productos/fondo-esmalte" className="hover:text-primary-foreground transition-colors">Fondo + Esmalte</Link></li>
              <li><Link href="/colores" className="hover:text-primary-foreground transition-colors">Catálogo RAL</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">Aplicaciones</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/aplicaciones/vehiculos" className="hover:text-primary-foreground transition-colors">Vehículos y Maquinaria</Link></li>
              <li><Link href="/aplicaciones/naval" className="hover:text-primary-foreground transition-colors">Naval y Marítima</Link></li>
              <li><Link href="/aplicaciones/construccion" className="hover:text-primary-foreground transition-colors">Construcción</Link></li>
              <li><Link href="/aplicaciones/energia" className="hover:text-primary-foreground transition-colors">Energía</Link></li>
              <li><Link href="/aplicaciones/petroleo" className="hover:text-primary-foreground transition-colors">Petróleo y Gas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">Empresa</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link href="/sostenibilidad" className="hover:text-primary-foreground transition-colors">Sostenibilidad</Link></li>
              <li><Link href="/noticias" className="hover:text-primary-foreground transition-colors">Noticias</Link></li>
              <li><Link href="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">Contacto</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <span>+58 412 123 4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <span>contacto@pinturashuten.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>Venezuela</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/40">
            <p>© 2026 Pinturas Hüten. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <Link href="/privacidad" className="hover:text-primary-foreground transition-colors">Política de Privacidad</Link>
              <Link href="/terminos" className="hover:text-primary-foreground transition-colors">Términos y Condiciones</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}
