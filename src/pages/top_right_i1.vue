<template>
    <div class="con">
        <div class="top" @mouseover="mouseHover('top')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div id="top_right_ECharts_li1"></div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="center" @mouseover="mouseHover('center')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div id="top_right_ECharts_li2"></div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="bottom" @mouseover="mouseHover('bottom')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div id="top_right_ECharts_li3"></div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <show-e-charts ref="showECharts"></show-e-charts>
    </div>
</template>

<script>
    import Operations from "./common/operations";
    import ShowECharts from "./common/showECharts";

    export default {
        name: "top_right_i1",
        components: {ShowECharts, Operations},
        data() {
            return {
                top: {},
                center: {},
                bottom: {},
                options: {}
            };
        },
        methods: {
            showOne() {
                this.$refs['showECharts'].openDialog(this.options);
            },
            mouseHover(v) {
                if (v === 'top') {
                    this.options = this.top;
                }
                if (v === 'center') {
                    this.options = this.center;
                }
                if (v === 'bottom') {
                    this.options = this.bottom;
                }
            },
            //top_right_ECharts_li1
            initECharts_bar_top() {
                let top_right_ECharts_li1 = this.$echarts.init(
                    document.getElementById("top_right_ECharts_li1")
                );

                let option = this.top = {
                    barWidth: 10, //设置柱状图的粗细
                    title: {
                        text: '  {a|     完成百分比}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 30,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                }
                            }
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            }
                        }
                    ],
                    grid: {
                        width: "auto",
                        height: "auto",
                        left: "35px",
                        bottom: "30px"
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 1, color: "#b038ff"},
                                        {offset: 0.5, color: "#a883ff"},
                                        {offset: 0, color: "#A2ccff"}
                                    ])
                                }
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    ]
                };

                top_right_ECharts_li1.setOption(option);
            },
            initECharts_bar_center() {
                let top_right_ECharts_li2 = this.$echarts.init(
                    document.getElementById("top_right_ECharts_li2")
                );

                let option = this.center = {
                    barWidth: 6, //设置柱状图的粗细
                    title: {
                        text: '  {a|     完成百分比}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 30,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                }
                            }
                        }
                    },
                    legend: {
                        data: ['c', 'd'],
                        icon: "circle",
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                        left: 0,
                        top: 25
                    },
                    xAxis: [
                        {
                            type: "value",
                            show: false
                        }
                    ],
                    yAxis: [
                        {
                            type: "category",
                            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            axisLine: {
                                //坐标轴轴线
                                show: false
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    color: "#FFF"
                                }
                            }
                        }
                    ],
                    grid: {
                        width: "auto",
                        height: "70%",
                        left: "50px",
                        top:'20%'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            color: "rgba(208,137,208,0.5)",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(255,255,255,0.2)"
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30, //设置柱状图为圆角
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                        {offset: 0, color: "#e65962"},
                                        {offset: 0.5, color: "#f6a573"},
                                        {offset: 1, color: "#FFe295"}
                                    ])
                                }
                            },
                            barCategoryGap: "100%"
                        }
                    ]
                };

                top_right_ECharts_li2.setOption(option);
            },
            init_ECharts_funnel() {
                let top_right_ECharts_li3 = this.$echarts.init(
                    document.getElementById("top_right_ECharts_li3")
                );
                let option = this.bottom = {
                    title: {
                        text: '  {a|     完成百分比}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 30,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                }
                            }
                        }
                    },
                    series: [
                        {
                            name: "漏斗图",
                            type: "funnel",
                            left: "10%",
                            top: 60,
                            bottom: 60,
                            width: "80%",
                            min: 0,
                            max: 100,
                            minSize: "60%",
                            maxSize: "90%",
                            sort: "descending",
                            gap: 2,
                            label: {
                                show: true,
                                position: "inside"
                            },
                            data: [
                                {
                                    value: 100,
                                    name: "车流量",
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#ff5b16"},
                                                    {offset: 0.5, color: "#ff7513"},
                                                    {offset: 1, color: "#ffaa0d"}
                                                ]
                                            )
                                        }
                                    },
                                    label: {
                                        color: "white"
                                    }
                                },
                                {
                                    value: 80,
                                    name: "总订单",
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: "#ffa020"
                                        }
                                    }
                                },
                                {
                                    value: 60,
                                    name: "油品订单",
                                    itemStyle: {
                                        normal: {
                                            borderWidth: 0,
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#ffb31e"},
                                                    {offset: 0.5, color: "#ffc31e"},
                                                    {offset: 1, color: "#ffd81e"}
                                                ]
                                            )
                                        }
                                    },
                                    label: {
                                        color: "white"
                                    }
                                }
                            ]
                        }
                    ]
                };
                top_right_ECharts_li3.setOption(option);
            }
        },
        mounted() {
            this.initECharts_bar_top();
            this.initECharts_bar_center();
            this.init_ECharts_funnel();
        }
    };
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
            background: rgba(11, 66, 141, 0.8);

            #top_right_ECharts_li1 {
                width: 100%;
                height: 100%;
            }

            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 2.5em;
                height: 0.1875em;
                background: #00b8fe;
                z-index: 999;
            }
        }

        .top:hover .more_setting {
            display: block;
        }

        .center {
            width: 100%;
            height: 25%;
            align-items: center;
            border: 1px solid #38d;
            box-shadow: 0 0 10px #38d inset;
            position: relative;
            background: rgba(11, 66, 141, 0.8);

            #top_right_ECharts_li2 {
                width: 100%;
                height: 100%;
            }

            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 2.5em;
                height: 0.1875em;
                background: #00b8fe;
                z-index: 999;
            }
        }

        .center:hover .more_setting {
            display: block;
        }

        .bottom {
            width: 100%;
            height: 30%;
            align-items: end;
            border: 1px solid #38d;
            box-shadow: 0 0 10px #38d inset;
            position: relative;
            background: rgba(11, 66, 141, 0.8);

            #top_right_ECharts_li3 {
                width: 100%;
                height: 100%;
            }

            .block_l {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_r {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                margin: auto 0;
                width: 0.1875em;
                height: 2.5em;
                background: #00b8fe;
                z-index: 999;
            }

            .block_b {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                margin: 0 auto;
                width: 2.5em;
                height: 0.1875em;
                background: #00b8fe;
                z-index: 999;
            }
        }

        .bottom:hover .more_setting {
            display: block;
        }
    }
</style>
