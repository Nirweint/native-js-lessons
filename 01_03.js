// event -> generate object with data of this event -> calls function handler(listener, subscriber) ->  object with data of this event sends like a parametr of this function ->

const sml = document.getElementById('small')
const mdm = document.getElementById('medium')
const big = document.getElementById('big')
//
// const onClickHandler = (e) => {
// 	if(e.target.tagName === 'BUTTON') {
// 		alert(e.target.name)
// 	}
// }

// sml.onclick = onClickHandler
// delete listener
// sml.onclick = null

// -----------------------------------------------
// sml.addEventListener("click", onClickHandler)
// sml.removeEventListener("click", onClickHandler)

// -----------------------------------------------

// sml.addEventListener("click", onClickHandler) // onClickHandler({...})


// -----------------------------------------------
// e.target -> element who generate event(first how get click)
// e.currentTarget -> element, who class listener in process bubble event

const onClickHandler = (e) => {
	e.stopPropagation()
	console.log(e.currentTarget.id)
}

sml.addEventListener("click", onClickHandler)
mdm.addEventListener("click", onClickHandler)
big.addEventListener("click", onClickHandler)
