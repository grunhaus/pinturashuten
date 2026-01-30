import Link from 'next/link'
import { Metadata } from 'next'
import { Target, Eye, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Nosotros | Pinturas Huten',
  description: 'Conoce la historia de Pinturas Huten, empresa venezolana líder en pinturas anticorrosivas.',
}

export default function AboutPage() {
  const values = [
    { icon: Target, title: 'Misión', description: 'Proveer soluciones de pintura anticorrosiva de alta calidad que protejan y embellezcan.' },
    { icon: Eye, title: 'Visión', description: 'Ser la marca líder en pinturas anticorrosivas de Venezuela.' },
    { icon: Award, title: 'Calidad', description: 'Cada producto cumple con los más altos estándares de calidad.' },
    { icon: Users, title: 'Servicio', description: 'Brindamos atención personalizada a cada cliente.' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl">
            <Animated animation="fade-up">
              <span className="section-tag text-muted-foreground mb-4">Nuestra Historia</span>
            </Animated>
            <Animated animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                Protegiendo Venezuela con Calidad Superior
              </h1>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Somos una empresa venezolana comprometida con ofrecer soluciones de pintura anticorrosiva que realmente funcionan.
              </p>
            </Animated>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Animated animation="fade-up">
              <span className="section-tag text-muted-foreground mb-4">Nuestro Origen</span>
            </Animated>
            <Animated animation="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-serif mb-8">De Venezuela para Venezuela</h2>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Pinturas Huten nació de la necesidad de ofrecer a los venezolanos un producto que realmente cumpliera sus promesas.
                </p>
                <p>
                  Nuestra fórmula de Fondo + Esmalte Anticorrosivo es el resultado de años de investigación y desarrollo, diseñada específicamente para resistir las condiciones climáticas de nuestro país.
                </p>
                <p>
                  Hoy, Huten es la elección de profesionales y empresas en toda Venezuela, desde talleres automotrices hasta grandes industrias.
                </p>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <Animated animation="fade-up">
              <span className="section-tag text-muted-foreground mb-4">Lo Que Nos Define</span>
            </Animated>
            <Animated animation="fade-up" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-serif">Nuestros Valores</h2>
            </Animated>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <Animated key={value.title} animation="fade-up" delay={100 + i * 100}>
                <div className="p-6 rounded-2xl bg-muted/30 border border-border/50">
                  <div className="w-12 h-12 bg-foreground text-primary-foreground rounded-xl flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Venezuelan Pride */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl text-center">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Identidad</span>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">Orgullosamente Venezolanos</h2>
          </Animated>
          <Animated animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creemos en el talento y la capacidad de nuestra gente. Por eso, cada producto Huten es fabricado en Venezuela, contribuyendo al desarrollo industrial del país.
            </p>
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
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">Forma parte de la familia Huten</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Contáctenos para conocer más sobre nuestros productos y cómo podemos ayudarle.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
