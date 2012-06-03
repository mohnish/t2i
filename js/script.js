/* Author: Mohnish Thallavajhula
  website: http://mohni.sh
*/

window.onload = function() {
  var input = document.getElementById('input-text')
    , output = document.getElementById('output-image')
    , notice = document.getElementById('notice')
    , elem = document.createElement('canvas')
    , canvas = document.getElementById('display-text')
    , context = canvas.getContext('2d')
    , canvasTest = false
    , imageUrl;


  canvasTest = !!(elem.getContext && elem.getContext('2d') && typeof elem.getContext('2d').fillText === 'function');

  if(canvasTest) {
    // T2I
    input.addEventListener('input', function(event) {
      context.clearRect(0, 0, 500, 90);
      context.fillText(input.value, 10, 10);
      imageUrl = canvas.toDataUrl('image/jpeg');
      output.src = imageUrl;
    });
  } else {
    // Display the notice
    notice.removeAttribute('class');
  }

};