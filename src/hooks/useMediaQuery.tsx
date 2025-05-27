import { useEffect, useState } from "react";

let timer: NodeJS.Timeout;

const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            clearTimeout(timer);
            timer = setTimeout(() => setMatches(media.matches), 500);
        }

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);

    }, [matches, query]);

    return matches;
};

export default useMediaQuery;
