import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustries, getIndustryBySlug, getLocations, getColors, getApplicationsByIndustry } from '@/lib/payload'
import { ArrowRight, Check, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

interface Props {
  params: Promise<{ industry: string }>
}

export async function generateStaticParams() {
  const industries = await getIndustries()
  return industries.map((i) => ({ industry: i.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: slug } = await params
  const industry = await getIndustryBySlug(slug)
  if (!industry) return {}

  return {
    title: `Pinturas Anticorrosivas para ${industry.name} | Pinturas Huten`,
    description: `${industry.shortDescription}. Soluciones de pintura industrial de alta calidad para el sector ${industry.name.toLowerCase()}.`,
  }
}

export default async function IndustryPage({ params }: Props) {
  const { industry: slug } = await params
  const [industry, industries, locations, colors] = await Promise.all([
    getIndustryBySlug(slug),
    getIndustries(),
    getLocations(),
    getColors(),
  ])

  if (!industry) notFound()

  const applications = await getApplicationsByIndustry(industry.id)
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
                  {industry.name}
                </span>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl">
                  Pinturas Anticorrosivas para {industry.name}
                </h1>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
                  {industry.shortDescription}
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
                    <Link href="/colores">Ver Colores</Link>
                  </Button>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="container">
            <Animated animation="fade-up">
              <div className="mb-12">
                <span className="section-tag text-muted-foreground mb-4">Ventajas</span>
                <h2 className="font-serif text-3xl sm:text-4xl">Beneficios para {industry.name}</h2>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <Animated key={i} animation="fade-up" delay={100 + i * 100}>
                  <div className="border border-border/50 rounded-2xl p-8 bg-white h-full">
                    <div className="w-10 h-10 rounded-full bg-foreground text-white flex items-center justify-center font-semibold text-sm mb-6">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications */}
      {applications.length > 0 && (
        <section className="py-24">
          <div className="container">
            <Animated animation="fade-up">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <span className="section-tag text-muted-foreground mb-4">Aplicaciones</span>
                  <h2 className="font-serif text-3xl sm:text-4xl">Aplicaciones Comunes</h2>
                  <p className="text-muted-foreground mt-4 max-w-lg">
                    Soluciones especializadas para cada tipo de proyecto en el sector {industry.name.toLowerCase()}.
                  </p>
                </div>
                <Button variant="outline" className="rounded-full w-fit" asChild>
                  <Link href={`/aplicaciones/${industry.slug}/usos`}>
                    Ver Todas ({applications.length})
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.slice(0, 6).map((app, i) => (
                <Animated key={app.id} animation="fade-up" delay={50 + i * 50}>
                  <Link
                    href={`/aplicaciones/${industry.slug}/usos/${app.slug}`}
                    className="group flex flex-col h-full border border-border/50 rounded-2xl p-6 bg-white hover:border-foreground hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-foreground text-white flex items-center justify-center text-sm font-bold">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground/80 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {app.shortDescription}
                    </p>
                  </Link>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Colors Preview */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Sistema RAL</span>
                <h2 className="font-serif text-3xl sm:text-4xl">Colores Disponibles</h2>
                <p className="text-muted-foreground mt-4 max-w-lg">Todas nuestras pinturas estan disponibles en la carta RAL completa.</p>
              </div>
              <Button variant="outline" className="rounded-full w-fit" asChild>
                <Link href="/colores">
                  Ver Catalogo Completo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <div className="flex flex-wrap gap-2 mb-6">
              {colors.slice(0, 12).map((color) => (
                <Link
                  key={color.id}
                  href={`/colores/${color.code.toLowerCase()}`}
                  className="w-12 h-12 rounded-lg hover:scale-110 hover:z-10 transition-all duration-300 border border-border/30"
                  style={{ backgroundColor: color.hex }}
                  title={`RAL ${color.code}`}
                />
              ))}
              <Link
                href="/colores"
                className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                +
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Stock inmediato -- Cualquier color RAL en 48 horas
            </p>
          </Animated>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Cobertura</span>
              <h2 className="font-serif text-3xl sm:text-4xl">{industry.name} por Ubicacion</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {locations.map((location, i) => (
              <Animated key={location.id} animation="fade-up" delay={50 + i * 30}>
                <Link href={`/aplicaciones/${industry.slug}/${location.slug}`} className="group block">
                  <div className="border border-border/50 rounded-2xl p-5 text-center bg-white hover:shadow-md hover:border-foreground/20 transition-all duration-300">
                    <span className="font-medium text-sm">{location.name}</span>
                  </div>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Explorar</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Otras Industrias</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siblingIndustries.map((ind, i) => (
              <Animated key={ind.id} animation="fade-up" delay={100 + i * 50}>
                <Link href={`/aplicaciones/${ind.slug}`} className="group block">
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
                <h2 className="font-serif text-3xl sm:text-4xl mb-6">Necesita Pintura para {industry.name}?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Solicite asesoria tecnica gratuita para su proyecto.
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
