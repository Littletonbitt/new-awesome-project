const menu_toggle = document.getElementById('menu_toggle');
const toggle_nav = document.getElementById('toggle_nav');
const div_overlay = document.createElement('div');

div_overlay.className = 'div_overlay';

const dropdown_li = document.getElementById('dropdown-li');
const dropdown_li_nav = document.getElementById('dropdown-li-nav');

document.body.appendChild(div_overlay);

function toggle_menu() {
	menu_toggle.classList.toggle('active');
	
	toggle_nav.classList.toggle('active');
	div_overlay.classList.toggle('active');

	document.body.style.overflow = toggle_nav.classList.contains('active') ? 'hidden': '';
}

menu_toggle.addEventListener('click', toggle_menu);
div_overlay.addEventListener('click', () => {
	if (toggle_nav.classList.contains('active')){
		toggle_menu();
	}
	if (dropdown_li.classList.contains('active')){
		toggle_li_button();
	}
});

function toggle_li_button() {
	
	dropdown_li.classList.toggle('active');
	dropdown_li_nav.classList.toggle('active');
}

dropdown_li.addEventListener('click', toggle_li_button);

const all_li = document.querySelectorAll('header nav ul li:not(#li-for-dropdown)');

all_li.forEach(link => {
	link.addEventListener('click', () => {
		if (window.innerWidth <= 991) {
			toggle_menu();
		}
	}); 
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && toggle_nav.classList.contains('active')){
		toggle_menu();
	}
});

const scroll_up_button = document.getElementById('up-arrow-button');

window.addEventListener('scroll', () => {
	if (window.scrollY > 300){
		scroll_up_button.classList.add('visible');
	}else{
		scroll_up_button.classList.remove('visible');
	}
});

scroll_up_button.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});

