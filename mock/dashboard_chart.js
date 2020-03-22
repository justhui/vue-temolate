function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = {
        yData: [100, 40, 78, 30, 58, 13],
        xData: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      };
      break;
    default:
      res = null;
  }
  return res;
}
module.exports = chart;
