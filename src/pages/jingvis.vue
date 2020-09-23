<template>
    <div class="container">
        <div class="box">
            <div class="top">
                <div class="top_left">
                    <top_left></top_left>
                </div>
                <div class="top_center">
                    <div class="top_center_map"></div>
                </div>
                <div class="top_right">
                    <top_right></top_right>
                </div>
            </div>
            <div class="bottom">
                <div class="bar_box" v-for="i in 10">
                    <div class="title">{{i}}</div>
                    <div class="con_bar">
                        <bar-graph></bar-graph>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BarGraph from "./common/barGraph";
    import Top_left from "./top_left";
    import Top_right from "./top_right";

    export default {
        name: "jingvis",
        components: {Top_right, Top_left, BarGraph},
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
                    width: 9%;
                    height: 85%;
                    overflow: hidden;
                    margin: 20px 0 0;

                    .title {
                        size: 12px;
                        margin-left: -1px;
                        width: 100%;
                        text-indent: 10px;
                        background: url("../assets/img/kuang1.png") no-repeat;
                        background-size: 101%;
                    }

                    .con_bar {
                        width: 98.5%;
                        height: 80%;
                        border: 1px solid #38d;
                        border-top: none;
                        /*box-shadow: 0 0 2px #38d inset;*/
                    }
                }
            }
        }
    }
</style>