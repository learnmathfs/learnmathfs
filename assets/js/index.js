const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var signinForm = $('#signin-form');
var signupForm = $('#signup-form');

var btnTurnToSignIn = $('#turn-signin');
var btnTurnToSignUp = $('#turn-signup');

var language = $('.language');
console.log(language)

// Main Function
function start() {
    turn();
    chooseLanguage();
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

// Turn language function

function chooseLanguage() {
    language.addEventListener('click', function () {
        document.querySelector('.language__list').style.display = 'block';
    })
}
