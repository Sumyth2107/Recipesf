document.addEventListener('DOMContentLoaded', function () {
    var animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // ID of the container
      renderer: 'svg', // Render as SVG
      loop: true, // Loop the animation
      autoplay: true, // Start playing immediately
      path: 'https://lottie.host/5b9c0abc-560f-4506-bd0c-28a0d8ff83b2/dP3yJN1dJ8.json' // Path to the JSON file
    });
  });