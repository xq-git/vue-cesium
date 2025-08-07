// import * as Cesium from "Cesium";

class Map {
  constructor(el, geoJson) {
    this.el = el;
    this.geoJson = geoJson || null;
    this.dataSource = null;
    this.viewer = null;
  }
  init() {
    Cesium.Ion.defaultAccessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxZGRiYThlYy0wYTI5LTRhMzUtOTNmOC02NjlhMjFhZTc0ZjUiLCJpZCI6MTg3Njg0LCJpYXQiOjE3MDQyOTAxNjN9.9Ljp1M_zBOEU3_8wy5gEJpFW5vzQp-uFSc59UPeim4Y";
    const imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
    });
    this.viewer = new Cesium.Viewer(this.el, {
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
        imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
          url: "http://t0.tianditu.gov.cn/img_w/wmts?tk=b6b320a7ccfabfdc30536330efc07f3e",
          layer: "img",
          style: "default",
          tileMatrixSetID: "w",
          format: "tiles",
          maximumLevel: 18,
        }),
      // imageryProvider: new Cesium.UrlTemplateImageryProvider({
      //   enablePickFeatures: false,
      //   // url: "http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}",
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-road/{z}/{x}/{y}',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}?style=Gray',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-image/{z}/{x}/{y}?style=Filter-Test&colormatrix=0.5 0.1 0.2 0 0 0.5 0.4 0.3 0 0 0.52 0.6 0.65 0 0 3 3 3 3 3',
      //   // url: 'http://117.139.13.157:47786/gisserver/rest/services/mapserver/tdt-terrain/{z}/{x}/{y}?style=Filter-Ocean',
      //   tileWidth: 512,
      //   tileHeight: 512,
      //   maximumLevel: 18,
      // }),

      // terrainProvider: new Cesium.CesiumTerrainProvider({
      //   url: "http://117.139.13.157:37880/demo/terrain/kFJYVGiT",
      // }),
    });

    // viewer.dataSources.add(viewer.data);
  }

  highLightArea() {
    new Cesium.GeoJsonDataSource().load(this.geoJson).then((res) => {
      const entities = new Cesium.GeoJsonDataSource().entities;
      debugger;
    });
  }

  flyTo(lon, lat, height) {
    this.viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
    });
  }

  addLightSpotMaterial(lon, lat, height) {
    this.viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      polygon: {
        hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights([
          lon - 0.2 + 1,
          lat - 0.1,
          0,
          lon + 0.2 + 1,
          lat - 0.1,
          0,
          lon + 0.2 + 1,
          lat - 0.5,
          0,
          lon - 0.2 + 1,
          lat - 0.5,
          0,
        ]),
        material: new GisEye.GisEyeLightSpotMaterialProperty({
          color: new Cesium.Color(
            40.0 / 255.0,
            80.0 / 255.0,
            138.0 / 255.0,
            1.0
          ),
          rate: 1,
          alpha: 1,
          isTranslucent: true,
        }),
      },
    });
  }

  add3dTiles(url) {
    var tileset = this.viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url,
        maximumScreenSpaceError: 2,    // 降低此值以提高清晰度，防止消失
        maximumMemoryUsage: 2048,      // 增加内存限制
        cullWithChildrenBounds: true,
        skipLevelOfDetail: false,       // 确保加载所有层级的细节
        preferLeaves: false,            // 不要跳过中间层级
        loadSiblings: true,             // 加载兄弟节点以提供更好的过渡
      })
    );
    tileset.readyPromise.then(() => {
      this.viewer.scene.globe.depthTestAgainstTerrain = false;
      // 开启深度测试
      this.viewer.scene.globe.depthTestAgainstTerrain = true;
      this.viewer.scene.globe.depthTestAgainstTerrain = true;
      // 锁定地形
      // this.viewer.scene.globe.enableLighting = true;

      // 获取tileset的中心点坐标
      var boundingSphere = tileset.boundingSphere;
      var center = boundingSphere.center;

      // 将中心点转换为wgs84坐标系下的经纬度
      var cartographic = Cesium.Cartographic.fromCartesian(center);
      var lon = Cesium.Math.toDegrees(cartographic.longitude);
      var lat = Cesium.Math.toDegrees(cartographic.latitude);
      var height = Cesium.Math.toDegrees(cartographic.height);
      this.viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      });

      /**
       * 
     
      // 将经纬度调整为北京的经纬度
      var beijingLongitude = 116.4074;
      var beijingLatitude = 39.9042;

      // 计算tileset的平移量，并将其应用到modelMatrix中
      var translation = Cesium.Cartesian3.fromDegrees(
        beijingLongitude,
        beijingLatitude
      );
      var centerNew = Cesium.Cartesian3.fromDegrees(longitude, latitude);
      var translationVector = Cesium.Cartesian3.subtract(
        translation,
        centerNew,
        new Cesium.Cartesian3()
      );
      tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translationVector);
        */

      // 100.22199834728121 26.859677092057268

      this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(lon, lat, 100),
        label: {
          text: "丽江文广大楼",
          font: "20px sans-serif",
        },
      });
    });
  }
  rotate(){
    //每次旋转的弧度
    var angle = Cesium.Math.toRadians(Math.PI*0.15)
    var _ratote = ()=>{
      console.log(1)
    // 每一帧渲染时，相机会绕 z 轴（Cesium.Cartesian3.UNIT_Z）旋转angle 弧度。
      this.viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z,angle);
    }
    
    //Cesium 中的时钟（viewer.clock）的 onTick 事件的监听器。该事件会在每一帧渲染时触发。
    this.viewer.clock.onTick.addEventListener(_ratote);
    setTimeout(()=>{
      this.viewer.clock.onTick.removeEventListener(_ratote);
    },3000)
  }
}
// debugger
// const map = require('./geoJson.js')
// map.init(Map)




export default Map;
