export function echartBarOption(xData, yData) {
  // 可以根据实际的需求进行参数的调整和变化
  let option = {
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: yData
      }
    ]
  };
  return option;
}
