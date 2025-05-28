import { cn } from '@/lib/utils';
import { Contacts as ContactsType } from '@/shared/types/contacts';
import { PersonalInfo } from '@/shared/types/info';
import * as motion from "framer-motion/client";
import Image from 'next/image';
import Contacts from '../contacts';

export default function Info({ data, contacts }: { data: PersonalInfo, contacts: ContactsType }) {
    return (
        <motion.div
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
            }}
            initial='hidden'
            whileInView='visible'
            className='max-w-[800px] mx-auto'
        >
            <div className='flex items-center max-md:flex-col max-md:space-y-8 md:space-x-16 '>
                <div className='flex flex-col items-center'>
                    <div className='relative size-32 md:size-64 bg-main-mid dark:bg-alter-mid rounded-full border-2 border-main-dark dark:border-alter-light'>
                        <Image
                            src={`/assets/images/${data.image}`}
                            alt={data.name}
                            fill
                            className='rounded-full object-cover object-center border-3 border-gray-200'
                        />
                        <div className='absolute -top-5 md:top-3 right-0 translate-x-1/4'>
                            <div className={cn(
                            
                                'backdrop-blur-md bg-main-mid/60 dark:bg-alter-mid/60 py-2 px-2 rounded-xl text-xs lg:text-sm  max-w-[150px] text-center',
                                'border-2 border-main-dark dark:border-alter-light'
                            )}>
                                {data.status}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <h1 className='text-3xl md:text-4xl font-bold text-center'>
                        {data.title}
                    </h1>
                    <div className='flex space-x-5 mt-3 justify-center'>
                        {data.specialization.map((specialization, index) => (
                            <div key={index} className='bg-main-mid-light dark:bg-alter-mid-light px-3 py-1 mt-2 rounded-full w-fit'>
                                <p className='text-sm font-light text-alter dark:text-main'>
                                    {specialization}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className='mt-5 text-sm md:text-base font-normal leading-6 text-center'>
                        {data.description}
                    </p>
                </div>
            </div>

            <div className='mt-8'>
                <Contacts contacts={contacts} />
            </div>
        </motion.div>
    )
}