var scene, camera
var renderer
var width, width

var cars = []
// var stats

var config = {
  isMobile: false,
  background: 0x282828
}

width = window.innerWidth
height = window.innerHeight

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000)
camera.position.set(330, 330, 330)
camera.lookAt(scene.position)

renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)
renderer.setClearColor(config.background)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.body.appendChild(renderer.domElement)

checkUserAgent()

//buildAuxSystem()
buildLightSystem()
//buildbuilding()
//buildRoad()
//buildStaticCars()
buildMovingCars()

loop()
onWindowResize()

function checkUserAgent() {
  var n = navigator.userAgent;
  if (n.match(/Android/i) || n.match(/webOS/i) || n.match(/iPhone/i) || n.match(/iPad/i) || n.match(/iPod/i) || n.match(/BlackBerry/i)) {
    config.isMobile = true
    camera.position.set(420, 420, 420)
    renderer.shadowMap.enabled = false
  }
}

function buildMovingCars() {
  var carsPosition = [
    [-130, 145, 0],
    [10, 145, 0],
    [145, 20, 0.5],
    [30, -145, 1],
    [-145, -60, 1.5]
  ]
  carsPosition.forEach(function(elem) {
    var car = new Car()
    var x = elem[0],
      z = elem[1],
      r = elem[2]
    car.setPosition(x, 0, z)
    car.mesh.rotation.y = r * Math.PI
    cars.push(car)
    scene.add(car.mesh)
  })
}

function buildLightSystem() {

  if (!config.isMobile) {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.1);
    directionalLight.position.set(300, 1000, 500);
    directionalLight.target.position.set(0, 0, 0);
    directionalLight.castShadow = true;

    var d = 300;
    directionalLight.shadow.camera = new THREE.OrthographicCamera(-d, d, d, -d, 500, 1600);
    directionalLight.shadow.bias = 0.0001;
    directionalLight.shadow.mapSize.width = directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight)

    var light = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(light)
  } else {
    var hemisphereLight = new THREE.HemisphereLight(0xffffff, 1)
    scene.add(hemisphereLight)

    var light = new THREE.AmbientLight(0xffffff, 0.15)
    scene.add(light)
  }

}

function buildAuxSystem() {
  // stats = new Stats()
  // stats.setMode(0)
  // stats.domElement.style.position = 'absolute'
  // stats.domElement.style.left = '5px'
  // stats.domElement.style.top = '5px'
  // document.body.appendChild(stats.domElement)

  // var axisHelper = new THREE.AxesHelper(200)
  // scene.add(axisHelper)

  var gridHelper = new THREE.GridHelper(320, 32)
  scene.add(gridHelper)

  var controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.rotateSpeed = 0.35
}

function carMoving(car) {
  var angle = car.mesh.rotation.y
  var x = car.mesh.position.x,
    z = car.mesh.position.z

  if (x < 300 && z === 145) {
    car.forward()
  } else if (angle < 0.5 * Math.PI) {
    car.turnLeft(0.5 * Math.PI, 0.1)
  } else if (x === 145 && z > -145) {
    car.forward()
  } else if (angle < Math.PI) {
    car.turnLeft(0.5 * Math.PI, 0.1)
  } else if (x > -145 && z == -145) {
    car.forward()
  } else if (angle < 1.5 * Math.PI) {
    car.turnLeft(0.5 * Math.PI, 0.1)
  } else if (x === -145 && z < 145) {
    car.mesh.rotation.y = 1.5 * Math.PI
    car.forward()
  } else if (angle < 2 * Math.PI) {
    car.turnLeft(0.5 * Math.PI, 0.1)
  } else {
    car.setPosition(-145, 0, 145)
    car.mesh.rotation.set(0, 0, 0)
  }
}

function loop() {
  // stats.update()
  cars.forEach(function(car) {
    carMoving(car)
  })
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}

function onWindowResize() {
  window.addEventListener('resize', function() {
    width = window.innerWidth
    height = window.innerHeight

    camera.aspect = width / height;
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  })
}