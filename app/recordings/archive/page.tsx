"use client";

import { RecordingObject } from "@/components/Recording";
import RecordingEditable from "@/components/RecordingEditable";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const ArchievePage = () => {
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
        Загрузка записей...
      </div>
    );

  if (error) return "Ошибка при запросе данных с сервера";

  return (
    <div>
      <section className="font-extrabold text-4xl w-2/5 p-2 pb-8">
        <span className="bg-[--red] px-2.5 py-[4px] text-[--white]">
          Архив записей
        </span>
      </section>
      <section className="grid grid-cols-2 gap-3">
        {data.map((recording: RecordingObject) => (
          <RecordingEditable key={recording.id} data={recording} />
        ))}
      </section>
    </div>
  );
};

export default ArchievePage;
