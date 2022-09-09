
function init() {
    let imgObj = document.getElementById('myImage');
    imgObj.style.position = 'relative';
    imgObj.style.left = '0px';
}

function moveR() {
    let imgObj = document.getElementById('myImage')
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

window.onload = init;
