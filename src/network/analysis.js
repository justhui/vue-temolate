import http from "./axios.js";

export function getChartData() {
  return http({
    url: "/api/dashboard/chart"
  });
}
