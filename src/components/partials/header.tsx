'use client'

import LangSwitcher from './lang-switcher'
import ThemeSwitcher from './theme-switcher'
import { Link, usePathname } from '@/i18n/routing'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import 'next/navigation'

import { links } from '@/shared/constants/nav-links'
import { Common } from '@/shared/types/common'

export default function Header({ data }: { data: Common }) {
    const pathname = usePathname()
    const t = useTranslations('navigation')

    // const { isLoggedIn, checkAuth } = useAuth()

    const currentPath = pathname?.split('/')[1]

    return (
        <header className='sticky top-0 left-0 w-full z-10'>
            <div className='h-full max-w-[1220px] mx-auto p-2 md:p-5'>
                <div className='p-3 rounded-xl backdrop-blur-md bg-main-mid-light/90 dark:bg-alter-mid-light/90'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <div className='flex'>
                                <span className='text-2xl'>
                                    {data.logo.icon}
                                </span>
                                <div className='flex flex-col justify-start'>
                                    <Link
                                        className='block text-ochre text-2xl font-semibold transition-colors'
                                        href='/'
                                    >
                                        <span className='sr-only'>Home</span>
                                        {data.logo.text}
                                    </Link>
                                </div>
                            </div>

                            <div className='flex items-center space-x-1 ml-1 mt-1'>
                                <div className='flex items-center'>
                                    <span className='relative flex size-2 mr-2'>
                                        <span
                                            className={cn(
                                                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                                                data.available
                                                    ? 'bg-green-400'
                                                    : 'bg-red-400'
                                            )}
                                        ></span>
                                        <span
                                            className={cn(
                                                'relative inline-flex rounded-full size-2',
                                                data.available
                                                    ? 'bg-green-500'
                                                    : 'bg-red-500'
                                            )}
                                        ></span>
                                    </span>
                                    <p className='text-xs font-normal'>
                                        {data.status}
                                    </p>
                                </div>
                                <span className='text-xs'>/</span>
                                <p className='text-xs font-normal'>
                                    {data.workType}
                                </p>
                            </div>
                        </div>

                        <div className='hidden md:block transition-all'>
                            <nav aria-label='Global'>
                                <ul className='flex items-center gap-3 text-sm'>
                                    {links.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    'nav-item transition-all hover:bg-main dark:hover:bg-alter-light px-3 rounded-lg min-w-20 h-12 flex flex-col items-center justify-center',
                                                    currentPath === link.path &&
                                                        'bg-main dark:bg-alter-light text-ochre dark:text-ochre'
                                                )}
                                            >
                                                <link.icon className='w-5 h-5' />
                                                <p className='text-xs font-normal mt-1'>
                                                    {t(link.label)}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className='flex items-center gap-3'>
                            <LangSwitcher />
                            <ThemeSwitcher />
                            {/* {isLoggedIn && <AdminButton checkAuth={checkAuth} />} */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
