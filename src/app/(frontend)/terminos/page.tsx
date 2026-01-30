import { Metadata } from 'next'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Pinturas Hüten',
  description: 'Términos y condiciones de uso del sitio web y servicios de Pinturas Hüten.',
}

export default function TerminosPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24">
        <div className="container max-w-3xl">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-serif mb-12">Términos y Condiciones</h1>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Aceptación de los Términos</h2>
                <p className="leading-relaxed">
                  Al acceder y utilizar el sitio web de Pinturas Hüten, usted acepta estos términos y
                  condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos,
                  le rogamos que no utilice nuestro sitio web.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Uso del Sitio Web</h2>
                <p className="leading-relaxed">
                  Este sitio web es para uso informativo y comercial. El contenido proporcionado incluye
                  información sobre nuestros productos, servicios y especificaciones técnicas. Nos
                  reservamos el derecho de modificar o discontinuar cualquier aspecto del sitio sin previo aviso.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Propiedad Intelectual</h2>
                <p className="leading-relaxed">
                  Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, imágenes
                  y software, es propiedad de Pinturas Hüten y está protegido por las leyes de propiedad
                  intelectual de Venezuela.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Productos y Cotizaciones</h2>
                <p className="leading-relaxed">
                  Las especificaciones técnicas y descripciones de productos se proporcionan con fines
                  informativos. Las cotizaciones son válidas por el período indicado en cada una y están
                  sujetas a disponibilidad de inventario.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Limitación de Responsabilidad</h2>
                <p className="leading-relaxed">
                  Pinturas Hüten no será responsable por daños directos, indirectos o consecuentes que
                  resulten del uso de la información proporcionada en este sitio web. La aplicación
                  correcta de nuestros productos es responsabilidad del usuario.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Garantías del Producto</h2>
                <p className="leading-relaxed">
                  Nuestros productos cuentan con garantía de calidad según las especificaciones indicadas
                  en cada ficha técnica. La garantía aplica cuando el producto se almacena y aplica
                  según las instrucciones del fabricante.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Ley Aplicable</h2>
                <p className="leading-relaxed">
                  Estos términos y condiciones se rigen por las leyes de la República Bolivariana de
                  Venezuela. Cualquier disputa será resuelta en los tribunales competentes de la
                  jurisdicción correspondiente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Contacto</h2>
                <p className="leading-relaxed">
                  Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a
                  través de contacto@pinturashuten.com o mediante nuestro formulario de contacto.
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm">
                  Última actualización: Enero 2026
                </p>
              </div>
            </div>
          </Animated>
        </div>
      </section>
    </div>
  )
}
