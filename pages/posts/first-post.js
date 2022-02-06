// first-post.js
// this is actually a component!

import Link from 'next/link'
import Head from 'next/head'                        // <Head> is built into Next.js
// import Script from 'next/script'                 // much better than <script>

import Layout from '../../components/layout';       // relative path
import styles from '../../components/layout.module.css';

export default function FirstPost() {
    // return <h1>This is the "First Post" page</h1>
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>

            {/*
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            */}

            <h1 className={styles.h1}>This is the "First Post" page</h1>
            <h2>
                <Link href="/"><a className={styles.link}>Back to home</a></Link>
            </h2>
        </Layout>
    )    
}
