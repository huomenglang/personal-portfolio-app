import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { SkillItem, Skills as SkillsType } from "@/shared/types/skills";
import * as motion from "framer-motion/client";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SkillCategoryWidget: React.FC<{ title: string, items: SkillItem[], folder: string, id: number }> = ({ title, items, folder, id }) => {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        delay: id * 0.1,
                        once: true
                    }
                }
            }}
            initial='hidden'
            animate='visible'
            viewport={{ once: true }}
            className={cn(
                'backdrop-blur-md',
                'bg-main-mid-light dark:bg-alter-mid-light border-2 border-main-dark dark:border-alter-light',
                // 'bg-main-mid dark:bg-alter-mid-light border-2 border-main-dark dark:border-alter-light',
                'rounded-xl h-full cursor-grab',
            )}
        >
            <div className='p-3 border-b-2 border-main-dark dark:border-alter-light'>
                <h6>{title}</h6>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] p-5 gap-5 min-w-[300px]'>
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='flex flex-col items-center rounded-lg p-3'>
                            {item.altIcon ? (
                                <>
                                    <Image src={`/assets/icons/${folder}/${item.icon}`} alt={item.altIcon} width={32} height={32} className='mb-2 dark:hidden' />
                                    <Image src={`/assets/icons/${folder}/${item.altIcon}`} alt={item.altIcon} width={32} height={32} className='mb-2 hidden dark:block' />
                                </>
                            ) : (
                                <Image src={`/assets/icons/${folder}/${item.icon}`} alt={item.icon} width={32} height={32} className='mb-2' />
                            )}
                            <span className='text-xs font-medium text-center'>{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default function Skills({ data }: { data: SkillsType[] }) {
    const t = useTranslations('about.skills')

    return (
        <div>
            <h1 className='text-2xl md:text-3xl font-bold text-center'>
                {t('title')}
            </h1>
            <div className='mt-5'>
                <Carousel
                    className='h-full w-full mx-auto'
                >
                    <CarouselContent className='-ml-5'>
                        {data.map((category, index) => (
                            <CarouselItem
                                key={index}
                                className='basis-full md:basis-1/2 lg:basis-1/3 pl-5'
                            >
                                <SkillCategoryWidget
                                    title={category.title}
                                    items={category.stack}
                                    folder={category.folder}
                                    id={index}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        className={cn(
                            'absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/2 border-2',
                            'bg-main-mid-light hover:bg-main border-main-dark text-alter/60',
                            'dark:bg-alter dark:hover:bg-alter-mid-light dark:border-alter-light dark:text-main/70',
                        )}
                    />
                    <CarouselNext
                        className={cn(
                            'absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 border-2',
                            'bg-main-mid-light hover:bg-main border-main-dark text-alter/60',
                            'dark:bg-alter dark:hover:bg-alter-mid-light dark:border-alter-light dark:text-main/70',
                        )}
                    />
                </Carousel>
            </div>
        </div>
    )
}