import Link from 'next/link'
import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Contacto | Pinturas Huten',
  description: 'Contáctenos para cotizaciones, asesoría técnica y pedidos de pintura anticorrosiva.',
}

export default function ContactPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl">
            <Animated animation="fade-up">
              <span className="section-tag text-muted-foreground mb-4">Contacto</span>
            </Animated>
            <Animated animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
                Estamos aquí para ayudarte
              </h1>
            </Animated>
            <Animated animation="fade-up" delay={200}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ya sea que necesite una cotización, asesoría técnica o tenga preguntas, nuestro equipo está listo para atenderle.
              </p>
            </Animated>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Animated animation="fade-up">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">Envíenos un mensaje</CardTitle>
                    <p className="text-muted-foreground">Complete el formulario y nos pondremos en contacto pronto.</p>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nombre</Label>
                          <Input id="name" placeholder="Su nombre" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="correo@ejemplo.com" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Teléfono</Label>
                          <Input id="phone" type="tel" placeholder="+58 412 123 4567" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa</Label>
                          <Input id="company" placeholder="Nombre de su empresa" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea id="message" rows={5} placeholder="¿En qué podemos ayudarle?" />
                      </div>
                      <Button type="submit" size="lg" className="rounded-full">
                        Enviar Mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </Animated>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Animated animation="fade-up" delay={100}>
                <span className="section-tag text-muted-foreground mb-2">Información</span>
                <h2 className="text-2xl font-serif mb-6">Información de contacto</h2>
              </Animated>

              <Animated animation="fade-up" delay={200}>
                <Card className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:contacto@pinturashuten.com" className="font-medium hover:underline transition-colors">
                        contacto@pinturashuten.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="fade-up" delay={300}>
                <Card className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Teléfono</p>
                      <a href="tel:+584121234567" className="font-medium hover:underline transition-colors">
                        +58 412 123 4567
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="fade-up" delay={400}>
                <Card className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Ubicación</p>
                      <p className="font-medium">Caracas, Venezuela</p>
                    </div>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="fade-up" delay={500}>
                <Card className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground text-primary-foreground flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Horario</p>
                      <p className="font-medium">Lunes a Viernes, 8:00 AM - 5:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </Animated>

              {/* WhatsApp */}
              <Animated animation="fade-up" delay={600}>
                <Card className="bg-foreground text-primary-foreground border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-1">
                      <MessageCircle className="w-5 h-5" />
                      <CardTitle className="text-lg text-primary-foreground">Contacto Rápido</CardTitle>
                    </div>
                    <p className="text-primary-foreground/60 text-sm">Escríbenos por WhatsApp para una respuesta inmediata.</p>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full rounded-full bg-white text-foreground hover:bg-white/90">
                      <a
                        href="https://wa.me/584121234567"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Animated>
            </div>
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
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">Solicite su cotización hoy</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Nuestro equipo técnico está listo para asesorarle en su próximo proyecto.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/productos/fondo-esmalte">Ver Productos</Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
