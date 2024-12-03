import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, innerWidth / innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );



const map =[[1, 1, 1, 1, 1],
            [1, 2, 1, 1, 2],
            [1, 2, 2, 2, 2],
            [1, 2, 1, 1, 1],
            [1, 1, 1, 1, 1]]

for (let i = 0; i < map.length; i++) {
    for(let j = 0; j < map.length; j++) {
        if(map[i][j] === 1) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(i, -1, j)
            scene.add(cube)
        }
        else if (map[i][j] === 2) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(i, -1, j)
            scene.add(cube)
        }  
    }
}

// fill in the rest of the map like before, except reversed for the different quadrants
for (let i = 0; i < map.length; i++) {
    for(let j = 0; j < map.length; j++) {
        if(map[i][j] === 1) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(-i, -1, j)
            scene.add(cube)
        }
        else if (map[i][j] === 2) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(-i, -1, j)
            scene.add(cube)
        }  
    }
}
for (let i = 0; i < map.length; i++) {
    for(let j = 0; j < map.length; j++) {
        if(map[i][j] === 1) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(i, -1, -j)
            scene.add(cube)
        }
        else if (map[i][j] === 2) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(i, -1, -j)
            scene.add(cube)
        }  
    }
}
for (let i = 0; i < map.length; i++) {
    for(let j = 0; j < map.length; j++) {
        if(map[i][j] === 1) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(-i, -1, -j)
            scene.add(cube)
        }
        else if (map[i][j] === 2) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
            const cube = new THREE.Mesh(geometry, material);
            cube.position.set(-i, -1, -j)
            scene.add(cube)
        }  
    }
}

// Player cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
const playerCube = new THREE.Mesh(geometry, material);
scene.add(playerCube);

camera.position.z = 5;

const keys = {
    w: false,
    a: false,
    s: false,
    d: false,
};

window.addEventListener('keydown', (event) => {
    keys[event.key.toLowerCase()] = true;
});

window.addEventListener('keyup', (event) => {
    keys[event.key.toLowerCase()] = false;
});





function animate() {

    const speed = 0.1;

    if(keys.w) {
        playerCube.position.z -= speed;
    }
    if(keys.s) {
        playerCube.position.z += speed;
    }
    if(keys.a) {
        playerCube.position.x -= speed;
    }
    if(keys.d) {
        playerCube.position.x += speed;
    }
	renderer.render( scene, camera );

}

animate();