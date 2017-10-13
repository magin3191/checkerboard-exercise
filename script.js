

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}





for(var i=0; i<81;i++){
  var tile=document.createElement('div');
  tile.style.width='11.1%';
  tile.style.paddingBottom='11.1%';
  tile.style.float='left';
  document.body.prepend(tile);

  if(i%2==0){
  tile.style.backgroundColor=getRandomColor();
}

  else{
    tile.style.backgroundColor=getRandomColor();
  }

 var body = document.getElementsByTagName('body')[0];
 body.style.backgroundImage = `linear-gradient(12deg, blue, green)`;
 body.style.opacity = 0.2;
 body.appendChild(tile);

tile.addEventListener("click", function(tile){

tile.target.style.backgroundColor=getRandomColor()

})
}

// function colorChange(){
// tile.style.backgroundColor=getRandomColor()
//
//
// }
