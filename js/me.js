var scene = new THREE.Scene();
// var material = new THREE.MeshBasicMaterial( { color: 0xFF0000, wireframe: false, transparent: true, opacity: 0.8 } );
// var material = new THREE.MeshDepthMaterial(  );
// var material = new THREE.MeshNormalMaterial( { shading: THREE.SmoothShading } );
// var material = new THREE.MeshLambertMaterial( { color: 0xFF0000 } );
// var material = new THREE.MeshPhongMaterial( { color: 0xFF0000, specular: 0x111111, shininess: 143, transparent: false, opacity: 0.8 } );
// var material = new THREE.MeshStandardMaterial( { color: 0xFF0000, metalness: 0.75, roughness: 0.25, transparent: false, opacity: 0.5 } );
var material = new THREE.MeshPhysicalMaterial( { color: 0xFF0000, metalness: 0.33, roughness: 0.5, transparent: true, opacity: 0.5, clearcoat: 1.0 } );
// var material = new THREE.MeshToonMaterial( { color: 0xFF0000, specular: 0x111111, shininess: 200 } );
// var material = new THREE.PointsMaterial( { color: 0xFF0000 } );
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 10, 1000 );
var renderer = new THREE.WebGLRenderer( { antialias: true } );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColorHex = true;
renderer.setClearColor(new THREE.Color(0xEEEEEE));
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );
var geometry = new THREE.TorusKnotGeometry( 5, 1.2, 100, 32, 2, 3 );
var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
var planeMaterial = new THREE.MeshPhongMaterial({color: 0xcccccc});
var plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x=-0.5*Math.PI;
plane.position.x = 15
plane.position.y = 0
plane.position.z = 0
plane.receiveShadow = true;
scene.add( plane );
var sphere = new THREE.Mesh( geometry, material );
// var sphere = new THREE.Points( geometry, material );
sphere.castShadow = true;
scene.add( sphere );
pointLight = new THREE.PointLight( 0xffffff, 1 );
scene.add( pointLight );
var ambientLight = new THREE.AmbientLight(0x0c0c0c);
scene.add( ambientLight );
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
spotLight.castShadow = true;
scene.add( spotLight );
pointLight.add( new THREE.Mesh( new THREE.SphereBufferGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) ) );

sphere.position.x = 10;
sphere.position.y = 8;
sphere.position.z = 2;
camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);
animate();

function animate() {
    var timer = 0.0001 * Date.now();
    requestAnimationFrame( animate );

    pointLight.position.x = Math.sin( timer * 7 ) * 300;
    pointLight.position.y = Math.cos( timer * 5 ) * 400;
    pointLight.position.z = Math.cos( timer * 3 ) * 300;

	renderer.render( scene, camera );
}