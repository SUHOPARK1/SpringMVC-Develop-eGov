'use strict'
var common = common || {}
common = (()=>{
	const init = ctx => {
		localStorage.setItem('ctx', ctx)
		$('#manager_register').click(e => {location.href = `${ctx}/admin/mgr/register`})
		$('#teacher_register').click(e => {location.href = `${ctx}/admin/tea/register`})
		$(`#linkedin`).click(e => {location.href = `${ctx}/`})
		$(`#stu-join`).click(e => {location.href = `${ctx}/user/register`})
		$(`#stu-login`).click(e => {location.href = `${ctx}/user/login`})
		$(`#blog_default`).click(e => {location.href = `${ctx}/content/bbs/index`})
		$(`#icon1`).html(`<img src="https://uploads.disquscdn.com/images/4cb87960911b0a268629f6a4c262cd6f4b6783c790288b030ac682b3870fdbc6.jpg" alt="">`)
		$(`#icon2`).html(`<img src="https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg" alt="">`)
		$(`#icon3`).html(`<img src="https://p.favim.com/orig/2018/08/23/kpop-psd-joy-red-velvet-psd-Favim.com-6204357.gif" alt="">`)
		$(`#title`).text(`봉담대학교 사이트`)
		$(`#message`).text(`양질의 교육 사이트 구축`)
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
	
	const goHome = () => {
		$(`#goHome`).click(e => {location.href = ` ${localStorage.getItem('ctx')}/`})
	}
	return {init, goHome}
})()
