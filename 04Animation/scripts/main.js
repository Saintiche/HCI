


 var rotationSpeed = 0.01;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x += rotationSpeed;
 	console.log(myOtherBox.object3D.rotation.x);
 }

 setInterval(spin, 16); 