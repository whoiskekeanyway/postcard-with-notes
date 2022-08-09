var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

//  Image List

images[0] = "../assets/homepage/1.webp";
images[1] = "../assets/homepage/2.webp";
images[2] = "../assets/homepage/3.webp";
images[3] = "../assets/homepage/4.webp";
images[4] = "../assets/homepage/5.webp";
images[5] = "../assets/homepage/6.webp";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
