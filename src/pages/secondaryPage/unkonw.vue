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
                        <div class="left">
                            <div class="top">
                                <div class="ll">
                                    <div id="llt_"></div>
                                </div>
                                <div class="rr">
                                    <div>
                                        <div id="rr_if"></div>
                                    </div>
                                    <div>
                                        <div id="rr_is"></div>
                                    </div>
                                    <div>
                                        <div id="rr_it"></div>
                                    </div>
                                    <div>
                                        <div id="rr_ifo"></div>
                                    </div>
                                    <div class="horizontal"></div>
                                    <div class="vertical"></div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="ll">
                                    <div id="llb_"></div>
                                </div>
                                <div class="rr">
                                    <div>
                                        <div id="rr_ifi"></div>
                                    </div>
                                    <div>
                                        <div id="rr_isi"></div>
                                    </div>
                                    <div>
                                        <div id="rr_ie"></div>
                                    </div>
                                    <div>
                                        <div id="rr_in"></div>
                                    </div>
                                    <div class="horizontal"></div>
                                    <div class="vertical"></div>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="top">
                                <div id="rt_"></div>
                            </div>
                            <div class="bottom">
                                <div id="rb_"></div>
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
        name: "unkonw",
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
                let rt_ = this.$echarts.init(
                    document.getElementById("rt_")
                );
                let rb_ = this.$echarts.init(
                    document.getElementById("rb_")
                );
                let option = {
                    barWidth: 10, //设置柱状图的粗细
                    title: {
                        text: '  {b|     能源}',
                        show: true,
                        textAlign: 'right',
                        x: 'right',
                        y: 'top',
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 40,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#38d',
                                    fontSize: '20',
                                    fontFamily: '幼圆',
                                    fontWeight: 700,
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
                rt_.setOption(option);
                rb_.setOption(option);


                let llt_ = this.$echarts.init(
                    document.getElementById("llt_")
                );
                let llb_ = this.$echarts.init(
                    document.getElementById("llb_")
                );
                let option_pie = {
                    title: {
                        text: '{b|流入}',
                        show: true,
                        textAlign: 'center',
                        x: 'center',
                        y: 'top',
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
                                        image: require('../../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#38d',
                                    fontSize: '20',
                                    fontFamily: '幼圆',
                                    height: 15,
                                    width: 15,
                                }
                            }
                        }
                    },
                    legend: {
                        data: ['a', 'b', 'c', 'd'],
                        icon: "circle",
                        itemGap: 25,
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 15,
                        itemHeight: 15,
                        top: 40,
                    },
                    grid: {
                        show: false,
                        width: "auto",
                        height: '50%'
                    },
                    series: [
                        {
                            type: "pie",
                            radius: ["50%", "70%"],
                            center: ["50%", "60%"],
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
                                }
                            ]
                        }
                    ]
                };
                let option_pie_ = {
                    title: {
                        text: '{b|流出}',
                        show: true,
                        textAlign: 'center',
                        x: 'center',
                        y: 'top',
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 30,
                            rich: {
                                a: {
                                    color: '#38d',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#38d',
                                    fontSize: '20',
                                    fontFamily: '幼圆',
                                    height: 15,
                                    width: 15,
                                }
                            }
                        }
                    },
                    legend: {
                        data: ['a', 'b', 'c', 'd'],
                        icon: "circle",
                        itemGap: 25,
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 15,
                        itemHeight: 15,
                        top: 40,
                    },
                    grid: {
                        show: false,
                        width: "auto",
                        height: '50%'
                    },
                    series: [
                        {
                            type: "pie",
                            radius: ["50%", "70%"],
                            center: ["50%", "60%"],
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
                                }
                            ]
                        }
                    ]
                };

                llt_.setOption(option_pie);
                llb_.setOption(option_pie_);


                let rr_if = this.$echarts.init(
                    document.getElementById("rr_if")
                );
                let rr_is = this.$echarts.init(
                    document.getElementById("rr_is")
                );
                let rr_it = this.$echarts.init(
                    document.getElementById("rr_it")
                );
                let rr_ifo = this.$echarts.init(
                    document.getElementById("rr_ifo")
                );
                let rr_ifi = this.$echarts.init(
                    document.getElementById("rr_ifi")
                );
                let rr_isi = this.$echarts.init(
                    document.getElementById("rr_isi")
                );
                let rr_ie = this.$echarts.init(
                    document.getElementById("rr_ie")
                );
                let rr_in = this.$echarts.init(
                    document.getElementById("rr_in")
                );

                let option_ = {
                    barWidth: 5, //设置柱状图的粗细
                    title: {
                        text: '  {b|     XXX}',
                        show: true,
                        textAlign: 'right',
                        x: 'right',
                        y: 'top',
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 40,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '15',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../../assets/img/icon2.png')
                                    }
                                },
                                b: {
                                    color: '#38d',
                                    fontSize: '20',
                                    fontFamily: '幼圆',
                                    fontWeight: 700,
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

                rr_if.setOption(option_);
                rr_is.setOption(option_);
                rr_it.setOption(option_);
                rr_ifo.setOption(option_);
                rr_ifi.setOption(option_);
                rr_isi.setOption(option_);
                rr_ie.setOption(option_);
                rr_in.setOption(option_);
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
            height: 1080px;
            background: url("../../assets/img/head.png") no-repeat;
            background-size: 100%;
        }

        .ECharts_box {
            width: 1720px;
            height: 930px;
            padding: 100px 100px 50px;
            overflow: hidden;

            .time_title {
                width: 100%;
                height: 10%;
                margin-top: 3%;

                .left {
                    width: 40%;
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
                    float: left;
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
                height: 85%;

                .left {
                    width: 58%;
                    height: 100%;
                    float: left;

                    .top {
                        width: 100%;
                        height: 48%;
                        border: 1px solid #38d;

                        .ll {
                            width: 39.8%;
                            height: 100%;
                            float: left;
                            border-right: 1px solid #38d;

                            #llt_ {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .rr {
                            width: 60%;
                            height: 100%;
                            float: right;
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: flex-start;
                            position: relative;

                            .horizontal {
                                position: absolute;
                                height: 1px;
                                width: 100%;
                                background: #3388dd;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                margin: auto;
                            }

                            .vertical {
                                position: absolute;
                                height: 100%;
                                width: 1px;
                                background: #3388dd;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                margin: auto;
                            }
                        }

                        .rr > div {
                            width: 50%;
                            height: 50%;
                        }

                        .rr > div > #rr_if {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_is {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_it {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_ifo {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .bottom {
                        margin-top: 3%;
                        width: 100%;
                        height: 48%;
                        border: 1px solid #38d;

                        .ll {
                            width: 39.8%;
                            height: 100%;
                            float: left;
                            border-right: 1px solid #38d;

                            #llb_ {
                                width: 100%;
                                height: 100%;
                            }
                        }

                        .rr {
                            width: 60%;
                            height: 100%;
                            float: right;
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: flex-start;
                            position: relative;

                            .horizontal {
                                position: absolute;
                                height: 1px;
                                width: 100%;
                                background: #3388dd;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                margin: auto;
                            }

                            .vertical {
                                position: absolute;
                                height: 100%;
                                width: 1px;
                                background: #3388dd;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                margin: auto;
                            }
                        }

                        .rr > div {
                            width: 50%;
                            height: 50%;
                        }

                        .rr > div > #rr_ifi {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_isi {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_ie {
                            width: 100%;
                            height: 100%;
                        }

                        .rr > div > #rr_in {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                .right {
                    width: 38%;
                    height: 100%;
                    float: right;

                    .top {
                        width: 100%;
                        height: 48%;
                        border: 1px solid #38d;

                        #rt_ {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .bottom {
                        margin-top: 4%;
                        width: 100%;
                        height: 48%;
                        border: 1px solid #38d;

                        #rb_ {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>