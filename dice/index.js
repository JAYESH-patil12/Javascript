function rollDice() {
    let cube = document.getElementById('cube');
    let randomRoll = Math.floor(Math.random() * 6) + 1;

    let xAngle = 0;
    let yAngle = 0;

    switch(randomRoll) {
        case 1:
            xAngle = 0;
            yAngle = 0;
            break;
        case 2:
            xAngle = 0;
            yAngle = 180;
            break;
        case 3:
            xAngle = 0;
            yAngle = -90;
            break;
        case 4:
            xAngle = 0;
            yAngle = 90;
            break;
        case 5:
            xAngle = -90;
            yAngle = 0;
            break;
        case 6:
            xAngle = 90;
            yAngle = 0;
            break;
    }

    cube.style.transform = `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
}

// Initial roll to show a random number when the page loads
rollDice();
