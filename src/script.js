import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"

console.log(OrbitControls)

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" })

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// initialize the camera
// const camera = new THREE.PerspectiveCamera(
// 	75,
// 	window.innerWidth / window.innerHeight,
// 	0.1,
// 	200
// )

const aspectRatio = window.innerWidth / window.innerHeight

const camera = new THREE.OrthographicCamera(
	-1 * aspectRatio,
	1 * aspectRatio,
	1,
	-1,
	0.1,
	200
)
// scene.add( camera );
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector("canvas.threejs")
const renderer = new THREE.WebGLRenderer({
	canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)

// instantiate the controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true

const renderloop = () => {
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(renderloop)
}

renderloop()
// window.requestAnimationFrame()
