import Head from 'next/head'
import Link from 'next/link'

export default function DocumentationInput() {
  return (
    <>
      <Head>
        <title>neumatter</title>
		    <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
      </Head>
          
          <div className="l-wrapper/system u-mx/0">
            <h1 className="u-mb/system-33"><strong>TPU</strong></h1>
            <h2 className="u-mb/system">Logo</h2>
          </div>
          
          

<form className="l-row u-mx/system-neg2">
  <div className="l-column/6">
    <input type="color" id="color" name="color"/>
    <label htmlFor="color">Choose Color</label>
  </div>
  <div className="l-column/6">
  <svg>
    <g>
	  <path id="tpuPathOne" fill="black" d="M176.3,38.5c-1.8-2-4-3.6-6.5-4.6c-2.9-1.2-6.1-1.8-9.2-1.7h-19.3v41.4h19.3c3.2,0.1,6.3-0.5,9.2-1.6
		c2.5-1,4.7-2.5,6.5-4.4c1.7-1.8,3.1-4,3.9-6.3c0.9-2.4,1.3-4.9,1.3-7.5c0-2.9-0.4-5.7-1.3-8.4C179.3,42.9,178,40.5,176.3,38.5z"/>
	  <path id="tpuPathTwo" fill="black" d="M0,0v153.2h305.3V0H0z M290.1,116.9c-1.8,5.3-4.7,10.2-8.6,14.2c-3.9,3.9-8.6,7-13.8,8.8
		c-5.9,2.1-12.2,3.1-18.5,3c-6,0.1-12-0.9-17.6-3c-5.1-1.9-9.7-4.9-13.4-8.8c-3.9-4.1-6.8-8.9-8.7-14.2c-2.1-6.2-3.2-12.7-3.1-19.3
		l0-42.4c-0.1,5-1.2,9.8-3.2,14.4c-2.1,4.9-5.3,9.2-9.2,12.7c-4.2,3.7-9.2,6.6-14.5,8.4c-6.1,2.1-12.6,3.1-19.1,3h-19.3v47.4h-24.9
		l-0.1-108.9H76.4v108.9h-25V32.3H12V12h148.5c6.5-0.1,12.9,0.9,19.1,3.1c5.4,1.8,10.3,4.7,14.5,8.5c4,3.6,7.1,8.1,9.2,13.1
		c2,4.9,3.1,10.1,3.2,15.3l0-40h24.9l0.1,85.7c0.1,8.3,1.6,14.6,4.6,18.9c3,4.3,7.4,6.4,13.1,6.4c6.1,0,10.8-2.1,14-6.4
		c3.2-4.3,4.9-10.6,4.9-18.9l0.1-85.7H293l0.1,85.7C293.2,104.2,292.2,110.7,290.1,116.9z"/>
    </g>
  </svg>
  <Link href="/api/tpu" >
    <a id="tpuLink" className="c-btn c-btn-primary">Download</a>
  </Link>
  </div>
</form>

    </>
  )
}
