document.addEventListener('DOMContentLoaded', function(){

	var sidebarItem = document.getElementById('fixed-item'),
			sidebarItemOffsetTop = sidebarItem.offsetTop;

	function fixedItem(){
		var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
		if ( scrollTop > sidebarItemOffsetTop ) {
			sidebarItem.classList.add('sidebar__item_type_fixed');
		} else {
			sidebarItem.classList.remove('sidebar__item_type_fixed');
		}
	}

	window.onscroll = function(){
		fixedItem();
	}
	
})
