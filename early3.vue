<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div>
    <div id="main" style="width: 100%; height: 800px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";

export default {
  data() {
    return {
      dataList: [
        [
          { x: -19.3671169, y: 8.48980713, z: 39.3293228, color: "#f40" },
          { x: -19.3379221, y: 8.55543193, z: 39.9065058, color: "#f40" },
          { x: -19.2223899, y: 8.63769313, z: 39.9142628, color: "#f40" },
          { x: -19.2220199, y: 8.67271713, z: 39.8803078, color: "#f40" },
          { x: -19.3859224, y: 8.60208913, z: 39.7822938, color: "#f40" },
          { x: -19.5396849, y: 8.62328913, z: 39.7930098, color: "#d19a66" },
          { x: -19.7162379, y: 8.58570473, z: 39.7549938, color: "#d19a66" },
          { x: -19.8267799, y: 8.55367423, z: 39.7289388, color: "#d19a66" },
          { x: -19.9120979, y: 8.57241193, z: 39.7225598, color: "#d19a66" },
          { x: -19.8814329, y: 8.55265223, z: 39.8014548, color: "#d19a66" },
          { x: -19.7609239, y: 8.54824533, z: 39.8834368, color: "#d19a66" },
          { x: -19.4153194, y: 8.51060303, z: 39.4808028, color: "#d19a66" },
          { x: -19.5933749, y: 8.58888393, z: 39.9452888, color: "#d19a66" },
          { x: -19.4518237, y: 8.60946713, z: 39.8629118, color: "#d19a66" },
          { x: -19.2025919, y: 8.62064213, z: 39.9476258, color: "#d19a66" },
          { x: -19.2665529, y: 8.61578213, z: 39.7705748, color: "#d19a66" },
          { x: -19.2747564, y: 8.68290313, z: 39.7950608, color: "#d19a66" },
          { x: -19.3395638, y: 8.67315313, z: 39.8468358, color: "#d19a66" },
          { x: -19.4389124, y: 8.63819913, z: 39.9464368, color: "#d19a66" },
          { x: -19.5246719, y: 8.61607213, z: 39.8949668, color: "#d19a66" },
          { x: -19.5677759, y: 8.57023503, z: 39.9102678, color: "#d19a66" },
          { x: -19.6146889, y: 8.56738723, z: 39.9804468, color: "#d19a66" },
          { x: -19.5113229, y: 8.46587303, z: 39.5372398, color: "#d19a66" },
          { x: -19.6331479, y: 8.56387203, z: 39.8829778, color: "#d19a66" },
          { x: -19.5287999, y: 8.62034813, z: 39.8145298, color: "#d19a66" },
          { x: -19.4902099, y: 8.63664413, z: 39.7773568, color: "#d19a66" },
          { x: -19.4534592, y: 8.62562813, z: 39.7096148, color: "#d19a66" },
          { x: -19.4040117, y: 8.57878553, z: 39.7233098, color: "#d19a66" },
          { x: -19.3138313, y: 8.56461583, z: 39.7712058, color: "#d19a66" },
          { x: -19.37699124, y: 8.60383813, z: 39.7007668, color: "#d19a66" },
          { x: -19.37052819, y: 8.62581413, z: 39.7950158, color: "#d19a66" },
          { x: -19.4324741, y: 8.64447613, z: 39.8301638, color: "#d19a66" },
          { x: -19.5391759, y: 8.67387113, z: 39.8095248, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
          { x: 0, y: 2, z: 0, color: "#d19a66" },
        ],
        // [
        //   { x: 0, y: 2, z: 0, color: "#d19a66" },
        //   { x: 1, y: 2, z: 0, color: "#d19a66" },
        //   { x: 1, y: 2, z: 1, color: "#d19a66" },
        //   { x: 2, y: 2, z: 0, color: "#d19a66" },
        //   { x: 3, y: 2, z: 2, color: "#d19a66" },
        //   { x: 4, y: 2, z: 3, color: "#d19a66" },
        //   { x: 5, y: 2, z: 1, color: "#d19a66" },
        //   { x: 6, y: 2, z: 2, color: "#d19a66" },
        //   { x: 7, y: 2, z: 3, color: "#d19a66" },
        //   { x: 8, y: 2, z: 0, color: "#d19a66" },
        //   { x: 9, y: 2, z: 0, color: "#d19a66" },
        //   { x: 12, y: 2, z: 0, color: "#d19a66" },
        //   { x: 19, y: 2, z: 0, color: "#d19a66" },
        // ],
        // [
        //   { x: 1, y: 3, z: 1, color: "#e06c75" },
        //   { x: 2, y: 3, z: 2, color: "#e06c75" },
        //   { x: 3, y: 3, z: 0, color: "#e06c75" },
        //   { x: 4, y: 3, z: 1, color: "#e06c75" },
        //   { x: 5, y: 3, z: 1, color: "#e06c75" },
        //   { x: 6, y: 3, z: 1, color: "#e06c75" },
        //   { x: 7, y: 3, z: 1, color: "#e06c75" },
        //   { x: 8, y: 3, z: 1, color: "#e06c75" },
        //   { x: 9, y: 3, z: 1, color: "#e06c75" },
        // ],
      ],
      selectSpectrogram: null,
    };
  },
  mounted() {
    this.drewLine();
  },
  methods: {
    drewLine() {
      var chart = echarts.init(document.getElementById("main"));
      let option = {
        xAxis3D: {
          type: "value",
          name: "",
          axisLabel: {
            show: true,
            interval: 0, //使x轴都显示
            color: "#fff",
            align: "right",
            verticalAlign: "bottom",
            margin: 10,
          },
        },
        yAxis3D: {
          type: "category",
          name: "",

          axisLabel: {
            show: true,
            interval: 2, //使y轴都显示
            color: "#fff",
          },
        },
        zAxis3D: {
          type: "value",
          name: "",
          data: [39.2, 39.3, 39.4, 39.5, 39.6, 39.7, 39.8, 39.9, 40],
          axisLabel: {
            show: true,
            interval: 0, //使y轴都显示
            color: "#fff",
            margin: 2,
          },
        },

        tooltip: {
          show: true,
          formatter: function (params) {
            let content = `
              SX: ${params.value[0]}<br>
              SY: ${params.value[1]}<br>
              SZ: ${params.value[2]}
          `;
            return content;
          },
        },
        grid3D: {
          boxWidth: 300,
          boxHeight: 140,
          boxDepth: 200,

          axisLine: {
            show: true,
            interval: 0,
            lineStyle: {
              color: "#2c3e50",
            },
          },
          // 控制灵敏度，数值越大越灵敏
          viewControl: {
            distance: 400,
            rotateSensitivity: 10, // 控制旋转的灵敏度
            zoomSensitivity: 10, // 控制缩放的灵敏度
            panSensitivity: 10, // 控制平移的灵敏度
          },
        },
      };

      const convertedDataList = this.dataList.map((series) =>
        series.map((point) => [point.x, point.y, point.z])
      );

      let series = [];
      // 设置颜色数组
      //#region
      const uniqueColorsSet = new Set();
      this.dataList.forEach((series) => {
        // 假设每个系列中的所有点都有相同的颜色，只取系列中第一个点的颜色
        if (series.length > 0) {
          uniqueColorsSet.add(series[0].color);
        }
      });
      const uniqueColorsArray = Array.from(uniqueColorsSet);
      //#endregion

      //#region 设置name数组
      const uniqueName = new Set();
      this.dataList.forEach((series) => {
        // 假设每个系列中的所有点都有相同的颜色，只取系列中第一个的Y轴
        if (series.length > 0) {
          uniqueName.add(series[0].y);
        }
      });
      const uniquNameArray = Array.from(uniqueName);
      //#endregion
      convertedDataList.forEach((item, index) => {
        let series1 = {
          type: "scatter3D",
          name: uniquNameArray[index],
          symbolSize: 5,
          smooth: 1,
          itemStyle: {
            normal: {
              color: "#fff",
            },
            // color: uniqueColorsArray[index],
          },
          label: {
            //当type为scatter3D时有label出现
            show: true,
            position: "top", //标签的位置，也就是data中数据相对于线在哪个位置
            distance: 0,
            textStyle: {
              color: "#2c3e50",
              fontSize: 12,
              borderWidth: 0,
              borderColor: "#fff",
              backgroundColor: "transparent",
            },
          },
          data: item,
        };
        let series2 = {
          type: "line3D", //当type为line3D时有label没有作用，官网没有label这个配置项
          name: uniquNameArray[index],
          //   lineStyle: {
          //     width: 5, //线的宽度
          //     color: uniqueColorsArray[index], //线的颜色
          //   },
          data: item, //线数据和点数据所需要的格式一样
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
        };
        console.log(series, "series");
        series.push(series1, series2);
      });
      option.series = series;

      option && chart.setOption(option);

      window.addEventListener("resize", function () {
        chart.resize();
      });
    },
  },
};
</script>

<style scoped>
.div {
  background-color: #fff;
}
#main {
  margin: 0 auto;
}
</style>
