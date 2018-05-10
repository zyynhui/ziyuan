$(function () {
  var oldPWD = document.getElementById('oldPWD').value;
  var newPWD = document.getElementById('newPWD').value;
  var confirmPWD = document.getElementById('confirmPWD').value;

  $('#cancel').click(function () { 
     var aa= $("#newPWD").val()
    // console.log(1); 
    console.log(aa)
  });
  $('#confirm').click(function () {

    if(oldPWD==""){
      return alert('请输入旧密码')
    }

    if(newPWD.length < 6) {
      return alert('新密码位数不够')
    }

    if(newPWD != confirmPWD) {
      return alert('密码不一致')
    }

    //下面是校验成功后，发送 ajax

    var project_code = window.localStorage.getItem('mask');
    var hr_code = window.localStorage.getItem('id');
    var token = window.localStorage.getItem('taken');
    
    $.ajax({
      type: 'post',
      url: 'http://etapi.etong-online.com/api/hr/user/updatePwd.php',
      data: {
        project_code: project_code,
        hr_code: hr_code,
        token: token,
        old_password: oldPWD,
        old_password: newPWD
      },
      success: function(res) {
        console.log(res)
      }
    })
  });
});
