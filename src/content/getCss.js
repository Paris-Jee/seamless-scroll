const getStyle = (dom, name) => {
	let elem = dom.currentStyle
		? dom.currentStyle
		: window.getComputedStyle(dom, null)
	return elem[name]
}

export default getStyle
