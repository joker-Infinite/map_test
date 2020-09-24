<template>
    <div class="container">
        <div class="box">
            <div class="top">
                <div class="top_left">
                    <top_left></top_left>
                </div>
                <div class="top_center">
                    <div class="top_center_map">
                        <center-map></center-map>
                    </div>
                </div>
                <div class="top_right">
                    <top_right></top_right>
                </div>
            </div>
            <div class="bottom">
                <bottom-bar-graph></bottom-bar-graph>
            </div>
        </div>
    </div>
</template>

<script>
    import BarGraph from "./common/barGraph";
    import Top_left from "./top_left";
    import Top_right from "./top_right";
    import BottomBarGraph from "./bottomBarGraph";
    import CenterMap from "./centerMap";

    export default {
        name: "jingvis",
        components: {CenterMap, BottomBarGraph, Top_right, Top_left, BarGraph},
        data() {
            return {
                height: '',
                width: ''
            }
        },
        methods: {},
        mounted() {
            this.height = window.screen.height + "px";
            this.width = window.screen.width + "px";
        },
        created() {
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
        margin: 0;
        padding: 0;
        background: url("../assets/img/background.jpg") no-repeat;
        background-size: 100% 100%;
        overflow: hidden;

        .box {
            position: absolute;
            width: 97%;
            height: 95%;
            margin: 1.5% 1.5% 0;

            .top {
                width: 100%;
                height: 80%;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                overflow: hidden;
                display: flex;

                .top_left {
                    width: 25%;
                    height: 100%;
                }

                .top_center {
                    width: 100%;
                    height: 100%;
                    padding: 0 1%;

                    .top_center_map {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #38d;
                        box-shadow: 0 0 10px #38d inset;
                    }
                }

                .top_right {
                    width: 50%;
                    height: 100%;
                }
            }

            .bottom {
                width: 100%;
                height: 20%;
                /*background: rgba(0, 0, 0, 0.3);*/
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                overflow: hidden;
                display: flex;

                .bar_box {
                    /*float: left;*/
                    width: 9.5%;
                    height: 90%;
                    overflow: hidden;
                    margin: 18px 0 0;

                    .title {
                        size: 12px;
                        margin-left: -1px;
                        width: 100%;
                        text-indent: 10px;
                        background: url("../assets/img/kuang1.png") no-repeat;
                        background-size: 101%;
                    }

                    .con_bar {
                        width: 100%;
                        height: 100%;
                        background: url("../assets/img/zijin_03.png") no-repeat;
                        background-size: 100%;
                        position: relative;
                        /*border: 1px solid #38d;*/
                        /*border-top: none;*/
                        /*box-shadow: 0 0 2px #38d inset;*/

                        .con_bars {
                            height: 95%;
                            width: 100%;
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
                            font-size: 0.75em;
                            font-family: '幼圆';
                            line-height: 4;
                            padding-left: 1.25em;
                            margin-left: 0.625em;
                            color: white;
                            font-weight: 700;
                            background: url("../assets/img/icon2.png") no-repeat;
                            background-size: 0.9375em;
                        }

                        .title_ECharts > p > .dot {
                            font-size: 0.75em;
                            color: white;
                            font-family: '幼圆';
                            display: inline-block;
                            width: 50%;
                            height: 0.9375em;
                            bottom: -1em;
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
            }
        }
    }
</style>