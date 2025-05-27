import { useEffect, useState } from 'react';

const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuth = async () => {
        const res = await fetch('/api/protected', { credentials: 'include' });
        setIsLoggedIn(res.ok);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return { isLoggedIn, checkAuth };
};

export default useAuth;