//your JS code here. If required.
function updateDimensions() {
      // Get the width and height of the window
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Display the dimensions on the page
      document.getElementById('width').textContent = width;
      document.getElementById('height').textContent = height;
    }

    // Initial call to set dimensions on page load
    updateDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateDimensions);