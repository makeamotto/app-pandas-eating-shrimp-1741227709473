/**
 * Basic Three.js Game Boilerplate
 * 
 * This file sets up a simple scene, camera, and renderer
 * so you can get started with your Three.js project quickly.
 */

// Global variables (scene, camera, renderer)
let scene, camera, renderer;

function init() {
  // 1. Create a scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x202020);

  // 2. Set up a camera
  const fov = 75; // Field of View
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 1000;
  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 5);

  // 3. Create the renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 4. Attach the renderer's canvas to the DOM
  //    By default, we attach to #game-container (from index.html).
  const container = document.getElementById("game-container");
  container.appendChild(renderer.domElement);

  // 5. Add any default lighting or objects here
  addBasicLighting();
  addTestCube();

  // 6. Start the render/animation loop
  animate();

  // 7. Handle window resizing
  window.addEventListener("resize", onWindowResize, false);
}

function addBasicLighting() {
  // Example of adding some ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  // Example of a directional light
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 7.5);
  scene.add(dirLight);
}

function addTestCube() {
  // Simple geometry + material for a test cube
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ color: 0xff0051 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
}

function animate() {
  requestAnimationFrame(animate);

  // Update your game objects here
  // e.g., rotate the test cube, run physics, handle user input, etc.

  // Render the scene through the camera
  renderer.render(scene, camera);
}

function onWindowResize() {
  // Adjust camera aspect and renderer size when the window is resized
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Call init once the page has loaded
window.onload = init;
