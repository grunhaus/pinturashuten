'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, ChevronDown, Menu, X } from 'lucide-react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
        setOpenSubmenu(null)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'pt-2 lg:pt-4' : ''
      }`}>
        <div className={`transition-all duration-300 ${
          isScrolled
            ? 'mx-4 lg:mx-auto lg:w-fit rounded-full bg-white/95 backdrop-blur-md shadow-lg px-4 lg:px-6'
            : 'bg-white w-full'
        }`}>
          <div className={isScrolled ? '' : 'container'}>
            <div className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-14 gap-4 lg:gap-8' : 'h-16 lg:h-20'
            }`}>
              {/* Logo */}
              <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
                <Image
                  src="/logo-huten.avif"
                  alt="Pinturas Hüten"
                  width={180}
                  height={64}
                  className={`w-auto transition-all duration-300 ${isScrolled ? 'h-8 lg:h-10' : 'h-10 lg:h-16'}`}
                  priority
                />
              </Link>

              {/* Nav Links - Desktop */}
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

            {/* CTA - Desktop */}
            <Button className={`hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full transition-all duration-300 ${
              isScrolled ? 'text-sm h-9 px-4' : ''
            }`} asChild>
              <Link href="/contacto">Solicitar Cotización</Link>
            </Button>

            {/* Hamburger Menu Button - Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-foreground"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-semibold text-lg">Menú</span>
            <button
              onClick={closeMobileMenu}
              className="p-2 -mr-2 text-foreground"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            {/* Aplicaciones */}
            <div className="border-b border-border/50">
              <button
                onClick={() => toggleSubmenu('aplicaciones')}
                className="flex items-center justify-between w-full px-6 py-4 text-left font-medium"
              >
                Aplicaciones
                <ChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === 'aplicaciones' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === 'aplicaciones' ? 'max-h-80' : 'max-h-0'}`}>
                <Link href="/aplicaciones/vehiculos" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Vehículos y Maquinaria
                </Link>
                <Link href="/aplicaciones/naval" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Naval y Marítima
                </Link>
                <Link href="/aplicaciones/construccion" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Construcción
                </Link>
                <Link href="/aplicaciones/energia" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Energía
                </Link>
                <Link href="/aplicaciones/petroleo" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Petróleo y Gas
                </Link>
              </div>
            </div>

            {/* Productos */}
            <div className="border-b border-border/50">
              <button
                onClick={() => toggleSubmenu('productos')}
                className="flex items-center justify-between w-full px-6 py-4 text-left font-medium"
              >
                Productos
                <ChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === 'productos' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === 'productos' ? 'max-h-40' : 'max-h-0'}`}>
                <Link href="/productos/fondo-esmalte" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Fondo + Esmalte
                </Link>
              </div>
            </div>

            {/* Colores */}
            <Link href="/colores" onClick={closeMobileMenu} className="block px-6 py-4 font-medium border-b border-border/50">
              Colores
            </Link>

            {/* Empresa */}
            <div className="border-b border-border/50">
              <button
                onClick={() => toggleSubmenu('empresa')}
                className="flex items-center justify-between w-full px-6 py-4 text-left font-medium"
              >
                Empresa
                <ChevronDown className={`w-5 h-5 transition-transform ${openSubmenu === 'empresa' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openSubmenu === 'empresa' ? 'max-h-60' : 'max-h-0'}`}>
                <Link href="/nosotros" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Nosotros
                </Link>
                <Link href="/sostenibilidad" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Sostenibilidad
                </Link>
                <Link href="/noticias" onClick={closeMobileMenu} className="block px-10 py-3 text-foreground/70 hover:text-foreground">
                  Noticias
                </Link>
              </div>
            </div>

            {/* Contacto */}
            <Link href="/contacto" onClick={closeMobileMenu} className="block px-6 py-4 font-medium border-b border-border/50">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu CTA */}
          <div className="p-4 border-t">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold rounded-full" asChild>
              <Link href="/contacto" onClick={closeMobileMenu}>Solicitar Cotización</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main footer */}
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <Image
                src="/logo-huten.avif"
                alt="Pinturas Hüten"
                width={160}
                height={60}
                className="h-10 md:h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs md:text-sm text-primary-foreground/60 leading-relaxed mb-4 md:mb-6">
              Más de 20 años liderando la industria de recubrimientos anticorrosivos en Venezuela.
            </p>
            <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-accent" />
              Certificación de Calidad
            </div>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">Productos</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-primary-foreground/60">
              <li><Link href="/productos/fondo-esmalte" className="hover:text-primary-foreground transition-colors">Fondo + Esmalte</Link></li>
              <li><Link href="/colores" className="hover:text-primary-foreground transition-colors">Catálogo RAL</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">Aplicaciones</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-primary-foreground/60">
              <li><Link href="/aplicaciones/vehiculos" className="hover:text-primary-foreground transition-colors">Vehículos</Link></li>
              <li><Link href="/aplicaciones/naval" className="hover:text-primary-foreground transition-colors">Naval</Link></li>
              <li><Link href="/aplicaciones/construccion" className="hover:text-primary-foreground transition-colors">Construcción</Link></li>
              <li><Link href="/aplicaciones/energia" className="hover:text-primary-foreground transition-colors">Energía</Link></li>
              <li><Link href="/aplicaciones/petroleo" className="hover:text-primary-foreground transition-colors">Petróleo y Gas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">Empresa</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-primary-foreground/60">
              <li><Link href="/nosotros" className="hover:text-primary-foreground transition-colors">Nosotros</Link></li>
              <li><Link href="/sostenibilidad" className="hover:text-primary-foreground transition-colors">Sostenibilidad</Link></li>
              <li><Link href="/noticias" className="hover:text-primary-foreground transition-colors">Noticias</Link></li>
              <li><Link href="/contacto" className="hover:text-primary-foreground transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-serif text-base md:text-lg font-semibold mb-4 md:mb-6 text-primary-foreground">Contacto</h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-primary-foreground/60">
              <li className="flex items-start gap-2 md:gap-3">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>+58 412 123 4567</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 text-accent flex-shrink-0" />
                <span className="break-all">contacto@pinturashuten.com</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Venezuela</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-primary-foreground/40">
            <p className="text-center md:text-left">© 2026 Pinturas Hüten. Todos los derechos reservados.</p>
            <div className="flex gap-4 md:gap-8">
              <Link href="/privacidad" className="hover:text-primary-foreground transition-colors">Privacidad</Link>
              <Link href="/terminos" className="hover:text-primary-foreground transition-colors">Términos</Link>
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
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </>
  )
}
