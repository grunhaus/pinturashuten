import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getColors, getColorByCode, getIndustries } from '@/lib/payload'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

interface Props {
  params: Promise<{ code: string }>
}

export async function generateStaticParams() {
  const colors = await getColors()
  return colors.map((c) => ({ code: c.code.toLowerCase() }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params
  const color = await getColorByCode(code)
  if (!color) return {}

  return {
    title: `Pintura RAL ${color.code} ${color.name} | Pinturas Huten`,
    description: `Pintura industrial RAL ${color.code} (${color.name}). Disponible en presentaciones de 1, 5 y 20 litros.`,
  }
}

export default async function ColorPage({ params }: Props) {
  const { code } = await params
  const [color, colors, industries] = await Promise.all([
    getColorByCode(code),
    getColors(),
    getIndustries(),
  ])

  if (!color) notFound()

  const relatedColors = colors.filter((c) => c.code !== color.code).slice(0, 8)

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Animated animation="fade-up">
              <div className="flex flex-col items-center">
                <div
                  className="w-64 h-64 rounded-2xl shadow-2xl border-8 border-white"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="mt-4 text-sm text-muted-foreground font-mono">
                  {color.hex}
                </div>
              </div>
            </Animated>
            <div>
              <Animated animation="fade-up">
                <span className="section-tag text-muted-foreground mb-4">RAL {color.code}</span>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                  {color.name}
                </h1>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Pintura industrial de alta calidad en color RAL {color.code}.
                  Disponible en múltiples presentaciones para todo tipo de proyectos.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="rounded-full h-14 px-8 text-base" asChild>
                    <Link href="/contacto">Solicitar Cotización</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base" asChild>
                    <Link href="/colores">Ver Todos los Colores</Link>
                  </Button>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Detalles</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Especificaciones</h2>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl border border-border">
                <span className="section-tag text-muted-foreground mb-2">Codigo RAL</span>
                <p className="text-2xl font-serif font-bold">{color.code}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border">
                <span className="section-tag text-muted-foreground mb-2">Nombre</span>
                <p className="text-2xl font-serif font-bold">{color.name}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border">
                <span className="section-tag text-muted-foreground mb-2">Codigo Hex</span>
                <p className="text-2xl font-mono font-bold">{color.hex}</p>
              </div>
              <div className="p-6 rounded-2xl border border-border">
                <span className="section-tag text-muted-foreground mb-2">Disponibilidad</span>
                <p className="text-2xl font-serif font-bold">En Stock</p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Presentations */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Opciones</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Presentaciones</h2>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl border border-border text-center">
                <div className="text-4xl font-serif font-bold mb-2">1L</div>
                <p className="text-muted-foreground">Ideal para retoques y trabajos puntuales</p>
              </div>
              <div className="relative p-8 rounded-2xl border-2 border-foreground text-center">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs font-medium px-4 py-1 rounded-full">
                  Mas Popular
                </span>
                <div className="text-4xl font-serif font-bold mb-2">5L</div>
                <p className="text-muted-foreground">Proyectos medianos e industriales</p>
              </div>
              <div className="p-8 rounded-2xl border border-border text-center">
                <div className="text-4xl font-serif font-bold mb-2">20L</div>
                <p className="text-muted-foreground">Mejor precio por litro para grandes obras</p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Aplicaciones</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Industrias Recomendadas</h2>
          </Animated>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.slice(0, 6).map((ind, i) => (
              <Animated key={ind.id} animation="fade-up" delay={100 + i * 100}>
                <Link
                  href={`/aplicaciones/${ind.slug}`}
                  className="group flex items-center gap-4 p-6 rounded-2xl border border-border hover:border-foreground transition-all"
                >
                  <ArrowRight className="w-5 h-5 text-foreground flex-shrink-0" />
                  <span className="font-medium">{ind.name}</span>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Related Colors */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Explorar</span>
                <h2 className="text-4xl sm:text-5xl font-serif">Colores Relacionados</h2>
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
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {relatedColors.map((c) => (
                <Link key={c.id} href={`/colores/${c.code.toLowerCase()}`} className="group">
                  <div
                    className="aspect-square rounded-lg border-2 border-border group-hover:border-foreground group-hover:scale-105 transition-all"
                    style={{ backgroundColor: c.hex }}
                  />
                  <p className="mt-2 text-xs text-center text-muted-foreground group-hover:text-foreground">
                    RAL {c.code}
                  </p>
                </Link>
              ))}
            </div>
          </Animated>
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
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">¿Necesita RAL {color.code}?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Solicite una cotización con el mejor precio para su proyecto industrial.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/contacto">Solicitar Cotizacion</Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
