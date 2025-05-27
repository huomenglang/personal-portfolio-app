import { cn } from '@/lib/utils'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from "next-intl/server";
import dynamic from 'next/dynamic'
import { Kantumruy_Pro } from 'next/font/google'
import { cookies } from 'next/headers'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'

const Kantumruy = Kantumruy_Pro({ subsets: ['khmer', 'latin'] })

const APP_NAME = 'Menglang'
const APP_DEFAULT_TITLE = 'Huo Menglang - System Developer'
const APP_TITLE_TEMPLATE = '%s - Portfolio'
const APP_DESCRIPTION =
    'Experienced fullstack developer with over 2 years of experience and System Developer nearly 2 years in building products using modern technologies (NextJS, PostgreSQL, Spring Boot, Microservice, etc.). I have a proven ability to quickly master new fields, and Interesting in another Technology like System Architecture DevOps and BigData. I also Effective both as an individual contributor and a team member.'

export const metadata: Metadata = {
    description: APP_DESCRIPTION,
    icons: '/favicon.ico',
    // manifest: '/manifest.json',
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: APP_DEFAULT_TITLE,
        startupImage: 'favicons/apple-touch-icon.png',
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: 'website',
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: 'summary',
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
}

const AppThemeProvider = dynamic(() => import('@/components/context/theme'), {
    ssr: true,
})

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: { locale: string }
}>) {
    // unstable_setRequestLocale(params.locale);
    const { locale } = await params

    const messages = await getMessages()
    // if (locale == 'en' || locale == 'kh') {
    //     const messages = (await import(`../../../translations/${locale}.json`))
    //         .default
    // }

    const theme = (await cookies()).get('__theme__')?.value || 'system'
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
                <AppThemeProvider
                    attribute='class'
                    defaultTheme={theme}
                    enableSystem
                >
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
                    crawl={true}
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
