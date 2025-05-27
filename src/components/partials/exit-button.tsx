import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "@/i18n/routing";
import { LogOut } from "lucide-react";

export default function ExitButton() {
    const router = useRouter();
    const { checkAuth } = useAuth();

    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST', credentials: 'include' })
        checkAuth()
        router.push('/');
    }

    return (
        <Button
            size='icon'
            onClick={handleLogout}
            className='bg-coral-dark/30 hover:bg-coral-dark/40 rounded-xl'
        >
            <LogOut className='w-4 h-4 text-coral' />
        </Button>
    )
}