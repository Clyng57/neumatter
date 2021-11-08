import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function ConcaveConvex() {
  return (
    <>
      <Head>
        <title>Morphic</title>
		    <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
      </Head>
          
          <div className="l-system-wrapper u-mx/0">
            <h1 className="u-mb/system-33"><strong>(f-) Forms</strong></h1>
            <h2 className="u-mb/system-33">Type Sizes</h2>
            <p className="u-mb/system">Created as a light-weight framework to help standardize layouts. It is a moderate utility first approach adding more custom options by adding utility and attribute classes to components.</p>
          </div>
          <div className="l-row">
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex">convex</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small">convex-small</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/concave">concave</div>
          </div>
          
          <CodeWriter>
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"a-bg/convex"</span>
              <span className="t-tag">&gt;</span>
              convex
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"a-bg/concave"</span>
              <span className="t-tag">&gt;</span>
              concave
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
          </CodeWriter>

          <div className="l-row">
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex">concave:hover-100</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex">concave:hover-50</div>
          </div>
          
          <CodeWriter>
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"a-bg/convex"</span>
              <span className="t-tag">&gt;</span>
              convex
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;div</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"a-bg/concave"</span>
              <span className="t-tag">&gt;</span>
              concave
              <span className="t-tag">&lt;/div&gt;</span>
            </code>
          </CodeWriter>

    </>
  )
}
