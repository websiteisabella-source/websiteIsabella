import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CollectionCardProps = {
  src: string
  alt: string
  label: string
  caption: string
  href: string
  className?: string
  sizes?: string
  tag?: string
  tagClassName?: string
}

export function CollectionCard({
  src,
  alt,
  label,
  caption,
  href,
  className,
  sizes = '(max-width: 768px) 100vw, 33vw',
  tag,
  tagClassName,
}: CollectionCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative block overflow-hidden rounded-organic',
        className,
      )}
    >
      <Image
        src={src || '/placeholder.svg'}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
      {tag && (
        <span
          className={cn(
            'sticker absolute right-4 top-4 bg-cream/90 text-ink',
            tagClassName,
          )}
        >
          {tag}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[0.65rem] lowercase tracking-luxe text-cream/80">
          {caption}
        </p>
        <p className="mt-1 font-serif text-2xl text-cream md:text-3xl">
          {label}
        </p>
      </div>
    </Link>
  )
}
