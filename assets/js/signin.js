// assign variable declaration
const handleSignin =  document.getElementById('handleSignin');
const lnames = document.getElementById("lnames");
const lpassword = document.getElementById("lpassword");

// get values from localstorage using key names
const username = localStorage.getItem('username');
const password = localStorage.getItem('password');


// event handler/function to handle login
handleSignin.addEventListener('submit', (e) => {
  e.preventDefault();
  // check if there is no input entered from user
  if(lnames.length <= 0 || lpassword.length <= 0){
    alert('All fields are required');
  }
  if (lnames.value != username || lpassword.value != password){
    document.getElementById("error").innerHTML = `<b style="color: red;">Incorrect Username or Password</b>`
  }
  if (lnames.value == username && lpassword.value == password){
    location.href = './dashboard.html'; 
  }

})