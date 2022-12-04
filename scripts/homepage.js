var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

//  Image List

images[0] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991144/postcardwithnotes/homepage/6_vtqbpn.webp";
images[1] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991143/postcardwithnotes/homepage/5_kvoot9.webp";
images[2] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991143/postcardwithnotes/homepage/4_uwnymx.webp";
images[3] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991142/postcardwithnotes/homepage/3_zdiefm.webp";
images[4] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991142/postcardwithnotes/homepage/2_j6f5cl.webp";
images[5] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991142/postcardwithnotes/homepage/1_wj5tlc.webp";

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
