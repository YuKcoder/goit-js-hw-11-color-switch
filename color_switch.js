'use strict'

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    body: document.body,
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const onStart = () => {
    intervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
    refs.startBtn.disabled = true;
};

const onStop = () => {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);