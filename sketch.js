let ar;

function setup() {
  // Setup AR layer
  pixelDensity(1);
  ar = createGraphics(895, 1280, P2D);
  let canvasElement = document.getElementById('canvas');
  canvasElement.replaceWith(ar.canvas);

  // Initialize video player (hidden by default)
  let vidFrame = createDiv();
  vidFrame.id('vidPlayer');
  vidFrame.position(0, 0);
  vidFrame.size(windowWidth, windowHeight);
  vidFrame.style('display', 'none');
  vidFrame.html('<iframe id="videoFrame" width="100%" height="100%" frameborder="0" allow="autoplay; encrypted-media;" allowfullscreen></iframe>');
  vidFrame.style('pointer-events', 'none');
  vidFrame.style('z-index', '1'); // Ensure it's above the AR content
}

function draw() {
  ar.image(get(0, 0, width, height), 0, 0, ar.width, ar.height);
}

function playVideo(targetIndex) {
  const videoUrl = targetVideoMap[targetIndex];
  let iframe = document.getElementById('videoFrame');
  iframe.src = videoUrl;
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function pauseVideo() {
  let iframe = document.getElementById('videoFrame');
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
