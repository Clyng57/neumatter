import Head from 'next/head'
import MorphicLayout from '../components/MorphicLayout'

export default function NeuColor() {
  return (
    <>
    <Head>
      <title>Morphic</title>
      <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
    </Head>
          
          <div className="l-system-wrapper u-mx/0">
            <h1 className="u-mb/system-33"><strong>(a-) Attributes</strong></h1>
            <h2 className="u-mb/system-33">Color</h2>
            <p className="u-mb/system">Created as a light-weight framework to help standardize layouts. It is a moderate utility first approach adding more custom options by adding utility and attribute classes to components.</p>
          </div>
          <div className="l-system-wrapper u-mx/0 u-mb/system u-p/system a-bg/convex a-rounded">
            <p className="a-text-color/primary u-mb/system-50">a-text-color/primary</p>
            <p className="a-text-color/secondary u-mb/system-50">a-text-color/secondary</p>
            <p className="a-text-color/info u-mb/system-50">a-text-color/info</p>
            <p className="a-text-color/success u-mb/system-50">a-text-color/success</p>
            <p className="a-text-color/warning u-mb/system-50">a-text-color/warning</p>
            <p className="a-text-color/danger">a-text-color/danger</p>
          </div>
          
          <div className="l-system-wrapper code a-rounded u-mx/0 u-px/system u-py/system">
            
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
              <span className="t-class">"t-size/6"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"t-size/5"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"t-size/4"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"t-size/3"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"t-size/2"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
            <br />
            <code>
              <span className="t-tag">&lt;p</span>
              <span className="t-attribute">&nbsp;class=</span>
              <span className="t-class">"t-size/1"</span>
              <span className="t-tag">&gt;</span>
              The quick brown fox jumps over the lazy dog
              <span className="t-tag">&lt;/p&gt;</span>
            </code>
          </div>
                          
                     
    </>
  )
}