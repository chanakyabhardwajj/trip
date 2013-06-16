var camera, scene, renderer, composer;
var object, light, video, videoTexture;

init();
animate();

function init() {
    video = document.querySelector('#webVidHost');
    video.width    = window.innerWidth/5;
    video.height   = window.innerHeight/5;
    video.autoplay = true;
    video.style.display = "none";

    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

    function hasGetUserMedia() {
        // Note: Opera is unprefixed.
        return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia);
    }

    if (!hasGetUserMedia()) {
        console.log('getUserMedia() is not supported in your browser');
        return;
    }


    navigator.getUserMedia({video: true, audio: false}, function(localMediaStream) {
        video.src = window.URL.createObjectURL(localMediaStream);

    }, function(error){
        console.log("Failed to get a stream due to", error);
    });



	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	//

	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 400;

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x000000, 1, 1000 );

	object = new THREE.Object3D();
	scene.add( object );

	//var geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight, 1, 1)
	var geometry = new THREE.CubeGeometry(400,400,400)

    videoTexture = new THREE.Texture( video );
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;


    var material = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
    var mesh = new THREE.Mesh( geometry, material );
    object.add( mesh );



	scene.add( new THREE.AmbientLight( 0xdddddd ) );

	light = new THREE.DirectionalLight( 0xffffff );
	light.position.set( 1, 1, 1 );
	scene.add( light );

	// postprocessing

	composer = new THREE.EffectComposer( renderer );
	composer.addPass( new THREE.RenderPass( scene, camera ) );

	var effect = new THREE.ShaderPass( THREE.DotScreenShader );
	effect.uniforms[ 'scale' ].value = 5;
	effect.uniforms[ 'tSize' ].value = new THREE.Vector2( 150, 150 );
	composer.addPass( effect );

	var effect = new THREE.ShaderPass( THREE.RGBShiftShader );
	effect.uniforms[ 'amount' ].value = 0.05;
	effect.renderToScreen = true;
	composer.addPass( effect );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

	requestAnimationFrame( animate );

	var time = Date.now();

	//object.rotation.x += 0.005;
	object.rotation.y += 0.01;

    if( video.readyState === video.HAVE_ENOUGH_DATA ){
        videoTexture.needsUpdate = true;
    }

	composer.render();

}