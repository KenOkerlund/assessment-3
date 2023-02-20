console.log("hello world");
const duck = document.querySelector('#the-image')
duck.addEventListener('mouseover', giveCompliment)


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function giveCompliment(evt){
	evt.preventDefault()
	alert('Good job, you found me!')
}