import Image from 'next/image'
import { CtaLink } from './cta-button'
import { FlowerIcon } from './icons'
import { Reveal } from './reveal'

export function EditorialSection() {
  return (
    <section
      id="historia"
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-36"
    >
      <Reveal className="relative aspect-[4/5] overflow-hidden rounded-sm">
        <Image
          src="/images/editorial-story.png"
          alt="Detalle de manos ajustando una blusa de seda crema"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </Reveal>

      <Reveal delay={0.15} className="max-w-md">
        <span className="flex items-center gap-3 text-[0.7rem] uppercase tracking-luxe text-coral">
          <FlowerIcon className="size-5" />
          La casa
        </span>
        <h2 className="editorial-title mt-6 text-balance text-4xl text-ink md:text-5xl">
          Nacimos del deseo de vestir lo natural
        </h2>
        <p className="mt-7 text-base leading-relaxed text-muted-foreground">
          ISOL\u00c9 es una conversaci\u00f3n entre la piel y la tela. Trabajamos con
          materiales nobles, tonos c\u00e1lidos y siluetas que respiran, creando
          piezas pensadas para acompa\u00f1ar la vida real: la luz de una ma\u00f1ana,
          el calor de una tarde y la calma de volver a casa.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          No seguimos temporadas, seguimos emociones. Cada prenda se confecciona
          en cantidades peque\u00f1as, con tiempo y con manos que cuidan el detalle.
        </p>
        <div className="mt-10">
          <CtaLink href="/#colecciones" variant="outline">
            Conocer las colecciones
          </CtaLink>
        </div>
      </Reveal>
    </section>
  )
}
