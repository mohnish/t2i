!function() {
  var input = document.querySelector('#input-text')
    , notice = document.querySelector('#notice')
    , canvas = document.querySelector('#display-text')
    , charCounter = document.querySelector('#char-counter')
    , output = document.querySelector('#output-image')
    , elem = document.createElement('canvas')
    , context = canvas.getContext('2d');

  if( !!(elem.getContext && elem.getContext('2d') && typeof elem.getContext('2d').fillText === 'function') ) {
    input.addEventListener('input', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.font = "italic 18pt Calibri";
      context.fillText(input.value, 100, 100);
      output.src = canvas.toDataURL();
      charCounter.innerHTML = this.value.length;
    });
  } else {
    notice.removeAttribute('class');
  }
}();
