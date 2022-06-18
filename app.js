//Input Values
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    console.dir(loginInput);
    console.log("click!!!!");
    console.log(loginInput.value);
}

function onLoginBtnClick2(){
    const username = loginInput.value;
    if (username ===""){
        alert("Please write your name");
    } else if(username.length > 15){
        alert("Your name is too long");
    } else{
        alert("Perfect!!!");
    }
}

loginButton.addEventListener("click", onLoginBtnClick2);

