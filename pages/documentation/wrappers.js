import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function Wrappers() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(l-) Layout</strong></h1>
      <h2 className="u-mb/system">Wrappers</h2>
    </div>
    {/* l-wrapper */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>l-wrapper</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">width: 100%</p>
        <p className="u-mt/system-50">no min/max</p>
      </div>
    </div>
    {/* l-wrapper/viewport */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-my/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>l-wrapper/viewport</b></p>
        <p className="u-mt/system-50 a-text-color/n1">Wraps content based on viewport height.</p>
        <p className="u-mt/system-50 a-text-color/n1">Supports: breakpoints</p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0">width: 100%</p>
        <p className="u-mt/system-50">min-height: 100vh</p>
      </div>
    </div>
    {/* l-wrapper-[sm, md, lg, xl, xxl] */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-my/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>l-wrapper-[sm, md, lg, xl, xxl]</b></p>
        <p className="u-mt/system-50 a-text-color/n1">Wraps content based on breakpoint. Sets the maximum width of the wrapper.</p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0">width: 100% (after breakpoint)</p>
        <p className="u-mt/system-50">max-width: size of breakpoint (before breakpoint)</p>
      </div>
    </div>
    {/* l-wrapper/system */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-my/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>l-wrapper/system</b></p>
        <p className="u-mt/system-50 a-text-color/n1">Wraps content and adds system margins.</p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0">width: auto</p>
        <p className="u-mt/system-50">margin x axis: system</p>
      </div>
    </div>
    <CodeWriter>
      <code>
        {'<'}<span className="t-tag">div&nbsp;</span>
        <span className="t-attribute">class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}l-wrapper{'"'}</span>
        {'>'}
      </code>
      <br />
      <code>
        &nbsp;&nbsp;l-wrapper
      </code>
      <br />
      <code>
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>
      <br />
      <code className="u-display/block">
        {'<'}<span className="t-tag">div&nbsp;</span>
        <span className="t-attribute">class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}l-wrapper/viewport{'"'}</span>
        {'>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;l-wrapper/viewport
      </code>
      <code className="u-display/block">
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>
      <code className="u-display/block">
        {'<'}<span className="t-tag">div&nbsp;</span>
        <span className="t-attribute">class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}l-wrapper-md{'"'}</span>
        {'>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;l-wrapper-[sm, md, lg, xl, xxl]
      </code>
      <code className="u-display/block">
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>
      <code className="u-display/block">
        {'<'}<span className="t-tag">div&nbsp;</span>
        <span className="t-attribute">class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}l-wrapper/system{'"'}</span>
        {'>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;l-wrapper/system
      </code>
      <code className="u-display/block">
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>
    </CodeWriter>

    </>
  )
}
