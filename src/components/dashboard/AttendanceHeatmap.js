import React from "react";
import ReactApexChart from "react-apexcharts";

function AttendanceHeatmap() {
  const options = {
    chart: {
      height: 350,
      type: "heatmap",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            { from: 0, to: 5, color: "#a1c3e9", name: "Low Attendance" }, // Light shade
            { from: 6, to: 10, color: "#4a8fc7", name: "Moderate Attendance" }, // Medium shade
            { from: 11, to: 20, color: "#0860AE", name: "High Attendance" }, // Darkest shade
          ],
        },
      },
    },
    xaxis: {
      categories: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
  };

  const series = [
    {
      name: "10 AM",
      data: [8, 7, 6, 9, 10, 4],
    },
    {
      name: "11 AM",
      data: [10, 9, 7, 11, 12, 5],
    },
    {
      name: "12 PM",
      data: [12, 11, 9, 13, 12, 6],
    },
    {
      name: "1 PM",
      data: [9, 8, 7, 9, 10, 4],
    },
    {
      name: "2 PM",
      data: [11, 10, 8, 10, 11, 5],
    },
    {
      name: "3 PM",
      data: [12, 11, 10, 12, 11, 6],
    },
    {
      name: "4 PM",
      data: [11, 9, 8, 11, 10, 4],
    },
    {
      name: "5 PM",
      data: [10, 8, 7, 10, 9, 3],
    },
    {
      name: "6 PM",
      data: [8, 7, 5, 8, 7, 2],
    },
    {
      name: "7 PM",
      data: [5, 4, 3, 5, 4, 1],
    },
  ];

  return (
    <div className="dashboard-container">
      <h5>
        <strong>Attendance Heatmap</strong>
      </h5>
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height={300}
      />
    </div>
  );
}

export default AttendanceHeatmap;
