import Link from "next/link"

export default function Footer() {
  return (
<footer className="l-system-wrapper u-mx/0 u-p/system a-bg-color/1">
  <Link href="https://github.com/Clyng57/neumattercss">
    <a className="c-btn"><i className="bi bi-github"></i> neumattercss</a>
  </Link>
</footer>
  )
}