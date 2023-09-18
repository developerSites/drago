//  alert("desktop user only");


score = 0;
cross = true;

 audio = new Audio('gamemusic.mp3');
 audiogo = new Audio('gameover.mp3');
 setTimeout(() => {
  audio.play('gamemusic.mp3');

 },1000);

document.onkeydown = function (e) {
    // console.log("key code is", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox + 112) + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //  console.log(offsetX,offsetY)
    if (offsetX < 113 && offsetY < 52) {
        gameOver.innerHTML = " Game Over - Reload to start over"
        obstacle.classList.remove('obstacleAni')
         audiogo.play();
         setTimeout(()=>{
             audiogo.pause();
             audio.pause();
         },1000);
        
    }

    else if (offsetX < 73 && cross) {
        //143
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your score is:" + score;
}