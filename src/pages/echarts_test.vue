<template>
    <div id="EChartsBox">
        <div class="box" id="ECharts_01" v-show="false"></div>
        <div class="box" id="ECharts_02" v-show="false"></div>
        <div class="box" id="ECharts_03" v-show="false"></div>
        <div class="box" id="ECharts_04" v-show="false"></div>
        <div class="box" id="ECharts_05" v-show="false"></div>
        <div class="box" id="ECharts_06"></div>
        <div class="box" id="ECharts_07" v-show="false"></div>
    </div>
</template>

<script>
    export default {
        name: "echarts_test",
        data() {
            return {};
        },
        methods: {
            //基本条形图
            drawCategory() {
                let ECharts_01 = this.$echarts.init(
                    document.getElementById("ECharts_01")
                );

                let option_01 = {
                    title: {
                        text: "日期/人",
                        subtext: "数据……"
                    },
                    legend: {
                        data: ["time", "people"]
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // 坐标轴指示器，坐标轴触发有效
                            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                        },
                        formatter: function (params) {
                            let tar = params[0];
                            console.log(params);
                            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
                        }
                    },
                    xAxis: {
                        type: "value",
                        axisLabel: {
                            //文字旋转
                            interval: 0,
                            rotate: 40
                        }
                    },
                    yAxis: {
                        type: "category",
                        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                        fontStyle: "italic",
                        axisLabel: {
                            interval: 0,
                            rotate: 40
                        }
                    },
                    series: [
                        {
                            name: "time",
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(153,153,153,0.5)" //条形背景颜色
                            },
                            color: "rgba(100,245,255,0.5)" //条形内容背景颜色
                        },
                        {
                            name: "people",
                            data: [22, 32, 43, 54, 57, 32, 23],
                            type: "bar",
                            showBackground: false,
                            backgroundStyle: {
                                color: "rgba(0, 0, 0, 0.5)" //条形背景颜色
                            },
                            color: "rgba(82,175,255,0.5)" //条形内容背景颜色
                        }
                    ]
                };
                ECharts_01.setOption(option_01);
            },
            //渐变色条形图
            GradientCategory() {
                let myChart = this.$echarts.init(document.getElementById("ECharts_02"));
                let dataAxis = [
                    "点",
                    "击",
                    "柱",
                    "子",
                    "或",
                    "者",
                    "两",
                    "指",
                    "在",
                    "触",
                    "屏",
                    "上",
                    "滑",
                    "动",
                    "能",
                    "够",
                    "自",
                    "动",
                    "缩",
                    "放"
                ];
                let data = [
                    220,
                    182,
                    191,
                    234,
                    290,
                    330,
                    310,
                    123,
                    442,
                    321,
                    90,
                    149,
                    210,
                    122,
                    133,
                    334,
                    198,
                    123,
                    125,
                    220
                ];
                let yMax = 500;
                let dataShadow = [];

                for (let i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }

                let option = {
                    title: {
                        text: "渐变色 阴影 点击缩放",
                        subtext: "Feature Sample: Gradient Color, Shadow, Click Zoom"
                    },
                    xAxis: {
                        data: dataAxis,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: "#fff"
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
                                color: "#999"
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: "inside"
                        }
                    ],
                    series: [
                        {
                            // For shadow
                            type: "bar",
                            itemStyle: {
                                color: "rgba(0,0,0,0.05)"
                            },
                            barGap: "-100%",
                            barCategoryGap: "40%",
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: "bar",
                            itemStyle: {
                                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {offset: 1, color: "#f6372c"},
                                    {offset: 0.5, color: "#f04ab3"},
                                    {offset: 0, color: "#7f55f0"}
                                ])
                            },
                            emphasis: {
                                itemStyle: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 0, color: "#2378f7"},
                                        {offset: 0.7, color: "#2378f7"},
                                        {offset: 1, color: "#83bff6"}
                                    ])
                                }
                            },
                            data: data
                        }
                    ]
                };

                // Enable data zoom when user click bar.
                let zoomSize = 6;
                myChart.on("click", function (params) {
                    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
                    myChart.dispatchAction({
                        type: "dataZoom",
                        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                        endValue:
                            dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
                    });
                });
                myChart.setOption(option);
            },
            //横向条形 圆角
            horizontalCategory() {
                let ECharts_03 = this.$echarts.init(
                    document.getElementById("ECharts_03")
                );

                let option = {
                    title: {
                        text: "无x，y轴线及刻度线",
                        subtext: "柱形图圆角"
                    },
                    barWidth: 10, //设置柱状图的粗细
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
                            }
                        }
                    ],
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: "bar",
                            color: "rgba(208,137,208,0.5)",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(255,205,247,0.5)"
                            },
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 30, //设置柱状图为圆角
                                    position: "inside",
                                    label: {
                                        show: true,
                                        fontWeight: "bolder",
                                        fontSize: "12",
                                        fontFamily: "微软雅黑"
                                    }
                                }
                            }
                        }
                    ]
                };

                ECharts_03.setOption(option);
            },
            //条形、饼图联动
            doubleCategory(v) {
                let nam = [];
                let val = [];
                v.forEach(i => {
                    nam.push(i.name);
                    val.push(i.value);
                });
                let ECharts_04 = this.$echarts.init(
                    document.getElementById("ECharts_04")
                );
                let ECharts_05 = this.$echarts.init(
                    document.getElementById("ECharts_05")
                );

                let option_04 = {
                    xAxis: {
                        type: "category",
                        data: [...nam]
                    },
                    yAxis: {
                        type: "value"
                    },
                    series: [
                        {
                            data: [...val],
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(220, 220, 220, 0.8)"
                            }
                        }
                    ]
                };
                let option_05 = {
                    backgroundColor: "#2c343c",

                    title: {
                        text: "Customized Pie",
                        left: "center",
                        top: 20,
                        textStyle: {
                            color: "#ccc"
                        }
                    },

                    tooltip: {
                        trigger: "item",
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [3, 5]
                        }
                    },
                    series: [
                        {
                            name: "访问来源",
                            type: "pie",
                            radius: "55%",
                            center: ["50%", "50%"],
                            data: [...v].sort(function (a, b) {
                                return a.value - b.value;
                            }),
                            roseType: "radius",
                            label: {
                                color: "rgba(255, 255, 255, 0.3)"
                            },
                            labelLine: {
                                lineStyle: {
                                    color: "rgba(255, 255, 255, 0.3)"
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            },
                            itemStyle: {
                                color: "#c23531",
                                shadowBlur: 200,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            },

                            animationType: "scale",
                            animationEasing: "elasticOut",
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                };

                ECharts_04.setOption(option_04);
                ECharts_05.setOption(option_05);
            },
            //多柱多线
            moreBarLine() {
                let ECharts_06 = this.$echarts.init(
                    document.getElementById("ECharts_06")
                );

                let option = {
                    /* title: {
                         text: '营收',
                         left: 'center'
                     },*/
                    legend: {//图例组件
                        x: 'center',
                        y: 'bottom',
                        show: true,
                        textStyle: {//图例的公用文本样式。
                            fontSize: 14,
                            color: "#333",
                        },
                        itemGap: 20,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
                        data: ['营收', '同比增涨率'],//图例的数据数组。
                        inactiveColor: '#ccc',//图例关闭时的颜色。
                    },
                    grid: {//直角坐标系内绘图网格
                        bottom: '5%',//grid 组件离容器下侧的距离。
                        left: '5%',
                        right: '5%',
                        containLabel: true//grid 区域是否包含坐标轴的刻度标签。
                    },
                    xAxis: [
                        {
                            // name: "年份",
                            type: 'category',
                            data: ['2015年', '2016年', '2017年', '2018年', "2019年"],
                            axisPointer: {
                                type: 'shadow'
                            },
                            axisTick: {
                                show: true,
                                interval: 0
                            },
                            axisLabel: {
                                fontSize: 14,
                                color: "#333",
                            },
                        },
                    ],
                    yAxis: [
                        {
                            name: '金额（亿元）',
                            type: 'value',
                            show: true,
                            splitNumber: 10,//坐标轴的分割段数
                            axisLabel: {
                                fontSize: 14,
                                color: "#333",
                            },
                            splitLine: {
                                show: false//是否显示分隔线。
                            },
                        },
                        {
                            type: 'value',
                            min: '-100',//最小坐标
                            max: '2000',//最大坐标
                            // interval:1,
                            axisLabel: {
                                fontSize: 14,
                                color: "#333",
                                formatter: '{value} %'
                            },
                            splitLine: {
                                show: false//是否显示分隔线。
                            },
                        }
                    ],
                    series: [
                        /* {
                             name: '营收',
                             type: 'bar',
                             data: [1.35, 22.53, 34.67, 41.62, 51.01],
                             barWidth: '60',
                             color: "#38d", //条形内容背景颜色
                             itemStyle: {
                                 normal: {
                                     label: {
                                         show: true,
                                         fontSize: '16px'
                                     }
                                 }
                             }

                         },
                         {
                             name: '同比增涨率',
                             type: 'line',
                             yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
                             data: [, 1568.89, 53.88, 20.05, 22.56],
                             symbolSize: 10,
                             color: '#DD6D2D',
                             itemStyle: {
                                 normal: {
                                     label: {
                                         show: true,
                                         fontSize: '16px',
                                         formatter: v => {
                                             if(v.data<0){
                                                 return "<span style='color: red'>v.data + '%'</span>"
                                             }
                                             return v.data + '%'
                                         }
                                     }
                                 },

                             }
                         },*/
                        /*  {
                              name: '利润',
                              type: 'bar',
                              data: [0.15, 0.39, 1.41, 2.03, 2.06],
                               barWidth: '60',
                              color: "#38d" //条形内容背景颜色
                          },
                          {
                              name: '同比增涨率',
                              type: 'line',
                              yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
                              data: [, 160, 261.54, 43.97, 1.48],
                               symbolSize: 10,
                              color:'#DD6D2D',
                              itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        fontSize: '16px',
                                        formatter: v => {
                                            if(v.data<0){
                                                return "<span style='color: red'>v.data + '%'</span>"
                                            }
                                            return v.data + '%'
                                        }
                                    }
                                },

                            }
                          },*/
                        {
                            name: '营收',
                            type: 'bar',
                            data: [1.35, 22.53, 34.67, 41.62, 51.01],
                            barWidth: '80',
                            color: "#38d",//条形内容背景颜色
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        fontSize: 20,
                                        position: 'top'
                                    }
                                }
                            }
                        },
                        {
                            name: '同比增涨率',
                            type: 'line',
                            yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
                            data: [, 1568.89, 53.88, 20.05, 22.56],
                            symbolSize: 10,
                            color: '#DD6D2D',
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: true,
                                        formatter: v => {
                                            if (v.data < 0) {
                                                return '{b|' + v.data + '%' + '}'
                                            }
                                            if (v.data > 0) {
                                                return '{a|' + v.data + '%' + '}'
                                            }

                                        },
                                        rich: {
                                            a: {
                                                color: '#DD6D2D',
                                                fontSize: 20,
                                                fontWeight: 700
                                            },
                                            b: {
                                                color: '#DD0608',
                                                fontSize: 20,
                                                fontWeight: 700
                                            }
                                        }
                                    }
                                },
                            }
                        },
                    ]
                }
                ECharts_06.setOption(option);
            },
            //折线 负数标红
            lineR() {
                let ECharts_07 = this.$echarts.init(
                    document.getElementById("ECharts_07")
                );
                let option = {
                    title: {
                        text: ' {a|     动态数据}',
                        show: true,
                        textStyle: {
                            fontFamily: '幼圆',
                            lineHeight: 20,
                            rich: {
                                a: {
                                    color: '#FFF',
                                    fontSize: '12',
                                    height: 15,
                                    width: 15,
                                    backgroundColor: {
                                        image: require('../assets/img/icon2.png')
                                    }
                                },
                            }
                        }
                    },
                    legend: {
                        data: ['邮件', '广告'],
                        icon: "circle",
                        textStyle: {
                            color: '#FFF'
                        },
                        itemWidth: 10,
                        itemHeight: 10,
                        right: 5,
                        top: 20
                    },
                    tooltip: {
                        show: true,
                        alwaysShowContent: true,
                        transitionDuration: 0.4,
                        textStyle: {
                            color: 'red'
                        },
                        formatter: function (d) {
                            let html = d.seriesName + '—' + d.name + '<br/>' + d.value + "万元";
                            if (d.value < 0) {
                                return '<div class="tooltip" style="color: red;">' + html + '</div>'
                            }
                            return '<div class="tooltip" style="color: white;">' + html + '</div>';
                        }
                    },
                    grid: {
                        width: "auto",
                        height: "auto",
                        left: "35px",
                        bottom: "30px"
                    },
                    xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
                        axisLine: {
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
                    },
                    yAxis: {
                        name: "万元",
                        nameTextStyle: {
                            fontSize: "12px"
                        },
                        type: "value",
                        axisTick: {
                            //坐标轴刻度
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#fff"
                            }
                        }
                    },
                    series: [
                        {
                            name: "邮件",
                            type: "line",
                            stack: "总量",
                            color: "#29fffa",
                            symbolSize: 10,
                            symbol: "circle",
                            itemStyle: {
                                normal: {
                                    color: "#29fffa",
                                    borderColor: "#29fffa"
                                }
                            },
                            data: [-120, -132, -101, -134, 90, -230, -210]
                        },
                        {
                            name: "广告",
                            type: "line",
                            stack: "总量",
                            color: "#fe5100",
                            symbolSize: 5,
                            smooth: true,
                            symbol: "circle",
                            itemStyle: {
                                normal: {
                                    color: "#fe5100",
                                    borderColor: "#fe5100"
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        }
                    ]
                };
                ECharts_07.setOption(option);
            }
        },
        mounted() {
            let data1 = [
                {name: "wuhan", value: 100},
                {name: "jinzhou", value: 320},
                {name: "suizhou", value: 430},
                {name: "shanghai", value: 350},
                {name: "guangzhou", value: 120}
            ];
            let data2 = [
                {name: "w", value: 88},
                {name: "j", value: 98},
                {name: "s", value: 36},
                {name: "s", value: 65},
                {name: "g", value: 84}
            ];

            this.drawCategory();
            this.GradientCategory();
            this.horizontalCategory();
            this.moreBarLine();
            this.lineR();
            this.doubleCategory(data1);
            let m = new Promise((resolve, reject) => {
                setInterval(resolve("success"), 10000);
            });
            console.log(m);
            // setInterval(this.doubleCategory(data2), 10000);
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
            width: 50%;
            height: 500px;
            background: white;
            margin: 10px 0;
            padding: 5px;
            /*border-radius: 5px;*/
        }

        #ECharts_07 {
            background: #1a73e8;
        }

        .tooltip {
            text-align: center;
            background: rgba(255, 255, 255, .5);
            padding: 5px;
            border-radius: 3px;
        }
    }
</style>
