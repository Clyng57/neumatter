import ActiveLink from './ActiveLink'

export default function TabBarLink({pageLink, children}) {
  return (
    <>
    <ActiveLink activeClassName="a-text-color/base bold active" href={pageLink}>
      <a className="c-nav-link a-rounded/50 a-bg/concave:hover a-bg/concave:active a-text-color/n1">{children}</a>
    </ActiveLink>
    </>
  )
}