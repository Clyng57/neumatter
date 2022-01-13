import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function NeuColumns() {
  return (
    <>
    <Head>
      <title>neumatter</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
          <div className="l-wrapper/system u-mx/0">
            <h1 className="u-mb/system-33"><strong>(l-) Layout</strong></h1>
            <h2 className="u-mb/system">Columns</h2>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/6 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/6</p>
            </div>
            <div className="l-column/6 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/6</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/7 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/7</p>
            </div>
            <div className="l-column/5 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/5</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/8 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/8</p>
            </div>
            <div className="l-column/4 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/4</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/9 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/9</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/3</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/10 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/10</p>
            </div>
            <div className="l-column/2 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/2</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0">
            <div className="l-column/4 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/4</p>
            </div>
            <div className="l-column/4 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/4</p>
            </div>
            <div className="l-column/4 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/4</p>
            </div>
          </div>
          <div className="l-row u-flex-grow/1 u-mx/0 u-mb/system-50">
            <div className="l-column/6 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/6</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/3</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg/convex-small a-rounded/50">
              <p className="u-m/0">l-column/3</p>
            </div>
          </div>
          
          <CodeWriter>
            <code>
              {'<'}<span className="t-tag">div&nbsp;</span>
              <span className="t-attribute">class</span>
              <span className="t-operator">=</span>
              <span className="t-class">{'"'}l-row{'"'}</span>
              {'>'}
            </code>
            <br />
            <code>
              &nbsp;&nbsp;{'<'}<span className="t-tag">div&nbsp;</span>
              <span className="t-attribute">class</span>
              <span className="t-operator">=</span>
              <span className="t-class">{'"'}l-column/6{'"'}</span>
              {'>'}
            </code>
            <br />
            <code>
              &nbsp;&nbsp;&nbsp;&nbsp;l-column/6
            </code>
            <br />
            <code>
              &nbsp;&nbsp;{'<'}/<span className="t-tag">div</span>{'>'}
            </code>
            <br />
            <code>
              {'<'}/<span className="t-tag">div</span>{'>'}
            </code>

            <br />
          </CodeWriter>

    </>
  )
}
