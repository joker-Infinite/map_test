<template>
    <div class="con">
        <div class="item_01">
            <top_right_i1></top_right_i1>
        </div>
        <div class="item_02">
            <top_right_i2></top_right_i2>
        </div>
    </div>
</template>

<script>
    import Top_left from "./top_left";
    import Top_right_i1 from "./top_right_i1";
    import Top_right_i2 from "./top_right_i2";

    export default {
        name: "top_right",
        components: {Top_right_i2, Top_right_i1, Top_left}
    }
</script>

<style scoped lang="less">
    .con {
        width: 100%;
        height: 100%;

        .item_01 {
            width: 49%;
            height: 100%;
            float: left;
        }

        .item_02 {
            width: 49%;
            height: 100%;
            float: right;
        }
    }
</style>