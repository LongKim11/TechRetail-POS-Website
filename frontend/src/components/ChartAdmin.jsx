import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

const chartConfig = {
  zoom: {
    enabled: false,
  },
  type: "line",
  height: 400,
  series: [
    {
      name: "Sales",
      data: [100, 200, 300, 600, 900, 1200, 800, 850, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#22c55e"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const ChartAdmin = () => {
  return (
    <Card>
      <CardHeader floated={false} shadow={false} color="transparent">
        <Typography variant="h6" color="blue-gray">
          Thống kê tổng doanh thu
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="max-w-sm font-normal"
        >
          Trong 12 tháng gần nhất
        </Typography>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
};

export default ChartAdmin;
