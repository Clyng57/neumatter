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
          </CodeWriter>

          <div className="l-wrapper u-my/system">
                <select className="f-input">
                    <optgroup label="Choice [1-3]">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </optgroup>
                    <optgroup label="Choice [4-6]">
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                    </optgroup>
                </select>
          </div>

          <div className="l-wrapper u-my/system">
                <textarea id="textarea" name="textarea" rows="4" className="f-input">
                </textarea>
          </div>
          <div className="l-wrapper u-my/system">
                <div className="f-toggle">
                  <input type="checkbox" id="switch" />
                  <label for="switch"></label>
                </div>
          </div>
          <div className="l-wrapper u-my/system">
                <div className="f-checkbox">
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <span></span>
                  <label for="flexCheckDefault">
                    Checkbox
                  </label>
                </div>
          </div>
          
          

                <form className="l-row u-mx/system-neg2">
  <div className="l-column/6">
    <input type="file" id="inputDate"/>
  </div>
  <div className="l-column/6">
    <label for="inputDate" className="f-float-label">Date</label>
    <input type="date" className="f-input" id="inputDate" placeholder=""/>
  </div>
  <div className="l-column/6">
    <label for="inputSearch" className="f-float-label">Search</label>
    <input type="search" className="f-input" id="inputSearch" placeholder=""/>
  </div>
  <div className="l-column/6:md">
    <label for="inputEmail4" className="f-float-label">Email<span className="a-text-color/warning">*</span></label>
    <input type="email" className="f-input" id="inputEmail4" />
  </div>
  <div className="l-column/6:md">
    <label for="inputPassword4" className="f-float-label">Password<span className="a-text-color/warning">*</span></label>
    <input type="password" className="f-input f-invalid" id="inputPassword4" required/>
  </div>
  <div className="l-column/12">
    <label for="inputAddress" className="f-float-label">Address</label>
    <input type="text" className="f-input" id="inputAddress" placeholder="1234 Main St" disabled/>
  </div>
  <div className="l-column/12">
    <label for="inputAddress2" className="f-float-label">Address 2</label>
    <input type="text" className="f-input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="l-column/6:md">
    <label for="inputCity" className="f-float-label">City</label>
    <input type="text" className="f-input" id="inputCity" />
  </div>
  <div className="l-column/4:md">
    <label for="inputState" className="f-float-label">State</label>
    <select id="inputState" className="f-input">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="l-column/2:md">
    <label for="inputZip" className="f-float-label">Zip</label>
    <input type="text" className="f-input" id="inputZip" />
  </div>
  <div className="l-column/12">
    <button type="submit" className="c-btn c-btn-primary">Sign in</button>
  </div>
</form>

    </>
  )
}
