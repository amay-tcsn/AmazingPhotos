console.log("Hello World!!")

const images = document.getElementsByClassName("photo");

console.log("Hi from top");

let index = 1;
showSlide(index);

function changeSlide(n) {
  //console.log("hi")
  showSlide(index = index + n);
  console.log(index);
}


function showSlide(n) {
  let i;
  if (n > images.length) index = 1;
  if (n < 1) index = images.length;
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none"  
  }
  images[index-1].style.display = "block";
}
