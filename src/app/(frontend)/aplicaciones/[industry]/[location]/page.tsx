import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustries, getIndustryBySlug, getLocations, getLocationBySlug } from '@/lib/payload'
import { ArrowRight, MapPin, Phone, Mail, Check, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

interface Props {
  params: Promise<{ industry: string; location: string }>
}

export async function generateStaticParams() {
  const [industries, locations] = await Promise.all([getIndustries(), getLocations()])
  const params: Array<{ industry: string; location: string }> = []
  for (const ind of industries) {
    for (const loc of locations) {
      params.push({ industry: ind.slug, location: loc.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: indSlug, location: locSlug } = await params
  const [industry, location] = await Promise.all([
    getIndustryBySlug(indSlug),
    getLocationBySlug(locSlug),
  ])
  if (!industry || !location) return {}

  return {
    title: `Pinturas para ${industry.name} en ${location.name} | Pinturas Huten`,
    description: `Proveedor de pinturas anticorrosivas para ${industry.name} en ${location.name}, ${location.state}. Entrega local, asesoria tecnica gratuita.`,
  }
}

export default async function IndustryLocationPage({ params }: Props) {
  const { industry: indSlug, location: locSlug } = await params
  const [industry, location, industries, locations] = await Promise.all([
    getIndustryBySlug(indSlug),
    getLocationBySlug(locSlug),
    getIndustries(),
    getLocations(),
  ])

  if (!industry || !location) notFound()

  const siblingLocations = locations.filter((l) => l.slug !== location.slug).slice(0, 8)
  const siblingIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 5)
  const benefits = industry.benefits ? (industry.benefits as string).split('\n').filter(Boolean) : []

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section>
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[550px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={`/industries/${industry.slug}.svg`}
                alt={industry.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            </div>

            <div className="relative z-10 w-full px-8 lg:px-16 py-16 lg:py-24">
              <Animated animation="fade-up">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium tracking-wide uppercase mb-6">
                  {industry.name} en {location.name}
                </span>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl">
                  Pinturas Anticorrosivas para {industry.name} en {location.name}
                </h1>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
                  Proveedor lider de soluciones de pintura industrial para el sector {industry.name.toLowerCase()} en {location.name}, {location.state}.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="rounded-full h-14 px-8 text-base bg-white text-black hover:bg-white/90" asChild>
                    <Link href="/contacto">
                      Solicitar Cotizacion
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full h-14 px-8 text-base text-white hover:bg-white/10" asChild>
                    <Link href={`/aplicaciones/${industry.slug}`}>
                      Ver Industria
                    </Link>
                  </Button>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Info */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Servicio Local</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Servicio en {location.name}</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-3 gap-6">
            <Animated animation="fade-up" delay={100}>
              <div className="border border-border/50 rounded-2xl p-8 bg-white h-full">
                <div className="w-12 h-12 rounded-2xl bg-foreground text-white flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Entrega Local</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Servicio de entrega directa en {location.name} y zonas aledanas.
                </p>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={200}>
              <div className="border border-border/50 rounded-2xl p-8 bg-white h-full">
                <div className="w-12 h-12 rounded-2xl bg-foreground text-white flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Asesoria Tecnica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Equipo tecnico disponible para la zona {location.state}.
                </p>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={300}>
              <div className="border border-border/50 rounded-2xl p-8 bg-white h-full">
                <div className="w-12 h-12 rounded-2xl bg-foreground text-white flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Cotizacion Rapida</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Respuesta en menos de 24 horas para proyectos en {location.name}.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-24">
          <div className="container">
            <Animated animation="fade-up">
              <div className="mb-12">
                <span className="section-tag text-muted-foreground mb-4">Ventajas</span>
                <h2 className="font-serif text-3xl sm:text-4xl">Beneficios para {industry.name} en {location.name}</h2>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <Animated key={i} animation="fade-up" delay={50 + i * 50}>
                  <div className="flex items-start gap-4 border border-border/50 rounded-2xl p-6 bg-white">
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="leading-relaxed">{benefit}</span>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Locations */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Mas Ubicaciones</span>
              <h2 className="font-serif text-3xl sm:text-4xl">{industry.name} en Otras Ubicaciones</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siblingLocations.map((loc, i) => (
              <Animated key={loc.id} animation="fade-up" delay={50 + i * 50}>
                <Link href={`/aplicaciones/${industry.slug}/${loc.slug}`} className="group block">
                  <div className="border border-border/50 rounded-2xl p-5 text-center bg-white hover:shadow-md hover:border-foreground/20 transition-all duration-300">
                    <span className="font-medium text-sm">{industry.name} en {loc.name}</span>
                  </div>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries in Same Location */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Explorar</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Otras Industrias en {location.name}</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siblingIndustries.map((ind, i) => (
              <Animated key={ind.id} animation="fade-up" delay={100 + i * 50}>
                <Link href={`/aplicaciones/${ind.slug}/${location.slug}`} className="group block">
                  <div className="flex items-center gap-3 border border-border/50 rounded-2xl p-5 bg-white hover:shadow-md hover:border-foreground/20 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <span className="font-medium text-sm">{ind.name}</span>
                  </div>
                </Link>
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
                <h2 className="font-serif text-3xl sm:text-4xl mb-6">Cotizacion para {industry.name} en {location.name}</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Obtenga precios competitivos para su proyecto industrial.
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
