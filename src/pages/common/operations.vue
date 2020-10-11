<template>
    <div class="more_setting">
        <span class="focus" @click="operations('focus')"></span>
        <span class="export" @click="operations('export')"></span>
        <span class="more" @click="operations('more')"></span>
    </div>
</template>

<script>
    export default {
        name: "operations",
        data() {
            return {}
        },
        methods: {
            operations(v) {
                if (v === 'focus') {
                    this.$emit('showOne', true);
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .more_setting {
        width: 78px;
        height: 30px;
        position: absolute;
        display: none;
        z-index: 9;
        top: 0;
        right: 0;

        .focus {
            background: url("../../assets/img/big.png") no-repeat;
            background-size: 100%;
        }

        .focus:hover {
            background: url("../../assets/img/big_.png") no-repeat;
            background-size: 100%;
        }

        .export {
            background: url("../../assets/img/export.png") no-repeat;
            background-size: 100%;
        }

        .export:hover {
            background: url("../../assets/img/export_.png") no-repeat;
            background-size: 100%;
        }

        .more {
            background: url("../../assets/img/more.png") no-repeat;
            background-size: 100%;
        }

        .more:hover {
            background: url("../../assets/img/more_.png") no-repeat;
            background-size: 100%;
        }
    }

    .more_setting > span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 3px;
    }
</style>