import Link from 'next/link'
import Image from 'next/image'
import { getColors, getFAQs, getArticles } from '@/lib/payload'
import { ArrowRight, ArrowUpRight, Shield, Factory, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'

export default async function HomePage() {
  const [colors, faqs, articles] = await Promise.all([getColors(), getFAQs(), getArticles()])

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section>
        <div className="container px-4 md:px-6">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[480px] sm:min-h-[550px] lg:min-h-[700px] flex items-center">
            {/* Video Background */}
            <div className="absolute inset-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
                poster="/images/hero-poster.jpg"
              >
                <source src="https://cdn.pixabay.com/video/2020/05/25/40130-424930959_large.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50" />
            </div>

            <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-24">
                <div>
                  <Animated animation="fade-up">
                    <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-medium tracking-wide uppercase mb-6 sm:mb-8">
                      Desde 2004
                    </span>
                  </Animated>

                  <Animated animation="fade-up" delay={100}>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1]">
                      Protección
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                        Industrial
                      </span>
                    </h1>
                  </Animated>

                  <Animated animation="fade-up" delay={200}>
                    <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 max-w-lg leading-relaxed">
                      Recubrimientos anticorrosivos de alto rendimiento para los sectores más exigentes de la industria.
                    </p>
                  </Animated>

                  <Animated animation="fade-up" delay={300}>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                      <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white text-black hover:bg-white/90 rounded-full" asChild>
                        <Link href="/productos/fondo-esmalte">
                          Explorar Productos
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                      <Button size="lg" variant="ghost" className="h-12 sm:h-14 px-6 text-sm sm:text-base text-white hover:bg-white/10 rounded-full" asChild>
                        <Link href="/nosotros">
                          Conocer Más
                        </Link>
                      </Button>
                    </div>
                  </Animated>
                </div>

                {/* Stats */}
                <div className="hidden lg:flex flex-col items-end gap-6">
                  <Animated animation="fade-left" delay={200}>
                    <div className="text-right">
                      <div className="text-6xl font-bold text-white">20+</div>
                      <div className="text-white/50 text-sm tracking-wider uppercase">Años</div>
                    </div>
                  </Animated>
                  <Animated animation="fade-left" delay={300}>
                    <div className="text-right">
                      <div className="text-6xl font-bold text-white/70">5</div>
                      <div className="text-white/50 text-sm tracking-wider uppercase">Industrias</div>
                    </div>
                  </Animated>
                  <Animated animation="fade-left" delay={400}>
                    <div className="text-right">
                      <div className="text-6xl font-bold text-white/50">48h</div>
                      <div className="text-white/50 text-sm tracking-wider uppercase">Colores RAL</div>
                    </div>
                  </Animated>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <section className="py-5">
        <div className="container">
          <Animated animation="fade-up">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center justify-between gap-4 md:gap-6 px-4 md:px-8 py-4 bg-black text-white rounded-2xl min-w-max md:min-w-0">
                <span className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Calidad Certificada
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Fabricación Nacional
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Asesoría Técnica
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm tracking-widest uppercase whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  Entrega Rápida
                </span>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Animated animation="fade-up">
                <span className="section-tag text-muted-foreground mb-4">Sobre Nosotros</span>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 leading-tight">
                  Innovación en cada recubrimiento
                </h2>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  Pinturas Hüten es referente en el desarrollo de soluciones anticorrosivas
                  para la industria venezolana. Combinamos tecnología avanzada con más de
                  dos décadas de experiencia.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-muted/50">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-foreground/70" />
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Calidad Garantizada</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Estándares internacionales</p>
                  </div>
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-muted/50">
                    <Factory className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-foreground/70" />
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">100% Nacional</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Producción propia</p>
                  </div>
                </div>
              </Animated>
            </div>
            <Animated animation="fade-left" delay={200}>
              <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground">Imagen de la empresa</span>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Animated animation="scale-in">
            <div className="bg-black text-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <Animated animation="fade-up">
                    <span className="section-tag-dark mb-4">Producto Principal</span>
                  </Animated>
                  <Animated animation="fade-up" delay={100}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                      Fondo + Esmalte Anticorrosivo
                    </h2>
                  </Animated>
                  <Animated animation="fade-up" delay={200}>
                    <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                      Sistema 2 en 1 que revoluciona la aplicación de recubrimientos.
                      Un solo producto, máxima protección, acabado profesional.
                    </p>
                  </Animated>

                  <Animated animation="fade-up" delay={300}>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                        <div className="text-2xl sm:text-3xl font-bold">30<span className="text-sm sm:text-lg text-white/50 ml-1">min</span></div>
                        <div className="text-xs sm:text-sm text-white/40">Secado al tacto</div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-white/5">
                        <div className="text-2xl sm:text-3xl font-bold">2<span className="text-sm sm:text-lg text-white/50 ml-1">en 1</span></div>
                        <div className="text-xs sm:text-sm text-white/40">Fondo y esmalte</div>
                      </div>
                    </div>
                  </Animated>

                  <Animated animation="fade-up" delay={400}>
                    <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white text-black hover:bg-white/90 rounded-full w-full sm:w-auto" asChild>
                      <Link href="/productos/fondo-esmalte">
                        Ver Especificaciones
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </Animated>
                </div>

                <Animated animation="fade-left" delay={200} className="order-1 lg:order-2">
                  <div className="flex items-center justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-2xl md:rounded-3xl overflow-hidden mx-auto">
                        <Image
                          src="/api/media/file/black_paint_with_bg.png"
                          alt="Fondo + Esmalte Anticorrosivo Hüten"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white text-black text-xs sm:text-sm font-medium">
                        RAL
                      </div>
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* INDUSTRIES - Bento Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Animated animation="fade-up">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Aplicaciones</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl">Sectores Industriales</h2>
              </div>
              <p className="text-muted-foreground max-w-md lg:text-right text-sm sm:text-base">
                Soluciones especializadas para cada industria.
              </p>
            </div>
          </Animated>

          {/* Bento Grid - 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* Row 1 */}
            <Animated animation="fade-up" delay={100} className="sm:col-span-1 lg:col-span-3">
              <Link
                href="/aplicaciones/vehiculos"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[280px] block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580901368919-7738efb0f87e?w=1200&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Vehículos y Maquinaria</h3>
                  <p className="text-white/70 text-xs sm:text-sm">Chasis, carrocerías y equipos industriales</p>
                </div>
              </Link>
            </Animated>

            <Animated animation="fade-up" delay={200} className="sm:col-span-1 lg:col-span-3">
              <Link
                href="/aplicaciones/construccion"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[200px] sm:h-[240px] lg:h-[280px] block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Construcción</h3>
                  <p className="text-white/70 text-xs sm:text-sm">Estructuras metálicas y arquitectónicas</p>
                </div>
              </Link>
            </Animated>

            {/* Row 2 */}
            <Animated animation="fade-up" delay={300} className="sm:col-span-1 lg:col-span-2">
              <Link
                href="/aplicaciones/naval"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[240px] block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Naval y Marítima</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Embarcaciones y puertos</p>
                </div>
              </Link>
            </Animated>

            <Animated animation="fade-up" delay={400} className="sm:col-span-1 lg:col-span-2">
              <Link
                href="/aplicaciones/energia"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[240px] block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Energía</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Plantas y subestaciones</p>
                </div>
              </Link>
            </Animated>

            <Animated animation="fade-up" delay={500} className="sm:col-span-2 lg:col-span-2">
              <Link
                href="/aplicaciones/petroleo"
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden h-[180px] sm:h-[200px] lg:h-[240px] block"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Petróleo y Gas</h3>
                  <p className="text-white/60 text-xs sm:text-sm">Tuberías y plataformas</p>
                </div>
              </Link>
            </Animated>
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <Animated animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Sistema RAL</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl">Colores Disponibles</h2>
              </div>
              <Button variant="outline" className="rounded-full w-fit text-sm sm:text-base" asChild>
                <Link href="/colores">
                  Ver Catálogo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {colors.map((color) => (
                <Link
                  key={color.id}
                  href={`/colores/${color.code.toLowerCase()}`}
                  className="aspect-square rounded-md sm:rounded-lg hover:scale-110 hover:z-10 transition-all duration-300"
                  style={{ backgroundColor: color.hex }}
                  title={`RAL ${color.code}`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Stock inmediato · Cualquier color RAL en 48 horas
            </p>
          </Animated>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Animated animation="scale-in">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[400px] sm:min-h-[450px] lg:min-h-[550px] flex items-center">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1600&q=80)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:from-black/80 md:via-black/60 md:to-transparent" />

              <div className="relative z-10 px-5 sm:px-8 lg:px-16 max-w-2xl">
                <Animated animation="fade-up">
                  <span className="section-tag-dark mb-4">Compromiso Ambiental</span>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                    Sostenibilidad en Cada Gota
                  </h2>
                </Animated>
                <Animated animation="fade-up" delay={200}>
                  <p className="text-base sm:text-lg text-white/70 mb-6 sm:mb-8 leading-relaxed">
                    Desarrollamos recubrimientos con menor impacto ambiental, optimizando procesos
                    y reduciendo emisiones. Nuestro compromiso con el medio ambiente es parte
                    fundamental de nuestra visión empresarial.
                  </p>
                </Animated>
                <Animated animation="fade-up" delay={300}>
                  <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base bg-white text-black hover:bg-white/90 rounded-full w-full sm:w-auto" asChild>
                    <Link href="/sostenibilidad">
                      Conocer Más
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </Animated>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <Animated animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div>
                <span className="section-tag text-muted-foreground mb-4">Actualidad</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl">Noticias</h2>
              </div>
              <Button variant="outline" className="rounded-full w-fit text-sm sm:text-base" asChild>
                <Link href="/noticias">
                  Ver Todas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Animated>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {articles.slice(0, 3).map((article, i) => (
              <Animated key={article.id} animation="fade-up" delay={100 + i * 100} className="h-full">
                <Link
                  href={`/noticias/${article.slug}`}
                  className="group h-full flex flex-col rounded-2xl border border-border overflow-hidden hover:border-foreground transition-all bg-white"
                >
                  <div className="relative aspect-[16/10] bg-muted/30 overflow-hidden">
                    <Image
                      src="/placeholder-news.svg"
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <time>{new Date(article.publishedDate).toLocaleDateString('es-VE', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2 min-h-[3.5rem]">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                        Leer más
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Animated>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Animated animation="fade-up">
                <span className="section-tag text-muted-foreground mb-4">Preguntas Frecuentes</span>
              </Animated>
              <Animated animation="fade-up" delay={100}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                  Todo lo que necesita saber
                </h2>
              </Animated>
              <Animated animation="fade-up" delay={200}>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
                  Encuentre respuestas a las preguntas más comunes sobre nuestros productos y servicios.
                </p>
              </Animated>
              <Animated animation="fade-up" delay={300}>
                <Button className="rounded-full w-full sm:w-auto text-sm sm:text-base" asChild>
                  <Link href="/contacto">
                    ¿Más preguntas? Contáctenos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </Animated>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, i) => (
                <Animated key={faq.id} animation="fade-up" delay={100 + i * 100}>
                  <details className="group bg-white rounded-xl sm:rounded-2xl border border-border/50 overflow-hidden">
                    <summary className="flex items-center justify-between p-4 sm:p-6 cursor-pointer list-none">
                      <span className="font-semibold pr-4 sm:pr-6 text-sm sm:text-base">{faq.question}</span>
                      <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-muted flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground text-sm sm:text-base">
                      {faq.answer}
                    </div>
                  </details>
                </Animated>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <Animated animation="scale-in">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 sm:p-12 lg:p-20">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="relative max-w-3xl mx-auto text-center">
                <Animated animation="fade-up">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-white">
                    ¿Tiene un proyecto en mente?
                  </h2>
                </Animated>
                <Animated animation="fade-up" delay={100}>
                  <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-10">
                    Nuestro equipo técnico está listo para asesorarle.
                  </p>
                </Animated>
                <Animated animation="fade-up" delay={200}>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                    <Button size="lg" className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base bg-white text-black hover:bg-white/90 rounded-full" asChild>
                      <Link href="/contacto">
                        Solicitar Cotización
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-10 text-sm sm:text-base rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                      <Link href="/productos/fondo-esmalte">
                        Ver Productos
                      </Link>
                    </Button>
                  </div>
                </Animated>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
