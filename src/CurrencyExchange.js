import { createRef, useEffect, useState } from 'react';

function CurrencyExchange(props) {
    const money = createRef();
    const [result, setResult] = useState();
    const [additionalResult, setAdditionalResult] = useState();

    const calc = () => {
        setResult((money.current.value / props.exchange).toFixed(3));
    };

    useEffect(() => {
        setAdditionalResult((result / 1.1313).toFixed(3));
    }, [result]);

    return (<div style={{ backgroundColor: 'grey', padding: 20 }}>
        <input ref={money} />
        {
            result && <div>
                UAH = ${result} if exchange rate is {props.exchange}<br />
                Also, is &euro;{additionalResult} if cross rate is 1.1313
            </div>
        }

        <button onClick={calc}>Calculate</button>
    </div>);
}

export default CurrencyExchange;