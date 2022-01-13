import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import NotificationCenter from '../../components/NotificationCenter'

export default function DocumentationInput() {
  return (
    <>
      <Head>
        <title>neumatter</title>
		    <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
      </Head>
          
          <div className="l-system-wrapper u-mx/0">
            <h1 className="u-mb/system-33"><strong>(f-) Forms</strong></h1>
            <h2 className="u-mb/system-33">Type Sizes</h2>
            <p className="u-mb/system">Created as a light-weight framework to help standardize layouts. It is a moderate utility first approach adding more custom options by adding utility and attribute classes to components.</p>
          </div>
          <div className="l-system-wrapper u-mx/0 u-mb/system u-p/system a-rounded/100 a-bg/convex">
              <p className="u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/6 u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/5 u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/4 u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/3 u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/2 u-mb/system-50">The quick brown fox jumps over the lazy dog</p>
              <p className="t-size/1">The quick brown fox jumps over the lazy dog</p>
          </div>

          <NotificationCenter>
            <div className="c-notification a-bg-blur/success" data-notification="successDemo">
              <p className="t-title">Title</p>
              <p className="t-secondary">Secondary</p>
              <p className="t-body">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="c-notification a-bg-blur/warning" data-notification="successDemo">
              <p className="t-title">Title</p>
              <p className="t-secondary">Secondary</p>
              <p className="t-body">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="c-notification a-bg-blur/info" data-notification="successDemo">
              <p className="t-title">Title</p>
              <p className="t-secondary">Secondary</p>
              <p className="t-body">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div className="c-notification a-bg-blur/1" data-notification="successDemo">
              <p className="t-title">Title</p>
              <p className="t-secondary">Secondary</p>
              <p className="t-body">The quick brown fox jumps over the lazy dog.</p>
            </div>
          </NotificationCenter>
          
          <CodeWriter>
            
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/6{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/5{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/4{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/3{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/2{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">{'"'}t-size/1{'"'}</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
          </CodeWriter>

    </>
  )
}
