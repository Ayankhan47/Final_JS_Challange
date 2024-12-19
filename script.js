const Img = [
    './img1.png',
    './img2.png',
    './img3.png',
    './img4.png',
    './img5.png'
];

var btn = document.querySelector("button");
var body = document.querySelector("body");

btn.addEventListener('click', function(){
    let randomeNumber = Math.floor(Math.random()*5)
    let randomSize = Math.floor(Math.random()*3)
    var node = document.createElement("img")
    node.src = Img[randomeNumber];
    var img = document.getElementById("box").appendChild(node); 
    img.style.scale = randomSize 
    img.style.left = Math.floor(Math.random()*100) + "%"
    img.style.top = Math.floor(Math.random()*100) + "%"
    img.style.rotate = Math.floor(Math.random()*360) + "deg"
})