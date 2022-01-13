import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import Link from 'next/link'
import TabBarTitle from '../../ui/TabBarTitle'
import TabBarLink from '../../ui/TabBarLink'

export default function DocumentationTabBar() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(c-) Component</strong></h1>
      <h2 className="u-mb/system">Navbar Tabs</h2>
    </div>

    {/* c-tabs */}

  <nav data-nav="top" data-offset="navbar" className="c-navbar a-rounded" role="navigation" aria-label="main navigation">
	  <div className="c-navbar-wrapper">
      <div className="c-menu c-tabs">
        <TabBarTitle dataNav="tab-20">
          Tab 1
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="#">Link 1</TabBarLink>
            <TabBarLink pageLink="#">Link 2</TabBarLink>
            <TabBarLink pageLink="#">Link 3</TabBarLink>
            <TabBarLink pageLink="#">Link 4</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-21">
          Tab 2
        </TabBarTitle>
          <div className="c-tab a-rounded/bottom">
            <TabBarLink pageLink="#">Link 1</TabBarLink>
            <TabBarLink pageLink="#">Link 2</TabBarLink>
            <TabBarLink pageLink="#">Link 3</TabBarLink>
            <TabBarLink pageLink="#">Link 4</TabBarLink>
          </div>
      </div>
	  </div>
  </nav>

    <CodeWriter>
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
        <span className="t-class">{'"'}c-menu c-tabs{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">input</span>
        <span className="t-attribute">&nbsp;type</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}radio{'"'}</span>
        <span className="t-attribute">&nbsp;data-nav</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}tab{'"'}</span>
        <span className="t-attribute">&nbsp;id</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}tab-1{'"'}</span>
        {'/>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">label</span>
        <span className="t-attribute">&nbsp;for</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}tab-1{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link u-mt/system-50 a-bg/convex-small a-rounded/50 a-bg/concave:hover{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">b</span>
        {'>'}Tab 1{'</'}<span className="t-tag">b</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'</'}<span className="t-tag">a</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'</'}<span className="t-tag">label</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-tab{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link a-rounded/50 a-bg/concave:hover a-bg/concave:active a-text-color/n1{'"'}</span>
        {'>'}Link 1{'</'}<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link a-rounded/50 a-bg/concave:hover a-bg/concave:active a-text-color/n1{'"'}</span>
        {'>'}Link 2{'</'}<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link a-rounded/50 a-bg/concave:hover a-bg/concave:active a-text-color/n1{'"'}</span>
        {'>'}Link 3{'</'}<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">a</span>
        <span className="t-attribute">&nbsp;href</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}#{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-nav-link a-rounded/50 a-bg/concave:hover a-bg/concave:active a-text-color/n1{'"'}</span>
        {'>'}Link 4{'</'}<span className="t-tag">a</span>{'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'</'}<span className="t-tag">div</span>
        {'>'}
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