<template>
    <div style="width: 100%">
        <div class="container">
            <div class="show">
                <bottom-bar-graph style="width: 3000px;height: 300px"></bottom-bar-graph>
            </div>
        </div>
        <el-button :disabled="disabledLeft" @click="change('left')">left</el-button>
        <el-button :disabled="disabledRight" @click="change('right')">right</el-button>
    </div>
</template>

<script>
    import BottomBarGraph from "../bottomBarGraph";

    export default {
        name: "showBottomECharts",
        components: {BottomBarGraph},
        data() {
            return {
                i: 0,
                j: 0,
                disabledLeft: true,
                disabledRight: false
            }
        },
        methods: {
            change(v) {
                let con = document.getElementsByClassName('show')[0];
                if (v === 'right') {
                    this.i += 2;
                    con.style.marginLeft = -300 * this.i + "px";
                    console.log(con.style.marginLeft);
                }
                if (v === 'left') {
                    this.i -= 2;
                    con.style.marginLeft = -300 * this.i + "px";
                }
                if (this.i !== 0) {
                    this.disabledLeft = false;
                } else {
                    this.disabledLeft = true;
                }

                if (this.i === 0) {
                    this.disabledRight = false;
                }
                if (this.i === 6) {
                    this.disabledRight = true;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .container {
        width: 1200px;
        height: 300px;
        overflow: hidden;
        background: #191644;

        .show {
            width: 3000px;
            height: 300px;
            transition: linear .5s;
        }
    }
</style>