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
            <TabBarLink pageLink="/documentation/wrappers">Wrappers</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-3">
          (c-) Components
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/badge">Badge</TabBarLink>
            <TabBarLink pageLink="/documentation/buttons">Buttons</TabBarLink>
            <TabBarLink pageLink="/documentation/navbar">Navbar</TabBarLink>
            <TabBarLink pageLink="/documentation/navbartabs">Navbar Tabs</TabBarLink>
            <TabBarLink pageLink="/documentation/notifications">Notifications</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-4">
          (t-) Typography
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/fontsize">Font Size</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-5">
          (a-) Attributes
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/text-color">Text Color</TabBarLink>
            <TabBarLink pageLink="/documentation/background-color">Background Color</TabBarLink>
            <TabBarLink pageLink="/documentation/concave-convex">Concave & Convex</TabBarLink>
          </div>
        <TabBarTitle dataNav="tab-6">
          (u-) Utilities
        </TabBarTitle>
          <div className="c-tab">
            <TabBarLink pageLink="/documentation/display">Display</TabBarLink>
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