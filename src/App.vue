<template>
    <div id="app" :style="{height:height,width:width}">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "app",
        data() {
            return {
                height: '',
                width: ''
            }
        },
        mounted() {
            this.height = window.screen.height + "px";
            this.width = window.screen.width + "px";
        },
        components: {}
    };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    #app {
        background: #333;
    }
</style>
