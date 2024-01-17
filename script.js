var container = document.querySelector(".container");
console.log(container);
var count = 50;
for(let i = 0; i < count; i++){
    var leftSnow = Math.floor(Math.random() * container.clientWidth);
    var topSnow = Math.floor(Math.random()* container.clientHeight);
    var widthSnow = Math.floor(Math.random()*50 + 20);
    var timeSnow = Math.floor(Math.random() * 5 + 10);
    var blur = Math.floor(Math.random() * 30);
    var div = document.createElement("div");
    div.classList.add('snow');
    div.style.left = leftSnow + "px";
    div.style.top = topSnow + "px";
    div.style.width = widthSnow + "px";
    div.style.height = widthSnow + "px";
    div.style.animationDuration = timeSnow + "s";
    div.style.filter = "blur(" + blur + ")";
    container.append(div);
}