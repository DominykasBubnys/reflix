const LoginBtn = document.querySelector(".login");
const SignUpBtn = document.querySelector(".signup");
const LogoutBtn = document.querySelector(".logout");
const authenticateBtn = document.querySelector(".authenticate");

const changeShapeBtn = document.querySelector(".change-auth-action");
const nameInput = document.querySelector(".name");
const formInputs = Array.from(document.querySelectorAll(".form-input"));

import { SignUpHandler, LoginHandler, LogoutHandler } from "./firebase.js";


const changeShapeHandler = () => {
    console.log("changing shapes")
    SignUpBtn.classList.toggle("hidden");
    LoginBtn.classList.toggle("hidden");
    nameInput.classList.toggle("hidden");
}
changeShapeBtn.addEventListener("click", changeShapeHandler);



const signUp = async() => {
    authenticateBtn.classList.add("hidden");
    const username = formInputs.filter(input => input.classList.contains("name"))[0].value;
    const email = formInputs.filter(input => input.classList.contains("email"))[0].value;
    const password = formInputs.filter(input => input.classList.contains("password"))[0].value;
    try {
        if(!username || !email || !password) return null;
        await SignUpHandler(username, email, password);
    } catch (error) {
        alert(error.message || "Failed to create a new account");
    }   
}
SignUpBtn.addEventListener("click", signUp);



const login = async() => {
    const email = formInputs.filter(input => input.classList.contains("email"))[0].value;
    const password = formInputs.filter(input => input.classList.contains("password"))[0].value;
    authenticateBtn.classList.add("hidden");
    try {
        await LoginHandler(email, password);
    } catch (error) {
        alert(error.message || "login fails")
    }
}
LoginBtn.addEventListener("click", login);



const logout = async() => {
    try {
        await LogoutHandler();
    } catch (error) {
        alert("serror.message" || "Failed to logout");
    }
}
LogoutBtn.addEventListener("click", logout);

