import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { getMessages } from 'next-intl/server'
import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import dynamic from 'next/dynamic'
import { Kantumruy_Pro } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'

const Kantumruy = Kantumruy_Pro({ subsets: ['khmer', 'latin'] })

export const metadata = {
  title: {
    default: 'Huo Menglang - System Developer',
    template: '%s - Portfolio',
  },
  description: 'Experienced fullstack developer...',
  icons: '/favicon.ico',
  applicationName: 'Menglang',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Huo Menglang - System Developer',
    startupImage: 'favicons/apple-touch-icon.png',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'Menglang',
    title: {
      default: 'Huo Menglang - System Developer',
      template: '%s - Portfolio',
    },
    description: 'Experienced fullstack developer...',
  },
  twitter: {
    card: 'summary',
    title: {
      default: 'Huo Menglang - System Developer',
      template: '%s - Portfolio',
    },
    description: 'Experienced fullstack developer...',
  },
}

const AppThemeProvider = dynamic(() => import('@/components/context/theme'), {
  ssr: true,
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
  const messages = await getMessages()
const locale=(await params).locale;
  const theme= (await cookies()).get('__theme__')?.value || 'system'

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body
        className={cn(
          Kantumruy.className,
          'text-alter-light dark:text-main',
          'antialiased bg-main dark:bg-alter bg-[radial-gradient(#C7CABA_1px,transparent_1px)] dark:bg-[radial-gradient(#3D3D3D8f_1px,transparent_1px)] [background-size:20px_20px]'
        )}
      >
        <AppThemeProvider attribute='class' defaultTheme={theme} enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
            <SpeedInsights />
            <Analytics />
          </NextIntlClientProvider>
        </AppThemeProvider>

        <NextTopLoader
          color='#2299DD'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing='ease'
          speed={200}
          shadow='0 0 10px #2299DD,0 0 5px #2299DD'
          zIndex={1600}
          showAtBottom={false}
        />
      </body>
    </html>
  )
}
