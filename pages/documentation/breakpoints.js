import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function NeuBreakpoints() {
  return (
    <>
    <Head>
      <title>neumatter</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
          <div className="l-system-wrapper u-mx/0">
            <h1 className="u-mb/system-33"><strong>(l-) Layout</strong></h1>
            <h2 className="u-mb/system">Breakpoints</h2>
          </div>
          <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/100">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :sm</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right">
              <p className="u-my/0 u-ml/auto">620px</p>
            </div>
          </div>

          <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/100">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :md</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right">
              <p className="u-my/0 u-ml/auto">768px</p>
            </div>
          </div>
          
          <div className="l-row l-no-gutters u-mx/0 u-mb/system a-bg/convex-small a-rounded/100">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :lg</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right">
              <p className="u-my/0 u-ml/auto">1020px</p>
            </div>
          </div>
          
          <div className="l-row l-no-gutters u-mb/system a-bg/convex-small a-rounded/100">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :xl</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right">
              <p className="u-my/0 u-ml/auto">1280px</p>
            </div>
          </div>
          
          <CodeWriter>
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">620</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="a-bg-color/secondary-50 u-px/system-25 a-rounded/50">:sm</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">768</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="a-bg-color/secondary-50 u-px/system-25 a-rounded/50">:md</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">1020</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="a-bg-color/secondary-50 u-px/system-25 a-rounded/50">:lg</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">1280</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="a-bg-color/secondary-50 u-px/system-25 a-rounded/50">:xl</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
          </CodeWriter>

    </>
  )
}
