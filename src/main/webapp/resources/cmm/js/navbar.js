var navbar = navbar || {}
navbar = (()=>{
	const init = () => {
		$(`#bbs`).html(`<a id="board" href="blog.html">게시판<i class="fa fa-angle-down"></i></a>
           				  <ul id="ul" role="menu" class="sub-menu">`)
		let arr = [{id:'a', val: 'a'}, {id:'b', val: 'b'},{id:'c', val: 'c'}]
		$.each(arr, (i, j) => {
			$(`<li/>`)
			.attr({id: `${j.id}`})
			.text(`${j.val}`)
			.appendTo(`#ul`)
			.click(e => {
				alert(`${j.id}`)
			})
		})
	}
	return {init}
})()

