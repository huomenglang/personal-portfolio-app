import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Contacts as ContactsType } from '@/shared/types/contacts';
import { Github, Linkedin, LucideIcon, Mail, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const contactItems: { icon: LucideIcon, name: keyof ContactsType }[] = [
    {
        icon: Send,
        name: 'telegram'
    },
    {
        icon: Github,
        name: 'github'
    },
    {
        icon: Linkedin,
        name: 'linkedin'
    },
]

export default function Contacts({ contacts }: { contacts: ContactsType }) {
    const t = useTranslations('buttons');

    return (
        <div className='max-w-[500px] mx-auto space-y-5'>
            <div className='flex flex-wrap justify-center gap-2 md:gap-3'>
                {contactItems.map((item, index) => (
                    <Link
                        key={index}
                        href={contacts[item.name]}
                        target='_blank'
                    >
                        <Button
                            size='icon'
                            className={cn(
                                'rounded-xl w-12 h-12 backdrop-blur-md',
                                // 'bg-main-mid hover:bg-main-dark border-none text-alter/60',
                                'bg-main-mid-light hover:bg-main-light border-none text-alter/60',
                                'dark:bg-alter-mid-light dark:hover:bg-alter-light dark:text-main/70',
                            )}
                        >
                            <item.icon className='size-5' />
                        </Button>
                    </Link>
                ))}
                <Link href='mailto:hopsteee@gmail.com' target='_blank'>
                    <Button
                        size='default'
                        className={cn(
                            'backdrop-blur-md rounded-xl border-4 border-ochre bg-ochre/60 hover:bg-ochre dark:hover:bg-ochre px-4 py-2 h-12',
                            'text-ochre-text hover:text-alter-light dark:text-ochre-light-text'
                        )}
                    >
                        <Mail className='size-5 mr-2' />
                        {t('contactMe')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}