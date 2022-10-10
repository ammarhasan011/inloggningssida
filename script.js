//my variables 
const gate = document.querySelector(".gate");
const text = document.querySelector(".gate h1");
const text2 = document.querySelector(".gate h2");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
const span = document.querySelector(".span");

//login button
//loginBtn.addEventListener("click", checkCode);

//my register button variables
//const gate2 = document.querySelector(".gate2");
//const form2 = document.querySelectorAll(".form2")
//const username2 = document.querySelector("#username2");
//const password2 = document.querySelector("#password2");

//buttons
//const showpasswordBtn = document.querySelector(".showpassword");
const loginBtn = document.querySelector(".loginBtn");
//const registerBtn = document.querySelector(".registerBtn");
const logoutBtn = document.querySelector(".logoutBtn");


//showpasswordBtn.addEventListener("click", showpassword);
loginBtn.addEventListener("click", checkCode);
//registerBtn.addEventListener("click", register);
logoutBtn.addEventListener("click", logout);


//hidden button in start/login page
logoutBtn.style.display = "none";



//array for users and passcode
let userArray = [
    {
        username: "Ammar",
        secretcode: "123"
    },
    {
        username: "fredrik",
        secretcode: "12345"
    },
    {
        username: "Erik",
        secretcode: "567"
    },
    {
        username: "Malin",
        secretcode: "1980"
    }
]

//localstorage for userArray
localStorage.setItem("userArray", JSON.stringify(userArray));


//calls and get info from LS
function init() {
    if (localStorage.getItem("userName")) {
        renderSeccessfulUI()
    }
}
init()


//function to check the username and passcode, then login or error message
function checkCode() {
    for (let users of userArray) {
        console.log(users.username);
        console.log(username.value);
        if (users.username == username.value && users.secretcode == password.value) {
            localStorage.setItem("userName", username.value);
            renderSeccessfulUI();
            return
        }
    }
    renderfailUI();
}


//function for successful login
function renderSeccessfulUI() {
    let userkey = localStorage.getItem("userName", username.value);
    text.innerText = "Välkommen in" + " " + userkey + "!!";
    text.style.display = "block";
    form.style.display = "none";
    logoutBtn.style.display = "inline";
    loginBtn.style.display = "none";
    text2.innerText = "";

    //for my register
    //registerBtn.style.display = "none";
    //form2.style.display = "none";
    //gate2.style.display = "none";
}

//function for faild login and reset everything
function renderfailUI() {
    text2.innerText = "Fel, testa igen!";
    logoutBtn.style.display = "none";
    text.style.display = "none";
    password.value = "";
}



//function for logout and reset everything
function logout() {
    username.value = "";
    password.value = "";
    form.style.display = "block";
    text.innerText = "Logga In";
    logoutBtn.style.display = "none";
    loginBtn.style.display = "block";
    //registerBtn.style.display = "block";
    localStorage.removeItem("userName");
}



//function for Register
//function register() {}