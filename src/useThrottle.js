import { useEffect, useState, useRef } from "react";

const useThrottle = (func, delay) => {
    const [throttledFunction, setThrottledFunction] = useState(func);

    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
            const newTime = Date.now();
            const timeElapsed = newTime - lastExecuted.current;
            if(timeElapsed >= delay)
            {
                setThrottledFunction(func);
                lastExecuted.current = newTime;
            }
        }, delay - (Date.now() - lastExecuted.current));

        return () => {
            clearTimeout(handler);
        }
    }, [func, delay]);

    return throttledFunction;
}

export default useThrottle;