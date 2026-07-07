const DEFAULT_WHATSAPP_NUMBER = '521234567890'

export const SITE_NAME = 'ISOL\u00c9'
export const INSTAGRAM_URL =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://instagram.com/isole.studio'

export const WHATSAPP_NUMBER =
  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER).replace(
    /\D/g,
    '',
  ) || DEFAULT_WHATSAPP_NUMBER

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
