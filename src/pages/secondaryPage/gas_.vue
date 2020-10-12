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
                        <div class="EChartsItem">
                            <div class="item">
                                <div id="gas_item_f"></div>
                            </div>
                            <div class="item">
                                <div id="gas_item_s"></div>
                            </div>
                            <div class="item">
                                <div id="gas_item_t"></div>
                            </div>
                            <div class="item">
                                <div id="gas_item_fo"></div>
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
        name: "gas_",
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
                let gas_item_f = this.$echarts.init(
                    document.getElementById("gas_item_f")
                );
                let gas_item_s = this.$echarts.init(
                    document.getElementById("gas_item_s")
                );
                let gas_item_t = this.$echarts.init(
                    document.getElementById("gas_item_t")
                );
                let gas_item_fo = this.$echarts.init(
                    document.getElementById("gas_item_fo")
                );

                let option = {
                    barWidth: 6, //设置柱状图的粗细
                    title: {
                        text: '  {a|     完成百分比}',
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
                            show: false,
                            axisTick: {
                                //坐标轴刻度
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: "#fff"
                                }
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: "#FFF"
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: "category",
                            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                            axisLine: {
                                //坐标轴轴线
                                show: false,
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
                        show: false,
                        width: "auto",
                        height: "auto",
                        left: "50px"
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

                gas_item_f.setOption(option);
                gas_item_s.setOption(option);
                gas_item_t.setOption(option);
                gas_item_fo.setOption(option);
            }
        },
        mounted() {
            this.initECharts();
        }
    }
</script>

<style scoped lang="less">
    .con {
        width: 1200px;
        height: 650px;
        background: url("../../assets/img/bg.jpg") no-repeat;
        background-size: 100%;
        margin: auto;

        .background_img {
            width: 1200px;
            height: 650px;

            background: url("../../assets/img/box1.png") no-repeat;
            background-size: 100%;
        }

        .ECharts_box {
            width: 1100px;
            height: 450px;
            padding: 100px 50px 50px;

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
                height: 80%;

                .EChartsItem {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                    align-items: center;

                    .item {
                        width: 260px;
                        height: 260px;
                        border: 1px solid #38d;

                        #gas_item_f {
                            width: 100%;
                            height: 100%;
                        }

                        #gas_item_s {
                            width: 100%;
                            height: 100%;
                        }

                        #gas_item_t {
                            width: 100%;
                            height: 100%;
                        }

                        #gas_item_fo {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
</style>