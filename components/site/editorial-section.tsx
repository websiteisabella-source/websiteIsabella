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
      <Reveal className="relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-petal">
          <Image
            src="/images/editorial-story.png"
            alt="Detalle de manos ajustando una blusa de seda crema"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        {/* Sticker overlay breaking the frame with an organic accent. */}
        <span className="sticker absolute -right-2 top-6 rotate-6 bg-coral text-primary-foreground md:right-4">
          <FlowerIcon className="size-3.5" />
          hecho con calma
        </span>
        <span className="sticker absolute -left-2 bottom-10 -rotate-3 bg-petal text-ink md:left-2">
          moda consciente
        </span>
      </Reveal>

      <Reveal delay={0.15} className="max-w-md">
        <span className="flex items-center gap-3 text-[0.7rem] lowercase tracking-luxe text-coral">
          <FlowerIcon className="size-5" />
          concepto
        </span>
        <h2 className="editorial-title mt-6 text-balance text-4xl text-ink md:text-5xl">
          Una extensión de tu identidad
        </h2>
        <p className="mt-7 text-base lowercase leading-relaxed text-muted-foreground">
          isolé es una marca de moda <strong className="font-semibold text-ink">consciente y emocional</strong> que
          entiende la ropa como una <strong className="font-semibold text-ink">extensión de la identidad</strong>.
        </p>
        <p className="mt-4 text-base lowercase leading-relaxed text-muted-foreground">
          trabajamos con materiales nobles, tonos cálidos y siluetas que
          respiran. no seguimos temporadas, seguimos emociones: cada prenda se
          confecciona en cantidades pequeñas, con tiempo y con manos que cuidan
          el detalle.
        </p>
        <div className="mt-10">
          <CtaLink href="/#colecciones" variant="outline">
            conocer las colecciones
          </CtaLink>
        </div>
      </Reveal>
    </section>
  )
}
