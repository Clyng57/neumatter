

export default function ThemeButton() {
  
  return (
    <>
        <button className="c-btn c-theme-btn a-bg/convex-small a-rounded/50 a-bg/concave:hover u-m/system-50" data-btn="light" id="c-theme-btn/light"><i id="btni" className="bi bi-sun-fill"></i></button>
        <button className="c-btn c-theme-btn a-bg/convex-small a-rounded/50 a-bg/concave:hover u-m/system-50" data-btn="dark" id="c-theme-btn/dark"><i id="btni" className="bi bi-moon-fill"></i></button>
    </>
  )
}