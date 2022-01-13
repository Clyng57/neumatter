import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'

export default function Display() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(u-) Utilities</strong></h1>
      <h2 className="u-mb/system">Display</h2>
    </div>
    {/* u-display/none */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/none</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: none ;</p>
      </div>
    </div>
    {/* u-display/inline */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/inline</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: inline ;</p>
      </div>
    </div>
    {/* u-display/inline-block */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/inline-block</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: inline-block ;</p>
      </div>
    </div>
    {/* u-display/block */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/block</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: block ;</p>
      </div>
    </div>
    {/* u-display/flex */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/flex</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: flex ;</p>
      </div>
    </div>
    {/* u-display/inline-flex */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/inline-flex</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: inline-flex ;</p>
      </div>
    </div>
    {/* u-display/table */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/table</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: table ;</p>
      </div>
    </div>
    {/* u-display/table-row  */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/table-row </b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: table-row  ;</p>
      </div>
    </div>
    {/* u-display/table-cell */}
    <div className="l-row l-no-gutters u-flex-grow/1 u-mx/0 u-mb/system a-bg/convex-small a-rounded/50">
      <div className="l-column/8 u-px/system u-py/system-50">
        <p className="u-m/0"><b>u-display/table-cell</b></p>
      </div>
      <div className="l-column/4 u-px/system u-py/system-50 a-bg-color/1 a-rounded/right-50">
        <p className="u-my/0 u-ml/auto">display: table-cell ;</p>
      </div>
    </div>

    </>
  )
}
