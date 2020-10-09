"use strict";

function timeDividing () {
    //Беремо потрібні елементи з HTML.
    let highHour = parseInt(document.getElementById("time-hours-high").value);
    let highMinute = parseInt(document.getElementById("time-minutes-high").value);
    let lowerHour = parseInt(document.getElementById("time-hours-less").value);
    let lowerMinute = parseInt(document.getElementById("time-minutes-less").value);

    //Оголошуємо потрібні змінні і переводимо відразу в хвилини.
    let highTotalMinutes = (highHour * 60) + highMinute;
    let lowerTotalMinutes = (lowerHour * 60) + lowerMinute;
    let resultInMinutes = 0;
    let resultInHours = 0;
    let remainder = 0;

    console.log("High TOTAL: " + highTotalMinutes + " Low TOTAL: " + lowerTotalMinutes);

    if (highTotalMinutes > lowerTotalMinutes) { //Перевірка даних.

        //Віднімаємо заданий час.
        resultInMinutes = highTotalMinutes - lowerTotalMinutes;

        //Відокремлення лишніх хвилин від повних 60хв.
        remainder = resultInMinutes % 60; 

        //Переводимо хвилини в години
        if (resultInMinutes >= 60) {
            resultInHours = (resultInMinutes - remainder) / 60;
        }

        //Візуальний додаток "0" для зручності читання.
        if (resultInHours >= 0 && resultInHours <= 9) {
            let x = resultInHours;
            resultInHours = "0" + x;
        }
        if (remainder >= 0 && remainder <= 9) {
            let x = remainder;
            remainder = "0" + x;
        }

        //Вивід відповіді на HTML сторінку.
        document.getElementById("hours-answer").innerHTML = resultInHours;
        document.getElementById("minutes-answer").innerHTML = remainder;
    }

    //Повідомлення про помилку.
    else {
        console.log("Error");
    }
    
    console.log("high hour: " + highHour + " High minute: " + highMinute + " _ " + "Lower Hour: " + lowerHour + " Lower Minute: " + lowerMinute);
    console.log(resultInHours + " : " + remainder);
}