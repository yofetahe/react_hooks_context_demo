import { useState } from "react";
import createUserContext from "constate";

//Custom hooks that contain state and action
function useCounter(){
    const [count, setCount] = useState(0);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    return { count, increment, decrement };
}

//Declare context state object to share the state with other components
export const useCounterContext = createUserContext(useCounter);