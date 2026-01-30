import Link from 'next/link'
import Image from 'next/image'
import { getColors } from '@/lib/payload'
import { Check, X, ArrowRight, Shield, Clock, Droplets, Sun, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export const metadata = {
  title: 'Fondo + Esmalte Anticorrosivo | Pinturas Hüten',
  description: 'Sistema integral fondo y esmalte en un solo producto. Protección anticorrosiva superior con acabado brillante. Colores RAL disponibles.',
}

export default async function FondoEsmaltePage() {
  const colors = await getColors()

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-24">
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Animated animation="fade-up">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Producto Estrella</span>
                <h1 className="text-4xl sm:text-5xl mb-8 text-foreground">
                  Fondo + Esmalte
                  <br />
                  <span className="text-accent">Anticorrosivo Hüten</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  La revolución en protección anticorrosiva. Un sistema integral que combina fondo y esmalte
                  en un solo producto de alto rendimiento, reduciendo tiempos de aplicación y costos
                  sin sacrificar calidad.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button size="lg" className="rounded-full h-14 px-10 text-base bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                    <Link href="/contacto">
                      Solicitar Cotización
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-base border-primary/20 hover:bg-primary/5" asChild>
                    <Link href="/colores">Ver Colores Disponibles</Link>
                  </Button>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Secado en 30 min
                  </span>
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-accent" />
                    Envío Nacional
                  </span>
                </div>
              </div>
            </Animated>

            <Animated animation="fade-left" delay={200}>
              <div className="relative flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/black-paint.png"
                    alt="Fondo + Esmalte Anticorrosivo Hüten"
                    width={500}
                    height={500}
                    className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg">
                    2 en 1
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="py-24 border-y border-border/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Doble Protección', desc: 'Fondo anticorrosivo y esmalte de acabado en una sola fórmula' },
              { icon: Clock, title: 'Secado Rápido', desc: 'Al tacto en 30 minutos para mayor productividad' },
              { icon: Sun, title: 'Brillo Duradero', desc: 'Acabado brillante que resiste la intemperie' },
              { icon: Droplets, title: 'Alto Rendimiento', desc: 'Mayor cobertura por litro aplicado' },
            ].map((item, i) => (
              <Animated key={i} animation="fade-up" delay={i * 100}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center bg-foreground">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20">
            <Animated animation="fade-up">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Características</span>
                <h2 className="text-3xl sm:text-4xl mb-8">
                  Especificaciones Técnicas
                </h2>

                <div className="space-y-6">
                  {[
                    { label: 'Tipo', value: 'Esmalte sintético anticorrosivo' },
                    { label: 'Acabado', value: 'Brillante' },
                    { label: 'Secado al tacto', value: '30 minutos' },
                    { label: 'Secado total', value: '24 horas' },
                    { label: 'Rendimiento', value: '10-12 m²/litro por mano' },
                    { label: 'Diluyente', value: 'Thinner acrílico' },
                    { label: 'Aplicación', value: 'Brocha, rodillo o pistola' },
                    { label: 'Manos recomendadas', value: '2-3 manos' },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between items-center py-4 border-b border-border/50">
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={200}>
              <div>
                <span className="section-tag text-muted-foreground mb-4">Aplicaciones</span>
                <h2 className="text-3xl sm:text-4xl mb-8">
                  Usos Recomendados
                </h2>

                <div className="space-y-4">
                  {[
                    'Estructuras metálicas y vigas de acero',
                    'Rejas, portones y cercas metálicas',
                    'Maquinaria industrial y equipos',
                    'Tanques y recipientes metálicos',
                    'Carrocerías y chasis de vehículos',
                    'Tuberías y ductos expuestos',
                    'Embarcaciones y estructuras navales',
                    'Torres y antenas de comunicación',
                  ].map((use, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="w-5 h-5 flex-shrink-0 rounded flex items-center justify-center bg-accent">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <Animated animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="section-tag text-muted-foreground mb-4">Comparativa</span>
              <h2 className="text-3xl sm:text-4xl mb-6">
                La Ventaja Hüten
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vea por qué nuestro sistema Fondo + Esmalte supera a los métodos tradicionales
              </p>
            </div>
          </Animated>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Animated animation="fade-up" delay={100}>
              <div className="relative p-10 border-2 border-accent bg-white rounded-3xl">
                <div className="absolute -top-4 left-8 px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                  Recomendado
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-8">Fondo + Esmalte Hüten</h3>
                <div className="space-y-5">
                  {[
                    'Una sola aplicación cumple función de fondo y esmalte',
                    'Reduce tiempo de trabajo hasta en un 50%',
                    'Menor costo total por metro cuadrado protegido',
                    'Acabado brillante uniforme y duradero',
                    'Disponible en todos los colores RAL',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 flex-shrink-0 rounded flex items-center justify-center bg-accent">
                        <Check className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>

            <Animated animation="fade-up" delay={200}>
              <div className="p-10 border border-border/50 bg-white rounded-3xl">
                <h3 className="text-2xl font-serif font-semibold mb-8 text-muted-foreground">Sistema Tradicional</h3>
                <div className="space-y-5">
                  {[
                    'Requiere aplicar primer anticorrosivo primero',
                    'Luego aplicar esmalte como capa de acabado',
                    'Doble tiempo de espera entre capas',
                    'Mayor consumo de material total',
                    'Posibles problemas de adherencia entre capas',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 flex-shrink-0 rounded flex items-center justify-center bg-muted">
                        <X className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="section-tag text-muted-foreground mb-4">Colores Disponibles</span>
              <h2 className="text-3xl sm:text-4xl mb-6">
                Sistema RAL Completo
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Colores de stock inmediato y cualquier tono RAL fabricado en 48 horas
              </p>
            </div>
          </Animated>

          <Animated animation="scale-in" delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-8 gap-2 mb-8">
                {colors.map((color) => (
                  <Link
                    key={color.id}
                    href={`/colores/${color.code.toLowerCase()}`}
                    className="aspect-square rounded-lg hover:scale-105 hover:shadow-lg transition-all ring-1 ring-black/10"
                    style={{ backgroundColor: color.hex }}
                    title={`RAL ${color.code} - ${color.name}`}
                  />
                ))}
              </div>
              <div className="text-center">
                <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5" asChild>
                  <Link href="/colores">
                    Ver Catálogo Completo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="py-24">
        <div className="container">
          <Animated animation="scale-in">
            <div className="bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground rounded-3xl p-12 lg:p-20 overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative">
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <span className="section-tag-dark mb-4">Guía de Aplicación</span>
                  <h2 className="text-3xl sm:text-4xl mb-6">
                    Cómo Aplicar Fondo + Esmalte
                  </h2>
                  <p className="text-lg text-primary-foreground/60 leading-relaxed">
                    Siga estos pasos para obtener los mejores resultados
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { step: '01', title: 'Preparación', desc: 'Limpie la superficie eliminando óxido, grasa y polvo. Use lija si es necesario.' },
                    { step: '02', title: 'Dilución', desc: 'Mezcle bien el producto. Diluya 10-15% con thinner acrílico si usa pistola.' },
                    { step: '03', title: 'Aplicación', desc: 'Aplique capas uniformes con brocha, rodillo o pistola. Espere 4-6 horas entre manos.' },
                    { step: '04', title: 'Acabado', desc: 'Aplique 2-3 manos para protección óptima. Secado total en 24 horas.' },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center border-2 border-white/20 text-white font-serif text-2xl font-bold">
                        {item.step}
                      </div>
                      <h3 className="font-serif font-semibold text-lg mb-3">{item.title}</h3>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl mb-8">
                ¿Listo para Proteger sus Proyectos?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Contáctenos para obtener una cotización personalizada o resolver sus dudas técnicas.
                Nuestro equipo está listo para asesorarle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/contacto">
                    Solicitar Cotización
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-14 px-10 text-lg border-primary/20 hover:bg-primary/5"
                  asChild
                >
                  <a href="https://wa.me/584121234567" target="_blank" rel="noopener noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
