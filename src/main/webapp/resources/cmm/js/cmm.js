'use strict'
var cmm = cmm || {}


cmm.generateDB = x => {
	$.getJSON(`${x}/common/generate/db`,
	 		d => { location.reload()})
}
/*
common = (()=>{
	const init = ctx => {
		localStorage.setItem('ctx', ctx)
		$('#home').click(e => { location.href = '/'})
		//$('#manager_register').click(e => {location.href = `${ctx}/admin/mgr/register`})
		//$('#teacher_register').click(e => {location.href = `${ctx}/admin/tea/register`})
		$(`#linkedin`).click(e => {location.href = `${ctx}/`})
		$(`#stu-join`).click(e => {location.href = `${ctx}/user/register`})
		$(`#stu-login`).click(e => {location.href = `${ctx}/user/login`})
		$(`#blog_default`).click(e => {location.href = `${ctx}/content/bbs/index`})
		$(`#icon1`).html(`<img src="https://uploads.disquscdn.com/images/4cb87960911b0a268629f6a4c262cd6f4b6783c790288b030ac682b3870fdbc6.jpg" alt="">`)
		$(`#icon2`).html(`<img src="https://uploads.disquscdn.com/images/dc368ebd907dfb3c40406ed0c842b10023f20651969cbd4bf77e524b3bf29ce7.jpg" alt="">`)
		$(`#icon3`).html(`<img src="https://p.favim.com/orig/2018/08/23/kpop-psd-joy-red-velvet-psd-Favim.com-6204357.gif" alt="">`)
		$(`#title`).text(`봉담대학교 사이트`)
		$(`#message`).text(`양질의 교육 사이트 구축`)
		$('#facebook').click(e => {location.href = '/transfer/sym/tea/index'})
		$(`#bbs`).html(`<a href="#">게시판<i class="fa fa-angle-down"></i></a>
           				  <ul id="bbs-ul" role="menu" class="sub-menu">`)
		let bbs_arr = 
		[{id:'write', val: '글쓰기'},
		{id:'search', val: '조회'},
		{id:'c', val: 'c'},
		{id:'d', val: 'd'},
		{id:'e', val: 'e'}]
		$.each(bbs_arr, (i, j) => {
			$(`<li/>`)
			.attr({id: `${j.id}`})
			.text(`${j.val}`)
			.appendTo(`#bbs-ul`)
			.click(e => {
				alert(`${j.id}`)
			})
		})
		let mgr_arr = [{id:'sign-up', val: '관리자등록', url:`${ctx}/admin/mgr/register`}, 
		{id:'sign-in', val:'관리자접속',url:`${ctx}/admin/mgr/access`},
		{id:'c', val: 'c'},
		{id:'d', val: 'd'},
		{id:'e', val: 'e'}]
		$(`#manager`).html(`<a href="#">관리자<i class="fa fa-angle-down"></i></a>
           				  <ul id="mgr-ul" role="menu" class="sub-menu">`)
		$.each(mgr_arr, (i, j) => {
			$(`<li/>`)
			.attr({id: `${j.id}`})
			.text(`${j.val}`)
			.appendTo(`#mgr-ul`)
			.click(e => {
				location.href = j.url
			})
		})
		let tea_arr = [{id:'sign-up', val: '교강사등록', url:`${ctx}/admin/tea/register` },
		{id:'sign-in', val: '교강사접속', url:`${ctx}/admin/tea/access`},
		{id:'c', val: 'c'},
		{id:'d', val: 'd'},
		{id:'e', val: 'e'}]
		$(`#teacher`).html(`<a href="#">교강사<i class="fa fa-angle-down"></i></a>
           				  <ul id="tea-ul" role="menu" class="sub-menu">`)
		$.each(tea_arr, (i, j) => {
			$(`<li/>`)
			.attr({id: `${j.id}`})
			.text(`${j.val}`)
			.appendTo(`#tea-ul`)
			.click(e => {
				location.href = j.url
			})
		})				
	}
	const goHome = () => {
		$(`#goHome`).click(e => {
			location.href = `${localStorage.getItem('ctx')}/`})
	}
	return {init, goHome}
})()

*/