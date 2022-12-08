function changeNavBarColor() {
    //get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    //get the navbar element
    var navbar = document.getElementById('switch');

    //if the scroll position is greater than 636, change the navbar background to purple
    if (scrollPosition > 636) {
        $(navbar).css('background-color', '#4a0f82');
    }
    //if the scroll position is 0, change the navbar background to default
    else {
        $(navbar).css('background-color', 'transparent');
    }
}

//add an event listener that calls the changeNavBarColor function when the page is scrolled
window.addEventListener('scroll', changeNavBarColor);




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}