<template>
    <div style="width: 100%" class="box">
        <el-dialog :visible.sync="visible" width="800px" @close="close()">
            <div class="bigShow">
                <div id="commonECharts"></div>
                <div class="block_l"></div>
                <div class="block_r"></div>
                <div class="block_b"></div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "showECharts",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            openDialog(v) {
                this.visible = true;
                this.$nextTick(_ => {
                    this.initECharts(v);
                });

            },
            close() {

            },
            initECharts(option) {
                document.getElementById("commonECharts").removeAttribute("_echarts_instance_");
                option.title = {
                    text: '{a|     动态数据}',
                    show: true,
                    textStyle: {
                        rich:
                            {
                                a: {
                                    color: '#FFF',
                                    fontSize: '20',
                                    height: 25,
                                    width: 25,
                                    backgroundColor: {
                                        image: require('../../assets/img/icon2.png')
                                    }
                                },
                            }
                    }
                };
                console.log(JSON.stringify(option));
                let commonECharts = this.$echarts.init(document.getElementById("commonECharts"));
                commonECharts.setOption(option);
            }
        }
    }
</script>

<style scoped lang="less">
    .box /deep/ .el-dialog__wrapper > .el-dialog {
        background:rgba(0,0,0,.5);
    }

    .bigShow {
        width: 750px;
        height: 600px;
        box-shadow: 0 0 10px #38d inset;
        position: relative;
        background: #10448a;

        #commonECharts {
            width: 710px;
            height: 560px;
            padding: 20px;
        }

        .block_l {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_r {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
            width: 0.5em;
            height: 4.5em;
            background: #00b8fe;
            z-index: 999;
        }

        .block_b {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            width: 4.5em;
            height: 0.5em;
            background: #00b8fe;
            z-index: 999;
        }
    }
</style>