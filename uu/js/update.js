$(function () {
 
 var old_password = window.localStorage.getItem('password')
 var project_code = window.localStorage.getItem('mask');
 var hr_code = window.localStorage.getItem('id');
 var token = window.localStorage.getItem('taken');


  
 $("#oldPWD").focus(function(){
  $("#y_input_pwd").hide()
  $("#n_input_pwd").hide()
  $("#s_input_pwd").hide()
})

$("#newPWD").focus(function(){
  $("#y_input_pwd").hide()
  $("#n_input_pwd").hide()
  $("#s_input_pwd").hide()
})
$("#confirmPWD").focus(function(){
  $("#y_input_pwd").hide()
  $("#n_input_pwd").hide()
  $("#s_input_pwd").hide()
})

  $('#cancel').click(function () {
   
  $("#oldPWD").val("")
  $("#newPWD").val("")
  $("#confirmPWD").val("")
 
  });
  $('#confirm').click(function () {
    var oldPWD = document.getElementById('oldPWD').value;
    var newPWD = document.getElementById('newPWD').value;
    var confirmPWD = document.getElementById('confirmPWD').value;
    
    if(oldPWD == "" ){
      $("#y_input_pwd").show().children("span").text("请输入旧密码")
       return
    }


    if(oldPWD != old_password ){
      $("#y_input_pwd").show().children("span").text("输入的密码与旧密码不符")
      return  
    }
   
    if(newPWD.length =="") {
      $("#n_input_pwd").show().children("span").text("请输入新密码")

      return 
    }
    var reg = /^(?=^.*?[a-z])(?=^.*?\d).{6,15}$/

    if(!reg.test(newPWD)) {
      $("#n_input_pwd").show().children("span").text("密码由字母和数字组成,长度6-16位")
      return 
    }
    if( confirmPWD =="") {
      $("#s_input_pwd").show().children("span").text("请再次输入新密码")
      return 
    }
    if( confirmPWD !=newPWD ) {
      $("#s_input_pwd").show().children("span").text("你输入的密码与新密码不一致")
      return 
    }
   
    
    $.ajax({
      type: 'post',
      url: 'http://etapi.etong-online.com/api/hr/user/updatePwd.php',
      data: {
        project_code: project_code,
        hr_code: hr_code,
        token: token,
        old_password: oldPWD,
        new_password: newPWD
      },
      success: function(res) {
        console.log(res)
      }
    })
  });
});
