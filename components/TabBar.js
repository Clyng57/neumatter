import TabBarTitle from '../ui/TabBarTitle'
import TabBarLink from '../ui/TabBarLink'

export default function TabBar() {
  return (
  <nav id="myNavbar2" className="c-navbar a-rounded u-position/sticky u-top/5" role="navigation" aria-label="main navigation">
	<div className="c-navbar-wrapper">
      <div id="navbarNM" className="c-menu c-tabs">
        <TabBarTitle dataNav="tab-1">
          Overview
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation">Introduction</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-2">
          (l-) Layout
        </TabBarTitle>
          <div className="c-tab a-rounded/bottom">
            <TabBarLink pageLink="/documentation/breakpoints">Breakpoints</TabBarLink>
            <TabBarLink pageLink="/documentation/columns">Columns</TabBarLink>
            <TabBarLink pageLink="/documentation/spacing">Spacing</TabBarLink>
            <TabBarLink pageLink="/documentation/wrappers">Wrappers</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-3">
          (c-) Components
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="#">Badge</TabBarLink>
            <TabBarLink pageLink="#">Carousel</TabBarLink>
            <TabBarLink pageLink="#">Footer</TabBarLink>
            <TabBarLink pageLink="#">Header</TabBarLink>
            <TabBarLink pageLink="#">Navbar</TabBarLink>
            <TabBarLink pageLink="#">Navbar Tabs</TabBarLink>
            <TabBarLink pageLink="#">Notifications</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-4">
          (t-) Typography
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/typography">Introduction</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-5">
          (a-) Attributes
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="#">Text Color</TabBarLink>
            <TabBarLink pageLink="#">Background Color</TabBarLink>
            <TabBarLink pageLink="/documentation/concave-convex">Concave & Convex</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-6">
          (u-) Utilities
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="#">Max & Min</TabBarLink>
            <TabBarLink pageLink="#">Margins & Padding</TabBarLink>
            <TabBarLink pageLink="#">Object Fit</TabBarLink>
            <TabBarLink pageLink="#">Overflow</TabBarLink>
            <TabBarLink pageLink="#">Position</TabBarLink>
            <TabBarLink pageLink="#">Scroll Snap</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-7">
          (f-) Forms
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/input">Input Types</TabBarLink>
          </div>
      </div>
	</div>
  </nav>
  )
}