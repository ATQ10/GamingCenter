$(document).ready(function(){
    $("img").click(function(){
      var description = $(this).attr('alt');
      var img = $(this).attr('src');
      $("#show-img").attr('src',img);
      $("#desc-img").text(description);
      $("#imgmodal").modal('show');
    });
    $("#close").click(function(){
      $("#imgmodal").modal('hide');
    });
  });