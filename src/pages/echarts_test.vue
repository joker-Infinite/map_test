<template>
    <div id="EChartsBox">
        <div class="box" id="ECharts_01"></div>
        <div class="box" id="ECharts_02"></div>
        <div class="box" id="ECharts_03"></div>
    </div>
</template>

<script>
    export default {
        name: "echarts_test",
        data() {
            return {}
        },
        methods: {
            //基本条形图
            drawCategory() {
                let ECharts_01 = this.$echarts.init(document.getElementById("ECharts_01"));

                let option_01 = {
                    title: {
                        text: '日期/人',
                        subtext: '数据……'
                    },
                    legend: {
                        data: ['time', 'people']
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            let tar = params[0];
                            console.log(params);
                            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                        }
                    },
                    xAxis: {
                        type: 'value',
                        axisLabel: {//文字旋转
                            interval: 0,
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        fontStyle: 'italic',
                        axisLabel: {
                            interval: 0,
                            rotate: 40
                        }
                    },
                    series: [
                        {
                            name: 'time',
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar',
                            showBackground: true,
                            backgroundStyle: {
                                color: 'rgba(153,153,153,0.5)'//条形背景颜色
                            },
                            color: 'rgba(100,245,255,0.5)'//条形内容背景颜色
                        },
                        {
                            name: 'people',
                            data: [22, 32, 43, 54, 57, 32, 23],
                            type: 'bar',
                            showBackground: false,
                            backgroundStyle: {
                                color: 'rgba(0, 0, 0, 0.5)'//条形背景颜色
                            },
                            color: 'rgba(82,175,255,0.5)'//条形内容背景颜色
                        }
                    ]
                };
                ECharts_01.setOption(option_01)
            },
            //渐变色条形图
            GradientCategory() {
                let myChart = this.$echarts.init(document.getElementById('ECharts_02'));
                var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
                var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
                var yMax = 500;
                var dataShadow = [];

                for (var i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                let option = {
                    title: {
                        text: '渐变色 阴影 点击缩放',
                        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                color: 'rgba(0,0,0,0.05)'
                            },
                            barGap: '-100%',
                            barCategoryGap: '40%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 1, color: '#f6372c'},
                                        {offset: 0.5, color: '#f04ab3'},
                                        {offset: 0, color: '#7f55f0'}
                                    ]
                                )
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#2378f7'},
                                            {offset: 0.7, color: '#2378f7'},
                                            {offset: 1, color: '#83bff6'}
                                        ]
                                    )
                                }
                            },
                            data: data
                        }
                    ]
                };

                // Enable data zoom when user click bar.
                var zoomSize = 6;
                myChart.on('click', function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: 'dataZoom',
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });
                myChart.setOption(option);
            },
            //横向条形 圆角
            horizontalCategory() {
                let ECharts_03 = this.$echarts.init(document.getElementById("ECharts_03"));

                let option = {
                    title: {
                        text: '无x，y轴线及刻度线',
                        subtext: '柱形图圆角'
                    },
                    barWidth: 10,//设置柱状图的粗细
                    xAxis: [{
                        type: 'value',
                        show: false
                    }],
                    yAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisLine: {//坐标轴轴线
                            show: false
                        },
                        axisTick: {//坐标轴刻度
                            show: false
                        }
                    }],
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        color: 'rgba(208,137,208,0.5)',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(255,205,247,0.5)',
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,//设置柱状图为圆角
                                position: "inside",
                                label: {
                                    show: true,
                                    fontWeight: "bolder",
                                    fontSize: '12',
                                    fontFamily: "微软雅黑",
                                }
                            }
                        },
                    }]
                };

                ECharts_03.setOption(option);
            },
        },
        mounted() {
            this.drawCategory();
            this.GradientCategory();
            this.horizontalCategory();
        }
    };
</script>

<style scoped lang="less">
    #EChartsBox {
        width: 100%;
        height: 100%;
        background: #c5d8d6;
        position: fixed;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        overflow-y: scroll;

        .box {
            width: 32%;
            height: 500px;
            background: white;
            margin: 10px 0;
            padding: 5px;
            border-radius: 5px;
        }
    }
</style>
