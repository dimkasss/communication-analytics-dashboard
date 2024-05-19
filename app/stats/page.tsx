"use client";

import BlockWrapper from "@/components/BlockWrapper";
import { useQuery } from "@tanstack/react-query";
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
import { RecordingObject } from "@/components/Recording";
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

const StatsPage = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["recordingsData"],
    queryFn: () =>
      fetch("http://51.250.19.25:8000/conversation/records").then((res) =>
        res.json()
      ),
  });
  if (isPending)
    return (
      <div className="flex items-center justify-center text-2xl">
        Загрузка...
      </div>
    );

  const labels = data
    ? data.map((el: RecordingObject) =>
        new Date(el.created_at).toLocaleDateString("ru")
      )
    : [];

  // data
  //   ? data.map((d: any) =>
  //       new Date(d.created_at).toLocaleDateString("ru", { day: "2-digit" })
  //     )
  //   : [];

  const dataBad = data
    ? data.map((el: RecordingObject) => {
        return el.bad_percent;
      })
    : [];
  const dataGood = data
    ? data.map((el: RecordingObject) => {
        return el.good_percent;
      })
    : [];

  const datasetBad = {
    data: dataBad,
    label: "Процент плохих переговоров",
    backgroundColor: "red",
  };
  const datasetGood = {
    data: dataGood,
    label: "Процент хороших переговоров",
    backgroundColor: "blue",
  };

  const datasets = [datasetBad, datasetGood];
  const datagraph = {
    labels: labels,
    datasets: datasets,
  };

  console.log("datasets", datasets);
  const resOptions = {
    maintainAspectRatio: false,
  };

  if (error) return "Ошибка при запросе данных с сервера";
  return (
    <div className="w-full h-2/3">
      <section className="font-extrabold text-4xl w-2/5 p-2 pb-8">
        <span className="bg-[--red] px-2.5 py-[4px] text-[--white]">
          Статистика
        </span>
      </section>
      <BlockWrapper
        className="w-full h-full"
        name="Нарушения деловых переговоров за последнее время"
      >
        <div className="h-4/5">
          <Line options={resOptions} data={datagraph} />
        </div>
      </BlockWrapper>
    </div>
  );
};

export default StatsPage;
