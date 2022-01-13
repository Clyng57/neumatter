
export default function Toggler({dataNav, children}) {
  return (
    <>
      <input type="checkbox" data-nav="toggler" id={dataNav} />
      <label className="u-float/right" htmlFor={dataNav}>
        <a className="a-rounded/50 a-bg/concave:hover a-bg-blur/base c-notification/toggler">
          <b>{children}</b>
        </a>
      </label>
    </>
  )
}