'use strict';
import accounts from '../database/login-data.js';

console.log(accounts);
var userName = document.querySelector('#signin-form-username');
var password = document.querySelector('#signup-form-password');

var btnTurnToSignIn = document.querySelector('#turn-signin');
var btnTurnToSignUp = document.querySelector('#turn-signup');

var signinForm = document.querySelector('#signin-form');
var signupForm = document.querySelector('#signup-form');

// Main Function
function start() {
    turn();
    signUp("haha", "1234");
}

start();

// Functions
function turn() {
    btnTurnToSignUp.addEventListener('click', function () {
        signinForm.style.display = 'none';
        signupForm.style.display = 'flex';
    });
    btnTurnToSignIn.addEventListener('click', function () {
        signinForm.style.display = 'flex';
        signupForm.style.display = 'none';
    });
}
// Signup Function 
function signUp(username, password) {
    let account = {
        username: username,
        password: password
    }
    console.log(account);
}
// Check validation of accounts and login
// function login() {

// }