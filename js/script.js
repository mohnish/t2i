/* Author: Mohnish Thallavajhula
  website: http://mohni.sh
*/

$(function() {
  var input = document.getElementById('input-text')
    , output = document.getElementById('output-image')
    , elem = document.createElement('canvas')
    , canvasTest = false;

  canvasTest = !!(elem.getContext && elem.getContext('2d'));

  if(canvasTest && (typeof document.createElement('canvas').getContext('2d').fillText === 'function')) {

  }

});





