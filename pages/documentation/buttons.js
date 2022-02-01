import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import Link from 'next/link'

export default function Buttons() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(c-) Component</strong></h1>
      <h2 className="u-mb/system">Buttons</h2>
    </div>

    {/* c-btn */}
    <Link href="#">
      <a className="c-btn u-mb/system u-mx/system-50">c-btn</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/reverse u-mb/system u-mx/system-50">c-btn/reverse</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/primary u-mb/system u-mx/system-50">c-btn/primary</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/secondary u-mb/system u-mx/system-50">c-btn/secondary</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/info u-mb/system u-mx/system-50">c-btn/info</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/success u-mb/system u-mx/system-50">c-btn/success</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/warning u-mb/system u-mx/system-50">c-btn/warning</a>
    </Link>
    <Link href="#">
      <a className="c-btn c-btn/danger u-mb/system u-mx/system-50">c-btn/danger</a>
    </Link>

    <CodeWriter>
      <code className="u-display/block">
        {'<'}<span className="t-tag">p</span>{'>'}c-badge{'<'}
        <span className="t-tag">span&nbsp;</span>
        <span className="t-attribute">class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-badge a-bg-color/primary{'"'}</span>{'>'}1
        {'<'}/<span className="t-tag">span</span>{'>'}
        {'<'}/<span className="t-tag">p</span>{'>'}
      </code>
      
    </CodeWriter>

    </>
  )
}