import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'kh'],
    defaultLocale: 'en',
})

export type Locale = (typeof routing)['locales'][number]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing)
