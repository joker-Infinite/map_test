<template>
  <div class="bottom_box">
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small1"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small2"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small3"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small4"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small5"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small6"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small7"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small8"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small9"></div>
        </div>
      </div>
    </div>
    <div class="bar_box">
      <div class="con_bar">
        <div class="title_ECharts">
          <p>
            <span>四大板块现金流 >></span>
            <span class="dot">
              <i style="background: #3ea2ff"></i> 收入
              <i style="background: #d285fd"></i> 流出
            </span>
          </p>
        </div>
        <div class="con_bars">
          <div id="ECharts_small10"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomBarGraph",
  data() {
    return {};
  },
  methods: {
    barInit() {
      let ECharts_small1 = this.$echarts.init(
        document.getElementById("ECharts_small1")
      );
      let ECharts_small2 = this.$echarts.init(
        document.getElementById("ECharts_small2")
      );
      let ECharts_small3 = this.$echarts.init(
        document.getElementById("ECharts_small3")
      );
      let ECharts_small4 = this.$echarts.init(
        document.getElementById("ECharts_small4")
      );
      let ECharts_small5 = this.$echarts.init(
        document.getElementById("ECharts_small5")
      );
      let ECharts_small6 = this.$echarts.init(
        document.getElementById("ECharts_small6")
      );
      let ECharts_small7 = this.$echarts.init(
        document.getElementById("ECharts_small7")
      );
      let ECharts_small8 = this.$echarts.init(
        document.getElementById("ECharts_small8")
      );
      let ECharts_small9 = this.$echarts.init(
        document.getElementById("ECharts_small9")
      );
      let ECharts_small10 = this.$echarts.init(
        document.getElementById("ECharts_small10")
      );
      let option = {
        // title: {
        //     text: '无x，y轴线及刻度线',
        //     subtext: '柱形图圆角'
        // },
        barWidth: 5, //设置柱状图的粗细
        xAxis: [
          {
            type: "category",
            data: [
              {
                value: "一月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "二月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "三月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "四月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "五月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "六月",
                textStyle: {
                  fontSize: "12px"
                }
              },
              {
                value: "七月",
                textStyle: {
                  fontSize: "12px"
                }
              }
            ],
            axisLine: {
              //坐标轴轴线
              // show: false
              lineStyle: {
                color: "#fff"
              }
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            axisLabel: {
              //文字换行
              formatter: function(v) {
                return v.split("").join("\n");
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // show: false
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            name: "万元",
            nameTextStyle: {
              fontSize: "12px"
            },
            axisTick: {
              //坐标轴刻度
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        grid: {
          width: "auto",
          height: "auto",
          left: "35px",
          bottom: "30px"
          // left:'30px'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            color: "rgba(143,73,220,0.63)",
            itemStyle: {
              normal: {
                barBorderRadius: 30, //设置柱状图为圆角
                position: "inside"
              }
            }
          }
        ]
      };
      let option_l = {
        grid: {
          width: "auto",
          height: "auto",
          left: "35px",
          bottom: "30px"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            //坐标轴刻度
            show: false
          },
          axisLabel: {
            //文字换行
            formatter: function(v) {
              return v.split("").join("\n");
            }
          }
        },
        yAxis: {
          name: "万元",
          nameTextStyle: {
            fontSize: "12px"
          },
          type: "value",
          axisTick: {
            //坐标轴刻度
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            stack: "总量",
            color: "#29fffa",
            symbolSize: 5,
            smooth: true,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#29fffa",
                borderColor: "#29fffa"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "line",
            stack: "总量",
            color: "#fe5100",
            symbolSize: 5,
            smooth: true,
            symbol: "circle",
            itemStyle: {
              normal: {
                color: "#fe5100",
                borderColor: "#fe5100"
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };

      ECharts_small1.setOption(option);
      ECharts_small2.setOption(option_l);
      ECharts_small3.setOption(option);
      ECharts_small4.setOption(option_l);
      ECharts_small5.setOption(option);
      ECharts_small6.setOption(option_l);
      ECharts_small7.setOption(option);
      ECharts_small8.setOption(option_l);
      ECharts_small9.setOption(option);
      ECharts_small10.setOption(option_l);
    }
  },
  mounted() {
    this.barInit();
  }
};
</script>

<style scoped lang="less">
.bottom_box {
  width: 100%;
  height: 100%;
  /*background: rgba(0, 0, 0, 0.3);*/
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  display: flex;

  .bar_box {
    /*float: left;*/
    width: 9.5%;
    height: 90%;
    overflow: hidden;
    margin: 18px 0 0;

    .title {
      size: 12px;
      margin-left: -1px;
      width: 100%;
      text-indent: 10px;
      background: url("../assets/img/kuang1.png") no-repeat;
      background-size: 101%;
    }

    .con_bar {
      width: 100%;
      height: 100%;
      background: url("../assets/img/zijin_03.png") no-repeat;
      background-size: 100%;
      position: relative;
      /*border: 1px solid #38d;*/
      /*border-top: none;*/
      /*box-shadow: 0 0 2px #38d inset;*/

      .con_bars {
        height: 93%;
        width: 100%;

        #ECharts_small1 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small2 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small3 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small4 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small5 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small6 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small7 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small8 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small9 {
          width: 100%;
          height: 100%;
        }

        #ECharts_small10 {
          width: 100%;
          height: 100%;
        }
      }

      .title_ECharts {
        width: 100%;
        height: 20%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .title_ECharts > p {
        height: 100%;
        width: 100%;
        position: relative;
      }

      .title_ECharts > p > span:first-child {
        font-size: 0.75em;
        font-family: "幼圆";
        line-height: 4;
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
        width: 50%;
        height: 0.9375em;
        bottom: -1em;
        right: 0;
        position: absolute;
      }

      .title_ECharts > p > .dot > i {
        width: 0.625em;
        height: 0.625em;
        display: inline-block;
        border-radius: 100%;
      }
    }
  }

  .bar_box:nth-child(2n-1) > .con_bar > .title_ECharts > p > span:first-child {
    background: url("../assets/img/icon1.png") no-repeat;
    background-size: 0.9375em;
  }

  .bar_box:nth-child(2n) > .con_bar > .title_ECharts > p > span:first-child {
    background: url("../assets/img/icon4.png") no-repeat;
    background-size: 0.9375em;
  }
}
</style>
