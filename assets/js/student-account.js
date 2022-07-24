'use strict';

import infoUsersVietnamese from '../database/info-user-data.js';

var loginingAccount;

function start() {
    render();
    turnFunction();
    updateInfo();
}

start();

// Get account that is login
function getAccountInfo() {
    loginingAccount = JSON.parse(localStorage.getItem('signing-account'));
    
}
// Render info function
function render() {
    getAccountInfo();
    var htmls = '';

    for (var i = 0; i < infoUsersVietnamese.length; i++) {
        if (infoUsersVietnamese[i].id === loginingAccount.id) {
            document.querySelector('#info-name').innerText = infoUsersVietnamese[i].name;
            if (loginingAccount.role === 'student') {
                document.querySelector('#info-role').innerText = 'Học sinh';
            } else {
                document.querySelector('#info-role').innerText = 'Giáo viên';
            }

            htmls = `
                <li class="info__detail-list-item">
                    <p class="info__detail-list-item-attribute">Họ và tên:</p>
                    <p class="info__detail-list-item-content">${infoUsersVietnamese[i].name}</p>
                </li>
                <li class="info__detail-list-item">
                        <p class="info__detail-list-item-attribute">Ngày sinh:</p>
                        <p class="info__detail-list-item-content">${infoUsersVietnamese[i].dob}</p>
                </li>
                <li class="info__detail-list-item">
                        <p class="info__detail-list-item-attribute">Giới tính:</p>
                        <p class="info__detail-list-item-content">${infoUsersVietnamese[i].gender}</p>
                </li>
                <li class="info__detail-list-item">
                        <p class="info__detail-list-item-attribute">Lớp:</p>
                        <p class="info__detail-list-item-content">${infoUsersVietnamese[i].class}</p>
                </li>
                <li class="info__detail-list-item">
                        <p class="info__detail-list-item-attribute">Năm học:</p>
                        <p class="info__detail-list-item-content">${infoUsersVietnamese[i].semester}</p>
                </li>
            `;
            break;
        }
    }
    document.querySelector('#profile .info__detail-list').innerHTML = htmls;
}

// Active label and turn its function
function turnFunction() {
    var tabs = document.querySelectorAll('.info__main-list-item');
    var panes = document.querySelectorAll('.list-item-pane');

    console.log(tabs, panes)

    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
            console.log(1);
            document.querySelector('.info__main-list-item.item--active').classList.remove('item--active');
            document.querySelector('.list-item-pane.item--active').classList.remove('item--active');

            this.classList.add('item--active');
            pane.classList.add('item--active');
        }
    });
}

//Update information function
function updateInfo() {
    document.querySelector('#update-info-btn').addEventListener('click', function() {
        document.querySelector('#input-name').removeAttribute('readonly');
        document.querySelector('#input-name').focus();
    });
}