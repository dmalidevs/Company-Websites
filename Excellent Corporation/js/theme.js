/* Nav Js 
window.onscroll= function(){
	var currentScrollValue = window.pageYOffset;
	if(currentScrollValue < 400){
		document.getElementById('main-nav').classList.remove('affix-main-nav');
		document.getElementById('main-nav').classList.add('position-absolute');
		document.getElementById('nav-brand').classList.remove('theme-text-green');
		document.getElementById('nav-brand').classList.add('text-white');
		document.getElementById('main-nav').style.top = '0';
	}else if(currentScrollValue >= 400 && currentScrollValue < 700){
		document.getElementById('main-nav').style.top = '-115px';
	}else if(currentScrollValue >= 700){
		document.getElementById('main-nav').classList.remove('position-absolute');
		document.getElementById('main-nav').classList.add('affix-main-nav');
		document.getElementById('nav-brand').classList.remove('text-white');
		document.getElementById('nav-brand').classList.add('theme-text-green');
		document.getElementById('main-nav').style.top = '0';
	}
}*/