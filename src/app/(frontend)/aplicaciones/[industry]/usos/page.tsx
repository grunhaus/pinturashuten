import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustries, getIndustryBySlug, getApplicationsByIndustry } from '@/lib/payload'
import { ArrowRight, ArrowLeft, Check } from 'lucide-react'
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
    title: `Aplicaciones de Pintura para ${industry.name} | Pinturas Hüten`,
    description: `Descubre todas las aplicaciones de recubrimientos anticorrosivos para el sector ${industry.name.toLowerCase()}. Soluciones especializadas para cada necesidad.`,
  }
}

export default async function ApplicationsHubPage({ params }: Props) {
  const { industry: slug } = await params
  const [industry, industries] = await Promise.all([
    getIndustryBySlug(slug),
    getIndustries(),
  ])

  if (!industry) notFound()

  const applications = await getApplicationsByIndustry(industry.id)
  const siblingIndustries = industries.filter((i) => i.slug !== industry.slug)

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section>
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-[450px] flex items-center">
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

            <div className="relative z-10 w-full px-8 lg:px-16 py-16 lg:py-20">
              <Animated animation="fade-up">
                <Link
                  href={`/aplicaciones/${industry.slug}`}
                  className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a {industry.name}
                </Link>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium tracking-wide uppercase mb-6">
                  Aplicaciones
                </span>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl">
                  Aplicaciones para {industry.name}
                </h1>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                  Soluciones especializadas de recubrimientos anticorrosivos para cada aplicación específica en el sector {industry.name.toLowerCase()}.
                </p>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Animated animation="fade-up">
              <div className="text-center p-6 rounded-2xl border border-border">
                <div className="text-4xl font-bold mb-2">{applications.length}</div>
                <div className="text-sm text-muted-foreground">Aplicaciones</div>
              </div>
            </Animated>
            <Animated animation="fade-up" delay={100}>
              <div className="text-center p-6 rounded-2xl border border-border">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Años Experiencia</div>
              </div>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <div className="text-center p-6 rounded-2xl border border-border">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Garantía</div>
              </div>
            </Animated>
            <Animated animation="fade-up" delay={300}>
              <div className="text-center p-6 rounded-2xl border border-border">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Colores RAL</div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Catálogo Completo</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Todas las Aplicaciones</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <Animated key={app.id} animation="fade-up" delay={i * 50} className="h-full">
                <Link
                  href={`/aplicaciones/${industry.slug}/usos/${app.slug}`}
                  className="group h-full flex flex-col p-6 rounded-2xl border border-border bg-white hover:border-foreground hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground text-white flex items-center justify-center text-lg font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {app.shortDescription}
                  </p>
                  {app.benefits && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex flex-wrap gap-2">
                        {(app.benefits as string).split('\n').slice(0, 2).map((benefit, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                            <Check className="w-3 h-3 text-foreground" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Explora Más</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Otras Industrias</h2>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siblingIndustries.map((ind, i) => (
              <Animated key={ind.id} animation="fade-up" delay={i * 100}>
                <Link
                  href={`/aplicaciones/${ind.slug}/usos`}
                  className="group block p-6 rounded-2xl border border-border hover:border-foreground transition-all"
                >
                  <h3 className="font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                    {ind.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Ver aplicaciones
                    <ArrowRight className="w-4 h-4" />
                  </span>
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
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">¿Necesita Asesoría Técnica?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Nuestro equipo de expertos está listo para ayudarle a elegir la mejor solución para su aplicación específica.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/10 h-14 px-10 text-base" asChild>
                    <Link href="/colores">Ver Colores RAL</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
