// Web Audio API context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var audioBuffer;

// Load audio data function
function loadAudioFile(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
        audioCtx.decodeAudioData(request.response, function(buffer) {
            audioBuffer = buffer;
        });
    };
    request.send();
}

loadAudioFile('sound.wav'); // load the audio file

var sourceNode;
var isPlaying = false;11

function startAudioContext() {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function toggleAudio() {
    startAudioContext(); // Ensure the AudioContext is running

    const icon = document.querySelector('.play-icon');
    
    if (!isPlaying) {
        sourceNode = audioCtx.createBufferSource();
        sourceNode.buffer = audioBuffer;
        sourceNode.loop = true;
        sourceNode.connect(audioCtx.destination);
        sourceNode.start(0);
        isPlaying = true;

        icon.textContent = 'volume_up'; // Change to pause icon
    } else {
        sourceNode.stop();
        isPlaying = false;

        icon.textContent = 'volume_off'; // Change back to play icon
    }
}

// Event listener for the scroll event to change navbar color
window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        document.body.classList.add('user-scrolled');
    } else {
        document.body.classList.remove('user-scrolled');
    }
});

// This ensures that the AudioContext will only be resumed after a user gesture on the page.
document.addEventListener('click', startAudioContext);
document.addEventListener('touchstart', startAudioContext);


// --- Three.js cloud code ---
let scene, camera, renderer;
let clouds = [];

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.content').appendChild(renderer.domElement);

    let cloudTexture = new THREE.TextureLoader().load('dot.png'); 
    let cloudMaterial = new THREE.MeshBasicMaterial({ map: cloudTexture, transparent: true, opacity: 0.5, side: THREE.DoubleSide });

    // Create 80 cloud planes
    for (let i = 0; i < 80; i++) {
        let planeGeometry = new THREE.PlaneGeometry(2, 1);  // You can adjust these values to get the desired width and height.
        let cloud = new THREE.Mesh(planeGeometry, cloudMaterial);
        cloud.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 20);
        scene.add(cloud);
        clouds.push(cloud);
    }

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    clouds.forEach(cloud => {
        cloud.position.x -= 0.001;
        if (cloud.position.x < -10) {
            cloud.position.x = 10;
        }
    });

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

init();

