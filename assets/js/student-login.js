'use strict';
import accounts from '../database/login-data.js';

var userNameInput = document.querySelector('#signin-form-username');
var passwordInput = document.querySelector('#signin-form-password');

var signinForm = document.querySelector('#signin-form');
var signupForm = document.querySelector('#signup-form');

var signingAccount = {};

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

// Get id user function
function getId(userName) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    for (var i = 0; i < accounts.length; i++) {
        if ((userName === accounts[i].userName) && (password === accounts[i].password) && (accounts[i].role === 'student')) return true;
    }
    return false;
}

// Check existing of accounts function
function isExist(userName, password) {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    for (var i = 0; i < accounts.length; i++) {
        if ((userName === accounts[i].userName) && (password === accounts[i].password) && (accounts[i].role === 'student')) {
            signingAccount = accounts[i];
            return true;
        }
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
        } else {
            localStorage.setItem('signing-account', JSON.stringify(signingAccount));
        }
    });
};