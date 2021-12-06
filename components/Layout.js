import Script from 'next/script'
import Head from 'next/head'
import NavBar from './NavBar'
import ThemeButton from './ThemeButton'
import TabBar from './TabBar'
import Footer from './Footer'


export default function Layout({ children }) { 
  
  return ( 
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="color-scheme" content="light dark" />
        <title>neumatter</title>
        <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
        <meta name="theme-color" content="rgb(230, 230, 232)" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="rgb(50, 50, 50)" media="(prefers-color-scheme: dark)" />
        <link rel="mask-icon" href="/neumatter-logo-onecolor.svg" color="#000" />
        <link rel="stylesheet" href="/fonts/loadfonts.css" />
        <link rel="stylesheet" href="/css/neumatter.css" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
        <noscript>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        </noscript>
      </Head>
	    <NavBar />
      <ThemeButton />
        <div className="l-row l-has-sidebar u-flex-shrink/0 u-mx/0 u-min-vh/100 u-mb/0 c-webkit-scrollbars">
          <div className="l-sidebar:md a-bg-color/1">
            <div className="l-wrapper/viewport:md">
              <div className="u-offset/4"></div>

              <p className="u-m/system-50 u-p/system-50 a-rounded/50 a-bg-color/1 a-glow/primary t-type/secondary a-text-color/base">
                <b>npm i @neumatter/neucss</b>
              </p>

              <TabBar />
            </div>
          </div>
          <div className="l-wrapper/viewport:md">
            <div className="l-column/auto u-offset/4 u-mx/system u-pb/system">
              {children}
            </div>
          </div> 
        </div>
        <Footer />
      <Script src="/js/n.js" strategy="beforeInteractive" />
      <Script src="/js/neumatter.js" strategy="beforeInteractive" />
    </>
  )
}