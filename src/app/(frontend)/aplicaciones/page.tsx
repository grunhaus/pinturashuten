import Link from 'next/link'
import { Metadata } from 'next'
import { getIndustries, getLocations } from '@/lib/payload'
import { ArrowRight, Ship, Fuel, Building2, Car, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Pinturas Anticorrosivas por Industria | Pinturas Huten',
  description: 'Soluciones de pintura anticorrosiva para todas las industrias. Naval, petrolera, construcción, automotriz y más.',
}

const iconMap: Record<string, React.ReactNode> = {
  ship: <Ship className="w-8 h-8" />,
  oil: <Fuel className="w-8 h-8" />,
  building: <Building2 className="w-8 h-8" />,
  car: <Car className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
}

export default async function IndustriesHubPage() {
  const [industries, locations] = await Promise.all([getIndustries(), getLocations()])

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Soluciones por Industria</span>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Pinturas Anticorrosivas Industriales
            </h1>
          </Animated>
          <Animated animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Soluciones especializadas de proteccion anticorrosiva para cada sector industrial.
            </p>
          </Animated>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Sectores</span>
                <h2 className="font-serif text-3xl sm:text-4xl">Industrias que Servimos</h2>
              </div>
              <p className="text-muted-foreground max-w-md lg:text-right">
                Recubrimientos de alto rendimiento adaptados a las necesidades de cada industria.
              </p>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <Animated key={industry.id} animation="fade-up" delay={100 + i * 100}>
                <Link href={`/aplicaciones/${industry.slug}`} className="group block">
                  <div className="h-full border border-border/50 rounded-2xl p-8 bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mb-6 text-foreground/70 group-hover:bg-foreground group-hover:text-white transition-colors duration-300">
                      {(industry.icon && iconMap[industry.icon]) || <Building2 className="w-8 h-8" />}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{industry.shortDescription}</p>
                    <span className="inline-flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                      Ver soluciones <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Location Matrix */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Cobertura</span>
              <h2 className="font-serif text-3xl sm:text-4xl mb-4">Cobertura Nacional</h2>
              <p className="text-muted-foreground max-w-xl">Atendemos proyectos en toda Venezuela con entrega directa y asesoria tecnica local.</p>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.slice(0, 12).map((location, i) => (
              <Animated key={location.id} animation="fade-up" delay={50 + i * 50}>
                <div className="border border-border/50 rounded-2xl p-6 bg-white">
                  <h3 className="font-semibold mb-3">{location.name}</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {industries.slice(0, 3).map((industry) => (
                      <Link
                        key={industry.id}
                        href={`/aplicaciones/${industry.slug}/${location.slug}`}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <Animated animation="scale-in">
            <div className="relative bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground rounded-3xl p-12 lg:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-3xl sm:text-4xl mb-6">No encuentra su industria?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Contactenos para soluciones personalizadas adaptadas a su sector.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/contacto">
                    Solicitar Cotizacion
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
