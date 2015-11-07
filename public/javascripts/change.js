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
    var mat = $('.mat');
    for(m = 0; m < 3; m++){
      mat.eq(m).attr('class',mat.eq(m+1).attr('class'));
    }
    mat.eq(3).attr('class',$(this).attr('class')+' mat');
  });
  $('.mat').unbind('click');
  $('#sub').click(function(){
    $.ajax({
      type: 'POST',
      url: '/change',
      data: JSON.stringify({"materias":materias.sort(),"three":$("input[name='three']:checked").val(),"quality":$('#quality').val()}),
      success: function(data) { },
      contentType: "application/json",
      dataType: 'text'
    });
  });
  // $('.three').click(function(){
  //   $('#cc').click();   使输入框获得焦点
  // });
  // $('#cc').click(function(){
  //   $('#quality').focus();
  // });
  //ajax的loading效果
  $('#quality').focus(function(){
    this.select();
    this.focused=true;
  });
  $('#quality').mouseup(function(){
    if(this.focused){
      this.focused=false;
      return false;
    }
  });
  $('#loading').hide();
  $(document).ajaxStart(function(){
    $("#sub").attr("disabled", true);
    $('#loading').show();
  });
  $(document).ajaxStop(function(){
    $("#sub").attr("disabled", false);
    $('#loading').hide();
  });
  //正则表达式限制只能输入数字
  $('#quality').keyup(function(){
    this.value = this.value.replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
  });
  $('.three0').click(function(){
    $('#quality').val('1');
  });

});