<template>
    <div style="width: 100%;height: 100%">
        <div class="amap-wrapper">
            <el-amap
                    ref="map"
                    :vid="'amapDemo'"
                    :center="center"
                    :zoom="zoom"
                    :events="events"
                    :map-style="mapStyle"
                    class="amap-demo">
                <el-amap-marker
                        v-for="u in markers"
                        :position="u.position"/>
                <el-amap-marker
                        :position="[114.28596481159326, 30.58517738688811]"
                        :icon="icon"/>
            </el-amap>
        </div>
    </div>
</template>

<script>
    export default {
        name: "centerMap",
        data() {
            return {
                center: [114.28596481159326, 30.58517738688811],
                zoom: 12,
                position: [121.5273285, 31.21515044],
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
                events: {
                    init(o) {
                        console.log(o.getCenter());
                    },
                    zoomchange: e => {
                        console.log(e);
                    },
                    zoomend: e => {
                        //获取当前缩放zoom值
                        console.log(this.$refs.map.$$getInstance().getZoom());
                        console.log(e);
                    },
                    click: e => {
                        alert("map clicked");
                    }
                },
                markers: [
                    {
                        position: [121.5273285, 31.41515044]
                    },
                    {
                        position: [121.5273286, 31.31515045]
                    }
                ],
                mapStyle:"amap://styles/blue"
            };
        }
    };
</script>

<style scoped>
    .amap-wrapper {
        width: 100%;
        height: 100%;
    }
</style>
