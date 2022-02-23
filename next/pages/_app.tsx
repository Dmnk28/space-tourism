import '../styles/main.css';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import { useState } from 'react';
import Image from 'next/image';
import BackgroundImage from '../components/BackgroundImage';


const MyApp = ({ Component, pageProps }: AppProps) => {
  const [pageBgr, setPageBgr] = useState<string>('home');


  return (
    <>
      <BackgroundImage pageBgr={pageBgr}/>
      <header className="flex z-1">
        <Navigation setPageBgr={setPageBgr}/>
      </header>
      <Component className="z-1" {...pageProps} />
    </>
  )
}

export default MyApp
