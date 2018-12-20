document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Get all "navbar-item" items
  const $navItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);

  // Check if there are any
  if ($navbarBurgers.length > 0 && $navItems.length > 0) {
  	// Add a click event on each of them
  	$navItems.forEach( el => {
  		// For each of the items in the menu, add a click listener.
  		el.addEventListener('click', () => {
  			// Click the navbar burger menu when clicking the item.
  			$navbarBurgers.forEach( nv => {
  				$nv = document.getElementById(nv.dataset.target);
  				$nv.classList.toggle('is-active');
  			});
  		});
  	});
  }
});
