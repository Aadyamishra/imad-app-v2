console.log('Loaded!');

var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
    
};
var user=prompt("are you sure you want to write");
if(user==="yes") {
    confirm("well done");
    } else {
        confirm("sorry");
    }