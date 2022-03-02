import React from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Space Tourism</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <main className='grid-container grid-container--home'>
        <div>
          <h1 className='uppercase ff-sans-serif fs-500 text-light letter-spacing-1'> 
            So, you want to travel to
            <span className='text-white ff-serif fs-900 d-block'>Space</span>
          </h1> 
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <div>
          <Link href="/" passHref>
            <a className='large-button uppercase ff-serif text-dark bg-white'>Explore</a>
          </Link> 
        </div>
      </main>
    </React.Fragment>
  )
}

export default Home
