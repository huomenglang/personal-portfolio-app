import { Locale, routing } from './routing'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

//@ts-ignore
export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale
    // if (!routing.locales.includes(locale as any)) notFound();
    // Ensure that the incoming locale is valid
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale
    }

    return {locale,messages:(await import(`../../translations/${locale}.json`)).default}

    // return {
    //     messages: (await import(`../../translations/${locale}.json`)).default,
    // }
})
