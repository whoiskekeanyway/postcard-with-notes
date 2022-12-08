

var currentImage = 0; // Start Point
var imageList = []; // Images Array
var timeBetweenSwitches = 3000; // Time Between Switch

// Image List

imageList[0] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334855/postcardwithnotes/homepage/Big-Homepage/7_wtitfr.webp";
imageList[1] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334831/postcardwithnotes/homepage/Big-Homepage/11_wq39s3.webp";
imageList[2] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334832/postcardwithnotes/homepage/Big-Homepage/3_hqblo8.webp";
imageList[3] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334844/postcardwithnotes/homepage/Big-Homepage/4_etl56d.webp";
imageList[4] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334845/postcardwithnotes/homepage/Big-Homepage/5_hcsvum.webp";
imageList[5] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334840/postcardwithnotes/homepage/Big-Homepage/6_n7sjjq.webp";
imageList[6] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334831/postcardwithnotes/homepage/Big-Homepage/9_snmdpg.webp";
imageList[7] =
  "https://res.cloudinary.com/da93q413z/image/upload/v1670334832/postcardwithnotes/homepage/Big-Homepage/10_cjt4vm.webp";

// Change Image
function changeSlide() {
  document.sliderimage.src = imageList[currentImage];

  // Check If Index Is Under Max
  if (currentImage < imageList.length - 1) {
    // Add 1 to Index
    currentImage++;
  } else {
    // Reset Back To O
    currentImage = 0;
  }

  // Run function every x seconds
  setTimeout("changeSlide()", timeBetweenSwitches);
}

// Run function when page loads
window.onload = changeSlide;
