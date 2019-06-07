const app = getApp();
Component({
  properties: {
    // 当前进度的百分比
    percent: {
      type: Number,
      value: 0
    }
  },
  data: {
    //外层圆环的长方体的旋转角度
    arcAngel: 0
  },
  methods: {
    /**
     * 计算进度对应的角度
     * @method ringAngle
     **/
    ringAngle() {
      //计算百分比对应的旋转角度
      var angel = 3.6 * this.data.percent;
      //更新数据层
      this.data.arcAngel = angel;
      //更新数据层对应的模板层重新渲染DOM
      this.setData(this.data);
    }
  }
})