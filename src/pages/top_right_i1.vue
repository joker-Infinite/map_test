<template>
    <div class="con">
        <div class="top">
            <div id="top_right_ECharts_li1"></div>
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
            <div id="top_right_ECharts_li2"></div>
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
        <div class="bottom">
            <div class="block_l"></div>
            <div class="block_r"></div>
            <div class="block_b"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "top_right_i1",
        data() {
            return {}
        },
        methods: {
            //top_right_ECharts_li1
            initECharts_bar_top() {
                let top_right_ECharts_li1 = this.$echarts.init(document.getElementById("top_right_ECharts_li1"));

                let option = {
                    barWidth: 10,//设置柱状图的粗细
                    xAxis: [{
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {//坐标轴刻度
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    }],
                    yAxis: [{
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisTick: {//坐标轴刻度
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                    }],
                    grid: {
                        width: 'auto',
                        height: 'auto',
                        left: '35px',
                        bottom: "30px"
                        // left:'30px'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: [30, 30, 0, 0],//设置柱状图为圆角
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 1, color: '#b038ff'},
                                        {offset: 0.5, color: '#a883ff'},
                                        {offset: 0, color: '#A2ccff'}
                                    ]
                                )
                            },
                        },
                        labelLine: {
                            show: false
                        },
                    }]
                };

                top_right_ECharts_li1.setOption(option);
            },
            initECharts_bar_center() {
                let top_right_ECharts_li2 = this.$echarts.init(document.getElementById("top_right_ECharts_li2"));

                let option = {
                    barWidth: 6,//设置柱状图的粗细
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
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#FFF'
                            }
                        },
                    }],
                    grid: {
                        width: 'auto',
                        height: 'auto',
                        left: '50px'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        color: 'rgba(208,137,208,0.5)',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(255,255,255,0.2)',
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 30,//设置柱状图为圆角
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 1, 0,
                                    [
                                        {offset: 0, color: '#e65962'},
                                        {offset: 0.5, color: '#f6a573'},
                                        {offset: 1, color: '#FFe295'}
                                    ]
                                )
                            }
                        },
                        barCategoryGap: '100%'
                    }]
                };

                top_right_ECharts_li2.setOption(option);
            },
        },
        mounted() {
            this.initECharts_bar_top();
            this.initECharts_bar_center();
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

            #top_right_ECharts_li1 {
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

            #top_right_ECharts_li2 {
                width: 100%;
                height: 100%;
                margin-top: 10%;
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
                bottom: -20px;
                right: 0;
                position: absolute;
            }

            .title_ECharts > p > .dot > i {
                width: 10px;
                height: 10px;
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