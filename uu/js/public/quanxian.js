
    function admin (){
        
         var project_code = window.localStorage.getItem('mask');
         var hr_code = window.localStorage.getItem('id');
         var token = window.localStorage.getItem('taken');
     
         
         $.ajax({
             url:"http://192.168.50.72/api/hr/user/getMenuList.php",
             methods:"GET",
             dataType: 'json',        
             data:{
                 project_code:project_code,
                 hr_code:hr_code,
                 token:token
             },        
             success:function(res){
                 console.log(res) 
                 var data = res.data.list;
                //    console.log(data)
                                 var str = '';

                                 $.each(data, function (key, val) {
                                    str += '<div id="pro-manage">';
                                    str += '		<i class="pro-manage-biao"></i>';
                                    str += '		<a href="javascript:;" class="pro-manage-title">' + val.m_name + '</a>';
                                    str += '		<i class="add"></i>';
                                    str += '		<i class="sub"></i> ';
                                    str += '</div>';
                                    str += '<ul class="pro-contract-first">';
                                    $.each(val.menu_list, function (k, val) {
                                        str += '	<li><a href="javascript:;">' + val.m_name + '</a></li>';
                                    });
                                    str += '</ul>';
                                    //  str += '<div>';
                                    //  str += '	<a href="javascript:void(0);" class="append_manager" mid="">' + val.m_name + '</a>';
                                    //  str += '</div>';
                                    //  str += '';
                                   
                                    //  str += '	<ul>';
                                    //  $.each(val.menu_list, function (k, val) {
                                    //      str += '		<li>';
                                    //      str += '			<a href="javascript:void(0);" target="adminContentFrame">' + val.m_name + '</a>';
                                    //      str += '		</li>';
                                    //  });
                                    //  str += '	</ul>';
                                    
                                 });
                 
                                 $(".side-bar").append(str);
                 
                 
                             },
                             complete: function () {
                                 //请求完成后的处理
                             },
                             error: function (XMLHttpRequest) {
                                 //请求过程中发生了错误，记录下错误的代码 例如 : 404 => page not found
                                 alert("请求遇到了错误 , 错误代码 : " + XMLHttpRequest.status);
                             },                  
         
         })
        }





