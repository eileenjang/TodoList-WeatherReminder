//Input Values
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
onLoginSubmit()

//Events
function onLoginSubmit(tomato){
    tomato.preventDefault();  //기본동작막는역할
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);
