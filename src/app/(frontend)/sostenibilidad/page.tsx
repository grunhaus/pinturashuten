import Link from 'next/link'
import { Metadata } from 'next'
import { Leaf, Recycle, Droplets, Shield, TreePine, Factory } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Sostenibilidad | Pinturas Hüten',
  description: 'Nuestro compromiso con el medio ambiente y la sostenibilidad en la industria de recubrimientos anticorrosivos.',
}

export default function SostenibilidadPage() {
  const initiatives = [
    {
      icon: Leaf,
      title: 'Fórmulas Eco-Responsables',
      description: 'Desarrollo continuo de fórmulas con menor impacto ambiental, reduciendo compuestos orgánicos volátiles sin sacrificar rendimiento.',
    },
    {
      icon: Recycle,
      title: 'Gestión de Residuos',
      description: 'Programas de reciclaje y reutilización de envases, minimizando la huella ambiental de nuestros productos en toda su cadena de valor.',
    },
    {
      icon: Droplets,
      title: 'Eficiencia en Recursos',
      description: 'Optimización del consumo de agua y energía en nuestros procesos de producción mediante tecnología de vanguardia.',
    },
    {
      icon: Shield,
      title: 'Protección Duradera',
      description: 'Productos de larga duración que reducen la frecuencia de repintado, disminuyendo el consumo total de materiales.',
    },
    {
      icon: TreePine,
      title: 'Compromiso Ambiental',
      description: 'Participación activa en programas de reforestación y conservación en las comunidades donde operamos.',
    },
    {
      icon: Factory,
      title: 'Producción Responsable',
      description: 'Procesos de fabricación que cumplen con las normativas ambientales más exigentes del sector.',
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Compromiso Ambiental</span>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight max-w-4xl">
              Protegemos el Metal y el Medio Ambiente
            </h1>
          </Animated>
          <Animated animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              En Pinturas Hüten creemos que la excelencia en protección anticorrosiva
              y la responsabilidad ambiental van de la mano.
            </p>
          </Animated>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24">
        <div className="container">
          <Animated animation="scale-in">
            <div className="relative rounded-3xl overflow-hidden bg-muted/30 p-12 lg:p-20">
              <div className="max-w-3xl mx-auto text-center">
                <span className="section-tag text-muted-foreground mb-4">Nuestra Visión</span>
                <h2 className="text-3xl sm:text-4xl mb-8">
                  Innovación con Responsabilidad
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Cada decisión que tomamos considera su impacto en el entorno. Desde la selección
                  de materias primas hasta el diseño de envases, trabajamos para minimizar nuestra
                  huella ambiental mientras maximizamos la protección que ofrecemos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nuestro sistema Fondo + Esmalte en un solo producto no solo ahorra tiempo y dinero,
                  sino que también reduce el consumo de materiales y la generación de residuos.
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Iniciativas</span>
            <h2 className="text-4xl sm:text-5xl font-serif mb-12">Nuestras Acciones</h2>
          </Animated>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((item, i) => (
              <Animated key={item.title} animation="fade-up" delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-xl bg-foreground text-primary-foreground flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-5xl font-serif font-bold mb-3">50%</div>
                <p className="text-muted-foreground">Reducción de capas necesarias con nuestro sistema 2 en 1</p>
              </div>
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-5xl font-serif font-bold mb-3">+10</div>
                <p className="text-muted-foreground">Años de protección que reducen frecuencia de repintado</p>
              </div>
              <div className="text-center p-8 rounded-2xl border border-border">
                <div className="text-5xl font-serif font-bold mb-3">100%</div>
                <p className="text-muted-foreground">Cumplimiento de normativas ambientales venezolanas</p>
              </div>
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
                <h2 className="text-3xl sm:text-4xl mb-6">Construyamos un Futuro Sostenible</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Conozca cómo nuestros productos pueden contribuir a sus objetivos de sostenibilidad.
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
