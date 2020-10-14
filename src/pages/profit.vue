<template>
  <div style="height: 100%;width: 100%">
    <div class="con" :style="{ height: height }">
      <div class="itemer">{{ itemer }}</div>
      <div class="background_img">
        <div class="ECharts_box">
          <div class="time_title">
            <div class="left">
              <span class="text_icon">从</span>
              <el-date-picker
                      v-model="value2"
                      type="daterange"
                      align="right"
                      unlink-panels
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>

            <div class="right">
              <el-button @click="click_picker('y')">年</el-button>
              <el-button @click="click_picker('m')">月</el-button>
              <el-button @click="click_picker('d')">日</el-button>
            </div>
          </div>
          <div class="ECharts">
            <div class="ECharts_top">
              <div class="ECharts_top_left">
                <div class="ECharts_top_left_top">
                  <div class="title">
                    <p class="title_img" style="margin-left:-2em">
                      <img src="../assets/profit/icon2.png" />
                      <span style="margin-left:.5em">服务区完成率</span>
                    </p>
                    <p style="font-size:.8em;margin-top:.2em">
                      {{ wfcwcl.name }}完成
                    </p>
                    <p style="font-size:1em;margin-top:.3em;color:#01c1af">
                      {{ wfcwcl.bai }}
                    </p>
                  </div>
                  <div id="ECharts_top_left_top"></div>
                </div>
                <div class="ECharts_top_left_bottom">
                  <div class="title">
                    <p class="title_img" style="margin-left:-2em">
                      <img src="../assets/profit/icon1.png" />
                      <span style="margin-left:.5em">营业完成率</span>
                    </p>
                    <p style="font-size:.8em;margin-top:.2em">
                      {{ spwcl.name }}完成
                    </p>
                    <p style="font-size:1em;margin-top:.3em;color:#f84f4c">
                      {{ spwcl.bai }}
                    </p>
                  </div>
                  <div id="ECharts_top_left_bottom"></div>
                </div>
              </div>
              <div class="ECharts_top_center">
                <div class="ECharts_bottom_left_title">
                  <img src="../assets/profit/title.png" />
                </div>
                <div id="ECharts_top_center"></div>
              </div>
              <div class="ECharts_top_right">
                <div class="ECharts_top_right_top">
                  <div class="title">
                    <p class="title_img" style="margin-left:-2em">
                      <img src="../assets/profit/icon3.png" />
                      <span style="margin-left:.5em">营业完成率</span>
                    </p>
                    <p style="font-size:.8em;margin-top:.2em">
                      {{ yywcl.name }}完成
                    </p>
                    <p style="font-size:1em;margin-top:.3em;color:#0c61f9">
                      {{ yywcl.bai }}
                    </p>
                  </div>

                  <div id="ECharts_top_right_top"></div>
                </div>
                <div class="ECharts_top_right_bottom">
                  <div class="title">
                    <p class="title_img" style="margin-left:-2em">
                      <img src="../assets/profit/icon4.png" />
                      <span style="margin-left:.5em">营业完成率</span>
                    </p>
                  </div>
                  <div id="ECharts_top_right_bottom"></div>
                </div>
              </div>
            </div>
            <div class="ECharts_bottom">
              <div class="ECharts_bottom_left">
                <div id="ECharts_bottom_left"></div>
              </div>
              <div class="ECharts_bottom_right">
                <div class="ECharts_bottom_right_title">
                  <span
                          style="color: #21b1d4"
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
                <div id="ECharts_bottom_right"></div>
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
        // 当没有数据的时候显示的
        title: {
          text: "暂无数据",
          x: "center",
          y: "center",
          textStyle: {
            color: "#fff",
            fontWeight: "1000",
            fontSize: 30,
          },
        },
        // 服务区完成率
        wfcwcl: { name: "小吃", bai: "30%" },
        // 营业完成率
        spwcl: { name: "小吃", bai: "20%" },
        // 营业完成率
        yywcl: { name: "e98", bai: "20%" },
        // 饼图
        lrcolor: [
          { is: true, color: "#f600ff", value: "传媒" },
          { is: true, color: "#2d48ee", value: "能源" },
          { is: true, color: "#29fdb0", value: "服务区" },
          { is: true, color: "#ff726f", value: "商业" },
        ],
        // 保存折线图的数据
        charts: {
          names: ["传媒", "能源", "服务区", "商业"],
          lineX: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          value: [
            [40, 30, 3, 52, 9, 2, 20, 3, 52, 9, 2, 20],
            [3, 5, 8, 12, 3, 5, 10, 3, 52, 9, 2, 20],
            [80, 20, 30, 2, 90, 2, 10, 3, 52, 9, 2],
            [30, 50, 8, 10, 30, 50, 50, 3, 52, 9, 2],
          ],
        },
        ischarts: {
          names: ["传媒", "能源", "服务区", "商业"],
          lineX: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          value: [
            [40, 30, 3, 52, 9, 2, 20, 3, 52, 9, 2, 20],
            [3, 5, 8, 12, 3, 5, 10, 3, 52, 9, 2, 20],
            [80, 20, 30, 2, 90, 2, 10, 3, 52, 9, 2],
            [30, 50, 8, 10, 30, 50, 50, 3, 52, 9, 2],
          ],
        },
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
        itemer: "",
        timer: "",
      };
    },
    methods: {
      // 折线图的切换跟显示
      lineChartTitle(val, index, is) {
        console.log(val, index, is);
        if (is) {
          this.charts.value[index] = [];
          this.ECharts_bottom_right();
          this.lrcolor[index].is = false;
        } else {
          this.charts.value[index] = this.ischarts.value[index];
          this.ECharts_bottom_right();
          this.lrcolor[index].is = true;
        }
      },
      // 点击年月日的时候1
      click_picker(type) {
        // this.ECharts_top_left_top();
        // this.ECharts_gas_init_pie();
      },
      // 左上第一个
      ECharts_top_left_top() {
        let ECharts_top_left_top = this.$echarts.init(
                document.getElementById("ECharts_top_left_top")
        );
        let this_ = this;
        var data = [
          {
            name: "小吃",
            value: 80,
          },
          {
            name: "房租",
            value: 87.8,
          },
          {
            name: "KFC",
            value: 71,
          },
          {
            name: "烟酒",
            value: 80,
          },
          {
            name: "饮料",
            value: 66,
          },
          {
            name: "零食",
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
            formatter: function(val) {
              this_.wfcwcl.name = val[0].name;
              this_.wfcwcl.bai = val[0].value + "%";
              return val[0].name + "<br>" + val[0].value + "%";
            },
            axisPointer: {
              type: "line",
              lineStyle: {
                opacity: 0,
              },
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "5%",
            right: "20%",
            bottom: "10%",
            top: "25%",
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
                  color: "#0c3b71",
                },
              },
              axisLabel: {
                show: true,
                color: "#05acae",
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
              min: 0,
              max: 100,
              interval: 50,
              axisLine: {
                lineStyle: {
                  color: "#0c3b71",
                },
              },
              axisLabel: {
                color: "#05acae",
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
              barWidth: "30%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 0,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#01c1af",
                    },
                    {
                      offset: 1,
                      color: "#0286ff",
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
              barGap: "-135%",
              data: [100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
              zlevel: 9,
            },
          ],
        };

        ECharts_top_left_top.setOption(option);
      },
      // 左上第二个
      ECharts_top_left_bottom() {
        let ECharts_top_left_bottom = this.$echarts.init(
                document.getElementById("ECharts_top_left_bottom")
        );

        console.log(this);
        let this_ = this;
        let title = {
          // text:'{a| 动态数据}',
          // x:'80%',
          // y:'10%',
          // textStyle:{
          //   color:'#fff',
          //   fontSize:15,
          //   rich:{
          //     a:{
          //       color:"#fff"
          //     }
          //   }
          // },
          // subtext:'快餐店完成\n',
          // subtextStyle:{
          //   color:'#fff',
          //   // align:'center',
          //   // varticalAlign:'middle',
          //   // rich:{
          //   //   a:{}
          //   // }1
          // }
        };
        let option = {
          title: title,
          tooltip: {
            trigger: "axis",
            formatter: function(val) {
              this_.spwcl.name = val[0].name;
              this_.spwcl.bai = val[0].value + "%";
              return val[0].name + "<br>" + val[0].value + "%";
            },
          },
          grid: {
            left: "5%",
            right: "20%",
            top: "20%",
            bottom: "15%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: [
              "小吃",
              "小卖部",
              "早餐店",
              "快餐店",
              "服装店",
              "美妆店",
              "充电宝",
            ],
            axisLine: {
              lineStyle: {
                color: "#04cfc6",
              },
            },
          },
          yAxis: {
            type: "value",
            min: 0,
            max: 100,
            interval: 25,
            axisLine: {
              lineStyle: {
                color: "#04cfc6",
              },
            },
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value}%",
              textStyle: {
                color: "#04cfc6",
              },
            },
            //去掉网格
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              data: [80, 60, 80, 50, 12, 13, 20],
              type: "line",
              itemStyle: {
                color: "green",
                normal: {
                  color: "#ff726f",
                  lineStyle: {
                    color: "#ff726f",
                  },
                },
                emphasis: {
                  color: "#f84f4c",
                },
              },
            },
          ],
        };

        ECharts_top_left_bottom.setOption(option);
      },
      //1
      ECharts_top_center() {
        let ECharts_top_center = this.$echarts.init(
                document.getElementById("ECharts_top_center")
        );
        let option = {
          color: ["#29fdb0", "#00e9ff", "#ff726f", "#279fff"],
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
              fontSize: 16,
            },
          },
          legend: {
            data: ["能源", "服务区", "商业", "传媒"],
            orient: "vertical",
            right: "5%",
            top: "13%",
            itemWidth: 20,
            itemHeight: 20,
            itemGap: 10,
            textStyle: {
              color: "#",
              fontSize: 16,
            },
          },
          series: [
            {
              name: "利润比例",
              type: "pie",
              clockwise: false,
              startAngle: 90,
              radius: "40%",
              center: ["45%", "50%"],
              hoverAnimation: false,
              roseType: "radius", //area
              data: [
                {
                  value: 335,
                  name: "能源",
                },
                {
                  value: 310,
                  name: "服务区",
                },
                {
                  value: 234,
                  name: "商业",
                },
                {
                  value: 135,
                  name: "传媒",
                },
              ],
              itemStyle: {
                normal: {
                  borderColor: "#273454",
                  borderWidth: "0",
                },
              },
              label: {
                show: true,
                position: "outside",
                formatter: "{a|{b}：{d}%}\n{hr|}",
                rich: {
                  hr: {
                    backgroundColor: "t",
                    borderRadius: 100,
                    width: 0,
                    height: 10,
                    padding: [3, 3, 0, -16],
                    shadowColor: "#1c1b3a",
                    shadowBlur: 1,
                    shadowOffsetX: "0",
                    shadowOffsetY: "2",
                  },
                  a: {
                    padding: [-35, 15, -20, 5],
                  },
                },
              },
              labelLine: {
                normal: {
                  length: 60,
                  length2: 10,
                  lineStyle: {
                    width: 1,
                  },
                },
              },
              // label: {
              //     normal: {
              //         show: true,
              //         position: 'inside',
              //         formatter: '{d}%',
              //         formatter: function(data){
              //             return data.percent.toFixed(0)+"%";
              //         },
              //         textStyle : {
              //             align : 'center',
              //             baseline : 'middle',
              //             fontFamily : '微软雅黑',
              //             fontSize : 15,
              //             fontWeight : 'bolder'
              //         }
              //     },
              // },
            },
          ],
        };

        ECharts_top_center.setOption(option);
      },
      ECharts_top_right_top() {
        let ECharts_top_right_top = this.$echarts.init(
                document.getElementById("ECharts_top_right_top")
        );
        var data = [
          {
            name: "e98",
            value: 80,
          },
          {
            name: "柴油",
            value: 87.8,
          },
          {
            name: "92",
            value: 71,
          },
          {
            name: "95",
            value: 80,
          },
          {
            name: "98",
            value: 66,
          },
          {
            name: "E95",
            value: 80,
          },
          {
            name: "E92",
            value: 80,
          },
        ];
        let this_ = this;
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
            formatter: function(val) {
              this_.yywcl.name = val[0].name;
              this_.yywcl.bai = val[0].value + "%";
              return val[0].name + "<br>" + val[0].value + "%";
            },
          },
          legend: {
            data: ["直接访问", "背景"],
            show: false,
          },
          grid: {
            left: "5%",
            right: "20%",
            bottom: "10%",
            top: "25%",
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
                  color: "#0c3b71",
                },
              },
              axisLabel: {
                show: true,
                color: "#04cfc6",
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
              min: 0,
              max: 100,
              interval: 25,
              axisLine: {
                lineStyle: {
                  color: "#0c3b71",
                },
              },
              axisLabel: {
                color: "#04cfc6",
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
              barWidth: "30%",
              xAxisIndex: 0,
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: "#00c0bd",
                    },
                    {
                      offset: 1,
                      color: "#012bfe",
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
              barGap: "-135%",
              data: [100, 100, 100, 100, 100, 100, 100],
              itemStyle: {
                normal: {
                  color: "rgba(255,255,255,0.1)",
                },
              },
              zlevel: 9,
            },
          ],
        };

        ECharts_top_right_top.setOption(option);
      },
      ECharts_top_right_bottom() {
        let ECharts_top_right_bottom = this.$echarts.init(
                document.getElementById("ECharts_top_right_bottom")
        );
        var data = {
          city: ["广告牌", "广告", "电视", "新媒体", "印刷", "通信", "电视"],
          num: ["40", "60", "22", "85", "50", "40", "10"],
        };
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              lineStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "rgba(255,255,255,0)", // 0% 处的颜色
                    },
                    {
                      offset: 0.5,
                      color: "rgba(255,255,255,1)", // 100% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "rgba(255,255,255,0)", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          grid: {
            top: "18%",
            left: "12%",
            right: "15%",
            bottom: "25%",
            // containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: true,
              axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                  color: 'color:"#092b5d"',
                },
              },
              axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                  color: "#24c4ff",
                  margin: 15,
                },
                formatter: function(data) {
                  return data;
                },
              },
              axisTick: {
                show: false,
              },
              //去掉网格
              splitLine: {
                show: false,
              },
              data: data.city,
            },
          ],
          yAxis: [
            {
              min: 0,
              max: 100,
              interval: 25,
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#092b5d",
                },
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#092b5d",
                },
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: "#24c4ff",
                },
                formatter: function(value) {
                  if (value === 0) {
                    return value;
                  }
                  return value + "%";
                },
              },
              axisTick: {
                show: false,
              },
              //去掉网格
              splitLine: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: "注册总量",
              type: "line",
              symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              symbolSize: 8,
              lineStyle: {
                normal: {
                  color: "#7c80f4", // 线条颜色
                },
                borderColor: "rgba(0,0,0,.4)",
              },
              itemStyle: {
                color: "rgba(14,30,73,1)",
                borderColor: "#646ace",
                borderWidth: 2,
              },
              label: {
                normal: {
                  show: true,
                  position: "top",
                  formatter: [" {a|{c}%}"].join(","),
                  rich: {
                    a: {
                      color: "#fff",
                      align: "center",
                    },
                  },
                },
              },
              tooltip: {
                show: true,
              },
              areaStyle: {
                //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new this.$echarts.graphic.LinearGradient(
                          0,
                          0,
                          0,
                          1,
                          [
                            {
                              offset: 0,
                              color: "rgba(124, 128, 244,.3)",
                            },
                            {
                              offset: 1,
                              color: "rgba(124, 128, 244, 0)",
                            },
                          ],
                          false
                  ),
                  shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
                  shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
              },
              data: data.num,
            },
          ],
        };
        ECharts_top_right_bottom.setOption(option);
      },
      ECharts_bottom_left() {
        let ECharts_bottom_left = this.$echarts.init(
                document.getElementById("ECharts_bottom_left")
        );
        let option = {
          tooltip: {
            trigger: "axis",
            show: true,
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'1
            },
            formatter: function(prams) {
              // console.log(prams)
              return prams[0].name + ":" + prams[0].value + "万元";
            },
          },
          legend: {
            selectedMode: false,
          },
          grid: {
            left: "5%",
            right: "10%",
            bottom: "10%",
            top: "30%",
            containLabel: true,
          },
          xAxis: {
            name: "(万元)",
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#04cfc6",
              },
            },
            //去掉网格
            splitLine: {
              show: false,
            },
          },
          yAxis: [
            {
              name: "种类",
              splitLine: {
                show: false,
              },
              axisLine: {
                //y轴
                show: true,
                lineStyle: {
                  color: "#04cfc6",
                },
              },
              type: "category",
              axisTick: {
                show: true,
              },
              data: ["商业", "服务区", "传媒", "能源"],
              axisLabel: {},
            },
          ],
          series: [
            {
              // name: "标准化",
              type: "bar",
              barWidth: 20, // 柱子宽度
              label: {
                show: true,
                position: "right", // 位置
                color: "#1CD8A8",
                fontSize: 14,
                fontWeight: "bold", // 加粗
                distance: 5, // 距离
              }, // 柱子上方的数值
              itemStyle: {
                barBorderRadius: [0, 20, 20, 0], // 圆角（左上、右上、右下、左下）
                color: new this.$echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        ["#2447fb", "#2fb9fb"].map((color, offset) => ({
                          color,
                          offset,
                        }))
                ), // 渐变
              },
              data: [320, 302, 341, 374],
            },
          ],
        };

        ECharts_bottom_left.setOption(option);
      },
      ECharts_bottom_right() {
        let ECharts_bottom_right = this.$echarts.init(
                document.getElementById("ECharts_bottom_right")
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
            symbolSize: 10,
            data: charts.value[i],
          };
          lineY.push(data);
        }
        lineY[0].markLine = {
          silent: true,
        };
        let option = {
          tooltip: {
            trigger: "axis",
            formatter: function(prams) {
              let pra = prams[1].name + "月";
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
          },
          grid: {
            top: "25%",
            left: "5%",
            right: "10%",
            bottom: "10%",
            containLabel: true,
          },
          xAxis: {
            name: "月",
            offset: 10,
            type: "category",
            boundaryGap: false,
            data: charts.lineX,

            tooltip: {
              trigger: "axis",
              formatter: "{b}:{c}%",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisLabel: {
              rotate: 0,
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
            min: 0,
            max: 100,
            interval: 25,
            // type: "category", //category
            // data: ["0", "20", "30", "400", "60", "80", "100"],
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

        ECharts_bottom_right.setOption(option);
      },
    },
    mounted() {
      this.height = document.body.clientHeight;
      this.ECharts_top_left_top();
      this.ECharts_top_left_bottom();
      this.ECharts_top_center();
      this.ECharts_top_right_top();
      this.ECharts_top_right_bottom();
      this.ECharts_bottom_left();
      this.ECharts_bottom_right();
      let this_ = this;
      let itemer = new Date();
      this.itemer =
              itemer.getFullYear() +
              "-" +
              (itemer.getMonth() + 1) +
              "-" +
              itemer.getDate() +
              "    " +
              itemer.getHours() +
              ":" +
              itemer.getMinutes();
      this.timer = setInterval(function() {
        let itemer = new Date();
        this_.itemer =
                itemer.getFullYear() +
                "-" +
                (itemer.getMonth() + 1) +
                "-" +
                itemer.getDate() +
                "   " +
                itemer.getHours() +
                ":" +
                itemer.getMinutes();
      }, 1000);
    },
    destroyed() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
  };
</script>

<style scoped lang="less">
  #ECharts_top_left_top,
  #ECharts_top_left_bottom,
  #ECharts_top_center,
  #ECharts_bottom_right,
  #ECharts_top_right_top,
  #ECharts_bottom_left,
  #ECharts_top_right_bottom {
    width: 100%;
    height: 100%;
  }
  .itemer {
    position: absolute;
    right: 5%;
    top: 0.7%;
    font-size: 1.5em;
    color: #fff;
  }
  #ECharts_top_center {
    background: url("../assets/profit/yuan.png") no-repeat;
    background-position: 36%;
    background-size: 50%;
  }
  .title {
    position: absolute;
    right: 5%;
    top: 10%;
    color: #fff;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title_img {
      display: flex;
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
  .con {
    width: 100%;
    height: 100%;
    // background: url("../assets/img") no-repeat;
    background-size: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;

    .background_img {
      width: 100%;
      height: 100%;
      padding: 3em;
      background: url("../assets/profit/body.png") no-repeat;
      background-size: 100%;
    }

    .ECharts_box {
      width: 100%;
      height: 100%;

      .time_title {
        width: 100%;
        height: 10%;
        margin-top: 2%;
        margin-bottom: 2%;
        .left {
          width: 60%;
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
          width: 40%;
          /*height: 100%;*/
          float: right;
          margin-top: 3%;
        }
      }

      .ECharts {
        width: 95%;
        height: 80%;

        .ECharts_top {
          width: 100%;
          height: 54%;
          margin-bottom: 1%;
          display: -webkit-flex;

          .ECharts_top_left,
          .ECharts_top_right,
          .ECharts_top_center {
            width: 33%;
            height: 100%;
            margin: 0 0.5%;
            position: relative;
            .ECharts_bottom_left_title {
              position: absolute;
              left: 12%;
              top: 2%;
            }
          }
          // left的

          .ECharts_top_left > .ECharts_top_left_bottom,
          .ECharts_top_left_top {
            width: 100%;
            height: 50%;
            position: relative;
            background: url("../assets/profit/frame3.png") no-repeat;
            background-size: 100% 110%;
          }
          .ECharts_top_left > .ECharts_top_left_bottom {
            background: url("../assets/profit/frame4.png") no-repeat;
            background-size: 100% 100%;
          }
          .ECharts_top_center {
            background: url("../assets/profit/center.png") no-repeat;
            background-size: 100% 100%;
          }
          // right的
          .ECharts_top_right > .ECharts_top_right_bottom,
          .ECharts_top_right_top {
            width: 100%;
            height: 50%;
            position: relative;
          }
          .ECharts_top_right > .ECharts_top_right_bottom {
            background: url("../assets/profit/frame3.png") no-repeat;
            background-size: 100% 110%;
          }
          .ECharts_top_right > .ECharts_top_right_top {
            background: url("../assets/profit/frame4.png") no-repeat;
            background-size: 100% 100%;
          }
        }

        .ECharts_bottom {
          width: 100%;
          height: 40%;
          display: -webkit-flex;

          .ECharts_bottom_left {
            position: relative;
            width: 50%;
            margin: 0 0.5%;
            background: url("../assets/profit/frame7.png") no-repeat;
            background-size: 100% 100%;
          }
          .ECharts_bottom_right {
            position: relative;
            width: 50%;
            margin-top: -1%;
            background: url("../assets/profit/frame6.png") no-repeat;
            background-size: 100% 106%;
            .ECharts_bottom_right_title {
              position: absolute;
              right: 10%;
              z-index: 8000;
              top: 13%;
            }
          }
        }
      }
    }
  }
</style>
