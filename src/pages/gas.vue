<template>
    <div style="height: 100%;width: 100%">
        <div class="con">
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
                    <div class="ECharts_left">
                        <div class="con_bar">
                            <div class="title_ECharts">
                                <p>
                                    <span>四大板块现金流 >></span>
                                    <span class="dot"><i style="background: #3ea2ff"></i> 收入<i
                                            style="background: #d285fd"></i> 流出</span>
                                </p>
                            </div>
                            <div class="con_bars">
                                <div id="ECharts_gas_i1"></div>
                            </div>
                        </div>
                    </div>
                    <div class="ECharts_right">
                        <div class="con_bar">
                            <div class="title_ECharts">
                                <p>
                                    <span>四大板块现金流 >></span>
                                </p>
                            </div>
                            <div class="con_bars">
                                <div id="ECharts_gas_i2"></div>
                            </div>
                            <div class="bottom_bar">
                                <div style="height: 20px;color: white" v-for="i in 7">
                                    <i style="background: white;width: 0.625em;
                            height: 0.625em;border-radius: 100%;display: inline-block"></i>
                                    第{{i}}项
                                </div>
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
        name: "gas",
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
            ECharts_gas_init() {
                let ECharts_gas_i1 = this.$echarts.init(
                    document.getElementById("ECharts_gas_i1")
                );
                let option = {
                    // title: {
                    //     text: '无x，y轴线及刻度线',
                    //     subtext: '柱形图圆角'
                    // },
                    barWidth: 10, //设置柱状图的粗细
                    xAxis: [
                        {
                            type: "category",
                            data: [
                                {
                                    value: "一月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "二月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "三月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "四月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "五月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "六月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                },
                                {
                                    value: "七月",
                                    textStyle: {
                                        fontSize: "12px"
                                    }
                                }
                            ],
                            axisLine: {
                                //坐标轴轴线
                                // show: false
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLabel: {
                                //文字换行
                                formatter: function (v) {
                                    return v.split("").join("\n");
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "value",
                            // show: false
                            axisLine: {
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            name: "万元",
                            nameTextStyle: {
                                fontSize: "12px"
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        },
                        {
                            type: 'value',
                            min: 0,
                            max: 25,
                            interval: 5,
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            axisLabel: {
                                show: false,
                                formatter: '{value} °C'
                            },
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            splitArea: {show: false}
                        }
                    ],
                    grid: {
                        width: "auto",
                        height: "auto",
                        left: "35px",
                        bottom: "30px"
                        // left:'30px'
                    },
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            color: "rgba(143,73,220,0.63)",
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30, //设置柱状图为圆角
                                    position: "inside"
                                }
                            }
                        },
                        {
                            name: '平均温度',
                            type: 'line',
                            yAxisIndex: 1,
                            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
                        }
                    ]
                };
                ECharts_gas_i1.setOption(option);
            },
            ECharts_gas_init_pie() {
                let ECharts_gas_i2 = this.$echarts.init(
                    document.getElementById("ECharts_gas_i2")
                );
                let option = {
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
                                color: "#FFF",
                                /* normal: {
                                     show: true,
                                     position: 'center',
                                     formatter:function (argument) {
                                         return '100%';
                                     },
                                     textStyle:{
                                         fontSize:20,
                                         color:'#39CCCC'
                                     }
                                 }*/
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
                                },
                                {
                                    value: 134,
                                    name: "ccc",
                                    itemStyle: {
                                        color: "#fd231e"
                                    }
                                },
                                {
                                    value: 222,
                                    name: "vvv",
                                    itemStyle: {
                                        color: "#3efd65"
                                    }
                                },
                                {
                                    value: 321,
                                    name: "bbb",
                                    itemStyle: {
                                        color: "#aefd1f"
                                    }
                                }
                            ]
                        },
                    ]
                };

                ECharts_gas_i2.setOption(option);
            }
        },
        mounted() {
            this.ECharts_gas_init();
            this.ECharts_gas_init_pie();
        }
    }
</script>

<style scoped lang="less">
    .con {
        width: 1000px;
        height: 500px;
        background: rgba(11, 66, 141, 0.8);
        margin: auto;
        padding: 100px;

        .ECharts_box {
            width: 100%;
            height: 100%;

            .time_title {
                width: 100%;
                height: 20%;

                .left {
                    width: 60%;
                    height: 100%;
                    float: left;

                    .text_icon {
                        display: inline-block;
                        width: 40px;
                        text-align: center;
                        color: white;
                    }
                }

                .right {
                    width: 40%;
                    height: 100%;
                    float: right;
                }
            }

            .ECharts {
                width: 100%;
                height: 80%;

                .ECharts_left {
                    width: 50%;
                    height: 100%;
                    float: left;

                    .con_bar {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        /*border: 1px solid #38d;*/
                        /*border-top: none;*/
                        /*box-shadow: 0 0 2px #38d inset;*/

                        .con_bars {
                            height: 93%;
                            width: 100%;

                            #ECharts_gas_i1 {
                                width: 100%;
                                height: 100%;
                            }
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
                            font-size: 20px;
                            font-family: "幼圆";
                            line-height: 1;
                            padding-left: 1.25em;
                            margin-left: 0.625em;
                            color: white;
                            font-weight: 700;
                            /*background: url("../assets/img/icon2.png") no-repeat;*/
                            /*background-size: 0.9375em;*/
                        }

                        .title_ECharts > p > .dot {
                            font-size: 0.75em;
                            color: white;
                            font-family: "幼圆";
                            display: inline-block;
                            width: 30%;
                            height: 0.9375em;
                            bottom: 2.5em;
                            right: 0;
                            position: absolute;
                        }

                        .title_ECharts > p > .dot > i {
                            width: 0.625em;
                            height: 0.625em;
                            display: inline-block;
                            border-radius: 100%;
                        }
                    }
                }

                .ECharts_right {
                    width: 50%;
                    height: 100%;
                    float: right;

                    .con_bar {
                        width: 100%;
                        height: 100%;
                        position: relative;
                        /*border: 1px solid #38d;*/
                        /*border-top: none;*/
                        /*box-shadow: 0 0 2px #38d inset;*/

                        .con_bars {
                            height: 93%;
                            width: 100%;

                            #ECharts_gas_i2 {
                                width: 100%;
                                height: 100%;
                            }
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
                            font-size: 20px;
                            font-family: "幼圆";
                            line-height: 1;
                            padding-left: 1.25em;
                            margin-left: 0.625em;
                            color: white;
                            font-weight: 700;
                            /*background: url("../assets/img/icon2.png") no-repeat;*/
                            /*background-size: 0.9375em;*/
                        }

                        .title_ECharts > p > .dot {
                            font-size: 0.75em;
                            color: white;
                            font-family: "幼圆";
                            display: inline-block;
                            width: 30%;
                            height: 0.9375em;
                            bottom: 1em;
                            right: 0;
                            position: absolute;
                        }

                        .title_ECharts > p > .dot > i {
                            width: 0.625em;
                            height: 0.625em;
                            display: inline-block;
                            border-radius: 100%;
                        }

                        .bottom_bar {
                            width: 100%;
                            height: 20px;
                            position: absolute;
                            bottom: 8%;
                            left: 0;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            flex-wrap: nowrap;
                        }
                    }
                }
            }
        }
    }
</style>