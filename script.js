//your JS code here. If required.
function updateDimensions() {
      var width = window.innerWidth;
      var height = window.innerHeight;
	  var sizeInfo = document.querySelector('#sizeInfo h1');
	 sizeInfo.textContent = 'Width: ' + width + ' and Height: ' + height;
      
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);