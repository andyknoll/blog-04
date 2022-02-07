// QuoteFetcher.js

import React from 'react';
import styles from './QuoteFetcher.module.css'


export default function QuoteFetcher({}) {

    const [quote, setQuote] = React.useState("No quote has been fetched yet.");
    const [isDelayed, setIsDelayed] = React.useState(true);        // for throttling
    const [randomIdx, setRandomIdx] = React.useState(Math.floor(Math.random() * 200));

    const fetchUrl = "https://jsonplaceholder.typicode.com/todos/";

    const fetchQuote = () => {
        setQuote("fetching next quote...");
        setRandomIdx(Math.floor(Math.random() * 200));

        let delayMsecs = 0;
        if (isDelayed) delayMsecs = 500;

        setTimeout(() => {
            fetch(fetchUrl)
            .then(response => response.json())
            .then(quotes => {
                const quote = quotes[randomIdx];
                setQuote(quote.title);
            })    
        }, delayMsecs);
    }

    const delayQuote = () => {
        setIsDelayed(!isDelayed);
    }

    return (
        <div className={styles.quoteFetcher}>
            <div className={styles.flexRow}>
                <button className={styles.buttonA} onClick={fetchQuote}>Fetch Latin Quote</button>
                <div className={styles.flexRow}>
                    <label>Throttle </label>
                    <input  className={styles.checkbox} type={"checkbox"} checked={isDelayed} onClick={delayQuote}/>
                </div>
            </div>
            <p>using random index: <strong>{randomIdx}</strong></p>
            <p>{quote}</p>
        </div>
    )
}
