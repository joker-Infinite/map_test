<template>
  <div style="height: 100%;width: 100%">
    <div class="con" :style="{ height: height }">
      <div class="con_title">
        <div>传媒数据统计</div>
        <div>服务数据统计</div>
        <div style="width:20%"></div>
        <div>营业数据统计</div>
        <div>能源数据统计</div>
      </div>
      <div class="itemers">{{itemer}}</div>
      <div class="background_img">
        <div class="ECharts_box">
          <div style="height:1%"></div>
          <div class="ECharts">
            <div class="ECharts_left">
              <div class="ECharts_left_title">
                <i
                        style="margin-right:.5em; width:.1em;background:#682ef7;height:1em; display: inline-block;"
                ></i>
                传媒收入情况
              </div>
              <div class="ECharts_left_top">
                <div class="ECharts_left_top_con">
                  <div>
                    今日
                    <span style="font-size:2em;color:#f0b708">253</span> (万)
                  </div>
                  <div>
                    昨日
                    <span style="font-size:2em;color:#06d7d9">305</span> (万)
                  </div>
                  <div>
                    本月完成率
                    <span style="font-size:2em;color:#d50ef3">20%</span>
                  </div>
                  <div>
                    上月完成
                    <span style="font-size:2em;color:#d50ef3">65%</span>
                  </div>
                </div>
              </div>
              <div class="ECharts_left_center">
                <div style="top:-10%" class="ECharts_left_title">
                  <i
                          style="margin-right:.5em;width:.1em;background:#682ef7;height:1em; display: inline-block;"
                  ></i>
                  传媒单品营业情况
                </div>
                <div class="ECharts_left_center_body">
                  <div class="ECharts_left_center_body_title">
                    <span>渠道</span>
                    <span>收入</span>
                    <span>完成率</span>
                  </div>
                  <div class="left_body">
                    <div
                            class="ECharts_left_center_body_body"
                            v-for="(item, index) of ChannelRevenue"
                            :key="index"
                    >
                      <span>{{ item.name }}</span>
                      <span>{{ item.val }}</span>
                      <span style="color:#04b8bc">{{ item.lv }}</span>
                    </div>
                  </div>
                  <div class="left_body_img">
                    <img src="../assets/TaskCompletionRate/xia.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="ECharts_left_bottom">
                <div class="ECharts_left_title">
                  <img src="../assets/TaskCompletionRate/icon1.png" />
                  传媒单品营业情况
                  <div class="ECharts_left_bottom_title">
                    <span>
                      <i
                              style="background:#f100bf;display: inline-block;width:.7em;height:.7em"
                      ></i>
                      完成
                    </span>
                    <span>
                      <i
                              style="background:#2c2678;display: inline-block;width:.7em;height:.7em"
                      ></i>
                      未完成
                    </span>
                  </div>
                </div>

                <div id="ECharts_left_bottom"></div>
              </div>
            </div>
            <div class="ECharts_center">
              <div class="ECharts_center_top">
                <div class="ECharts_left_title">
                  <img src="../assets/TaskCompletionRate/icon2.png" />
                  服务区任务完成率
                  <div class="ECharts_center_top_title">
                    <span>
                      <i
                              style="background:#b51dac;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      完成
                    </span>
                    <span>
                      <i
                              style="background:#2c2678;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      未完成
                    </span>
                  </div>
                </div>
                <div id="ECharts_center_top"></div>
              </div>
              <div class="ECharts_center_bottom">
                <div class="ECharts_left_title">
                  <img src="../assets/TaskCompletionRate/icon3.png" />
                  营业任务完成率
                  <div class="ECharts_center_top_title">
                    <span>
                      <i
                              style="background:#6b11c5;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      完成
                    </span>
                    <span>
                      <i
                              style="background:#2c2678;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      未完成
                    </span>
                  </div>
                </div>
                <div id="ECharts_center_bottom"></div>
              </div>
            </div>
            <div class="ECharts_right">
              <div class="ECharts_right_top">
                <div style="top:35%" class="ECharts_left_title">
                  <i
                          style="margin-right:.5em;width:.1em;background:#682ef7;height:1em; display: inline-block;"
                  ></i>
                  能源收入情况
                </div>
                <div style="top:35%;left:80%" class="ECharts_left_title">
                  单位(万元)
                </div>
                <div class="ECharts_right_top_con">
                  <div v-for="(item, index) of colorList" :key="index">
                    <p style="font-size:1.5em" :style="{ color: item.color }">
                      {{ item.value }}
                    </p>
                    <p>{{ item.name }}</p>
                  </div>
                </div>
              </div>
              <div class="ECharts_right_center">
                <div class="ECharts_left_title">
                  <img src="../assets/TaskCompletionRate/icon4.png" />
                  能源收入情况
                  <div class="ECharts_center_top_title">
                    <span>
                      <i
                              style="background:#00cfa9;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      完成
                    </span>
                    <span>
                      <i
                              style="background:#2c2678;display: inline-block;width:1.2em;height:.7em"
                      ></i>
                      未完成
                    </span>
                  </div>
                </div>
                <div id="ECharts_right_center"></div>
              </div>
              <div class="ECharts_right_bottom">
                <div style="top:5%" class="ECharts_left_title">
                  <img
                          style="margin-right:.5em;"
                          src="../assets/TaskCompletionRate/icon5.png"
                  />
                  四大板块完成率
                  <div class="ECharts_right_bottom_title">
                    <span
                            style="color: #21b1d4;cursor:pointer"
                            @click="lineChartTitle(item.value, index, item.is)"
                            v-for="(item, index) of lrcolor"
                            :key="index"
                    >
                      <span
                              :style="{ background: item.is ? item.color : '#eee' }"
                              style="margin:0 .5em;border-radius: 50%;width:.8em;height:.8em;display: inline-block;"
                      ></span>
                      {{ item.value }}
                    </span>
                  </div>
                </div>
                <div id="ECharts_right_bottom"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gas",
    data() {
      return {
        // 保存定时器的
        timer:"",
        // 当没有数据的时候显示的
        title:{
          text:'暂无数据',
          x:'center',
          y:'center',
          textStyle:{
            color:'#fff',
            fontWeight:'1000',
            fontSize:30
          }
        },
        // 显示到页面的时间
        itemer:'',
        // 渠道收入的数据
        ChannelRevenue: [
          { name: "广告牌", val: "1000", lv: "10.5%" },
          { name: "广告", val: "1000", lv: "10.5%" },
          { name: "电视", val: "1000", lv: "10.5%" },
          { name: "新媒体", val: "1000", lv: "10.5%" },
          { name: "印刷", val: "1000", lv: "10.5%" },
        ],
        startTime: "",
        endTime: "",
        pickerOptions: {},
        //   保存第几项使用的
        item: [],
        //  判断是年月日
        type: "d",
        height: "",
        value2: "",
        dataLength: "",
        // 颜色
        colorList: [
          { value: 1231, color: "#f65456", name: "E98" },
          { value: 1231, color: "#6ad1f4", name: "柴油" },
          { value: 1231, color: "#f1f000", name: "92" },
          { value: 1231, color: "#55cd65", name: "95" },
          { value: 1231, color: "#517cff", name: "98" },
          { value: 1231, color: "#7c6cff", name: "E95" },
        ],
        lrcolor: [
          { is: true, color: "#f600ff", value: "传媒" },
          { is: true, color: "#2d48ee", value: "能源" },
          { is: true, color: "#29fdb0", value: "服务区" },
          { is: true, color: "#ff726f", value: "商业" },
        ],
        charts: {
          names: ["传媒", "能源", "服务区", "商业"],
          lineX: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          value: [
            [40, 30, 3, 52, 9, 2, 20, 3, 52, 9, 2, 21],
            [3, 5, 8, 12, 3, 5, 10, 12, 3, 5, 10, 80],
            [80, 20, 30, 2, 90, 2, 10, 2, 90, 2, 10, 50],
            [30, 50, 8, 10, 30, 50, 50, 10, 30, 50, 50],
          ],
        },
        ischarts: {
          value: [
            [40, 30, 3, 52, 9, 2, 20, 3, 52, 9, 2, 21],
            [3, 5, 8, 12, 3, 5, 10, 12, 3, 5, 10, 80],
            [80, 20, 30, 2, 90, 2, 10, 2, 90, 2, 10, 50],
            [30, 50, 8, 10, 30, 50, 50, 10, 30, 50, 50],
          ],
        },
      };
    },
    methods: {
      lineChartTitle(val, index, is) {
        if (is) {
          this.charts.value[index] = [];
          this.ECharts_right_bottom();
          this.lrcolor[index].is = false;
        } else {
          this.charts.value[index] = this.ischarts.value[index];
          this.ECharts_right_bottom();
          this.lrcolor[index].is = true;
        }
      },
      oils(type) {
        console.log(type);
      },

      click_picker(type) {
        this.ECharts_gas_init();
        this.ECharts_gas_init_pie();
      },
      // 柱形图
      ECharts_left_bottom() {
        let ECharts_left_bottom = this.$echarts.init(
                document.getElementById("ECharts_left_bottom")
        );
        var data = [
          {
            name: "1",
            value: 80,
          },
          {
            name: "2",
            value: 87.8,
          },
          {
            name: "3",
            value: 71,
          },
          {
            name: "4",
            value: 80,
          },
          {
            name: "5",
            value: 66,
          },
          {
            name: "6",
            value: 80,
          },
          {
            name: "7",
            value: 80,
          },
          {
            name: "8",
            value: 80,
          },
          {
            name: "9",
            value: 80,
          },
          {
            name: "10",
            value: 80,
          },
          {
            name: "11",
            value: 80,
          },
          {
            name: "12",
            value: 80,
          },
        ];
        var xData = [];
        var yData = [];
        var min = 50;
        data.map(function(a, b) {
          xData.push(a.name);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
        });
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 0,
              },
            },
            formatter: function(prams) {

              return (
                      prams[0].name +
                      "月" +
                      "<br/>" +
                      "完成率:" +
                      prams[0].data +
                      "%" +
                      "<br />" +
                      "未完成:" +
                      (100 - prams[0].data) +
                      "%"
              );
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "5%",
            right: "15%",
            bottom: "10%",
            top: "20%",
            containLabel: true,
            z: 22,
          },
          xAxis: [
            {
              name: "(月)",
              type: "category",
              gridIndex: 0,
              data: xData,
              axisTick: {
                alignWithLabel: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                show: true,
                color: "rgb(170,170,170)",
                fontSize: 16,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              gridIndex: 0,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              // min: 0,
              // max: 100,
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                color: "rgb(170,170,170)",
                formatter: "{value} %",
              },
            },
            {
              type: "value",
              gridIndex: 0,
              // min: 0,
              // max: 100,
              // splitNumber: 20,
              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
                },
              },
            },
          ],
          series: [
            {
              name: "合格率",
              type: "bar",
              barWidth: "45%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 0,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#f500ff",
                    },
                    {
                      offset: 1,
                      color: "#2702c6",
                    },
                  ]),
                },
              },
              data: yData,
              zlevel: 11,
            },
            {
              name: "背景",
              type: "bar",
              barWidth: "45%",
              xAxisIndex: 0,
              yAxisIndex: 1,
              barGap: "-105%",
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
              zlevel: 9,
            },
          ],
        };
        ECharts_left_bottom.setOption(option);
      },
      // 柱状图2
      ECharts_center_top() {
        let ECharts_center_top = this.$echarts.init(
                document.getElementById("ECharts_center_top")
        );
        var data = [
          {
            name: "1",
            value: 80,
          },
          {
            name: "2",
            value: 87.8,
          },
          {
            name: "3",
            value: 71,
          },
          {
            name: "4",
            value: 80,
          },
          {
            name: "5",
            value: 66,
          },
          {
            name: "6",
            value: 80,
          },
          {
            name: "7",
            value: 80,
          },
          {
            name: "8",
            value: 80,
          },
          {
            name: "9",
            value: 80,
          },
          {
            name: "10",
            value: 80,
          },
          {
            name: "11",
            value: 80,
          },
          {
            name: "12",
            value: 80,
          },
        ];
        var xData = [];
        var yData = [];
        var min = 50;
        data.map(function(a, b) {
          xData.push(a.name);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
        });
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 0,
              },
            },
            formatter: function(prams) {
              return (
                      prams[0].name +
                      "月" +
                      "<br/>" +
                      "完成率：" +
                      prams[0].data +
                      "%" +
                      "<br/>" +
                      "未完成率：" +
                      (100 - prams[0].data).toFixed(2) +
                      "%"
              );
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "10%",
            right: "10%",
            bottom: "10%",
            top: "20%",
            containLabel: true,
            z: 22,
          },
          xAxis: [
            {
              type: "value",
              gridIndex: 0,
              axisTick: {
                alignWithLabel: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                show: true,
                color: "rgb(170,170,170)",
                fontSize: 16,
                formatter: "{value} %",
              },
              //去掉网格
              splitLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              name: "(月)",
              type: "category",
              data: xData,
              gridIndex: 0,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                color: "rgb(170,170,170)",
              },
            },
            {
              type: "value",

              gridIndex: 0,

              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.00)"],
                },
              },
            },
          ],
          series: [
            {
              name: "合格率",
              type: "bar",
              barWidth: "55%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                  color: "#b61dab",
                },
              },
              data: yData,
              zlevel: 11,
            },
            {
              name: "背景",
              type: "bar",
              barWidth: "55%",
              barGap: "-105%",
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                  barBorderRadius: 30,
                },
              },
              zlevel: 1,
            },
          ],
        };
        ECharts_center_top.setOption(option);
      },
      // 柱3
      ECharts_center_bottom() {
        let ECharts_center_bottom = this.$echarts.init(
                document.getElementById("ECharts_center_bottom")
        );
        var data = [
          {
            name: "1",
            value: 80,
          },
          {
            name: "2",
            value: 87.8,
          },
          {
            name: "3",
            value: 71,
          },
          {
            name: "4",
            value: 80,
          },
          {
            name: "5",
            value: 66,
          },
          {
            name: "6",
            value: 80,
          },
          {
            name: "7",
            value: 80,
          },
          {
            name: "8",
            value: 80,
          },
          {
            name: "9",
            value: 80,
          },
          {
            name: "10",
            value: 80,
          },
          {
            name: "11",
            value: 80,
          },
          {
            name: "12",
            value: 80,
          },
        ];
        var xData = [];
        var yData = [];
        var min = 50;
        data.map(function(a, b) {
          xData.push(a.name);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
        });
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 0,
              },
            },
            formatter: function(prams) {
              return (
                      prams[0].name +
                      "月" +
                      "<br/>" +
                      "完成率：" +
                      prams[0].data +
                      "%" +
                      "<br/>" +
                      "未完成率：" +
                      (100 - prams[0].data).toFixed(2) +
                      "%"
              );
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "10%",
            right: "10%",
            bottom: "10%",
            top: "20%",
            containLabel: true,
            z: 22,
          },
          xAxis: [
            {
              type: "value",
              gridIndex: 0,
              axisTick: {
                alignWithLabel: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                show: true,
                color: "rgb(170,170,170)",
                fontSize: 16,
                formatter: "{value} %",
              },
              //去掉网格
              splitLine: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              name: "(月)",
              type: "category",
              data: xData,
              gridIndex: 0,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                color: "rgb(170,170,170)",
              },
            },
            {
              type: "value",

              gridIndex: 0,

              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              splitArea: {
                show: false,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"],
                },
              },
            },
          ],
          series: [
            {
              name: "合格率",
              type: "bar",
              barWidth: "55%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                  color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#6b11c4",
                    },
                    {
                      offset: 1,
                      color: "#450acd",
                    },
                  ]),
                },
              },
              data: yData,
              zlevel: 11,
            },
            {
              name: "背景",
              type: "bar",
              barWidth: "55%",
              barGap: "-105%",
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                  barBorderRadius: 30,
                },
              },
              zlevel: 1,
            },
          ],
        };
        ECharts_center_bottom.setOption(option);
      },
      // 柱
      ECharts_right_center() {
        let ECharts_right_center = this.$echarts.init(
                document.getElementById("ECharts_right_center")
        );
        var data = [
          {
            name: "1月",
            value: 87.8,
          },
          {
            name: "2月",
            value: 71,
          },
          {
            name: "3月",
            value: 80,
          },
          {
            name: "4月",
            value: 66,
          },
          {
            name: "5月",
            value: 80,
          },
          {
            name: "6月",
            value: 80,
          },
          {
            name: "7月",
            value: 80,
          },
          {
            name: "8月",
            value: 80,
          },
          {
            name: "9月",
            value: 80,
          },
          {
            name: "10月",
            value: 80,
          },
          {
            name: "11月",
            value: 80,
          },
          {
            name: "12月",
            value: 80,
          },
        ];
        var xData = [];
        var yData = [];
        var min = 50;
        data.map(function(a, b) {
          xData.push(a.name);
          if (a.value === 0) {
            yData.push(a.value + min);
          } else {
            yData.push(a.value);
          }
        });
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 0,
              },
            },
            formatter: function(prams) {
              return (
                      prams[0].name +
                      "<br/>" +
                      "完成率：" +
                      prams[0].data +
                      "%" +
                      "<br/>" +
                      "未完成率:" +
                      (100 - prams[0].data).toFixed(2) +
                      "%"
              );
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "10%",
            right: "10%",
            bottom: "15%",
            top: "15%",
            containLabel: true,
            z: 22,
          },
          xAxis: [
            {
              type: "category",
              gridIndex: 0,
              data: xData,
              axisTick: {
                alignWithLabel: true,
              },
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                show: true,
                color: "#fff",
                padding: [10, 0, 0, 0],
                fontSize: 15,
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              gridIndex: 0,
              splitLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              min: 0,
              max: 100,
              interval: 25,
              axisLine: {
                lineStyle: {
                  color: "#fff",
                },
              },
              axisLabel: {
                color: "#fff",
                formatter: "{value} %",
              },
            },
            {
              type: "value",
              gridIndex: 0,
              min: min,
              max: 100,
              splitNumber: 12,
              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: false,
              },
              splitArea: {
                show: true,
                areaStyle: {
                  color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.00)"],
                },
              },
            },
          ],
          series: [
            {
              name: "合格率",
              type: "bar",
              barWidth: "50%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 0,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#00d0a8",
                    },
                    {
                      offset: 1,
                      color: "#0046f8",
                    },
                  ]),
                },
              },
              data: yData,
              zlevel: 11,
            },
            {
              name: "背景",
              type: "bar",
              barWidth: "50%",
              xAxisIndex: 0,
              yAxisIndex: 1,
              barGap: "-105%",
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
              zlevel: 9,
            },
          ],
        };
        ECharts_right_center.setOption(option);
      },
      ECharts_right_bottom() {
        let ECharts_right_bottom = this.$echarts.init(
                document.getElementById("ECharts_right_bottom")
        );
        var charts = this.charts;

        var color = ["#f600ff", "#2d48ee", "#29fdb0", "#ff726f"];
        var lineY = [];

        for (var i = 0; i < charts.names.length; i++) {
          var x = i;
          if (x > color.length - 1) {
            x = color.length - 1;
          }
          var data = {
            name: charts.names[i],
            type: "line",
            color: color[x],
            smooth: false,
            // areaStyle: {
            //   normal: {
            //     // color: color[x] + ")",
            //   }
            // },
            symbol: "circle",
            symbolSize: 5,
            data: charts.value[i],
          };
          lineY.push(data);
        }
        lineY[0].markLine = {
          silent: true,
          // data: [
          //   {
          //     yAxis: 10,
          //   },
          //   {
          //     yAxis: 90,
          //   },
          //   {
          //     yAxis: 80,
          //   },
          //   {
          //     yAxis: 4,
          //   },
          //   {
          //     yAxis: 4,
          //   },
          // ],
        };
        let option = {
          tooltip: {
            trigger: "axis",
            formatter: function(prams) {
              let pra = prams[1].name;
              for (var i = 0; i < prams.length; i++) {
                pra +=
                        "<br/>" +
                        prams[i].marker +
                        prams[i].seriesName +
                        ":" +
                        prams[i].value +
                        "%";
              }
              return pra;
            },
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 1,
              },
            },

          },
          grid: {
            top: "35%",
            left: "5%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
          },
          xAxis: {
            offset: 10,
            type: "category",
            boundaryGap: false,
            data: charts.lineX,

            tooltip: {
              trigger: "axis",
              formatter: "{b}:{c}%",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line", // 默认为直线，可选为：'line' | 'shadow'1
              },
            },
            axisLabel: {
              rotate: 45,
              textStyle: {
                color: "#fff",
              },
              formatter: function(params) {
                return params.split(" ")[0];
              },
            },
          },
          yAxis: {
            name: charts.unit,
            type: "value",
            name: "百分比",
            scale: true,
            // type: "category", //category
            // data: ["0", "20", "30", "400", "60", "80", "100"],
            min: 0,
            max: 100,
            interval: 25,
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value}%",
              textStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            //去掉网格
            splitLine: {
              show: false,
            },
          },
          series: lineY,
        };

        ECharts_right_bottom.setOption(option);
      },
    },
    mounted() {
      this.height = document.body.clientHeight;
      let this_=this
      let itemer=new Date()
      this.itemer=itemer.getFullYear()+'-'+(itemer.getMonth()+1)+'-'+itemer.getDate()+"    "+itemer.getHours()+":"+itemer.getMinutes()
      this.timer = setInterval(function(){
        let itemer=new Date();
        this_.itemer=itemer.getFullYear()+'-'+(itemer.getMonth()+1)+'-'+itemer.getDate()+"   "+itemer.getHours()+":"+itemer.getMinutes()
      }, 1000)


      // 第一个1
      this.ECharts_left_bottom();
      // 第二个
      this.ECharts_center_top();
      // 第三个
      this.ECharts_center_bottom();
      // 第四个
      this.ECharts_right_center();
      // 第五个
      this.ECharts_right_bottom();
      // // 柱形图1
      // this.ECharts_gas_init();1
      // // 柱形图2
      // this.ECharts_gas_init_line();
      // // 柱形图3
      // this.ECharts_gas_init_pie();
      // this.ECharts_gas_init_pie_2();
    },
    destroyed () {
      if (this.timer) {
        clearInterval(this.timer)
      }
    }
  };
</script>

<style scoped lang="less">
  #ECharts_left_bottom,
  #ECharts_center_top,
  #ECharts_center_bottom,
  #ECharts_right_center,
  #ECharts_right_bottom {
    width: 100%;
    height: 100%;
  }
  .itemers{
    position: absolute;
    right: 5%;
    top: 3%;
    font-size: 2em;
    color:#fff
  }
  .ECharts_left_title {
    display: flex;
    align-items: center;
    position: absolute;
    color: #fff;
    top: 2%;
    left: 8%;
    font-size: 1.2em;
    width: 100%;
    .ECharts_right_bottom_title {
      position: absolute;
      right: 15%;
      z-index: 8888;
    }
  }
  .title_ECharts_title {
    color: #fff;
    font-size: 1em;
    margin-left: 2em;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .title_ECharts_title > img {
    margin-right: 1%;
  }
  .ECharts_title {
    // position: absolute;
    text-align: right;
    right: 10;
    .i_list {
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      border-radius: 50%;
      margin-left: 1.5em;
    }
  }
  .con /deep/ .el-range-input {
    background: transparent;
  }
  .con /deep/ .el-picker-panel {
    background-color: #224874 !important;
  }
  .con /deep/ .el-input__icon {
    color: #2466ce;
  }
  .con /deep/ .el-input__inner {
    background-color: transparent;
    border-color: #2466ce;
    color: #2466ce;
    width: 70%;
  }
  .el-button {
    background: #224874;
    color: #537bd6;
    border-color: #407b95;
    font-size: 15px;
    border-radius: 0;
    padding: 1em 1em;
    font-size: 1em;
  }
  .title_img {
    width: 20px;
    height: 20px;
    position: relative;
    top: 5px;
    margin: 0 10px;
  }
  .con {
    width: 100%;
    height: 100%;
    // background: url("../assets/img/bg.jpg") no-repeat;
    background: url("../assets/TaskCompletionRate/body.png") no-repeat;
    background-size: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;

    .con_title {
      width: 50%;
      display: flex;
      position: absolute;
      left: 25%;
      justify-content: space-around;
      height: 10%;
      align-items: center;
      color: #fff;
      div{
        cursor:pointer
      }
    }

    .background_img {
      width: 94%;
      height: 100%;
      padding: 3em;
      // background: url("../assets/img/box1.png") no-repeat;
      background-size: 100%;
    }

    .ECharts_box {
      width: 100%;
      height: 100%;

      .time_title {
        width: 100%;
        height: 12%;

        .left {
          width: 50%;
          /*height: 100%;*/
          float: left;
          margin-top: 3.5%;
          .text_icon {
            display: inline-block;
            width: 40px;
            font-size: 1em;
            text-align: center;
            color: white;
          }
        }

        .right {
          width: 50%;
          /*height: 100%;*/
          float: right;
          margin-top: 3%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }

      .ECharts {
        width: 100%;
        height: 100%;
        margin-top: 1%;
        display: flex;

        .ECharts_left {
          width: 25%;
          height: 100%;
          float: left;
          margin-top: 2%;
          position: relative;

          .ECharts_left_top {
            position: relative;
            width: 100%;
            height: 20%;
            background: url("../assets/TaskCompletionRate/title1.png") no-repeat;
            background-size: 100% 98%;

            .ECharts_left_top_con {
              position: absolute;
              display: flex;
              flex-wrap: wrap;
              left: 10%;
              top: 30%;
              color: #fff;
            }
            .ECharts_left_top_con > div {
              width: 50%;
              margin-top: 3%;
            }
          }
          .ECharts_left_center {
            position: relative;
            width: 100%;
            height: 33%;
            margin-top: 10%;
            background: url("../assets/TaskCompletionRate/title2.png") no-repeat;
            background-size: 100% 98%;
            .ECharts_left_center_body {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 6%;
              .ECharts_left_center_body_title {
                display: flex;
                justify-content: space-around;
                color: #fff;
                font-size: 1em;
              }
              .left_body {
                position: absolute;
                width: 100%;
                top: 15%;
              }
              .left_body_img {
                position: absolute;
                bottom: 15%;
                left: 50%;
              }
              .ECharts_left_center_body_body {
                display: flex;
                justify-content: space-around;
                color: #fff;
                font-size: 1em;
                height: 3em;
                span {
                  width: 33%;
                  text-align: center;
                }
              }
            }
          }
          .ECharts_left_bottom {
            position: relative;
            width: 100%;
            height: 30%;
            background: url("../assets/TaskCompletionRate/title3.png") no-repeat;
            background-size: 100% 100%;
            .ECharts_left_bottom_title {
              font-size: 0.7em;
              position: absolute;
              right: 20%;
            }
          }
        }
        .ECharts_center {
          width: 30%;
          height: 87%;
          margin-top: 2.2%;
          .ECharts_center_top,
          .ECharts_center_bottom {
            width: 100%;
            height: 50%;
            position: relative;
            background: url("../assets/TaskCompletionRate/title4.png") no-repeat;
            background-size: 100% 100%;
            .ECharts_center_top_title {
              position: absolute;
              right: 20%;
              top: 10%;
              display: flex;
              flex-direction: column;
            }
          }
        }

        .ECharts_right {
          width: 50%;
          height: 100%;
          float: right;

          .ECharts_right_top {
            position: relative;
            display: flex;
            width: 100%;
            height: 15%;
            background: red;
            background: url("../assets/TaskCompletionRate/title5.png") no-repeat;
            background-size: 105% 100%;

            .ECharts_right_top_con {
              position: absolute;
              display: flex;
              width: 85%;
              text-align: center;
              justify-content: space-between;
              top: 60%;
              color: #fff;
              left: 8%;
            }
          }
          .ECharts_right_center {
            position: relative;
            width: 100%;
            height: 50%;
            background: url("../assets/TaskCompletionRate/title4.png") no-repeat;
            background-size: 100% 100%;
            .ECharts_center_top_title {
              position: absolute;
              right: 20%;
              top: 10%;
              display: flex;
              flex-direction: column;
            }
          }
          .ECharts_right_bottom {
            position: relative;
            width: 100%;
            height: 25%;
            background: url("../assets/TaskCompletionRate/title6.png") no-repeat;
            background-size: 100% 100%;
          }
        }
      }
    }
  }
</style>
