import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function ConcaveConvex() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(a-) Attributes</strong></h1>
      <h2 className="u-mb/system">Concave & Convex</h2>
    </div>
          <div className="l-row u-mb/system">
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex">convex</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small">convex-small</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/concave">concave</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex a-bg/concave:hover">concave:hover</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex:hover">convex:hover</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small:hover">convex-small:hover</div>
          </div>
          
          <CodeWriter>
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}a-bg/convex{'"'}</span>
              <span className="t-tag">&gt;</span>
              convex
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}a-bg/convex-small{'"'}</span>
              <span className="t-tag">&gt;</span>
              convex
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}a-bg/concave{'"'}</span>
              <span className="t-tag">&gt;</span>
              concave
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}a-bg/concave:hover{'"'}</span>
              <span className="t-tag">&gt;</span>
              concave
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
          </CodeWriter>

    </>
  )
}
