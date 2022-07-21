import lessons from '../database/student-learn-data.js';

function start() {
    render();
    turnReadView();
}

start();

// Functions

// Turn on/off readview mode
function turnReadView() {
    document.querySelectorAll('.item__btn').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelector('.wrap').style.display = 'flex';
        });   
    });

    document.querySelectorAll('.read-view__close').forEach(closeIcon => {
        closeIcon.addEventListener('click', function () {
            document.querySelector('.wrap').style.display = 'none';
        });      
    });
}

// Render function
function render() {
    var htmls = "";
    lessons.forEach(lesson => {
        htmls += `
            <div class="col l-3 m-4 c-6">
                <div class="item">
                    <h1 class="item__title">${lesson.title}</h1>
                    <p class="item__content">${lesson.name}</p>
                    <button id="${lesson.id}" class="item__btn">Đọc</button>
                </div>
            </div>
        `;
    });
    document.querySelector('#container').innerHTML = htmls;
}