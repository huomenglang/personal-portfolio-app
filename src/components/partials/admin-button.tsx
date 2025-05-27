import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { LayoutDashboard, LogOut } from "lucide-react";

interface AdminButtonProps {
    checkAuth: () => Promise<void>;
}

export default function AdminButton({ checkAuth }: AdminButtonProps) {
    const router = useRouter();

    const handleSignOut = async () => {
        await fetch('/api/logout', { method: 'POST', credentials: 'include' })
        checkAuth()
        router.refresh();
    }

    return (
        <Menubar className='bg-transparent shadow-none p-0 border-none space-x-0'>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Button
                        variant='ghost'
                        size='icon'
                        className={cn(
                            'bg-ochre/60 hover:bg-ochre/70 dark:hover:bg-ochre/70 text-alter-light dark:text-main-mid',
                            'data-[state=open]:bg-ochre focus:bg-ochre0bg-ochre',
                            'rounded-xl cursor-pointer p-0',
                        )}
                    >
                        <LayoutDashboard className='w-4 h-4' />
                    </Button>
                </MenubarTrigger>
                <MenubarContent align='end' className='bg-main-mid-light dark:bg-alter-mid-light border-2 border-main-dark dark:border-alter-light rounded-xl'>
                    <MenubarItem className='rounded-lg hover:!bg-main dark:hover:!bg-alter-light'>
                        <Link href='/dashboard' className='w-full flex items-center'>
                            <LayoutDashboard className='w-4 h-4 mr-2' />
                            Dashboard
                        </Link>
                    </MenubarItem>
                    <MenubarItem
                        onClick={() => {
                            handleSignOut()
                        }}
                        className='cursor-pointer text-coral focus:bg-coral-dark/30 focus:text-coral dark:hover:bg-coral-dark/30 rounded-lg'
                    >
                        <LogOut className='w-4 h-4 mr-2' />
                        Logout
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild className='!focus-visible:ring-0'>
        //         <Button
        //             variant='ghost'
        //             size='icon'
        //             className='bg-green-500/20 dark:bg-green-700/30 hover:bg-green-500/30 dark:hover:bg-green-700/40 rounded-xl'
        //         >
        //             <Shield className='w-4 h-4 text-green-600' />
        //         </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent>
        //         <DropdownMenuItem>
        //             <Link href='/dashboard' className='w-full flex items-center'>
        //                 <LayoutDashboard className='w-4 h-4 mr-2' />
        //                 Dashboard
        //             </Link>
        //         </DropdownMenuItem>
        //         <DropdownMenuItem
        //             onClick={() => {
        //                 handleSignOut()
        //             }}
        //             className='cursor-pointer text-red-500 hover:text-red-500 hover:bg-red-500/30 dark:hover:bg-red-700/40'
        //         >
        //             <LogOut className='w-4 h-4 mr-2' />
        //             Logout
        //         </DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    )
}