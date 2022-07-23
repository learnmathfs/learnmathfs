'use strict';
import accounts from '../database/login-data.js';

var userNameInput = document.querySelector('#signin-form-username');
var passwordInput = document.querySelector('#signin-form-password');
var confirmPasswordInput = document.querySelector('#signup-form-confirm-password');

var signinForm = document.querySelector('#signin-form');
var signupForm = document.querySelector('#signup-form');

var turnToSignIn = document.querySelector('#turn-signin');
var turnToSignUp = document.querySelector('#turn-signup');

// Main Function
function start() {
    loadData();
    turn();
    signIn();
    signUp();
}

start();

// Load data function
function loadData() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Add account that has been registered
function addAccountToDataBase(userName, password) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let account = {
        userName: userName,
        password: password,
        role: 'teacher'
    }
    accounts.push(account);
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Check username is existing function
function checkUserName(username) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    for (var i = 0; i < accounts.length; i++) {
        if ((userName === accounts[i].userName)) return true;
    }
    return false;
}

// Check existing of accounts function
function isExist(userName, password) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    for (var i = 0; i < accounts.length; i++) {
        if ((userName === accounts[i].userName) && (password === accounts[i].password) && (accounts[i].role === 'teacher')) return true;
    }
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
        if (isEmpty() || isExist(userNameInput.value, passwordInput.value) === false) {
            e.preventDefault();
            if (isEmpty()) {
                document.querySelector('.inner__alert').innerText = 'Vui lòng nhập đầy đủ thông tin';
            } else {
                document.querySelector('.inner__alert').innerText = 'Tài khoản không tồn tại';
            }
        } 
    });
};

// Signup Function 
function signUp() {
    document.querySelector('#signup').addEventListener('click', function () {
        
        let userNameInput = document.querySelector('#signup-form-username');
        let passwordInput = document.querySelector('#signup-form-password');
        let confirmPasswordInput = document.querySelector('#signup-form-confirm-password');
        console.log(userNameInput, passwordInput, confirmPasswordInput);  

        if (isEmpty(userNameInput.value, passwordInput.value) || confirmPasswordInput.value === '') {
            console.log(1);
            document.querySelector('#signup-alert').innerText = 'Vui lòng nhập đầy đủ thông tin';
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            console.log(2);
            document.querySelector('#signup-alert').innerText = 'Mật khẩu không khớp';
        } else if (checkUserName(userNameInput.value)) {
            console.log(3);
            document.querySelector('#signup-alert').innerText = 'Tên tài khoản đã tồn tại';
        } else {
            console.log(4);
            addAccountToDataBase(userNameInput.value, passwordInput.value);
        }
    });
}

// Turn between sign in and sign up
function turn() {
    turnToSignIn.addEventListener('click', function () {
        document.querySelector('#signin-form').style.display = 'flex';
        document.querySelector('#signup-form').style.display = 'none';
    });
    turnToSignUp.addEventListener('click', function () {
        document.querySelector('#signin-form').style.display = 'none';
        document.querySelector('#signup-form').style.display = 'flex';
    });
}