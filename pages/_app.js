// _app.js

import '../styles/global.css'           // THIS IS THE ONLY PLACE THIS CAN BE IMPORTED!

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
