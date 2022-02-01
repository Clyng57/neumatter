import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import Link from 'next/link'
import NavLink from '../../ui/NavLink'

export default function DocumentationNavbar() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(c-) Component</strong></h1>
      <h2 className="u-mb/system">Navbar</h2>
    </div>

    {/* c-btn */}

  <nav data-nav="top" data-offset="navbar" className="c-navbar a-bg/dark-blur u-mb/system" role="navigation" aria-label="main navigation">
	  <div data-theme="dark" className="c-navbar-wrapper">
      <div className="c-menu u-flex-row">
        <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
        <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
        <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
      </div>
	  </div>
  </nav>

  <div id="navbarNM" className="c-tabs">
  <input type="checkbox" id="nav-exampleToggler" defaultChecked/>
    <label className="u-p/system" htmlFor="nav-exampleToggler">
      <a className="a-rounded/50 a-bg/concave:hover a-bg-blur/base u-p/system-50">
        <b>| | |</b>
      </a>
    </label>
    <div className="c-tab">
      <nav data-nav="top" data-offset="navbar" className="c-navbar u-mb/system" role="navigation" aria-label="main navigation">
	      <div className="c-navbar-wrapper">
          <div className="c-menu u-flex-row c-tabs">
            <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
            <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
            <NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">NavLink</NavLink>
          </div>
	      </div>
      </nav>
    </div>
  </div>

    <CodeWriter>
      <code className="u-display/block">
        {'<'}<span className="t-tag">nav</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-navbar a-bg/dark-blur{'"'}</span>
        {'>'}

      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;data-theme</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}dark{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-navbar-wrapper{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-menu u-flex-row{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link u-flex-grow/1 t-align/center a-rounded/50 a-bg/concave:active a-bg/concave:hover{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}text-nowrap{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">i</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}bi bi-grid-1x2-fill nav-icon{'"'}</span>
        {'>'}
        {'<'}/<span className="t-tag">i</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}u-display/inline-block:lg u-display/none{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">strong</span>{'>'}
        NavLink
        {'<'}/<span className="t-tag">strong</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link/location{'"'}</span>
        {'>'}
        {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">div</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>

      <code className="u-display/block">
        {'<'}/<span className="t-tag">nav</span>{'>'}
      </code>

      <br />
      <br />

      <code className="u-display/block">
        {'<'}<span className="t-tag">nav</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-navbar{'"'}</span>
        {'>'}

      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-navbar-wrapper{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-menu u-flex-row{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link u-flex-grow/1 t-align/center a-rounded/50 a-bg/concave:active a-bg/concave:hover{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}text-nowrap{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">i</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}bi bi-grid-1x2-fill nav-icon{'"'}</span>
        {'>'}
        {'<'}/<span className="t-tag">i</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}u-display/inline-block:lg u-display/none{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">strong</span>{'>'}
        NavLink
        {'<'}/<span className="t-tag">strong</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">span</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link/location{'"'}</span>
        {'>'}
        {'<'}/<span className="t-tag">span</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
      &nbsp;&nbsp;&nbsp;&nbsp;
      {'<'}/<span className="t-tag">div</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>

      <code className="u-display/block">
        {'<'}/<span className="t-tag">nav</span>{'>'}
      </code>
      
    </CodeWriter>

    </>
  )
}