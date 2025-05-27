"use client"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

import useMediaQuery from "@/hooks/useMediaQuery";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";

interface LanguageItem {
    id: number;
    code: Locale;
}

interface LanguageItemProps {
    code: Locale;
    handleChangeLang: (code: Locale) => void;
    currentLang: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ code, handleChangeLang, currentLang }) => {
    const t = useTranslations('common.langs')

    return (
        <div
            onClick={() => handleChangeLang(code)}
            className={cn(
                'flex items-center justify-between px-4 py-2 hover:bg-main-mid dark:hover:bg-alter-light rounded-md cursor-pointer',
                currentLang === code && 'bg-main-mid dark:bg-alter-light'
            )}
        >
            <span className='text-base text-alter dark:text-main'>{t(`${code}`)}</span>
            <span className='text-sm text-alter-light/60 dark:text-main-light/60'>{code}</span>
        </div>
    );
};

export default function LangSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const locales = routing.locales

    const [open, setOpen] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 768px)")
    const t = useTranslations('settings.lang')

    const handleChangeLang = (code: Locale) => {
        setOpen(false)
        router.replace(pathname, {
            locale: code,
            scroll: false,
        });
    }

    return isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-main-mid-light dark:bg-alter-light/60 hover:bg-main dark:hover:bg-alter-light',
                    )}
                >
                    {locale}
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px] px-0 !rounded-xl backdrop-blur-md bg-main-light dark:bg-alter-mid-light border-2 border-main-dark dark:border-alter-light'>
                <DialogHeader className='px-5'>
                    <DialogTitle className='text-alter dark:text-main'>
                        {t('title')}
                    </DialogTitle>
                    <DialogDescription className='text-alter-light/70 dark:text-main-light/60'>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className='max-h-96 px-5 flex flex-coll overflow-y-auto'>
                    <div className='space-y-2'>
                        {locales.map((item, index) => (
                            <LanguageItem key={index} code={item} currentLang={locale} handleChangeLang={handleChangeLang} />
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    ) : (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button
                    variant='ghost'
                    size='icon'
                    className={cn(
                        'transition-all rounded-xl bg-main-mid dark:bg-alter-light/60 hover:bg-main-dark dark:hover:bg-alter-light',
                    )}
                >
                    {locale}
                </Button>
            </DrawerTrigger>
            <DrawerContent className={cn(
                'rounded-t-xl bg-main-light dark:bg-alter-mid-light border-t-2 border-main-dark dark:border-alter-light',
                'mt-0 h-fit fixed bottom-0 left-0 right-0 outline-none'
            )}>
                <DrawerHeader className='text-left'>
                    <DrawerTitle className='text-alter dark:text-main'>
                        {t('title')}
                    </DrawerTitle>
                    <DrawerDescription className='text-alter-light/70 dark:text-main-light/60'>
                        {t('description')}
                    </DrawerDescription>
                </DrawerHeader>
                <ScrollArea className='max-h-96 flex flex-coll overflow-y-auto'>
                    <div className='px-5 pb-5 space-y-2'>
                        {locales.map((item, index) => (
                            <LanguageItem
                                key={index}
                                code={item}
                                currentLang={locale}
                                handleChangeLang={handleChangeLang}
                            />
                        ))}
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}