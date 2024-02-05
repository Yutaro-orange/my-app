import { useState } from 'react';
export default function StateBasic({ init }){
    const [count, setCount] = useState(init);
    const hundleClick = () => setCount(count + 1);

    return (
        <>
            <button onClick ={hundleClick}>カウント</button>
            <p>{count}回クリックされました。</p>
        </>
    );
}
