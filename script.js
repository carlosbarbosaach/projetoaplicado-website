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
    }, 30)
}
bikeSpeed();