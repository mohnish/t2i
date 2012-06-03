/* Author: Mohnish Thallavajhula
  website: http://mohni.sh
*/

window.onload = function() {
  var input = document.getElementById('input-text')
    , notice = document.getElementById('notice')
    , canvas = document.getElementById('display-text')
    , output = document.getElementById('output-image')
    , elem = document.createElement('canvas')
    , context = canvas.getContext('2d')
    , imageUrl;

  if( !!(elem.getContext && elem.getContext('2d') && typeof elem.getContext('2d').fillText === 'function') ) {
    // T2I
    input.addEventListener('input', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillText(input.value, 10, 10);
      imgUrl = canvas.toDataURL();
      output.src = imgUrl;
    });
  } else {
    // Display the notice
    notice.removeAttribute('class');
  }

};

/*function test() {  
 var canvas = document.getElementById("canvas");  
 var url = canvas.toDataURL();  
   
 var newImg = document.createElement("img");  
 newImg.src = url;  
 document.body.appendChild(newImg);  
}*/

/*
canvas.toBlob(function(blob) {  
    var newImg = document.createElement("img"),  
        url = URL.createObjectURL(blob);  
    newImg.onload = function() {  
        // no longer need to read the blob so it's revoked  
        URL.revokeObjectURL(url);  
    };  
    newImg.src = url;  
    document.body.appendChild(newImg);  
 });  
 */