let cursor =document.querySelector(".cursor")
document.addEventListener("mousemove",function(e){
console.log(e)
})
// MouseEvent {isTrusted: true, screenX: 470, screenY: 219, clientX: 470, clientY: 148, …}
document.addEventListener("mousemove",function(e){
cursor.setAttribute("style",
'top: ${e.pageY-10}px;left:${e.pageX-10}px'
)
})