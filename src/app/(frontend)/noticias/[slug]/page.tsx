import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Animated } from '@/components/ui/animated'
import { getArticles, getArticleBySlug } from '@/lib/payload'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const articles = await getArticles()
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}

  return {
    title: `${article.title} | Noticias | Pinturas Hüten`,
    description: article.excerpt,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const [article, articles] = await Promise.all([
    getArticleBySlug(slug),
    getArticles(),
  ])

  if (!article) notFound()

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <Animated animation="fade-up">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Noticias
            </Link>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
              <Calendar className="w-4 h-4" />
              <time>
                {new Date(article.publishedDate).toLocaleDateString('es-VE', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
              <span className="capitalize">{article.category}</span>
            </div>
          </Animated>

          <Animated animation="fade-up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              {article.title}
            </h1>
          </Animated>

          <Animated animation="fade-up" delay={300}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>
          </Animated>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-24">
        <div className="container max-w-4xl">
          <Animated animation="fade-up">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted/30">
              <Image
                src="/placeholder-news.svg"
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Animated>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container max-w-3xl">
          <Animated animation="fade-up">
            <div className="prose prose-neutral prose-lg max-w-none">
              <p>
                En Pinturas Hüten nos enorgullece anunciar este importante hito en nuestra trayectoria.
                Este logro representa el resultado de años de dedicación, innovación y compromiso con
                la excelencia en el sector de recubrimientos industriales.
              </p>
              <p>
                Nuestro equipo ha trabajado incansablemente para desarrollar soluciones que no solo
                cumplan con los más altos estándares de calidad, sino que también contribuyan al
                desarrollo sostenible de la industria venezolana.
              </p>
              <h2>Compromiso con la Calidad</h2>
              <p>
                Desde nuestra fundación, hemos mantenido un compromiso inquebrantable con la calidad.
                Cada producto que sale de nuestras instalaciones pasa por rigurosos controles que
                garantizan su rendimiento óptimo en las condiciones más exigentes.
              </p>
              <p>
                Este enfoque nos ha permitido ganar la confianza de clientes en múltiples sectores,
                desde la industria naval hasta el sector energético, pasando por la construcción y
                el transporte.
              </p>
              <h2>Mirando hacia el Futuro</h2>
              <p>
                Este logro nos motiva a seguir innovando y mejorando nuestros procesos. Estamos
                comprometidos con la investigación y desarrollo de nuevas fórmulas que ofrezcan
                mayor protección, durabilidad y respeto por el medio ambiente.
              </p>
              <p>
                Agradecemos a todos nuestros clientes, colaboradores y socios comerciales por su
                confianza y apoyo continuo. Juntos, seguiremos construyendo el futuro de la
                industria de recubrimientos en Venezuela.
              </p>
            </div>
          </Animated>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-24 bg-muted/30">
          <div className="container">
            <Animated animation="fade-up">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
                <div>
                  <span className="section-tag text-muted-foreground mb-4">Sigue Leyendo</span>
                  <h2 className="text-3xl sm:text-4xl font-serif">Más Noticias</h2>
                </div>
                <Button variant="outline" className="rounded-full w-fit" asChild>
                  <Link href="/noticias">
                    Ver Todas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </Animated>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, i) => (
                <Animated key={relatedArticle.id} animation="fade-up" delay={i * 100} className="h-full">
                  <Link
                    href={`/noticias/${relatedArticle.slug}`}
                    className="group h-full flex flex-col rounded-2xl border border-border overflow-hidden hover:border-foreground transition-all bg-white"
                  >
                    <div className="relative aspect-[16/10] bg-muted/30 overflow-hidden">
                      <Image
                        src="/placeholder-news.svg"
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <time>
                          {new Date(relatedArticle.publishedDate).toLocaleDateString('es-VE', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 min-h-[4.5rem]">
                        {relatedArticle.excerpt}
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
      )}

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <Animated animation="scale-in">
            <div className="relative bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground rounded-3xl p-12 lg:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">¿Tiene un Proyecto en Mente?</h2>
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
