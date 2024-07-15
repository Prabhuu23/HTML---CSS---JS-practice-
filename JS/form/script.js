document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the default form submission behavior
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    const course = document.getElementById('course').value;
    const languages = [];
    const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
    languageCheckboxes.forEach(function(checkbox) {
      languages.push(checkbox.value);
    });
  
    // Log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Gender:', gender);
    console.log('Course:', course);
    console.log('Languages:', languages);
  });
  