var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

//  Image List

images[0] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991144/postcardwithnotes/homepage/6_vtqbpn.webp";
images[1] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1689625085/postcardwithnotes/homepage/DSCF6331_x04l58.jpg";
images[2] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1689621482/postcardwithnotes/homepage/_DSF4780-3_ef3da8.jpg";
images[3] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991143/postcardwithnotes/homepage/4_uwnymx.webp";

images[4] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1689621482/postcardwithnotes/homepage/_DSF4779-2_sgr3ow.jpg";
images[5] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1689624073/postcardwithnotes/homepage/_DSF4572_d7hob3.jpg";
images[6] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1669991143/postcardwithnotes/homepage/5_kvoot9.webp";

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
