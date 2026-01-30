import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { ArrowRight, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'
import { getArticles } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Noticias | Pinturas Hüten',
  description: 'Últimas noticias y novedades de Pinturas Hüten. Innovación, expansión y compromiso con la calidad.',
}

export default async function NoticiasPage() {
  const articles = await getArticles()

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Novedades</span>
          </Animated>
          <Animated animation="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Noticias
            </h1>
          </Animated>
          <Animated animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Mantente informado sobre las últimas novedades, innovaciones y eventos de Pinturas Hüten.
            </p>
          </Animated>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container">
          {articles.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, i) => (
                <Animated key={article.id} animation="fade-up" delay={i * 100} className="h-full">
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
                      <h2 className="font-serif text-xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {article.title}
                      </h2>
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
          ) : (
            <Animated animation="fade-up">
              <div className="text-center py-20">
                <h2 className="text-2xl font-serif mb-4">Próximamente</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Estamos preparando contenido para mantenerte informado sobre nuestras novedades.
                </p>
              </div>
            </Animated>
          )}
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
                <h2 className="text-3xl sm:text-4xl mb-6">¿Tiene un Proyecto en Mente?</h2>
                <p className="text-lg text-primary-foreground/60 mb-10">
                  Contáctenos para recibir asesoría técnica personalizada.
                </p>
                <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 h-14 px-10 text-base" asChild>
                  <Link href="/contacto">Solicitar Cotización</Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
