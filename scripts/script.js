'use strict';

window.onload = function () {
    //переключение слайдов
    let container = document.querySelector('.slider__container');
    let firstSlide = document.getElementById('first__slide');
    let secondSlide = document.getElementById('second__slide');

    document.getElementById('next').onclick = function () {
        clickNextSlide();
    }

    document.getElementById('prev2').onclick = function () {
        clickPrevSlide();
    }

    function clickNextSlide() {
        firstSlide.style.display = "none";
        secondSlide.style.display = "block";
        container.style.backgroundColor = "#8675BA";
        document.getElementById('next2').style.opacity = '0.5';
        document.getElementById('prev2').style.opacity = '1';
    }

    function clickPrevSlide() {
        firstSlide.style.display = "block";
        secondSlide.style.display = "none";
        container.style.backgroundColor = "#8DBDBA";
    }

    //КУРСОР
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: " + (e.pageY - 25) + "px; left: " + (e.pageX - 25) + "px;");
    })

    let buttons = Array.from(document.querySelectorAll("button"));
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener("mouseover", () => {
            cursor.classList.add("expand");
        });
        button.addEventListener("mouseleave", () => {
            cursor.classList.remove("expand");
        });
    })
}