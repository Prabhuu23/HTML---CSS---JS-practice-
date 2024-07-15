const saveEL = document.getElementById('btn-save');

saveEL.addEventListener('click', display);

function display() {
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const gender = document.getElementById('gender').value;
 const course = document.getElementById('course').value;

 const languages = document.getElementsByName('languages');

 let langs = [];

 languages.forEach((x) => {
 x.checked ? langs.push(x.value) : null
 })

 let person = { name: name, email: email, gender: gender, course: course, languages: langs };

 console.log(JSON.stringify(person));
}