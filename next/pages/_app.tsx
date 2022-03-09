import type { AppProps } from 'next/app';
import { useState } from 'react';

import '../styles/main.css';

import Navigation from '../components/Navigation';
import BackgroundImage from '../components/BackgroundImage';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [pageBgr, setPageBgr] = useState<string>('home');


  return (
    <>
      <BackgroundImage pageBgr={pageBgr}/>
      <a className="skip-to-content" href="#main">Skip to content</a>
      <header className="primary-header flex z-2">
        <Navigation setPageBgr={setPageBgr}/>
      </header>
      <span id='main'></span> 
        <Component className="z-1" {...pageProps} />
    </>
  )
}

export default MyApp
