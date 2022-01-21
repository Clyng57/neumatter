import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function NeuBreakpoints() {
  return (
    <>
    <Head>
      <title>neumatter</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
          <div className="l-wrapper/system u-mx/0">
            <h1 className="u-mb/system-33"><strong>(l-) Layout</strong></h1>
            <h2 className="u-mb/system">Breakpoints</h2>
          </div>
          <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :sm</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
              <p className="u-my/0 u-ml/auto">620px</p>
            </div>
          </div>

          <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :md</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
              <p className="u-my/0 u-ml/auto">768px</p>
            </div>
          </div>
          
          <div className="l-row l-no-gutters u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :lg</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
              <p className="u-my/0 u-ml/auto">992px</p>
            </div>
          </div>
          
          <div className="l-row l-no-gutters u-mb/system a-bg/convex-small a-rounded/50">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :xl</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
              <p className="u-my/0 u-ml/auto">1200px</p>
            </div>
          </div>
          
          <div className="l-row l-no-gutters u-mb/system a-bg/convex-small a-rounded/50">
            <div className="l-column/9 u-px/system u-py/system-50">
              <p className="u-m/0">Breakpoint :xxl</p>
            </div>
            <div className="l-column/3 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
              <p className="u-my/0 u-ml/auto">1440px</p>
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
              <span className="c-badge a-bg-color/secondary-50">:sm</span>
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
              <span className="c-badge a-bg-color/secondary-50">:md</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">992</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="c-badge a-bg-color/secondary-50">:lg</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">1200</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="c-badge a-bg-color/secondary-50">:xl</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
            <code>
              <span className="t-tag">@media&nbsp;</span>
              <span>(min-width: <span className="t-attribute">1440</span><span className="t-property">px</span>) &#123;</span>
            </code>
            <br />
            <code>
              <span className="a-text-color/n1">&nbsp;&nbsp;u-property/size</span>
              <span className="c-badge a-bg-color/secondary-50">:xxl</span>
            </code>
            <br />
            <code>
            &#125;
            </code>
            <br />
          </CodeWriter>

    </>
  )
}
