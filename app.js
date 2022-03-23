// set date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

var i = 0; // start point
var images = [];
 var time = 3000;

 //image list
  images[0] = '1.jpg';
  images[1] = '4.jpg';
  images[2] = '5.jpg';
  
  

  function changeImg() {
      document.slide.src = images[i];

      if(i < images.length - 1) {
          i++;
        } else {
            i = 0;
        }

        setTimeout("changeImg()", time)
  }

  window.onload = changeImg;
