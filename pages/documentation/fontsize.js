import Head from 'next/head'

export default function DocTypography() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(t-) Typography</strong></h1>
      <h2 className="u-mb/system">Size</h2>
    </div>
    {/* l-wrapper/viewport */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-my/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<html>'}</b></p>
        <p className="u-mt/system-50 a-text-color/n1">Change this font size to alter all others.</p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0">font size: 16px</p>
      </div>
    </div>
    {/* body and p */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<body>'} {'<p>'} .t-type/title</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 0.9375rem</p>
      </div>
    </div>
    {/* h6 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h6>'} .t-size/6</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.0625rem</p>
      </div>
    </div>
    {/* h5 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h5>'} .t-size/5</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.25rem</p>
      </div>
    </div>
    {/* h4 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h4>'} .t-size/4</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.325rem</p>
      </div>
    </div>
    {/* h3 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h3>'} .t-size/3</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.4375rem</p>
      </div>
    </div>
    {/* h2 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h2>'} .t-size/2</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.625rem</p>
      </div>
    </div>
    {/* h1 */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>{'<h1>'} .t-size/1</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">font size: 1.8125rem</p>
      </div>
    </div>

    </>
  )
}
