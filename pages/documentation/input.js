import Head from 'next/head'

export default function DocumentationInput() {
  return (
    <>
      <Head>
        <title>neumatter</title>
		    <meta property="og:description" key="description" content="Web Design, Typography, Iconography, and more..." />
      </Head>
          
          <div className="l-wrapper/system u-mx/0">
            <h1 className="u-mb/system-33"><strong>(f-) Forms</strong></h1>
            <h2 className="u-mb/system">Inputs</h2>
          </div>

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
                  <label htmlFor="switch"></label>
                </div>
          </div>
          <div className="l-wrapper u-my/system">
                <div className="f-checkbox">
                  <input type="checkbox" value="" id="flexCheckDefault" />
                  <span></span>
                  <label htmlFor="flexCheckDefault">
                    Checkbox
                  </label>
                </div>
          </div>
          
          

                <form className="l-row u-mx/system-neg2">
  <div className="l-column/6">
    <input type="file" id="inputDate"/>
  </div>
  <div className="l-column/6">
    <label htmlFor="inputDate" className="f-float-label">Date</label>
    <input type="date" className="f-input" id="inputDate" placeholder=""/>
  </div>
  <div className="l-column/6">
    <label htmlFor="inputSearch" className="f-float-label">Search</label>
    <input type="search" className="f-input" id="inputSearch" placeholder=""/>
  </div>
  <div className="l-column/6:md">
    <label htmlFor="inputEmail4" className="f-float-label">Email<span className="a-text-color/warning">*</span></label>
    <input type="email" className="f-input" id="inputEmail4" />
  </div>
  <div className="l-column/6:md">
    <label htmlFor="inputPassword4" className="f-float-label">Password<span className="a-text-color/warning">*</span></label>
    <input type="password" className="f-input f-invalid" id="inputPassword4" required/>
  </div>
  <div className="l-column/12">
    <label htmlFor="inputAddress" className="f-float-label">Address</label>
    <input type="text" className="f-input" id="inputAddress" placeholder="1234 Main St" disabled/>
  </div>
  <div className="l-column/12">
    <label htmlFor="inputAddress2" className="f-float-label">Address 2</label>
    <input type="text" className="f-input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div className="l-column/6:md">
    <label htmlFor="inputCity" className="f-float-label">City</label>
    <input type="text" className="f-input" id="inputCity" />
  </div>
  <div className="l-column/4:md">
    <label htmlFor="inputState" className="f-float-label">State</label>
    <select id="inputState" className="f-input">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="l-column/2:md">
    <label htmlFor="inputZip" className="f-float-label">Zip</label>
    <input type="text" className="f-input" id="inputZip" />
  </div>
  <div className="l-column/12">
    <button type="submit" className="c-btn c-btn-primary">Sign in</button>
  </div>
</form>

    </>
  )
}
