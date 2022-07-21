'use strict';
import accounts from '../database/login-data.js';

var userNameInput = document.querySelector('#signin-form-username');
var passwordInput = document.querySelector('#signin-form-password');

var signinForm = document.querySelector('#signin-form');
var signupForm = document.querySelector('#signup-form');

const accArray = JSON.parse(localStorage.getItem('accounts'));

// Main Function
function start() {
    loadData();
    signIn();
}

start();

// Load data function
function loadData() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}
// // Signup Function 
// function signUp(username, password) {
//     let account = {
//         userName: null,
//         password: null,
//         type: "student"
//     }
//     localStorage.setItem('accounts', JSON.stringify(account));
// }

// Check existing of accounts function
function isExist(userName, password) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    accounts.forEach(account => {
        if (userName === account.userName && password === account.password && account.role === 'student') { return true; }
    });
    return false;
}
// Check empty username or password
function isEmpty() {
    if (userNameInput.value === '' || passwordInput.value === '') return true;
    return false;
}
// Check validation of accounts and login
function signIn() {
    document.querySelector('#signin').addEventListener('click', function (e) {
        if (isEmpty()) {
            e.preventDefault();
            document.querySelector('.inner__alert').innerText = 'Vui lòng nhập đầy đủ thông tin';
        } else if (isExist(userNameInput.value, passwordInput.value) === false) {
            e.preventDefault();
            document.querySelector('.inner__alert').innerText = 'Tên hoặc mật khẩu không chính xác';
        }
    });
};