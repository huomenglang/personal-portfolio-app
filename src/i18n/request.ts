
import { routing } from './routing'
import { getRequestConfig } from 'next-intl/server'

type  Languages="en"|"kh"

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale
    if (!locale || !routing.locales.includes(locale as Languages)) {
        locale = routing.defaultLocale
    }

    return {
        locale,
        messages: (await import(`../../translations/${locale}.json`)).default,
    }
})
