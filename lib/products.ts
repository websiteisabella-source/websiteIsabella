export type Product = {
  slug: string
  name: string
  category: string
  description: string
  fabric: string
  colors: string[]
  product: string
  model: string
  gallery: string[]
}

export const products: Product[] = [
  {
    slug: 'vestido-atardecer',
    name: 'Vestido Atardecer',
    category: 'Vestidos',
    description:
      'Un vestido de lino que cae como la \u00faltima luz de la tarde. Pensado para moverse con el viento y abrazar el cuerpo sin pedir permiso.',
    fabric: 'Lino 100% natural',
    colors: ['Atardecer Coral', 'Nude'],
    product: '/images/arrival-1-product.png',
    model: '/images/arrival-1-model.png',
    gallery: [
      '/images/arrival-1-model.png',
      '/images/detail-back.png',
      '/images/detail-texture.png',
      '/images/detail-lifestyle.png',
    ],
  },
  {
    slug: 'blusa-seda-alba',
    name: 'Blusa Seda Alba',
    category: 'Blusas',
    description:
      'La calma de la ma\u00f1ana hecha prenda. Una blusa de seda que se desliza sobre la piel con una elegancia silenciosa y atemporal.',
    fabric: 'Seda lavada',
    colors: ['Crema', 'P\u00e9talo Rosa'],
    product: '/images/arrival-2-product.png',
    model: '/images/arrival-2-model.png',
    gallery: [
      '/images/arrival-2-model.png',
      '/images/arrival-2-product.png',
      '/images/editorial-story.png',
    ],
  },
  {
    slug: 'slip-petalo',
    name: 'Slip P\u00e9talo',
    category: 'Vestidos',
    description:
      'Un slip dress de sat\u00e9n en tono p\u00e9talo, rom\u00e1ntico y desnudo. Hecho para las noches c\u00e1lidas y los momentos que se quedan.',
    fabric: 'Sat\u00e9n de viscosa',
    colors: ['P\u00e9talo Rosa', 'Lavanda Viva'],
    product: '/images/arrival-3-product.png',
    model: '/images/arrival-3-model.png',
    gallery: [
      '/images/arrival-3-model.png',
      '/images/collection-3.png',
      '/images/collection-4.png',
    ],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
