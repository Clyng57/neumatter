import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function Badge() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(c-) Component</strong></h1>
      <h2 className="u-mb/system">Badge</h2>
    </div>

    {/* c-badge */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/primary">1</span></b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/secondary">1</span></b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/info">1</span></b></p>
      </div>
    </div>
    
    {/* c-badge */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/success">1</span></b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/warning">1</span></b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50">
        <p className="u-m/0"><b>c-badge <span className="c-badge a-bg-color/danger">1</span></b></p>
      </div>
    </div>

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
