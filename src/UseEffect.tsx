import React, { useEffect, useState } from 'react';

type Props = {
    number: Number,
}

const UseEffect = (props: Props) => {
    const {
        number,
    } = props;

    const debug = (line: string) => {
        setLog([line, ...log]);
        console.log(line);
    };
    const [count, setCount] = useState(0);
    const [log, setLog] = useState<Array<String>>([]);

    useEffect(() => {
        return () => {
            debug("アンマウント時のみ実行される");
        };
        debug("最初のマウント時のみ実行される");
    }, []);

    useEffect(() => {
        debug("初回マウント時とstate更新後に毎回実行される");
    },[count]);

    useEffect(()=>{
        debug("初回マウント時とpropsが更新されたときに実行されます");
    },[number]);

    return (
        <div>
            <div>state(count): {count}</div>
            <div>props(number): {number}</div>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            {log.map((line) => { return <p>{line}</p>})}
        </div>
    );
};

export default UseEffect;
