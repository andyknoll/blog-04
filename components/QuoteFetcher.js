// QuoteFetcher.js

import React from 'react';
import styles from './QuoteFetcher.module.css'

export default function QuoteFetcher({ children, home }) {

    const [quote, setQuote] = React.useState("No quote has been fetched yet.");
    const fetchUrl = "https://jsonplaceholder.typicode.com/todos/";

    const fetchQuote = () => {
        setQuote("fetching next quote...");
        fetch(fetchUrl)
        .then(response => response.json())
        .then(quotes => {
            //console.log(quotes);
            const quote = quotes[Math.floor(Math.random() * 100)];
            setQuote(quote.title);
        })
    }

    return (
        <div className={styles.quoteFetcher}>
            <button className={styles.buttonA} onClick={fetchQuote}>Fetch Quote</button>
            <p>{quote}</p>
        </div>
    )
}
