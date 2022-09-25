'use strict';

window.onload = function () {
    //переключение слайдов
    let container = document.querySelector('.slider__container');
    let firstSlide = document.getElementById('first__slide');
    let secondSlide = document.getElementById('second__slide');

    document.getElementById('next').onclick = function () {
        firstSlide.classList.toggle('animate__firstSlide');
        setTimeout(() => {
            clickNextSlide();
        }, 1600)
    }

    document.getElementById('prev2').onclick = function () {
        clickPrevSlide();
        firstSlide.classList.remove('animate__firstSlide');
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

    //анимация кругов
    const wrapper = document.querySelector('.slider__track');
    const layers = document.querySelectorAll('.ball');

    const handleParallax = (evt) => {
        // размер области просмотра
        const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
        const parallaxTopOffset = wrapper.getBoundingClientRect().top;

        // координаты центра экрана
        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 * wrapper.offsetHeight;

        layers.forEach((layer) => {
            const layerSpeed = layer.dataset.speed;
            const x = -(coordX * layerSpeed).toFixed(2);
            const y = -(coordY * layerSpeed).toFixed(2);
            layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
        });
    };

    const reset = () => {
        layers.forEach((layer) => {
            layer.removeAttribute('style');
        });
    }

    wrapper.addEventListener('mousemove', handleParallax);
    wrapper.addEventListener('mouseout', reset);
}