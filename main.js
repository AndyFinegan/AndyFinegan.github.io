 // Activate the image for the navbar-collapse
 nowuiKit.initNavbarImage();

 $navbar = $('.navbar[color-on-scroll]');
 scroll_distance = $navbar.attr('color-on-scroll') || 500;

 // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.

 if ($('.navbar[color-on-scroll]').length != 0) {
     nowuiKit.checkScrollForTransparentNavbar();
     $(window).on('scroll', nowuiKit.checkScrollForTransparentNavbar)
 }