import Head from 'next/head'

export default function TextColor() {
  return (
    <>
      <Head>
        <title>neumatter</title>
      </Head>
      <div className="l-wrapper/system u-mx/0">
        <h1 className="u-mb/system-33"><strong>(a-) Attributes</strong></h1>
        <h2 className="u-mb/system">Text Color</h2>
      </div>
          <div className="l-row u-mb/system">
            <div className="l-column/6 u-p/system a-rounded/100 a-bg/convex-small a-text-color/base">a-text-color/base</div>
            <div className="l-column/6 u-p/system a-rounded/100 a-bg/convex-small a-text-color/n1">a-text-color/n1</div>

            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/primary">a-text-color/primary</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/secondary">a-text-color/secondary</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/info">a-bg-color/info</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/warning">a-bg-color/warning</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/danger">a-bg-color/danger</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/success">a-bg-color/success</div>

            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/primary:hover">a-text-color/primary</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/secondary:hover">a-text-color/secondary</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/info:hover">a-bg-color/info</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/warning:hover">a-bg-color/warning</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/danger:hover">a-bg-color/danger</div>
            <div className="l-column/4 u-p/system a-rounded/100 a-bg/convex-small a-text-color/success:hover">a-bg-color/success</div>

          </div>
          

    </>
  )
}