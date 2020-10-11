<template>
    <div style="width: 100%">
        <div class="container">
            <div class="con">
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
                <div class="ECharts_box"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intAndOut",
        data() {
            return {
                startTime: '',
                endTime: '',
                startOptions: {},
                endOptions: {}
            }
        },
        methods: {
            click_picker(v) {
            }
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 1200px;
        height: 700px;
        background: #10448a;
        margin: auto;

        .con {
            width: 1000px;
            height: 580px;
            padding: 70px 100px 50px;
            background: #38d;

            .time_title {
                width: 100%;
                height: 15%;

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

            .ECharts_box {
                width: 100%;
                height: 85%;
                background: #333;
            }
        }
    }
</style>