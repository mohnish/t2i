$(document).ready(function() {
  $('#input-text').on('input propertychange', function() {
    var canvas = document.getElementById('output');
    var img = canvas.toDataURL("image/png");
    if (canvas && canvas.getContext) {
      var context = canvas.getContext('2d');
      if (context) {
        context.fillStyle    = '#000';
        context.font         = 'italic 30px sans-serif';
        context.textBaseline = 'top';
        context.fillText  ('', 0, 0);
        context.fillText  ($('#input-text').val(), 0, 0);
      }
    }
    $("#image").html('<img src="'+img+'"/>');
  });
});