import Toggler from '../ui/Toggler'

export default function NotificationCenter({children}) {
  return (
	<div className="c-notification/center u-offset/3">
      <div id="navbarNM" className="c-tabs">
        <Toggler dataNav="notificationCenter">
          | ! |
        </Toggler>
          <div className="c-tab c-notification/tab">
            {children}
          </div>
      </div>
	</div>
  )
}