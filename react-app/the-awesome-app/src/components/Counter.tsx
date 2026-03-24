// counter initilsation <Counter count={5} />
'use client'; 
import { ChangeEvent, useEffect, useRef, useState } from "react";

type CounterProps = {
    count: number;
}

export default function Counter(props: CounterProps) {
    const [count, setCount] = useState(props.count);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log("Count updated:", count);
    },[count]);
function increment() {
    //setCount(count + 1);
    setCount((prevCount) => prevCount + 5);
    setCount((prevCount) => prevCount + 5);
    console.log("Count after increment",count);

}

function decrement() {
    console.log("Decrementing count",count);
    setCount(count - 1);
    setCount(count - 1);
    console.log("Count after decrement",count);
}
function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(e.target.value);
    setCount(newValue);
    console.log("Count after input change",newValue);
}
    return (
        <div>
            <p>Count: {count}</p>
            <div>
                <button onClick={increment}>Increment</button>&nbsp;
                <button onClick={decrement}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
            <div>
                <input type="number" value= {count} onChange={handleInputChange} />
            </div>
            <div>
                <input type="number" placeholder="ENTER THE NEW COUNT" ref={inputRef} />&nbsp;
                <button onClick={() => setCount(inputRef.current?.valueAsNumber || 0)}>Update Count</button>
            </div>
        </div>
    );
}