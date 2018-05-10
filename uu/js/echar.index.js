$(function(){
    // qst的图表 
    var myChart = echarts.init(document.getElementById("echar"));

    option = {
        // title: {
        //     text: '趋势图'
        // },
        xAxis: {
            type: 'category',
            data: ['2018-01-10', '2018-01-14', '2018-01-18', '2018-01-22', '2018-01-26', '2018-01-30', '2018-02-07']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'line',
            symbol: '',
            symbolSize: 5,
            lineStyle: {
                normal: {
                    color: 'green',
                    width: 4,
                    type: 'solid'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 3,
                    borderColor: 'yellow',
                    color: 'blue'
                }
            }
        }]
    };
    
    myChart.setOption(option);


})
