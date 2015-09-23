$(function(){
  var materias = [0,0,0,0];
  function matInsert(type) {
    for(i = 0;i<3;i++){
      materias[i] = materias[i+1];
    }
    materias[3] = type;
  };
  var two = $('.two');
  var len = two.length;
  for (j = 0; j < len; j++) {
    two[j].index = j;
  }
  two.click(function(){
    matInsert(this.index);
    console.log(materias);
    var mat = $('.mat');
    for(m = 0; m < 3; m++){
      mat.eq(m).html(mat.eq(m+1).html());
    }
    mat.eq(3).html($(this).html());
  });
  $('#sub').click(function(){
    $.ajax({
      type: 'POST',
      url: '/change',
      data: JSON.stringify({"materias":materias,"three":$('#three').val(),"quality":$('#quality').val()}),
      success: function(data) { },
      contentType: "application/json",
      dataType: 'text'
    });
  });
});