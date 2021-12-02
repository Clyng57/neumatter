import Head from 'next/head'
import CodeWriter from '../components/CodeWriter'
import Link from 'next/link'

export default function Neumatter() {
  return (
    <>
    <Head>
      <title>neumatter</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
    <div className="l-system-wrapper u-mx/0 u-mb/system">
      <img src="/neumatter-logo-blackBG-01.svg" className="c-img/fluid a-rounded/100 u-mb/system" alt="neumatter"/>
      <h1 className="u-mb/system">
        A light-weight css framework to standardize layouts and spacing. <br/>A moderate utility first approach.
      </h1>
      <Link href="#">
        <a className="c-btn c-btn/primary"><i class="bi bi-arrow-up-right-square"></i> Get Started</a>
      </Link>
      <Link href="#">
        <a className="c-btn c-btn/info u-ml/system"><i class="bi bi-file-earmark-arrow-down"></i> Download</a>
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
