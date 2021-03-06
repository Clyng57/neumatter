
export default function TabBarTitle({dataNav, children}) {
  return (
    <>
      <input type="radio" data-nav="tab" name="tab" id={dataNav} />
      <label htmlFor={dataNav}>
        <a className="c-nav-link u-mt/system-50 a-bg/convex-small a-rounded/50 a-bg/concave:hover">
          <b>{children}</b>
        </a>
      </label>
    </>
  )
}