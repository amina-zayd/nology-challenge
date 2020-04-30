
function input () {
let name = document.getElementById('name').value;

let email = document.getElementById('email').value;

let message = document.getElementById('message').value;

let submit = document.getElementById('submit');



alert(`Thank you ${name} for submitting this form.`)


}

submit.addEventListener('click',input)