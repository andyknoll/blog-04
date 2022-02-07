// index.js

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import QuoteFetcher from '../components/QuoteFetcher'

import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'     // used in getStaticProps()

// THIS RUNS ONLY ON THE SERVER!
// export async function getStaticProps() {
export function getStaticProps() {
  const allPostsData = getSortedPostsData()           // from posts.js - returned in the props object
  return {
    props: {
      allPostsData
    }
  }
}


// now we can pass in { allPostsData } as a prop
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* this IS NOT pre-rendered */}
      <section className={utilStyles.headingMd}>
        {/*
        <p className={utilStyles.center}>Frontend Dev | Media Producer</p>
        <p className={utilStyles.center}>This is a sample website</p>
        <p className={utilStyles.center}>
          You will be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>
        </p>
        */}
        <small>This page is pre-rendered using SSG but contains a component which can fetch data on demand.</small>
        <br/><br/>
      </section>

      <section>
        <QuoteFetcher />
      </section>
            

    </Layout>
  )
}

      // {/* added this new section here */}
      // {/* this IS pre-rendered */}
      // <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      //   <h2 className={utilStyles.headingLg}>Blog</h2>
      //   <ul className={utilStyles.list}>
      //     {allPostsData.map(({ id, date, title }) => (
      //       <li className={utilStyles.listItem} key={id}>
      //         <strong>{title}</strong>
      //         <br />
      //         {/*
      //         {id}
      //         <br />
      //         */}
      //         {date}
      //       </li>
      //     ))}
      //   </ul>
      // </section>
