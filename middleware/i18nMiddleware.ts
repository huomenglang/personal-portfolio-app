import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export const withI18nMiddleware = () => {
    return createMiddleware(routing);
}