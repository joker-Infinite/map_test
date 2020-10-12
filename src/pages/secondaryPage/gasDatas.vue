<template>
    <div style="height: 100%;width: 100%">
        <div class="con">
            <div class="background_img">
                <div class="ECharts_box">
                    <div class="time_title">
                        <div class="left">
                            <span class="text_icon">从</span>
                            <el-date-picker
                                    v-model="startTime"
                                    :picker-options="startOptions"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    format="yyyy-MM-dd"></el-date-picker>
                            <span class="text_icon">到</span>
                            <el-date-picker
                                    v-model="endTime"
                                    :picker-options="endOptions"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    format="yyyy-MM-dd"></el-date-picker>
                        </div>
                        <div class="right">
                            <el-button @click="click_picker('Y')">年</el-button>
                            <el-button @click="click_picker('M')">月</el-button>
                            <el-button @click="click_picker('D')">日</el-button>
                        </div>
                    </div>
                    <div class="ECharts">
                        <div class="top">
                            <div class="tl">
                                <div class="ECharts" id="GDtl"></div>
                            </div>
                            <div class="tc">
                                <div class="ECharts" id="GDtc"></div>
                            </div>
                            <div class="tr">
                                <div class="ECharts" id="GDtr"></div>
                            </div>
                        </div>
                        <div style="height: 5%;width: 100%"></div>
                        <div class="bottom">
                            <div class="bl">
                                <div class="ECharts" id="GDbl"></div>
                            </div>
                            <div class="bc">
                                <div class="ECharts" id="GDbc"></div>
                            </div>
                            <div class="bl">
                                <div class="ECharts" id="GDbls"></div>
                            </div>
                            <div class="br">
                                <div class="ECharts" id="GDbr"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "gasDatas",
        data() {
            return {
                startTime: '',
                endTime: '',
                startOptions: {},
                endOptions: {},
            }
        },
        methods: {
            click_picker(type) {
                if (type === 'Y') {
                    alert('年');
                }
                if (type === 'M') {
                    alert('月');
                }
                if (type === 'D') {
                    alert('日');
                }
            },
            initECharts() {
                let GDtl = this.$echarts.init(
                    document.getElementById("GDtl")
                );
                let option = {
                    barWidth: 6, //设置柱状图的粗细
                    title: {
                        text: '{a|加油站订单}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
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
                            data: ["a", "s", "d", "f", "g", "h", "v", "e", "r", "t", "y", "u", "i", "o"],
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
                        top: '20%'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
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
                GDtl.setOption(option);

                let GDtc = this.$echarts.init(
                    document.getElementById("GDtc")
                );
                let option_pie = {
                    title: {
                        text: '{a|加油站类型占比}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
                                }
                            }
                        }
                    },
                    legend: {
                        itemGap: 30,
                        data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
                        orient: 'vertical',
                        icon: "circle",
                        textStyle: {
                            color: '#FFF',
                            fontSize: '18'
                        },
                        itemWidth: 20,
                        itemHeight: 20,
                        right: '10%',
                        top: "20%"
                    },
                    grid: {
                        show: false,
                        width: "auto",
                    },
                    series: [
                        {
                            type: "pie",
                            radius: ["50%", "70%"],
                            center: ["50%", "55%"],
                            avoidLabelOverlap: false,
                            hoverOffset: 10,
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
                                    name: "a",
                                    itemStyle: {
                                        color: "#44e49b"
                                    }
                                },
                                {
                                    value: 310,
                                    name: "b",
                                    itemStyle: {
                                        color: "#00e6ff"
                                    }
                                },
                                {
                                    value: 234,
                                    name: "c",
                                    itemStyle: {
                                        color: "#3994ef"
                                    }
                                },
                                {
                                    value: 135,
                                    name: "d",
                                    itemStyle: {
                                        color: "#5043fd"
                                    }
                                },
                                {
                                    value: 135,
                                    name: "e",
                                    itemStyle: {
                                        color: "#3bfd68"
                                    }
                                },
                                {
                                    value: 135,
                                    name: "f",
                                    itemStyle: {
                                        color: "#fd4937"
                                    }
                                },
                                {
                                    value: 135,
                                    name: "g",
                                    itemStyle: {
                                        color: "#57f8fd"
                                    }
                                },
                            ]
                        }
                    ]
                };
                GDtc.setOption(option_pie);

                let GDtr = this.$echarts.init(
                    document.getElementById("GDtr")
                );
                let option_bl = {
                    barWidth: 10,
                    grid: {
                        show: true,
                        width: "65%",
                        height: "auto",
                        left: "18%",
                        bottom: "30px"
                    },
                    title: {
                        text: '{a|加油站利润}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
                                }
                            }
                        }
                    },
                    legend: {
                        data: ["a", "b"],
                        icon: "circle",
                        orient: 'horizontal',
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                        right: 20,
                        top: 25
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["a", "b", "c", "d"],
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
                                        "1",
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "10",
                                        "11",
                                        "12"
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
                            name: 'a',
                            type: "line",
                            yAxisIndex: 1,
                            data: [2, 2, 9, 7]
                        },
                        {
                            name: 'b',
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
                GDtr.setOption(option_bl)

                let GDbl = this.$echarts.init(
                    document.getElementById("GDbl")
                );
                let option_b = {
                    barWidth: 10, //设置柱状图的粗细
                    title: {
                        text: '{a|加油站高速占比}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
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
                GDbl.setOption(option_b)

                let GDbc = this.$echarts.init(
                    document.getElementById("GDbc")
                );
                let option_c = {
                    barWidth: 10, //设置柱状图的粗细
                    title: {
                        text: '{a|非油品订单数量}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
                                }
                            }
                        }
                    },
                    xAxis: [
                        {
                            type: "category",
                            data: ["a", "b", "c", "d", "e", "f", "g", 'h', 'i', 'j', 'k', 'l', 'm', 'n'],
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
                            data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
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
                GDbc.setOption(option_c)

                let GDbls = this.$echarts.init(
                    document.getElementById("GDbls")
                );
                GDbls.setOption(option_b)

                let GDbr = this.$echarts.init(
                    document.getElementById("GDbr")
                );
                let option_l = {
                    title: {
                        text: '{a|非油品订单数量}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 15,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 20,
                                    width: 20,
                                }
                            }
                        }
                    },
                    legend: {
                        data: ['现金流使用占比', '毛利润贡献占比'],
                        icon: "circle",
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                        top: 25
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                            type: 'value',
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
                    series: [
                        {
                            name: '现金流使用占比',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 1, [
                                        {offset: 0, color: "#e65962"},
                                        {offset: 0.5, color: "#f6a573"},
                                        {offset: 1, color: "#FFe295"}
                                    ])
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '毛利润贡献占比',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 1, [
                                        {offset: 0, color: "#e65962"},
                                        {offset: 0.5, color: "#f6a573"},
                                        {offset: 1, color: "#FFe295"}
                                    ])
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                };
                GDbr.setOption(option_l)

            }
        },
        mounted() {
            this.initECharts();
        }
    }
</script>

<style scoped lang="less">
    .con {
        width: 1920px;
        height: 1080px;
        background: url("../../assets/img/bg.jpg") no-repeat;
        background-size: cover;
        margin: auto;

        .background_img {
            width: 1920px;
            height: 930px;
            background: url("../../assets/img/head.png") no-repeat;
            background-size: 100%;
        }

        .ECharts_box {
            width: 1820px;
            height: 930px;
            padding: 100px 50px 50px;

            .time_title {
                width: 100%;
                height: 10%;

                .left {
                    width: 60%;
                    height: 100%;
                    float: left;

                    .text_icon {
                        display: inline-block;
                        width: 40px;
                        text-align: center;
                        color: #216db8;
                    }
                }

                .left /deep/ .el-date-editor > .el-input__inner {
                    border-radius: 0;
                    background-color: #191644;
                    border: 1px solid #216db8;
                    color: #3f69d2;
                }

                .left /deep/ .el-date-editor > .el-input__prefix {
                    border-radius: 0;
                    color: #3f69d2;
                }

                .right {
                    width: 40%;
                    height: 100%;
                    float: right;
                }

                .right /deep/ .el-button {
                    border-radius: 0;
                    background-color: #191644;
                    border: 1px solid #216db8;
                    color: #3f69d2;
                }
            }

            .ECharts {
                width: 100%;
                height: 90%;

                .top {
                    width: 100%;
                    height: 60%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: nowrap;

                    .tl {
                        width: 20%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }

                    .tc {
                        width: 35%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }

                    .tr {
                        width: 40%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }
                }

                .bottom {
                    width: 100%;
                    height: 35%;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    flex-wrap: nowrap;

                    .bl {
                        width: 20%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }

                    .bc {
                        width: 30%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }

                    .br {
                        width: 25%;
                        height: 100%;
                        border: 1px solid #1a73e8;
                        box-shadow: 0 0 20px #38d inset;
                    }
                }

                .ECharts {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>