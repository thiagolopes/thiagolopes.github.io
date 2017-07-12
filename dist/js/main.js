const box_wiki = document.querySelector('.more-wiki');
const buttons_wiki = document.querySelectorAll('.devicons');
box_wiki.style.display = "none";
tippy('.btn');

function remove_hide(obj){
	box_wiki.style.display = "";
	obj.classList.remove('fadeOutDown');
	obj.classList.add('fadeInDown');
	obj.classList.add('animated');
}

function hide(obj){
	obj.classList.remove('fadeInDown');
	obj.classList.add('fadeOutDown');
	obj.classList.add('animated');
}

function add_wiki_text(key){
	reqwest('dist/js/skills.json').then(function(resp){
		box_wiki.querySelector('p').textContent = resp[key];
	});
}

function remove_selected(){
	Array.prototype.forEach.call(buttons_wiki, function(el, i){
		el.classList.remove('selected');
	});
}

function click_wiki_button(event){
	let get_name = event.getAttribute('data-original-title');

	if (event.classList.contains('selected') === true){
		box_wiki.classList.remove('animated');
		hide(box_wiki);
		remove_selected();
	}
	else{
		remove_selected();
		event.classList.add('selected');
		box_wiki.classList.add('animated');
		remove_hide(box_wiki);
	}
	add_wiki_text(get_name);
}

