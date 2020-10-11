<template>
  <div class="container">
    <el-button @click="$router.push('/mapDot')">mapDot</el-button>
    <el-button @click="$router.push('/ECharts')">ECharts</el-button>
    <el-button @click="$router.push('/jingvis')">jingvis</el-button>
    <el-button @click="$router.push('/gas')">gas</el-button>
    <el-button @click="$router.push('/gas_')">gas_</el-button>
    <el-button @click="$router.push('/intAndOut')">intAndOut</el-button>
    <el-button @click="$router.push('/unkonw')">unkonw</el-button>
    <div id="map">
      <el-amap
        ref="map"
        vid="map"
        :zoom="zoom"
        :center="center"
        :events="events"
      >
        <el-amap-marker
          v-for="(i, index) in path"
          :key="index"
          :title="i[2]"
          vid="maker"
          :position="i"
          :icon="icon"
          :events="markerEvents"
        />
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      zoom: 14,
      center: [114.285955, 30.579367],
      icon:
        "//a.amap.com/jsapi_demos/static/demo-center/icons/dir-via-marker.png",
      label: {
        content: "循礼门",
        offset: [-12, -30]
      },
      path: [
        [114.286298, 30.5855, "循礼门"],
        [114.285955, 30.579367, "武汉第十九初级中学"],
        [114.284238, 30.575303, "六渡桥"],
        [114.28423, 30.581173, "自治街"],
        [114.274711, 30.571386, "汉正街"],
        [114.278573, 30.580993, "友谊路"]
      ],
      events: {
        init(o) {
          // console.log(o.getCenter()); //获取初始化时的中心位置
        },
        zoomchange: e => {
          // console.log(e); //zoom发生变化时调用
        },
        zoomend: e => {
          //获取当前缩放zoom值
          // console.log(this.$refs.map.$$getInstance().getZoom()); //获取当前的zoom大小
          // console.log(e);
        },
        click: e => {
          // console.log(e)
        }
      },
      markerEvents: {
        click: e => {
          console.log(e);
          this.$notify({
            title: "提示",
            message: "这是一条不会自动关闭的消息",
            duration: "0"
          });
        }
      }
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #dadada;

  #map {
    width: 800px;
    height: 800px;
    margin: auto;
    background: #999;
  }
}
</style>
