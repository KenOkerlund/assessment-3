const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

function alertColor() {
	alert('My favorite color is Blue or Green');
}

function alertPlace(){
    alert('My favorite place is home')
}

function alertRitual(){
    alert('My favorite ritual is sleeping')
}

colorBtn.addEventListener('click', alertColor)
placeBtn.addEventListener('click', alertPlace)
ritualBtn.addEventListener('click', alertRitual)