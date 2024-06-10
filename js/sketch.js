let ar;

function setup() {
  // Setup AR layer
  pixelDensity(1);
  ar = createGraphics(895, 1280, P2D);
  let canvasContainer = document.getElementById('canvasContainer');
  canvasContainer.appendChild(ar.canvas); // Append AR canvas to the container

  // Initialize video player (hidden by default)
  let vidFrame = createDiv();
  vidFrame.id('vidPlayer');
  vidFrame.position(0, 0);
  vidFrame.size(windowWidth, windowHeight);
  vidFrame.style('display', 'none');
  vidFrame.html('<iframe id="videoFrame" width="100%" height="100%" src="https://www.youtube.com/embed/?enablejsapi=1&rel=0&autoplay=1&loop=1&controls=0" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>');
  vidFrame.style('pointer-events', 'none');
  vidFrame.style('z-index', '1'); // Ensure it's above the AR content
}

function draw() {
  ar.image(get(0, 0, width, height), 0, 0, ar.width, ar.height);
}
