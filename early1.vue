<!--
 * @Author: xiongqiang xiongqiang@hightop.xin
 * @Date: 2024-03-25 10:57:29
 * @LastEditors: xiongqiang xiongqiang@hightop.xin
 * @LastEditTime: 2024-03-25 18:04:03
 * @FilePath: \emae_web\src\views\point\early1.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div id="main"></div>
</template>
<script>
import Highcharts from "highcharts";
// 引用所需外部资源
import Highcharts3d from "highcharts/highcharts-3d";
import exporting from "highcharts/modules/exporting";
// 注册所需外部资源
Highcharts3d(Highcharts);
exporting(Highcharts);
import * as echarts from "echarts";
import "echarts-gl";
export default {
  data() {
    return {
      // 模拟数据
      dataList: [
        {
          name: "数据一",
          y: 51,
        },
        {
          name: "数据二",
          y: 51,
        },
        {
          name: "数据三",
          y: 32,
        },
        {
          name: "数据四",
          y: 31,
        },
        {
          name: "数据五",
          y: 22,
        },
        {
          name: "数据六",
          y: 24,
        },
        {
          name: "数据七",
          y: 32,
        },
        {
          name: "数据八",
          y: 34,
        },
      ],
      dataListTwo: [
        {
          name: "数据一",
          y: 87,
        },
        {
          name: "数据二",
          y: 86,
        },
        {
          name: "数据三",
          y: 90,
        },
        {
          name: "数据四",
          y: 96,
        },
        {
          name: "数据五",
          y: 86,
        },
        {
          name: "数据六",
          y: 81,
        },
        {
          name: "数据七",
          y: 82,
        },
        {
          name: "数据八",
          y: 88,
        },
      ],
      dataListTherr: [
        {
          name: "数据一",
          y: 123,
        },
        {
          name: "数据二",
          y: 144,
        },
        {
          name: "数据三",
          y: 113,
        },
        {
          name: "数据四",
          y: 131,
        },
        {
          name: "数据五",
          y: 112,
        },
        {
          name: "数据六",
          y: 134,
        },
        {
          name: "数据七",
          y: 132,
        },
        {
          name: "数据八",
          y: 164,
        },
      ],
    };
  },
  mounted() {
    fetch("./1.json")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        // res = res.splice(1, 40);
        var chartDom = document.getElementById("main");
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {},
          backgroundColor: "#fff",
          visualMap: {
            show: false,
            dimension: 2,
            min: 1,
            max: 1,
            inRange: {
              color: [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026",
              ],
            },
          },
          xAxis3D: {
            type: "value",
          },
          yAxis3D: {
            type: "value",
          },
          zAxis3D: {
            type: "value",
          },
          grid3D: {
            viewControl: {
              // projection: 'orthographic'
            },
          },
          series: [
            {
              type: "surface",
              wireframe: {
                // show: false
              },
              //   equation: {
              //     x: {
              //       step: 0.05,
              //     },
              //     y: {
              //       step: 0.05,
              //     },
              //     z: function (x, y) {
              //       if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
              //         return "-";
              //       }
              //       return x;
              //     },
              //   },
              data: [
                [1, 10, 0.015],
                [2, 80, 0.017],
                [3, 20, 0.02],
                [0, 100, 0.015],
                [1, 40, 0.022],
                [2, 100, 0.026],
                [3, 60, 0.032],
              ],
            },
          ],
        };
        myChart.setOption(option);

        option && myChart.setOption(option);
      });
  },
  //   mounted() {
  //     Highcharts.chart("main", {
  //       chart: {
  //         type: "area", //类型
  //         options3d: {
  //           enabled: true, // 是否启用 3D 功能,默认为false
  //           alpha: 15, // 内旋转角度
  //           beta: 30, // 外旋转角度
  //           depth: 200, //3D场景的大小(深度)
  //         },
  //       },
  //       title: {
  //         text: "标题", //标题
  //       },
  //       yAxis: {
  //         title: {
  //           text: "y轴标题",
  //           x: -40, //x方向
  //         },
  //         labels: {
  //           //图例
  //           format: "{value:,.0f} ml",
  //         },
  //         gridLineDashStyle: "Dash", //网格线线条样式，Solid、Dot、Dash
  //       },
  //       xAxis: [
  //         {
  //           visible: false, //加载时，数据序列默认隐藏。
  //         },
  //         {
  //           visible: false, //加载时，数据序列默认隐藏。
  //         },
  //         {
  //           visible: false, //加载时，数据序列默认隐藏。
  //         },
  //       ],
  //       plotOptions: {
  //         area: {
  //           depth: 100,
  //           marker: {
  //             enabled: false,
  //           },
  //           states: {
  //             inactive: {
  //               enabled: false,
  //             },
  //           },
  //         },
  //       },
  //       tooltip: {
  //         valueSuffix: "ml", //提示框内容拼接的文字
  //       },
  //       series: [
  //         {
  //           name: "数据一", //名称
  //           lineColor: "rgb(180,90,50)", //线条颜色
  //           color: "rgb(200,110,50)", //文字颜色
  //           fillColor: "rgb(200,110,50)", //背景色
  //           data: this.dataList, //数据
  //         },
  //         {
  //           name: "数据四",
  //           xAxis: 1,
  //           lineColor: "rgb(120,160,180)",
  //           color: "rgb(140,180,200)",
  //           fillColor: "rgb(140,180,200)",
  //           data: this.dataListTwo,
  //         },
  //         {
  //           name: "数据三",
  //           xAxis: 2,
  //           lineColor: "rgb(200, 190, 140)",
  //           color: "rgb(200, 190, 140)",
  //           fillColor: "rgb(230, 220, 180)",
  //           data: this.dataListTherr,
  //         },
  //       ],
  //     });
  //   },
};
// var ROOT_PATH = 'https://echarts.apache.org/examples'
</script>
<style scoped lang="scss">
div {
  color: #fff;
  height: 811px;
}
</style>
