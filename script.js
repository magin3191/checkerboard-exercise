

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





}
