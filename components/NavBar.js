import NavLink from '../ui/NavLink'

export default function NavBar() {
  return (
  <nav data-nav="top" data-offset="navbar" className="c-navbar a-bg/dark-blur u-fixed u-top" role="navigation" aria-label="main navigation">
	  <div data-theme="dark" className="c-navbar-wrapper">
      <div id="navbarNM" className="c-menu u-flex-row">
        <NavLink pageLink="/" navIcon="bi bi-house-door-fill nav-icon">neumatter</NavLink>
        <NavLink pageLink="/documentation" navIcon="bi bi-file-earmark-code-fill nav-icon">Documentation</NavLink>
        {/*<NavLink pageLink="#" navIcon="bi bi-grid-1x2-fill nav-icon">Components</NavLink> */}
      </div>
	  </div>
  </nav>
  )
}