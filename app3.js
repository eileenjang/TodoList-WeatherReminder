//Input Values
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");

function onLoginSubmit(){
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
//onLoginSubmit()

//Events part Two
const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked!");
}

link.addEventListener("click", handleLinkClick);
//handleLinkClick()

