

export default function ThemeButton() {
  
  return (
    <>
        <button className="c-btn a-shadow/none a-bg-blur/base c-theme-btn" data-btn="light" id="c-theme-btn/light"><i id="btni" className="bi bi-sun-fill"></i></button>
        <button className="c-btn a-shadow/none a-bg-blur/base c-theme-btn" data-btn="dark" id="c-theme-btn/dark"><i id="btni" className="bi bi-moon-fill"></i></button>
    </>
  )
}