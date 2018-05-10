$(document).ready(function() {
    

        $("#send").click(function(){
          
            var user = $("#user").val()
            var pwd = $("#pass").val()
           
           
          $.ajax({
              url:"http://192.168.50.72/api/hr/user/userLogin.php",
              dataType: 'json',
              data:{account:user,password:pwd},
              type:"POST",
              success:function(res){
                 console.log(res)
                 if(res.errorCode==10002){
                     $(".alert").show().children("strong").text("账号不能为空");  
                    //  return;                   
                 }

                 $("#user").focus(function(){
                  $(".alert").hide()

                 })
                
                 if(res.errorCode==10003){
            
                    $(".alert").show().children("strong").text("密码不能为空");
                    return;
                  
                }
                 

                $("#pass").focus(function(){
                    $(".alert").hide()
                   })
                if(res.errorCode==10008){
                    $(".alert").show().children("strong").text("未查询到账号信息");
                    return;
                }
              
               if(res.status==1){
           
             

                window.localStorage.setItem("username",user)
                window.localStorage.setItem("password" ,pwd)
                window.localStorage.setItem("id",res.data.hr_code)
                window.localStorage.setItem("taken",res.data.token)
                window.localStorage.setItem("mask",res.data.project_code)    

                window.location.href = "./index.html";

               }

               user = $("#user").val("")
               pwd = $("#pass").val("")

              },
              error:function(res1){
                  console.log(res1)
              }
    
          })
    
        })
    })