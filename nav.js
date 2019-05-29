function changeImage() {
  var image = document.getElementById('section');
  if (image.src.match(".jpg")) {
      image.src = "media/01.jpg";
  }
  else {
      image.src = "media./02jpg";
  }
}