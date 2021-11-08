import ActiveLink from './ActiveLink'

export default function NavLink({pageLink, navIcon, children}) {
  return (
    <ActiveLink activeClassName="active" href={pageLink}>
      <a className="c-nav-link u-flex-grow/1 t-align/center a-rounded/50 a-bg/concave:active-50 a-bg/concave:hover-100">
        <span className="text-nowrap">
          <i className={navIcon}></i>
          <span className="d-lg-inline-block d-none">
            &nbsp;&nbsp;<strong>{children}</strong>
          </span>
        </span>
        <span className="c-nav-link/location"></span>
      </a>
    </ActiveLink>
  )
}