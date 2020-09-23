<template>
    <div class="con">
        <div class="top">
            <div id="top_ECharts"></div>
            <div class="title_ECharts">
                <p>
                    <span>四大板块现金流 >></span>
                    <span class="dot">
                        <i style="background: #3ea2ff"></i> 收入
                        <i style="background: #d285fd"></i> 流出
                    </span>
                </p>
            </div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="center">
            <div id="center_ECharts_i1"></div>
            <div id="center_ECharts_i2"></div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="bottom">
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top_left",
        data() {
            return {}
        },
        methods: {
            //正负图
            initECharts_bar() {
                let top_ECharts = this.$echarts.init(document.getElementById('top_ECharts'));
                let xAxisData = [];
                let data1 = [];
                let data2 = [];

                for (let i = 0; i < 10; i++) {
                    data1.push((Math.random() * 2).toFixed(2));
                    data2.push(-Math.random().toFixed(2));
                }
                //166fae
                let emphasisStyle = {
                    itemStyle: {
                        barBorderWidth: 1,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                    }
                };

                let option = {
                    barWidth: 10,//设置柱状图的粗细
                    xAxis: {
                        data: xAxisData,
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: '#166fae'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#166fae'
                            }
                        },
                        splitArea: {show: false},
                    },
                    yAxis: {
                        inverse: true,
                        axisLine: {
                            lineStyle: {
                                color: '#166fae'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#166fae'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#FFF'
                            }
                        },
                        axisTick: {//坐标轴刻度
                            show: false
                        },
                        splitArea: {show: false}
                    },
                    grid: {
                        show: true,
                        width: 'auto',
                        height: 'auto',
                        left: '30px',
                        bottom: "30px",
                        // left:'30px'
                    },
                    series: [
                        {
                            name: 'bar',
                            type: 'bar',
                            stack: 'one',
                            emphasis: emphasisStyle,
                            data: data1,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [0, 0, 30, 30],//设置柱状图为圆角
                                    position: "inside",
                                    color: '#3994ef'
                                }
                            },
                        },
                        {
                            name: 'bar2',
                            type: 'bar',
                            stack: 'one',
                            emphasis: emphasisStyle,
                            data: data2,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [30, 30, 0, 0],//设置柱状图为圆角
                                    position: "inside",
                                    color: '#bf79e6'
                                }
                            },
                        }
                    ]
                };

                top_ECharts.setOption(option);

            },
            //饼状图
            initECharts_pie() {
                let center_ECharts_i1 = this.$echarts.init(document.getElementById('center_ECharts_i1'));
                let center_ECharts_i2 = this.$echarts.init(document.getElementById('center_ECharts_i2'));
                let option = {
                    series: [
                        {
                            type: 'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            hoverOffset: 3,
                            labelLine: {
                                show: false
                            },
                            label: {
                                show: true,
                                fontSize: 12,
                                position: 'inner',
                                formatter: '{d}%',
                                color: '#FFF'
                            },
                            data: [
                                {
                                    value: 335,
                                    name: '直接访问',
                                    itemStyle: {
                                        color: '#44e49b'
                                    }
                                },
                                {
                                    value: 310,
                                    name: '邮件营销',
                                    itemStyle: {
                                        color: '#00e6ff'
                                    }
                                },
                                {
                                    value: 234,
                                    name: '联盟广告',
                                    itemStyle: {
                                        color: '#3994ef'
                                    }
                                },
                                {
                                    value: 135,
                                    name: '视频广告',
                                    itemStyle: {
                                        color: '#5043fd'
                                    }
                                }
                            ]
                        }
                    ]
                };

                center_ECharts_i1.setOption(option);
                center_ECharts_i2.setOption(option);
            },
        },
        mounted() {
            this.initECharts_bar();
            this.initECharts_pie();
        }
    }
</script>

<style scoped lang="less">
    .con {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;

        .top {
            width: 100%;
            height: 35%;
            align-items: start;
            border: 1px solid #38d;
            box-shadow: 0 0 10px #38d inset;
            position: relative;

            #top_ECharts {
                width: 100%;
                height: 100%;
            }

            .title_ECharts {
                width: 100%;
                height: 20%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .title_ECharts > p {
                height: 100%;
                width: 100%;
                position: relative;
            }

            .title_ECharts > p > span:first-child {
                font-size: 14px;
                font-family: '幼圆';
                line-height: 4;
                padding-left: 20px;
                color: white;
                font-weight: 700;
            }

            .title_ECharts > p > .dot {
                font-size: 12px;
                color: white;
                font-family: '幼圆';
                display: inline-block;
                width: 40%;
                height: 15px;
                bottom: 0;
                right: 0;
                position: absolute;
            }

            .title_ECharts > p > .dot > i {
                width: 10px;
                height: 10px;
                display: inline-block;
                border-radius: 100%;
                background: red;
            }

            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 40px;
                height: 3px;
                background: #00b8fe;
                z-index: 999;
            }
        }

        .center {
            width: 100%;
            height: 25%;
            align-items: center;
            border: 1px solid #38d;
            box-shadow: 0 0 10px #38d inset;
            position: relative;

            #center_ECharts_i1 {
                margin-top: 10%;
                float: left;
                width: 50%;
                height: 90%;
            }

            #center_ECharts_i2 {
                margin-top: 10%;
                float: right;
                width: 50%;
                height: 90%;
            }

            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 40px;
                height: 3px;
                background: #00b8fe;
                z-index: 999;
            }
        }

        .bottom {
            width: 100%;
            height: 30%;
            align-items: end;
            border: 1px solid #38d;
            box-shadow: 0 0 10px #38d inset;
            position: relative;


            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 3px;
                height: 40px;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 40px;
                height: 3px;
                background: #00b8fe;
                z-index: 999;
            }
        }
    }
</style>