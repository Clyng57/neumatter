

export default function CodeWriter({ children }) { 
  
  return ( 
    <div data-theme="dark" className="l-system-wrapper code a-rounded/100 u-mx/0 u-px/system u-py/system a-bg/convex">
      {children}
    </div>
  )
}