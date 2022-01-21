import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import Link from 'next/link'

export default function Documentation() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>Overview</strong></h1>
      <h2 className="u-mb/system">Introduction</h2>
    </div>

  <div className="l-wrapper/system u-mx/0 u-pt/system-50 u-mb/system-50"> 
    <h3 className="t-size/4 u-display/inline-block">Install with NPM or </h3>
    <Link href="/_neu_downloads.zip" download="_neu_downloads.zip">
      <a className="c-btn c-btn/info u-mx/system"><i className="bi bi-file-earmark-arrow-down"></i> Download</a>
    </Link>
  </div>
  <CodeWriter>
    <code className="u-display/block">
      npm i @neumatter/neumattercss
    </code>
  </CodeWriter>

  <div className="l-wrapper/system u-mx/0 u-mt/system u-pt/system u-mb/system-50"> 
    <h3 className="t-size/4 u-display/inline-block">Edit your package.json file to read:</h3>
  </div>
  <CodeWriter>
    <code className="u-display/block">
      <span className="t-property">{'"'}scripts{'"'}</span>: {'{'}
    </code>
    <code className="u-display/block">&nbsp;&nbsp;
      <span className="t-property">{'"'}neucss{'"'}</span>: <span className="t-class">{'"'}./node_modules/.bin/neucss{'"'}</span>
    </code>
    <code className="u-display/block">
      {'},'}
    </code>
  </CodeWriter>

  <div className="l-wrapper/system u-mx/0  u-mt/system u-pt/system u-mb/system-50"> 
    <h3 className="t-size/4 u-display/inline-block">Generate the config file: </h3>
  </div>
  <CodeWriter>
    <code className="u-display/block">
      npm run neucss config
    </code>
  </CodeWriter>

  <div className="l-wrapper/system u-mx/0  u-mt/system u-pt/system u-mb/system-50"> 
    <h3 className="t-size/4 u-display/inline-block">Configuration options: </h3>
    <p>To compile neumatter.css to a certain directory edit the exportPath in neumatter.config.</p>
    <p>Edit colors, system margin & padding, system border radius, and exclude css from being compiled.</p>
  </div>

  <div className="l-wrapper/system u-mx/0  u-mt/system u-pt/system u-mb/system-50"> 
    <h3 className="t-size/4 u-display/inline-block">Compile neumatter.css: </h3>
  </div>
  <CodeWriter>
    <code className="u-display/block">
      npm run neucss compile
    </code>
  </CodeWriter>

    </>
  )
}