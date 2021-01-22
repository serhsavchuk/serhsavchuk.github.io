"use strict";

function showEmail(event) {
    let myEmail = 'serhii.savchuk.dev@gmail.com';

    document.getElementById('email').innerHTML = myEmail;

    //Delete decoration elements and stop function calling.
    event.target.className = '';
    event.target.onclick = '';
}

function changeDateYear(yearElement) {
    let currentYear = new Date().getFullYear();
    document.getElementById(yearElement).innerHTML = currentYear;
}

changeDateYear('year');
