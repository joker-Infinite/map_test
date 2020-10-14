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
              <div class="ECharts_title">
                <span style="color:#eee;fontSize:1.2em">请选择:</span>
                <span
                        @click="oils(item.name)"
                        :style="{ color: item.color }"
                        style="cursor:pointer"
                        v-for="(item, index) of colorList"
                        :key="index"
                >
                  <i class="i_list" :style="{ background: item.color }"></i
                  >{{ item.name }}</span
                >
              </div>
            </div>
          </div>
          <div class="ECharts">
            <div class="ECharts_left">
              <div class="con_bar">
                <div class="title_ECharts">
                  <p style="margin-top:1em">
                    <span class="dot"
                    ><i style="background: #3ea2ff;"></i> 车流订单转换率<i
                            style="background: #d285fd; margin-left:1em"
                    ></i>
                      商品类别转化率</span
                    >
                  </p>
                </div>
                <div class="con_bars">
                  <div id="ECharts_gas_i1"></div>
                </div>
              </div>
              <div class="con_bar">
                <div class="title_ECharts">
                  <p style="margin-top:1em">
                    <span class="dot"
                    ><i style="background: #3ea2ff;"></i> 车流订单转换率<i
                            style="background: #d285fd; margin-left:1em"
                    ></i>
                      商品类别转化率</span
                    >
                  </p>
                </div>
                <div class="con_bars">
                  <div id="ECharts_gas_i12"></div>
                </div>
              </div>
            </div>
            <div class="ECharts_right">
              <div class="con_bar">
                <div class="con_bars">
                  <div id="ECharts_gas_i2"></div>
                </div>
                <div class="bottom_bar">
                  <div
                          style="height: 20px;font-size:1em"
                          :style="{ color: item.color }"
                          v-for="(item, index) of item"
                          :key="index"
                  >
                    <i
                            :style="{ backgroundColor: item.color }"
                            style="background: white;width: 0.625em; height: 0.625em;border-radius: 100%;display: inline-block;font-size:1em"
                    ></i>
                    {{ item.name }}
                  </div>
                </div>
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
          { color: "#f65456", name: "E98" },
          { color: "#6ad1f4", name: "柴油" },
          { color: "#f1f000", name: "92" },
          { color: "#55cd65", name: "95" },
          { color: "#517cff", name: "98" },
          { color: "#7c6cff", name: "E95" },
        ],
        itemer: "",
        timer: "",
      };
    },
    methods: {
      oils(type) {
        console.log(type);
      },
      // 柱形图
      click_picker(type) {
        this.ECharts_gas_init();
        this.ECharts_gas_init_pie();
      },
      ECharts_gas_init() {
        let ECharts_gas_i1 = this.$echarts.init(
                document.getElementById("ECharts_gas_i1")
        );
        let data = [12, 5445, 800, 4, 54, 87];
        //  var data = [
        //   [13.2, 1.11, 13.6, 9284, 64138, 2237],
        //   [1555.26, 1.31, 16.68, 10331, 91580, 1909],
        //   [14.23, 1.31, 21.13, 10873, 94964, 2966],
        // ];
        let prev = data.reduce((prev, val, index) => {
          return prev + val;
        }, 0);
        data.forEach((val, index) => {
          data[index] = ((val / prev) * 100).toFixed(2);
        });
        var years = ["<", ">"];
        var jdData = [
          ["1", "2", "3", "4", "5", "6"],
          ["1", "2", "3", "4", "5", "6"],
          ["1", "2", "3", "4", "5", "6"],
        ];

        let option = {
          baseOption: {
            barWidth: 20,
            timeline: {
              data: years,
              axisType: "value",
              autoPlay: false,
              left: "10%",
              right: "10%",
              bottom: "-5%",
              width: "80%",
              label: {
                normal: {
                  textStyle: {
                    color: "#fff",
                  },
                },
                emphasis: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              symbolSize: 0,
              lineStyle: {
                color: "#fff",
              },

              controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                showPlayBtn: false,
                normal: {
                  color: "#fff",
                  borderColor: "#fff",
                },
                emphasis: {
                  color: "#000",
                  borderColor: "green",
                },
              },
            },
            tooltip: {
              trigger: "axis",
            },
            calculable: true,
            grid: {
              left: "5%",
              right: "8%",
              bottom: "8%",
              top: "12%",
              containLabel: true,
            },
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            yAxis: [
              {
                min: 0,
                max: 100,
                interval: 10,
                offset: "5",
                type: "value",
                name: "百分比",
                nameTextStyle: {
                  color: "#fff",
                },
                axisLabel: {
                  formatter: function(params) {
                    return params + "%";
                  },
                  //rotate:45,
                  textStyle: {
                    fontSize: 12,
                    color: "#fff",
                  },
                  interval: 0,
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff",
                  },
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: "#fff",
                  },
                },
              },
            ],
            xAxis: [
              {
                type: "category",
                name: "",
                data: "",
                splitNumber: 8,
                nameTextStyle: {
                  color: "#fff",
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff",
                  },
                },
                axisLabel: {
                  formatter: "{value} ",
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: "#ccc",
                  },
                },
              },
            ],
            series: [
              {
                name: "车流订单转换率",
                type: "bar",

                itemStyle: {
                  normal: {
                    show: true,
                    // barBorderRadius: 30, //设置柱状图为圆角
                    position: "inside",
                    color: "#41bbe9",
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#07f3ff" }, //柱图渐变色
                      { offset: 1, color: "#0774ff" }, //柱图渐变色
                    ]),
                  },
                },
                data: data,
                z: 1,
              },
              {
                name: "商品类别转化率",
                type: "bar",
                itemStyle: {
                  normal: {
                    // barBorderRadius: 30, //设置柱状图为圆角
                    position: "inside",
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: "#c600c1" }, //柱图渐变色
                      { offset: 1, color: "#3c02c6" }, //柱图渐变色
                    ]),
                  },
                },
                data: [12, 456, 455, 400, 588, 5555, 3333, 5555],
                z: 1,
              },
            ],
          },
          options: [],
        };
        for (var n = 0; n < years.length; n++) {
          var res = [];

          //alert(jdData.length);
          for (var j = 0; j < data[n].length; j++) {
            res.push({
              name: jdData[n][j],
              value: data[n][j],
            });
          }

          // res.sort(function(a, b) {
          //     return b.value - a.value;
          //   })
          //   .slice(0, 6);

          // res.sort(function(a, b) {
          //   return a.value - b.value;
          // });
          var res1 = [];
          var res2 = [];

          //console.log(res);
          for (var t = 0; t < res.length; t++) {
            res1[t] = res[t].name;
            res2[t] = res[t].value;
          }
          option.options.push({
            xAxis: {
              data: res1,
            },
            series: [
              {
                data: res2,
              },
            ],
          });
        }

        ECharts_gas_i1.setOption(option);
      },
      // 折线图
      ECharts_gas_init_line() {
        let ECharts_gas_i12 = this.$echarts.init(
                document.getElementById("ECharts_gas_i12")
        );
        var years = ["<", ">"];
        var jdData = [
          [
            "2020年3月",
            "2020年4月",
            "2020年5月",
            "2020年6月",
            "2020年7月",
            "2020年8月",
            "2020年9月",
          ],
          [
            "2021年3月",
            "2021年4月",
            "2021年5月",
            "2021年6月",
            "2022年7月",
            "2023年8月",
            "2024年9月",
          ],
        ];
        var data = [
          [13.2, 1.11, 13.6, 9, 64, 22, 47],
          [15.26, 1.31, 16.68, 10, 91, 9, 69],
        ];
        var datas = [
          [14.23, 1.31, 21.13, 13, 94, 66, 48],
          [13.2, 1.11, 13.6, 9, 64, 22, 47],
        ];

        let option = {
          baseOption: {
            barWidth: 20,
            formatter: function(params) {
              // console.log(params)
              return params[0].name+'<br/>'+params[0].marker+ params[0].seriesName+":" +params[0].value+'%'+'<br/>'+params[1].marker+ params[1].seriesName+":" +params[1].value+'%'
            },
            timeline: {
              data: years,
              axisType: "value",
              autoPlay: false,
              playInterval: 5000,
              left: "10%",
              right: "10%",
              bottom: "-2%",
              width: "80%",
              label: {
                normal: {
                  textStyle: {
                    color: "#ff8800",
                  },
                },
                emphasis: {
                  textStyle: {
                    color: "#fff",
                  },
                },
              },
              symbolSize: 0,
              lineStyle: {
                color: "#fff",
              },

              controlStyle: {
                showNextBtn: true,
                showPrevBtn: true,
                showPlayBtn: false,
                normal: {
                  color: "green",
                  borderColor: "#ff8800",
                },
                emphasis: {
                  color: "#000",
                  borderColor: "green",
                },
              },
            },
            tooltip: {
              trigger: "axis",
            },
            calculable: true,
            grid: {
              left: "8%",
              right: "8%",
              bottom: "18%",
              top: "10%",
              containLabel: true,
            },
            label: {
              normal: {
                textStyle: {
                  color: "#fff",
                },
              },
            },
            yAxis: [
              {
                min: 0,
                max: 100,
                interval: 10,
                offset: "3",
                type: "value",
                name: "百分比",
                nameTextStyle: {
                  color: "#fff",
                },
                axisLabel: {
                  formatter: function(params) {
                    return params + "%";
                  },
                  //rotate:45,
                  textStyle: {
                    fontSize: 12,
                    color: "#fff",
                  },
                  interval: 0,
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff",
                  },
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: "#fff",
                  },
                },
              },
            ],
            xAxis: [
              {
                type: "category",
                name: "",
                data: "",
                splitNumber: 1,
                nameTextStyle: {
                  color: "#fff",
                },
                axisLine: {
                  lineStyle: {
                    color: "#fff",
                  },
                },
                axisLabel: {
                  formatter: "{value} ",
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: "#ccc",
                  },
                },
              },
            ],
            series: [
              {
                name: "车流订单转换率",
                type: "line",

                itemStyle: {
                  normal: {
                    show: true,
                    // barBorderRadius: 30, //设置柱状图为圆角
                    position: "inside",
                    color: "#8b04a2",
                    areaStyle: {
                      //color: '#94C9EC'
                      color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0,
                          color: "rgba(193,0,193,0.3)",
                        },
                        {
                          offset: 1,
                          color: "rgba(193,0,193,0.9)",
                        },
                      ]),
                    },
                  },
                },
                data: data,
                z: 1,
              },
              {
                name: "商品类别转化率",
                type: "line",
                itemStyle: {
                  normal: {
                    // barBorderRadius: 30, //设置柱状图为圆角
                    position: "inside",
                    color:'#94C9EC',
                    areaStyle: {
                      // color: '#94C9EC'
                      color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                          offset: 0,
                          color: "rgba(78,199,224,0.2)",
                        },
                        {
                          offset: 1,
                          color: "rgba(78,199,224,0.9)",
                        },
                      ]),
                    },
                  },
                },
                data: datas,
                z: 1,
              },
            ],
          },
          options: [],
        };
        for (var n = 0; n < years.length; n++) {
          var res = [];
          var ress = [];
          //alert(jdData.length);
          for (var j = 0; j < data[n].length; j++) {
            res.push({
              name: jdData[n][j],
              value: data[n][j],
            });
          }
          for (var j = 0; j < datas[n].length; j++) {
            ress.push({
              name: jdData[n][j],
              value: datas[n][j],
            });
          }

          var res1 = [];
          var res2 = [];
          var res3 = [];
          //console.log(res);
          for (var t = 0; t < res.length; t++) {
            res1[t] = res[t].name;
            res2[t] = res[t].value;
          }
          for (var t = 0; t < ress.length; t++) {
            res3[t] = ress[t].value;
          }
          option.options.push({
            xAxis: {
              data: res1,
            },
            series: [
              {
                data: res2,
              },
              {
                data: res3,
              },
            ],
          });
        }

        ECharts_gas_i12.setOption(option);
      },
      // 桑基图
      ECharts_gas_init_pie() {
        let ECharts_gas_i2 = this.$echarts.init(
                document.getElementById("ECharts_gas_i2")
        );
        let option = {
          color: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#d1e5f0",
            "#92c5de",
            "#4393c3",
            "#2166ac",
            "#1b58a4",
          ],
          tooltip: {
            trigger: "item",
            triggerOn: "mousemove",
          },
          animation: true,
          series: [
            {
              type: "sankey",
              top: "5%",
              bottom: "5%",
              left: "5%",
              right: "5%",
              focusNodeAdjacency: "allEdges",
              data: [
                { name: "a" },
                { name: "b" },
                { name: "a1" },
                { name: "b1" },
                { name: "c" },
              ],
              links: [
                { source: "a", target: "a1", value: 1000 },
                { source: "a", target: "b1", value: 3000 },
                { source: "b1", target: "a1", value: 100 },
                { source: "b1", target: "c", value: 254 },
                { source: "b", target: "c", value: 5441 },
              ],
              orient: "vertical",
              label: {
                position: "top",
              },
              lineStyle: {
                color: "source",
                curveness: 0.5,
              },
            },
          ],
        };

        ECharts_gas_i2.setOption(option);
      },
    },
    mounted() {
      // 柱形图
      this.ECharts_gas_init();
      // 折线图
      this.ECharts_gas_init_line();
      // 商基图
      this.ECharts_gas_init_pie();
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
  .itemer {
    position: absolute;
    right: 5%;
    top: 0.7%;
    font-size: 1.5em;
    color: #fff;
  }
  .ECharts_title {
    // position: absolute;
    text-align: right;
    right: 10px;
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
    background: url("../assets/petrolStation/body.png") no-repeat;
    background-size: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;

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
        height: 83%;

        .ECharts_left {
          width: 50%;
          height: 100%;
          float: left;
          margin-top: 2.5%;
          .con_bar {
            width: 98%;
            height: 45%;
            position: relative;
            // background: url("../assets/img/box2.png") no-repeat;
            background: url("../assets/petrolStation/rectangle.png") no-repeat;
            background-size: 100%;

            overflow: hidden;
            margin-left: 1.5%;
            /*border: 1px solid #38d;*/
            /*border-top: none;*/
            /*box-shadow: 0 0 2px #38d inset;*/

            .con_bars {
              height: 85%;
              width: 95%;
              margin-top: 5%;
              margin-left: 5%;

              #ECharts_gas_i1 {
                width: 100%;
                height: 95%;
              }
              #ECharts_gas_i12 {
                width: 100%;
                height: 95%;
              }
            }

            .title_ECharts {
              width: 100%;
              height: 20%;
              position: absolute;
              top: 1em;
              left: 0;
            }

            .title_ECharts > p {
              height: 100%;
              width: 100%;
              position: relative;
            }

            .title_ECharts > p > span:first-child {
              font-size: 1em;
              font-family: "幼圆";
              line-height: 1;
              padding-left: 1.25em;
              margin-left: 0.625em;
              color: white;
              font-weight: 700;
              /*background: url("../assets/img/icon2.png") no-repeat;*/
              /*background-size: 0.9375em;*/
            }

            .title_ECharts > p > .dot {
              font-size: 1em;
              margin-right: 2em;
              color: white;
              font-family: "幼圆";
              display: inline-block;
              width: 40%;
              text-align: right;
              height: 0.9375em;
              bottom: 2.5em;
              right: 5%;
              position: absolute;
              top: 10%;
            }

            .title_ECharts > p > .dot > i {
              width: 0.625em;
              height: 0.625em;
              display: inline-block;
              border-radius: 100%;
              font-size: 1em;
            }
          }
        }

        .ECharts_right {
          width: 50%;
          height: 100%;
          float: right;

          .con_bar {
            width: 98%;
            height: 100%;
            position: relative;
            // background: url("../assets/img/box2.png") no-repeat;

            overflow: hidden;
            margin-left: 1%;

            /*border: 1px solid #38d;*/
            /*border-top: none;*/
            /*box-shadow: 0 0 2px #38d inset;*/
            .con_bars {
              background: url("../assets/petrolStation/square.png") no-repeat;
              background-size: 100%;
              height: 90%;
              width: 95%;

              margin-top: 5%;
              margin-left: 5%;

              #ECharts_gas_i2 {
                width: 100%;
                height: 100%;
              }
            }

            .title_ECharts {
              width: 100%;
              height: 20%;
              position: absolute;
              top: 1em;
              left: 0;
            }

            .title_ECharts > p {
              height: 100%;
              width: 100%;
              position: relative;
            }

            .title_ECharts > p > span:first-child {
              font-size: 20px;
              font-family: "幼圆";
              line-height: 1;
              padding-left: 1.25em;
              margin-left: 0.625em;
              color: white;
              font-weight: 700;
              /*background: url("../assets/img/icon2.png") no-repeat;*/
              /*background-size: 0.9375em;*/
            }

            .title_ECharts > p > .dot {
              font-size: 0.75em;
              color: white;
              font-family: "幼圆";
              display: inline-block;
              width: 30%;
              height: 0.9375em;
              bottom: 1em;
              right: 0;
              position: absolute;
            }

            .title_ECharts > p > .dot > i {
              width: 0.625em;
              height: 0.625em;
              display: inline-block;
              border-radius: 100%;
            }

            .bottom_bar {
              width: 100%;
              height: 1em;
              position: absolute;
              bottom: 10%;
              left: 0;
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              flex-wrap: nowrap;
            }
          }
        }
      }
    }
  }
</style>
