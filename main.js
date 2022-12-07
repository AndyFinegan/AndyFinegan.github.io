function changeNavBarColor() {
    //get the current scroll position
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    //get the navbar element
    var navbar = document.getElementById('switch');

    //if the scroll position is greater than 570, change the navbar background to purple
    if (scrollPosition > 670) {
        $(navbar).css('background-color', '#4a0f82');
    }
    //if the scroll position is 0, change the navbar background to default
    else {
        $(navbar).css('background-color', 'transparent');
    }
}

//add an event listener that calls the changeNavBarColor function when the page is scrolled
window.addEventListener('scroll', changeNavBarColor);

