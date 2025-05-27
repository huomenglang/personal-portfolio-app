'use client'

import { useRouter } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
    const router = useRouter()

    const t = useTranslations('notFound')

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className='h-screen w-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl text-neutral-600 dark:text-neutral-300'>
                {t('message')}
            </h1>
            <div className='flex items-center cursor-pointer rounded-xl hover:underline mt-5' onClick={handleGoBack}>
                <ArrowLeft className='size-4 mr-2' />
                <h6>
                    {t('button')}
                </h6>
            </div>
        </div>
    )
}