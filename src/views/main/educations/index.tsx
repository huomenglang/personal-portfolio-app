import { Experience, ExperienceList } from '@/shared/types/experience';
import * as motion from "framer-motion/client";

interface ExperienceItemProps {
    experience: Experience;
    id: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, id }) => {
    return (
        <motion.div
            className='relative w-full pl-8'
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: id * 0.1,
                        once: true
                    }
                }
            }}
            viewport={{ once: true }}
            initial='hidden'
            animate='visible'
        >
            <div className='flex items-center absolute top-3 -left-[3.5px] -translate-y-1/2'>
                <div
                    className='size-3 bg-main dark:bg-alter rounded-full border-2 border-main-dark dark:border-alter-light border-solid z-10'>
                </div>
                <div
                    className='w-5 border-2 border-main-mid dark:border-alter-light border-solid rounded-r-full -ml-1'>
                </div>
            </div>
            <div>
                <h1 className='text-lg md:text-xl font-semibold text-alter dark:text-main'>
                    {experience.position}
                </h1>
                <h4 className='text-base md:text-lg text-alter-light/70 dark:text-main-light/60'>
                    {`${experience.company} (${experience.period.start} - ${experience.period.finish})`}
                </h4>
                <ol className='list-disc ml-5 mt-3 text-sm md:text-base text-alter-light/70 dark:text-main-light/60'>
                    {experience.description.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
        </motion.div>
    )
}

export default function ExperiencesView({ experienceList }: { experienceList: ExperienceList }) {
    return (
        <div className='py-8 md:py-16'>
            <div className='relative max-w-[700px] mx-auto pl-3'>
                <div className='absolute top-0 left-3 h-full border-2 border-main-mid dark:border-alter-light border-solid rounded-full'>
                    <div className='absolute -top-2.5 -left-2.5 flex gap-3'>
                        <div
                            className='size-5 bg-main dark:bg-alter rounded-full border-4 border-main-dark dark:border-alter-light border-solid'>
                        </div>
                        <div className='text-alter/60 dark:text-main text-sm font-semibold'>
                            Present
                        </div>
                    </div>
                    <div className='absolute -bottom-2.5 -left-2.5 flex gap-3'>
                        <div
                            className='size-5 bg-main dark:bg-alter rounded-full border-4 border-main-dark dark:border-alter-light border-solid'>
                        </div>
                        <div className='text-alter/60 dark:text-main text-sm font-semibold'>
                            {experienceList.startYear}
                        </div>
                    </div>
                </div>
                <div className='py-16 space-y-16'>
                    {experienceList.experience.map((experience: Experience, index: number) => (
                        <ExperienceItem key={index} experience={experience} id={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}