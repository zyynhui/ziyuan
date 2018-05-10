
    jQuery(window).ready(function () {  
      
      
      //调用左边的菜单栏 
         admin() 


        //  左边菜单栏的切换
        $("#pro-manage .sub").click(function(){
          $(".pro-contract-first").hide();         
          $(this).hide().siblings(".add").show()
        })
        $("#pro-manage .add").click(function(){
          $(".pro-contract-first").show();         
          $(this).hide().siblings(".sub").show()
        })
        $(".pro-contract-first .pro-contract-tao").click(function(){
          $(".pro-contract-second").toggle()
        })
        var old_password = window.localStorage.getItem('password')
        var project_code = window.localStorage.getItem('mask');
        var hr_code = window.localStorage.getItem('id');
        var token = window.localStorage.getItem('taken');
       

        // 查询投诉件数
      $("#serach-result").click(function(){
         var begin =  $("#d11").val()
         var end   =  $("#d12").val()
        $.ajax({
          url:"http://192.168.50.72/api/hr/complaint/complaintList.php?project_code=PJ201802040904&token=a624097cd3367b03d92f701d016f3b31",
          methods:"get",
          data:{ project_code: project_code, token: token,start_time:begin,end_time:end},
          success:function(res){
            //  console.log(res)
             //待定
          }
          
        })

      })

       

    });

