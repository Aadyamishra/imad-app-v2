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
    
    $.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});
