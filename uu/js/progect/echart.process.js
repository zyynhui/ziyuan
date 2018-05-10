$(function(){
    var myChart = echarts.init(document.getElementById("l-yu-rate"));

    option = {
        title: {  
            text: '主要城市到检率'  
        },
        grid: {  
            left: '8%',  
            right: '100',  
            bottom: '5%',  
           containLabel: true  
       } ,
        xAxis: {
            type: 'category',
            "axisLabel":{  
                interval: 0  
            } ,  
            axisLabel: {  
                interval:0,  
                rotate:50  
             } ,        
            
            data: ['上海', '北京', '广州', '杭州', '天津', '武汉', '福州','南京','乌鲁木齐','济南','温州','沈阳','深圳','宁波','厦门','哈尔滨']
        },
       
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [100, 100, 150, 80, 70, 110, 130,123,100,111,100,111,100,100,111,134],
            type: 'bar',
            itemStyle : {  
                normal : {  
                    color:'#4f81bd',  //圈圈的颜色
                 
                } 
            },
            barWidth:15,
        }]
    };

    
    myChart.setOption(option);




    var myCharte = echarts.init(document.getElementById("r-yu-date"));

    optione = {
        title : {
            text: '预约率',
           
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            right:'right',        
            data: ['应检人数','已预约']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:600, name:'应检人数'},
                    {value:310, name:'已预约'}
                 
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    
    myCharte.setOption(optione);
    

})