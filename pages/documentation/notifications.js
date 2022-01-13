import Head from 'next/head'
import CodeWriter from '../../components/CodeWriter'
import NotificationCenter from '../../components/NotificationCenter'

export default function DocumentationNotifications() {
  return (
    <>
    <Head>
      <title>neumatter</title>
    </Head>
    <div className="l-wrapper/system u-mx/0">
      <h1 className="u-mb/system-33"><strong>(c-) Component</strong></h1>
      <h2 className="u-mb/system">Notifications</h2>
      <p className="u-mb/system">Click the | ! | button in the top right corner to see notifications.</p>
    </div>

    {/* c-notification */}

    <NotificationCenter>
      <div className="c-notification a-bg-blur/success" data-notification="successDemo">
        <p className="t-type/title">Title</p>
        <p className="t-type/secondary">Secondary</p>
        <p className="t-type/body">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="c-notification a-bg-blur/warning" data-notification="successDemo">
        <p className="t-type/title">Title</p>
        <p className="t-type/secondary">Secondary</p>
        <p className="t-type/body">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="c-notification a-bg-blur/info" data-notification="successDemo">
        <p className="t-type/title">Title</p>
        <p className="t-type/secondary">Secondary</p>
        <p className="t-type/body">The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="c-notification a-bg-blur/1" data-notification="successDemo">
        <p className="t-type/title">Title</p>
        <p className="t-type/secondary">Secondary</p>
        <p className="t-type/body">The quick brown fox jumps over the lazy dog.</p>
      </div>
    </NotificationCenter>

    <CodeWriter>
      <code className="u-display/block">
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-notification/center u-offset/3{'"'}</span>
        {'>'}

      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-tabs{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">input</span>
        <span className="t-attribute">&nbsp;type</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}checkbox{'"'}</span>
        <span className="t-attribute">&nbsp;data-nav</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}toggler{'"'}</span>
        <span className="t-attribute">&nbsp;id</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}notificationCenter{'"'}</span>
        {'/>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">label</span>
        <span className="t-attribute">&nbsp;for</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}notificationCenter{'"'}</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}u-float/right{'"'}</span>
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
        <span className="t-class">{'"'}a-rounded/50 a-bg/concave:hover a-bg-blur/base c-notification/toggler{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">b</span>
        {'>'}| ! |{'</'}<span className="t-tag">b</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'</'}<span className="t-tag">a</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'</'}<span className="t-tag">label</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-tab c-notification/tab{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">div</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}c-notification a-bg-blur/success{'"'}</span>
        {'>'}
      </code>

      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">p</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}t-type/title{'"'}</span>
        {'>'}Title{'</'}<span className="t-tag">p</span>{'>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">p</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}t-type/secondary{'"'}</span>
        {'>'}Secondary{'</'}<span className="t-tag">p</span>{'>'}
      </code>
      <code className="u-display/block">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {'<'}<span className="t-tag">p</span>
        <span className="t-attribute">&nbsp;class</span>
        <span className="t-operator">=</span>
        <span className="t-class">{'"'}t-type/body{'"'}</span>
        {'>'}The quick brown fox jumps over the lazy dog.{'</'}<span className="t-tag">p</span>{'>'}
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
        {'<'}/<span className="t-tag">div</span>{'>'}
      </code>
      
    </CodeWriter>

    </>
  )
}