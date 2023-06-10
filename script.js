function openNav() {
    document.getElementById("myNav").style.width = '100%';
}

function closeNav() {
    document.getElementById("myNav").style.width = '0';
}

function bikeSpeed() {
    let maxSpeed = parseInt(document.getElementById('bike-speed').innerHTML);
    const speedIncrease = document.getElementById('bike-speed');
    speedIncrease.innerHTML = 0
    let increase = 0
    setInterval(() => {
        if (speedIncrease.innerHTML < maxSpeed) {
            speedIncrease.innerHTML = increase
            increase++
        }
    }, 40)
}
bikeSpeed();

function textMotor() {
    let motor = document.getElementById('motor').innerHTML;
    const motorIncrease = document.getElementById('motor');
    motorIncrease.innerHTML = '';
    let count = 0
    setInterval(() => {
        if (count < motor.length) {
            motorIncrease.innerHTML = motor.slice(0, count)
            count++
        }
    }, 50)
}
textMotor();

function textSpeed() {
    let speed = document.getElementById('speed').innerHTML;
    const speedIncrease = document.getElementById('speed');
    speedIncrease.innerHTML = '';
    let count = 0
    setInterval(() => {
        if (count < speed.length) {
            speedIncrease.innerHTML = speed.slice(0, count)
            count++
        }
    }, 60)
}
textSpeed();

function textQuadro() {
    let quadro = document.getElementById('quadro').innerHTML;
    const quadroIncrease = document.getElementById('quadro');
    quadroIncrease.innerHTML = '';
    let count = 0
    setInterval(() => {
        if (count < quadro.length) {
            quadroIncrease.innerHTML = quadro.slice(0, count)
            count++
        }
    }, 70)
}
textQuadro();