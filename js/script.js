$(document).ready(function() {
  $('#input-text').on('input propertychange', function() {
    var canvas = document.getElementById('output');
    var img = canvas.toDataURL('image/png');
    var width = null;
    if (canvas && canvas.getContext) {
      var context = canvas.getContext('2d');
      if (context) {
        context.fillStyle = '#000';
        context.font = '10pt Arial';
        context.textBaseline = 'top';
        width = context.measureText($('#input-text').val()).width;
        context.fillText($('#input-text').val(), 0, 0);
      }
    }
    $("#image").html('<img src="'+img+'" width="'+ width +'" height="70px" />');
  });
});