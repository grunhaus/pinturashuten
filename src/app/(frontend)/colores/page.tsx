import Link from 'next/link'
import { Metadata } from 'next'
import { getColors, getIndustries } from '@/lib/payload'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Catálogo de Colores RAL | Pinturas Huten',
  description: 'Explora nuestro catálogo completo de colores RAL para pinturas industriales. Más de 200 colores disponibles.',
}

export default async function ColorsHubPage() {
  const [colors, industries] = await Promise.all([getColors(), getIndustries()])

  const colorsByCategory: Record<string, typeof colors> = {}
  colors.forEach((c) => {
    const cat = c.category || c.code.charAt(0)
    if (!colorsByCategory[cat]) colorsByCategory[cat] = []
    colorsByCategory[cat].push(c)
  })

  const categoryNames: Record<string, string> = {
    '1': 'Amarillos y Beiges',
    '2': 'Naranjas',
    '3': 'Rojos',
    '4': 'Violetas',
    '5': 'Azules',
    '6': 'Verdes',
    '7': 'Grises',
    '8': 'Marrones',
    '9': 'Blancos y Negros',
  }

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Catálogo Completo</span>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Colores RAL para Pintura Industrial
            </h1>
          </Animated>
          <Animated animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Amplia selección de colores RAL disponibles en todas las líneas de pinturas anticorrosivas.
            </p>
          </Animated>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">{colors.length}+</div>
                <div className="text-muted-foreground text-sm">Colores Disponibles</div>
              </div>
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">RAL</div>
                <div className="text-muted-foreground text-sm">Estándar Internacional</div>
              </div>
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">100%</div>
                <div className="text-muted-foreground text-sm">Igualación de Color</div>
              </div>
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-4xl font-serif font-bold text-foreground mb-2">24-48h</div>
                <div className="text-muted-foreground text-sm">Preparación</div>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Colors by Category */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Sistema RAL</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Catálogo de Colores</h2>
          </Animated>

          {Object.entries(colorsByCategory).map(([cat, catColors]) => (
            <Animated key={cat} animation="fade-up">
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-sm font-bold">
                    {cat}
                  </span>
                  {categoryNames[cat] || `Serie ${cat}000`}
                  <span className="text-sm text-muted-foreground font-normal">{catColors.length} colores</span>
                </h3>
                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3">
                  {catColors.map((color) => (
                    <Link
                      key={color.id}
                      href={`/colores/${color.code.toLowerCase()}`}
                      className="group"
                      title={`RAL ${color.code} - ${color.name}`}
                    >
                      <div
                        className="aspect-square rounded-lg border-2 border-border group-hover:border-foreground group-hover:scale-105 transition-all shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                      <p className="mt-1 text-xs text-center text-muted-foreground group-hover:text-foreground truncate">
                        {color.code}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </section>

      {/* Industry Links */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Aplicaciones</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Aplicaciones por Industria</h2>
          </Animated>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Animated key={ind.id} animation="fade-up" delay={100 + i * 100}>
                <Link
                  href={`/aplicaciones/${ind.slug}`}
                  className="group block p-6 rounded-2xl border border-border hover:border-foreground transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground/80 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{ind.shortDescription}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-foreground">
                    Ver aplicaciones
                    <ArrowRight className="w-4 h-4" />
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
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">¿No encuentra su color?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Ofrecemos servicio de igualación de colores personalizados para su proyecto industrial.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/contacto">Solicitar Igualación</Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
