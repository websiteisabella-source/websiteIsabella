import { CollectionCard } from './collection-card'
import { Reveal } from './reveal'

const items = [
  {
    src: '/images/collection-1.png',
    alt: 'Mujer con vestido cruzado color crema junto a un muro de piedra',
    label: 'Atardecer',
    caption: 'Colección',
    href: '/#novedades',
    tag: 'edición limitada',
    tagClassName: '-rotate-3 bg-coral text-primary-foreground',
  },
  {
    src: '/images/collection-2.png',
    alt: 'Prendas de lino dobladas en tonos coral, rosa y crema',
    label: 'Lino Vivo',
    caption: 'Cápsula',
    href: '/#novedades',
    tag: 'lino natural',
    tagClassName: 'rotate-2 bg-petal text-ink',
  },
  {
    src: '/images/collection-3.png',
    alt: 'Mujer reposando sobre sábanas de lino con vestido rosa pétalo',
    label: 'Pétalo',
    caption: 'Edición noche',
    href: '/#novedades',
    tag: 'nuevo',
    tagClassName: 'rotate-3 bg-lavender text-cream',
  },
  {
    src: '/images/collection-4.png',
    alt: 'Detalle de joyería dorada sobre prenda de seda coral',
    label: 'Detalles',
    caption: 'Accesorios',
    href: '/#novedades',
  },
]

export function MasonryGallery() {
  return (
    <section
      id="colecciones"
      className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28"
    >
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
        <div>
          <span className="text-[0.7rem] lowercase tracking-luxe text-coral">
            lookbook interactivo
          </span>
          <h2 className="editorial-title mt-4 max-w-xl text-balance text-4xl text-ink md:text-6xl">
            Composiciones que respiran
          </h2>
        </div>
        <p className="max-w-xs text-sm lowercase leading-relaxed text-muted-foreground">
          una selección editorial entre el cuerpo, la luz y la tela. pensada para
          mirarse sin prisa.
        </p>
      </Reveal>

      <div className="grid auto-rows-[15rem] grid-cols-2 gap-5 md:auto-rows-[17rem] md:grid-cols-4 md:gap-8">
        <Reveal className="col-span-2 row-span-2 md:col-span-2">
          <CollectionCard
            {...items[0]}
            className="h-full w-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="col-span-1 row-span-1 md:col-span-2">
          <CollectionCard
            {...items[1]}
            className="h-full w-full"
            sizes="(max-width: 768px) 50vw, 50vw"
          />
        </Reveal>
        <Reveal delay={0.2} className="col-span-1 row-span-2 md:col-span-1">
          <CollectionCard
            {...items[2]}
            className="h-full w-full"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Reveal>
        <Reveal delay={0.3} className="col-span-1 row-span-1 md:col-span-1">
          <CollectionCard
            {...items[3]}
            className="h-full w-full"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </Reveal>
      </div>
    </section>
  )
}
