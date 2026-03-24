import * as THREE from "three";

export function createLevel(scene, targets) {
  for (let i = 0; i < 30; i++) {
    const h = Math.random() * 4 + 1;
    const wallGeo = new THREE.BoxGeometry(2, h, 2);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x888888,
      transparent: true, // Damit Farbwechsel besser sichtbar sind
    });
    const wall = new THREE.Mesh(wallGeo, wallMat);
    wall.position.set(Math.random() * 60 - 30, h / 2, Math.random() * 60 - 30);
    scene.add(wall);
    targets.push(wall);
  }
}
