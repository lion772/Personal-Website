window.onload = function () {
  // add window.onload here and set it euqal to a function
  // Get the modal
  let modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  let img = document.querySelector("#myImg");
  let modalImg = document.getElementById("img01");
  let captionText = document.getElementById("caption");
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });

  modal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Get the <span> element that closes the modal
  let span = document.querySelector(".close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
}; // close the function
