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
    , canvasTest = false;

  canvasTest = !!(elem.getContext && elem.getContext('2d') && typeof elem.getContext('2d').fillText === 'function');

  if(canvasTest) {
    // T2I
    canvas.addEventListener('input', function() {
      context.fillText(input.value, 100, 30);
    });
  } else {
    // Display the notice
    notice.removeAttribute('class');
  }

};