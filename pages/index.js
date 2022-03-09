import Head from 'next/head'
import CodeWriter from '../components/CodeWriter'
import Link from 'next/link'
import Image from 'next/image'

export default function Neumatter() {
  return (
    <>
    <Head>
      <title>neumatter</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
    <div className="l-wrapper/system u-mx/0 u-mb/system">
      <Image src="/neumatter-logo-blackBG-01.svg" width="1000" height="300" layout="responsive" className="c-img/fluid a-rounded/100 u-mb/system" alt="neumatter"/>
      <h1 className="u-mb/system">
        A light-weight css framework to standardize layouts and spacing. <br/>A moderate utility first approach.
      </h1>
      <Link href="/documentation">
        <a className="c-btn c-btn/primary"><i className="bi bi-arrow-up-right-square"></i> Get Started</a>
      </Link>
      <Link href={{ pathname: '/api/download', query: { click: true }, }} prefetch={false} /* download="_neu_downloads.zip" */>
        <a id="downloadBtn" className="c-btn c-btn/info u-ml/system">
          <i className="bi bi-file-earmark-arrow-down"></i> Download
        </a>
      </Link>
    </div>
    <CodeWriter>
      <code>
        <span className="t-tag">prefix</span>-<span className="t-attribute">property</span>/<span className="t-property">value</span>
        <span className="a-bg-color/secondary-50 u-px/system-25 a-rounded/50">:conditional</span>
      </code>
    </CodeWriter>
    </>
  )
}
