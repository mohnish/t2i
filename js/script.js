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
      context.font = "italic 20pt Calibri";
      context.fillText(input.value, 100, 100);
      imgUrl = canvas.toDataURL();
      output.src = imgUrl;
    });
  } else {
    // Display the notice
    notice.removeAttribute('class');
  }

};
