/* Author: Mohnish Thallavajhula
  website: http://mohni.sh
*/

window.onload = function() {
  var input = document.getElementById('input-text')
    , output = document.getElementById('output-image')
    , notice = document.getElementById('notice')
    , elem = document.createElement('canvas')
    , canvasTest = false;

  canvasTest = !!(elem.getContext && elem.getContext('2d') && typeof elem.getContext('2d').fillText === 'function');

  if(canvasTest) {
    //
  } else {
    notice.className = '';
  }

};