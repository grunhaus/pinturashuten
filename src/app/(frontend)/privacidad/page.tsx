import { Metadata } from 'next'
import { Animated } from '@/components/ui/animated'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Pinturas Hüten',
  description: 'Política de privacidad y protección de datos de Pinturas Hüten.',
}

export default function PrivacidadPage() {
  return (
    <div className="overflow-hidden">
      <section className="py-24">
        <div className="container max-w-3xl">
          <Animated animation="fade-up">
            <span className="section-tag text-muted-foreground mb-4">Legal</span>
            <h1 className="text-4xl sm:text-5xl font-serif mb-12">Política de Privacidad</h1>
          </Animated>

          <Animated animation="fade-up" delay={100}>
            <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Información que Recopilamos</h2>
                <p className="leading-relaxed">
                  En Pinturas Hüten recopilamos información que usted nos proporciona directamente, como
                  su nombre, correo electrónico, número de teléfono y empresa, cuando completa nuestro
                  formulario de contacto o solicita una cotización.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Uso de la Información</h2>
                <p className="leading-relaxed">
                  Utilizamos su información personal para responder a sus consultas, proporcionarle
                  cotizaciones, enviarle información sobre nuestros productos y servicios, y mejorar
                  nuestra atención al cliente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. Protección de Datos</h2>
                <p className="leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información
                  personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Compartir Información</h2>
                <p className="leading-relaxed">
                  No vendemos, comercializamos ni transferimos su información personal a terceros sin
                  su consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger
                  nuestros derechos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Cookies</h2>
                <p className="leading-relaxed">
                  Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario.
                  Usted puede configurar su navegador para rechazar cookies, aunque esto podría
                  afectar la funcionalidad del sitio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Sus Derechos</h2>
                <p className="leading-relaxed">
                  Usted tiene derecho a acceder, rectificar o eliminar su información personal en
                  cualquier momento. Para ejercer estos derechos, contáctenos a través de nuestro
                  formulario de contacto o envíe un correo a contacto@pinturashuten.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Cambios en esta Política</h2>
                <p className="leading-relaxed">
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                  Los cambios serán publicados en esta página con la fecha de última actualización.
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
