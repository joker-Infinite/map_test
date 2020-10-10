<template>
    <div class="con">
        <div class="top" @mouseover="mouseHover('top_ECharts')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div class="title_ECharts">
                <p>
                    <span>四大板块现金流 >></span>
                    <span class="dot">
            <i style="background: #3ea2ff"></i> 收入
            <i style="background: #d285fd"></i> 流出
          </span>
                </p>
            </div>
            <div id="top_ECharts"></div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="center" @mouseover="mouseHover('center_ECharts_i')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div class="center_l">
                <div class="small_title_ECharts">
                    <p>2018年利润贡献情况</p>
                    <span class="dot">
            <i style="background: #3ea2ff"></i> 能源
            <i style="background: #d285fd"></i> 商业
          </span>
                </div>
                <div id="center_ECharts_i1"></div>
            </div>
            <div class="center_r">
                <div class="small_title_ECharts">
                    <p>2018年利润贡献情况</p>
                    <span class="dot">
            <i style="background: #3ea2ff"></i> 能源
            <i style="background: #d285fd"></i> 商业
          </span>
                </div>
                <div id="center_ECharts_i2"></div>
            </div>
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
        <div class="bottom" @mouseover="mouseHover('bottom_ECharts')">
            <operations class="more_setting" @showOne="showOne"></operations>
            <div id="bottom_ECharts"></div>
            <div class="title_ECharts">
                <p>
                    <span>四大板块任务完成百分比 >></span>
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
        <show-e-charts ref="showECharts"></show-e-charts>
    </div>
</template>

<script>
    import Operations from "./common/operations";
    import ShowECharts from "./common/showECharts";

    export default {
        name: "top_left",
        components: {ShowECharts, Operations},
        data() {
            return {
                top_ECharts_Data: {},
                center_ECharts_Data: {},
                bottom_ECharts_Data: {},
                options: {}
            };
        },
        methods: {
            showOne(v) {
                this.$refs['showECharts'].openDialog(this.options);
            },
            //正负图
            initECharts_bar() {
                let top_ECharts = this.$echarts.init(
                    document.getElementById("top_ECharts")
                );

                let option = this.top_ECharts_Data = {
                    barWidth: 10, //设置柱状图的粗细
                    xAxis: {
                        data: [],
                        axisLine: {
                            onZero: true,
                            lineStyle: {
                                color: "#166fae"
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "#166fae"
                            }
                        },
                        splitArea: {show: false}
                    },
                    yAxis: {
                        inverse: true,
                        axisLine: {
                            lineStyle: {
                                color: "#166fae"
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: "#166fae"
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: "#FFF"
                            }
                        },
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        splitArea: {show: false}
                    },
                    grid: {
                        show: true,
                        width: "auto",
                        height: "auto",
                        left: "50px",
                        bottom: "30px"
                    },
                    series: [
                        {
                            name: "bar",
                            type: "bar",
                            stack: "one",
                            emphasis: {
                                itemStyle: {
                                    barBorderWidth: 1,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0
                                }
                            },
                            data: ["1.33",
                                "1.82",
                                "0.13",
                                "1.84",
                                "0.85",
                                "1.10",
                                "0.29",
                                "0.42",
                                "1.09",
                                "0.18"],
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [0, 0, 30, 30], //设置柱状图为圆角
                                    position: "inside",
                                    color: "#3994ef"
                                }
                            }
                        },
                        {
                            name: "bar2",
                            type: "bar",
                            stack: "one",
                            emphasis: {
                                itemStyle: {
                                    barBorderWidth: 1,
                                    shadowOffsetX: 0,
                                    shadowOffsetY: 0
                                }
                            },
                            data: [-0.77,
                                -0.04,
                                -0.22,
                                -0.45,
                                -0.88,
                                -0.52,
                                -0.34,
                                -0.75,
                                -0.91,
                                -0.64],
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                    position: "inside",
                                    color: "#bf79e6"
                                }
                            }
                        }
                    ]
                };

                top_ECharts.setOption(option);
            },
            //饼状图
            initECharts_pie() {
                let center_ECharts_i1 = this.$echarts.init(
                    document.getElementById("center_ECharts_i1")
                );
                let center_ECharts_i2 = this.$echarts.init(
                    document.getElementById("center_ECharts_i2")
                );
                let option = this.center_ECharts_Data = {
                    series: [
                        {
                            type: "pie",
                            radius: ["50%", "70%"],
                            avoidLabelOverlap: false,
                            hoverOffset: 3,
                            labelLine: {
                                show: false
                            },
                            label: {
                                show: true,
                                fontSize: 12,
                                position: "inner",
                                formatter: "{d}%",
                                color: "#FFF"
                            },
                            data: [
                                {
                                    value: 335,
                                    name: "直接访问",
                                    itemStyle: {
                                        color: "#44e49b"
                                    }
                                },
                                {
                                    value: 310,
                                    name: "邮件营销",
                                    itemStyle: {
                                        color: "#00e6ff"
                                    }
                                },
                                {
                                    value: 234,
                                    name: "联盟广告",
                                    itemStyle: {
                                        color: "#3994ef"
                                    }
                                },
                                {
                                    value: 135,
                                    name: "视频广告",
                                    itemStyle: {
                                        color: "#5043fd"
                                    }
                                }
                            ]
                        }
                    ]
                };

                center_ECharts_i1.setOption(option);
                center_ECharts_i2.setOption(option);
            },
            initECharts_bar_line() {
                let bottom_ECharts = this.$echarts.init(
                    document.getElementById("bottom_ECharts")
                );
                let option = this.bottom_ECharts_Data = {
                    barWidth: 10,
                    grid: {
                        show: true,
                        width: "65%",
                        height: "auto",
                        left: "18%",
                        bottom: "30px"
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["能源", "传媒", "商业", "服务区"],
                            axisPointer: {
                                type: "shadow"
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
                    yAxis: [
                        {
                            type: "value",
                            min: 0,
                            max: 100,
                            interval: 50,
                            axisLabel: {
                                formatter: "{value}%",
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            }
                        },
                        {
                            type: "value",
                            min: 1,
                            max: 12,
                            interval: 2,
                            axisLabel: {
                                formatter: value => {
                                    let arr = [
                                        "一月",
                                        "二月",
                                        "三月",
                                        "四月",
                                        "五月",
                                        "六月",
                                        "七月",
                                        "八月",
                                        "九月",
                                        "十月",
                                        "十一月",
                                        "十二月"
                                    ];
                                    return arr[value];
                                },
                                textStyle: {
                                    color: "#FFF"
                                }
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            type: "line",
                            yAxisIndex: 1,
                            data: [2, 2, 9, 7]
                        },
                        {
                            type: "bar",
                            data: [
                                {
                                    value: 10,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                            position: "inside",
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#f94356"},
                                                    {offset: 0.5, color: "#ff7e6e"},
                                                    {offset: 1, color: "#ffb991"}
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 20,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                            position: "inside",
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#a62ff6"},
                                                    {offset: 0.5, color: "#bd56ff"},
                                                    {offset: 1, color: "#af62ff"}
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 80,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                            position: "inside",
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#eeb008"},
                                                    {offset: 0.5, color: "#f9c931"},
                                                    {offset: 1, color: "#eeb008"}
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 90,
                                    itemStyle: {
                                        normal: {
                                            barBorderRadius: [30, 30, 0, 0], //设置柱状图为圆角
                                            position: "inside",
                                            color: new this.$echarts.graphic.LinearGradient(
                                                0,
                                                0,
                                                0,
                                                1,
                                                [
                                                    {offset: 0, color: "#f94356"},
                                                    {offset: 0.5, color: "#ff7e6e"},
                                                    {offset: 1, color: "#ffb991"}
                                                ]
                                            )
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                };
                bottom_ECharts.setOption(option);
            },
            mouseHover(v) {
                if (v == 'top_ECharts') {
                    this.options = this.top_ECharts_Data;
                }
                if (v == 'center_ECharts_i') {
                    this.options = this.center_ECharts_Data;
                }
                if (v == 'bottom_ECharts') {
                    this.options = this.bottom_ECharts_Data;
                }
            },
        },
        mounted() {
            this.initECharts_bar();
            this.initECharts_pie();
            this.initECharts_bar_line();
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
                font-size: 0.875em;
                font-family: "幼圆";
                line-height: 4;
                padding-left: 1.25em;
                margin-left: 1.25em;
                color: white;
                font-weight: 700;
                background: url("../assets/img/icon2.png") no-repeat;
                background-size: 0.9375em;
            }

            .title_ECharts > p > .dot {
                font-size: 0.75em;
                color: white;
                font-family: "幼圆";
                display: inline-block;
                width: 40%;
                height: 0.9375em;
                bottom: 1.625em;
                /*2k分辨率下 bottom：1.625em*/
                /*1080分辨率下 bottom：0.625em*/
                right: 0;
                position: absolute;
            }

            .title_ECharts > p > .dot > i {
                width: 0.625em;
                height: 0.625em;
                display: inline-block;
                border-radius: 100%;
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

            .center_l {
                float: left;
                width: 50%;
                height: 100%;

                #center_ECharts_i1 {
                    width: 100%;
                    height: 80%;
                }

                .small_title_ECharts {
                    width: 100%;
                    height: 20%;
                    position: relative;

                    .dot {
                        display: inline-block;
                        font-size: 0.75em;
                        color: white;
                        margin-top: -20px;
                        position: absolute;
                        right: 0.3125em;
                        bottom: -1em;
                    }

                    .dot > i {
                        width: 0.625em;
                        height: 0.625em;
                        display: inline-block;
                        border-radius: 100%;
                    }
                }

                .small_title_ECharts > p:first-child {
                    font-size: 0.75em;
                    text-align: center;
                    width: 100%;
                    font-weight: 600;
                    color: white;
                    overflow: hidden;
                    line-height: 4;
                    font-family: "幼圆";
                }
            }

            .center_r {
                float: right;
                width: 50%;
                height: 100%;

                #center_ECharts_i2 {
                    width: 100%;
                    height: 80%;
                }

                .small_title_ECharts {
                    width: 100%;
                    height: 20%;
                    position: relative;

                    .dot {
                        display: inline-block;
                        font-size: 0.75em;
                        color: white;
                        margin-top: -20px;
                        position: absolute;
                        left: 0.3125em;
                        bottom: -1em;
                    }

                    .dot > i {
                        width: 0.625em;
                        height: 0.625em;
                        display: inline-block;
                        border-radius: 100%;
                    }
                }

                .small_title_ECharts > p:first-child {
                    font-size: 0.75em;
                    text-align: center;
                    width: 100%;
                    font-weight: 600;
                    color: white;
                    overflow: hidden;
                    line-height: 4;
                    font-family: "幼圆";
                }
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

            #bottom_ECharts {
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
                font-size: 0.875em;
                font-family: "幼圆";
                line-height: 4;
                padding-left: 1.25em;
                margin-left: 1.25em;
                color: white;
                font-weight: 700;
                background: url("../assets/img/icon2.png") no-repeat;
                background-size: 0.9375em;
            }

            .title_ECharts > p > .dot {
                font-size: 0.75em;
                color: white;
                font-family: "幼圆";
                display: inline-block;
                width: 40%;
                height: 0.9375em;
                bottom: 1em;
                /*2k分辨率下 bottom：1em*/
                /*1080分辨率下 bottom：-0.5em*/
                right: 0;
                position: absolute;
            }

            .title_ECharts > p > .dot > i {
                width: 0.625em;
                height: 0.625em;
                display: inline-block;
                border-radius: 100%;
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

    @media screen and (min-width: 1920px) and (max-width: 2560px) {
        .con {
            .top {
                .title_ECharts > p > .dot {
                    bottom: 0.625em;
                    /*2k分辨率下 bottom：1.625em*/
                    /*1080分辨率下 bottom：0.625em*/
                }
            }

            .bottom {
                .title_ECharts > p > .dot {
                    bottom: -0.5em;
                    /*2k分辨率下 bottom：1em*/
                    /*1080分辨率下 bottom：-0.5em*/
                }
            }
        }
    }

    @media screen and (min-width: 2560px) {
        .con {
            .top {

                .title_ECharts > p > .dot {
                    bottom: 1.625em;
                    /*2k分辨率下 bottom：1.625em*/
                    /*1080分辨率下 bottom：0.625em*/
                }
            }

            .bottom {
                .title_ECharts > p > .dot {
                    bottom: 1em;
                    /*2k分辨率下 bottom：1em*/
                    /*1080分辨率下 bottom：-0.5em*/
                }
            }
        }
    }
</style>
