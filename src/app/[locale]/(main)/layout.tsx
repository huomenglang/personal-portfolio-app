import BottomBar from "@/components/partials/bottombar";
import Header from "@/components/partials/header";
import getLocalData  from "@/lib/getLocalData";
import { Common } from "@/shared/types/common";
import { getLocale } from "next-intl/server";

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    const locale = await getLocale();
    const common: Common = await getLocalData("common", locale);

    return (
        <div className='relative h-full w-full flex flex-col'>
            <Header data={common} />
            <div className='flex-1 overflow-y-auto'>
                <div className='max-w-[1220px] mx-auto min-h-full px-2 md:px-5'>
                    <div className='pb-16 md:pb-5'>
                        <main className='pb-6 md:pb-0'>
                            {children}
                        </main>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    );
}