import { onMounted, shallowRef } from 'vue'
export function useInitMap(domContainer: HTMLDivElement) {
  Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZGRiYThlYy0wYTI5LTRhMzUtOTNmOC02NjlhMjFhZTc0ZjUiLCJpZCI6MTg3Njg0LCJpYXQiOjE3MDQyOTAxNjN9.9Ljp1M_zBOEU3_8wy5gEJpFW5vzQp-uFSc59UPeim4Y'
  const center = { lat: 30.505, lng: 108.505 }
  const _viewer = shallowRef(null)
  onMounted(() => {
    _viewer.value = new Cesium.Viewer(domContainer, {
      baseLayerPicker: false,
      geocoder: false, //是否显示地名查找控件
      homeButton: false,
      sceneModePicker: false, //是否显示投影方式控件
      selectionIndicator: false,
      baseLayerPicker: false, //是否显示图层选择控件
      navigationHelpButton: false, //是否显示帮助信息控件
      animation: false, // 是否显示动画控件
      // creditContainer: "credit",
      timeline: false, //是否显示时间线控件
      fullscreenButton: false,
      vrButton: false,
      infoBox: false, //是否显示点击要素之后显示的信息
      // requestRenderMode: true, //启用请求渲染模式
      scene3DOnly: true, //每个几何实例将只能以3D渲染以节省GPU内存
      sceneMode: 3, //初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
      //   imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
      //     url: "http://t0.tianditu.gov.cn/img_w/wmts?tk=b6b320a7ccfabfdc30536330efc07f3e",
      //     layer: "img",
      //     style: "default",
      //     tileMatrixSetID: "w",
      //     format: "tiles",
      //     maximumLevel: 18,
      //   }),
      // imageryProvider: new Cesium.UrlTemplateImageryProvider({
      //   // enablePickFeatures: false,
      //   // url: "http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}",
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-road/{z}/{x}/{y}',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}?style=Gray',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}?style=Filter-Test&colormatrix=0.5 0.1 0.2 0 0 0.5 0.4 0.3 0 0 0.52 0.6 0.65 0 0 3 3 3 3 3',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-terrain/{z}/{x}/{y}?style=Filter-Ocean',
      //   tileWidth: 512,
      //   tileHeight: 512,
      //   maximumLevel: 18,
      // }),

      terrainProvider: new Cesium.CesiumTerrainProvider({
        url: 'http://117.139.13.157:37880/demo/terrain/kFJYVGiT',
      }),
    })
  })
  return {
    viewer: _viewer
  }
}