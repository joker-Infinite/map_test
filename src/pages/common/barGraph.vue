<template>
    <div id="ECharts"></div>
</template>

<script>
    export default {
        name: "barGraph",
        data() {
            return {}
        },
        methods: {
            barInit() {

                let ECharts = this.$echarts.init(document.getElementById("ECharts"));

                let option = {
                    // title: {
                    //     text: '无x，y轴线及刻度线',
                    //     subtext: '柱形图圆角'
                    // },
                    barWidth: 5,//设置柱状图的粗细
                    xAxis: [{
                        type: 'category',
                        data: [
                            {
                                value: '一月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '二月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '三月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '四月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '五月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '六月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            },
                            {
                                value: '七月',
                                textStyle: {
                                    fontSize: '12px'
                                }
                            }],
                        axisLine: {//坐标轴轴线
                            // show: false
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisTick: {//坐标轴刻度
                            show: false
                        },
                        axisLabel: {//文字换行
                            formatter: function (v) {
                                return v.split('').join('\n');
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        // show: false
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        name: '万元',
                        nameTextStyle: {
                            fontSize: '12px'
                        },
                        axisTick: {//坐标轴刻度
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    grid: {
                        width: 'auto',
                        height: 'auto',
                        left:'35px',
                        bottom:"30px"
                        // left:'30px'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        color: 'rgba(143,73,220,0.63)',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,//设置柱状图为圆角
                                position: "inside",
                            }
                        },
                    }]
                };

                ECharts.setOption(option);

            }
        },
        mounted() {
            this.barInit();
        }
    }
</script>

<style scoped>
    #ECharts {
        height: 100%;
    }
</style>