const handleSignup =  document.getElementById('handleSignup');
const password = document.getElementById("password");
const username = document.getElementById("user_name");
const c = document.getElementById("class");
const subjects = document.getElementById("strength");
const school = document.getElementById("school");
const storedUsername = localStorage.getItem('username');
// const storedPassword = localStorage.getItem('password');

handleSignup.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!username.value || !password.value) {
    // validation to check if nothing is entered before submitting
    document.getElementById("error").innerHTML = `<b style="color: red;">Values are required</b>`
  } 
  else if(password.value.length < 8){
    document.getElementById("psd-error").innerHTML = `<b style="color: red;">Password must be at least 8 characters</b>`
  }
  else if(storedUsername === username.value) {
      document.getElementById("u-error").innerHTML = `<b style="color: red;">Username taken</b>`
  } 
  else {
    alert("Account created successfully. Login to make your orders");
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
     document.getElementById("success").innerHTML = `<b style="color: purple;">Account created successfully. Login to continue!</b>`
    username.value = '';
    c.value = '';
    subjects.value = '';
    school.value = '';
    password.value = '';
    // location.reload();
  }

})
