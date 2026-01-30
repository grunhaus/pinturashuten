import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getIndustries, getIndustryBySlug, getApplicationsByIndustry, getApplicationBySlug, getAllApplications } from '@/lib/payload'
import { ArrowRight, ArrowLeft, Check, Shield, Clock, Award, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

interface Props {
  params: Promise<{ industry: string; slug: string }>
}

export async function generateStaticParams() {
  const applications = await getAllApplications()
  return applications.map((app) => {
    const industry = app.industry as { slug: string }
    return {
      industry: industry.slug,
      slug: app.slug,
    }
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const application = await getApplicationBySlug(slug)
  if (!application) return {}

  const industry = application.industry as { name: string }

  return {
    title: `${application.name} - Pinturas para ${industry.name} | Pinturas Hüten`,
    description: application.shortDescription,
  }
}

export default async function ApplicationDetailPage({ params }: Props) {
  const { industry: industrySlug, slug } = await params
  const [application, industry] = await Promise.all([
    getApplicationBySlug(slug),
    getIndustryBySlug(industrySlug),
  ])

  if (!application || !industry) notFound()

  const allApplications = await getApplicationsByIndustry(industry.id)
  const relatedApplications = allApplications.filter((app) => app.slug !== slug).slice(0, 6)
  const benefits = application.benefits ? (application.benefits as string).split('\n').filter(Boolean) : []
  const specifications = application.specifications ? (application.specifications as string).split('\n').filter(Boolean) : []
  const recommendedProducts = application.recommendedProducts ? (application.recommendedProducts as string).split('\n').filter(Boolean) : []

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section>
        <div className="container">
          <div className="relative rounded-3xl overflow-hidden min-h-[450px] lg:min-h-[500px] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={`/industries/${industry.slug}.svg`}
                alt={industry.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
            </div>

            <div className="relative z-10 w-full px-8 lg:px-16 py-16 lg:py-20">
              <Animated animation="fade-up">
                <Link
                  href={`/aplicaciones/${industry.slug}/usos`}
                  className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white/80 transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Todas las aplicaciones de {industry.name}
                </Link>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium tracking-wide uppercase mb-6">
                  {industry.name}
                </span>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight max-w-3xl">
                  {application.name}
                </h1>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <p className="text-lg text-white/70 max-w-2xl leading-relaxed mb-10">
                  {application.shortDescription}
                </p>
              </Animated>
              <Animated animation="fade-up" delay={400}>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="rounded-full h-14 px-8 text-base bg-white text-black hover:bg-white/90" asChild>
                    <Link href="/contacto">
                      Solicitar Cotización
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full h-14 px-8 text-base text-white hover:bg-white/10" asChild>
                    <Link href="/productos/fondo-esmalte">Ver Producto</Link>
                  </Button>
                </div>
              </Animated>
            </div>
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
                <h2 className="font-serif text-3xl sm:text-4xl">Beneficios Principales</h2>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <Animated key={i} animation="fade-up" delay={i * 100}>
                  <div className="p-6 rounded-2xl border border-border bg-white">
                    <div className="w-12 h-12 rounded-xl bg-foreground text-white flex items-center justify-center mb-4">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit}</h3>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Description & Specs */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Animated animation="fade-up">
                <span className="section-tag text-muted-foreground mb-4">Descripción</span>
                <h2 className="font-serif text-3xl sm:text-4xl mb-6">Sobre esta Aplicación</h2>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <div className="prose prose-neutral max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {application.longDescription || application.shortDescription}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestros recubrimientos para {application.name.toLowerCase()} han sido desarrollados
                    específicamente para las condiciones del sector {industry.name.toLowerCase()} en Venezuela.
                    Con más de 20 años de experiencia, garantizamos la máxima protección y durabilidad.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada producto es formulado siguiendo los más altos estándares de calidad, utilizando
                    materias primas de primera línea y tecnología de vanguardia en protección anticorrosiva.
                  </p>
                </div>
              </Animated>
            </div>

            <div>
              <Animated animation="fade-up" delay={200}>
                <span className="section-tag text-muted-foreground mb-4">Características</span>
                <h2 className="font-serif text-3xl sm:text-4xl mb-6">Especificaciones</h2>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-white flex items-center justify-center">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Protección Garantizada</div>
                      <div className="text-sm text-muted-foreground">5+ años de durabilidad</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-white flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Secado Rápido</div>
                      <div className="text-sm text-muted-foreground">Al tacto en 2 horas</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-white">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-white flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium">Calidad Certificada</div>
                      <div className="text-sm text-muted-foreground">Estándares ISO 9001</div>
                    </div>
                  </div>
                  {specifications.map((spec, i) => {
                    const [label, value] = spec.includes(':') ? spec.split(':') : [spec, '']
                    return (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border bg-white">
                        <span className="text-muted-foreground">{label.trim()}</span>
                        <span className="font-medium">{value.trim() || 'Incluido'}</span>
                      </div>
                    )
                  })}
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="mb-12">
              <span className="section-tag text-muted-foreground mb-4">Recomendación</span>
              <h2 className="font-serif text-3xl sm:text-4xl">Producto Recomendado</h2>
            </div>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <Link
              href="/productos/fondo-esmalte"
              className="group block p-8 rounded-2xl border border-border bg-white hover:border-foreground hover:shadow-lg transition-all"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-sm text-muted-foreground mb-2">Fondo + Esmalte Anticorrosivo</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4 group-hover:text-foreground/80 transition-colors">
                    Sistema 2 en 1 de Alto Rendimiento
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Nuestra fórmula exclusiva combina fondo anticorrosivo y esmalte en un solo producto,
                    ofreciendo máxima protección con menos capas y tiempo de aplicación reducido.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {['Rendimiento 35-40 m²/gal', '200+ colores RAL', 'Secado rápido', 'Fácil aplicación'].map((feature, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-sm">
                        <Check className="w-4 h-4 text-foreground" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="inline-flex items-center gap-2 text-lg font-medium group-hover:gap-3 transition-all">
                    Ver Detalles
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </Animated>
        </div>
      </section>

      {/* Related Applications */}
      {relatedApplications.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="container">
            <Animated animation="fade-up">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <span className="section-tag text-muted-foreground mb-4">Relacionadas</span>
                  <h2 className="font-serif text-3xl sm:text-4xl">Otras Aplicaciones en {industry.name}</h2>
                </div>
                <Button variant="outline" className="rounded-full w-fit" asChild>
                  <Link href={`/aplicaciones/${industry.slug}/usos`}>
                    Ver Todas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Animated>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedApplications.map((app, i) => (
                <Animated key={app.id} animation="fade-up" delay={i * 100}>
                  <Link
                    href={`/aplicaciones/${industry.slug}/usos/${app.slug}`}
                    className="group block p-6 rounded-2xl border border-border bg-white hover:border-foreground transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground/80 transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {app.shortDescription}
                    </p>
                  </Link>
                </Animated>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <Animated animation="scale-in">
            <div className="relative bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground rounded-3xl p-12 lg:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">¿Listo para su Proyecto?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Contáctenos para recibir asesoría técnica personalizada y una cotización para su aplicación de {application.name.toLowerCase()}.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="rounded-full text-white hover:bg-white/10 h-14 px-10 text-base" asChild>
                    <Link href={`/aplicaciones/${industry.slug}`}>Volver a {industry.name}</Link>
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
