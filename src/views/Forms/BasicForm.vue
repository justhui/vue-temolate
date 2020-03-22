<template>
  <div>
    <Echart :option="chartOption" style="height: 400px" />
  </div>
</template>

<script>
import Echart from "common/Echart";
import { echartBarOption } from "common/echartBar";
// 接口
import { getChartData } from "../../network/analysis";
export default {
  components: {
    Echart
  },
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartOption();
  },
  methods: {
    getChartOption() {
      getChartData().then(res => {
        console.log("res=>", res);
        this.chartOption = echartBarOption(res.xData, res.yData);
      });
    }
  }
};
</script>

<style scoped></style>
