"use client";

import {
  Line,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export type CustomChartProps = ChartData<"line", number[], number> & {
  options?: any;
};

const CustomChart: React.FC<CustomChartProps> = ({
  labels,
  options,
  datasets,
}) => {
  const data = {
    labels: labels,
    datasets: datasets,
  };
  const resOptions = {
    maintainAspectRatio: false,
    ...options,
  };
  const chartRef = useRef(null);
  if (chartRef == null) return <div>Loading...</div>;
  return (
    <div className="h-full">
      <Line
        options={resOptions}
        ref={chartRef}
        data={data}
        onClick={(event) => {
          const dataset = getDatasetAtEvent(chartRef.current!, event);
          const element = getElementAtEvent(chartRef.current!, event);
          const elements = getElementsAtEvent(chartRef.current!, event);
          if (element[0] == undefined) {
            return;
          }
          const { datasetIndex, index } = element[0];
          alert("Значение: " + data.datasets[datasetIndex].data[index]);
        }}
      />
    </div>
  );
};

export default CustomChart;
