let btn = document.getElementsByClassName("drum");
Array.from(btn).forEach(function (element, index) {
    element.addEventListener('click', function () {

        // var audio = new Audio(`sounds/tom-1.mp3`);
        // audio.play();
        playSound(element.innerHTML);
        keyAnimation(element.innerHTML);

    })

});
document.addEventListener("keydown", function (event) {
    keyPressed = event.key;
    playSound(keyPressed);
    keyAnimation(keyPressed);
})
function playSound(key) {

    switch (key) {
        case "w": var tom1 = new Audio(`tom-1.mp3`);
            tom1.play();
            break;
        case "a":
            tom2 = new Audio(`tom-2.mp3`);
            tom2.play();
            break;
        case "s":
            tom3 = new Audio(`tom-3.mp3`);
            tom3.play();
            break;
        case "d":
            tom4 = new Audio(`tom-4.mp3`);
            tom4.play();
            break;
        case "j":
            snare = new Audio(`snare.mp3`);
            snare.play();
            break;
        case "k":
            crash = new Audio(`crash.mp3`);
            crash.play();
            break;
        case "l":
            kick = new Audio(`kick-bass.mp3`);
            kick.play();
            break;

    }
}
function keyAnimation(key){
    document.querySelector(`.${key}`).classList.add("pressed");
    setTimeout(function(){
        document.querySelector(`.${key}`).classList.remove("pressed");
    },100);

}