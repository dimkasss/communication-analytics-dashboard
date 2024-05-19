import Image from "next/image";
import ArrowLeft from "@/public/arrow-left.svg";
import { PropsWithChildren } from "react";
import Link from "next/link";

interface RecordingProps {
  children?: React.ReactNode;
  data?: RecordingObject;
}

export interface RecordingObject {
  id: number;
  text: string;
  audio_name: string;
  created_at: string;
  good_percent: number;
  bad_percent: number;
}

const getMistakesCnt = (text: string) => {
  return text ? (text.split("*").length - 1) / 2 : 0;
};

const Recording: React.FC<RecordingProps> = ({ children, data }) => {
  if (!data)
    return (
      <div className="py-2 px-5 shadow-basic bg-[--white] w-full">
        <h3 className="font-medium text-2xl mb-1">Запись №228</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th>Название файла</th>
              <th>Дата</th>
              <th>Кол-во ошибок</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Audio_blabla.mp3</td>
              <td>24.05.2024</td>
              <td>11</td>
              <td>
                <div
                  title="Открыть запись"
                  className="bg-[--gray-20] w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
                >
                  <Image src={ArrowLeft} alt="Подробнее" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {children}
      </div>
    );
  const mistakes = getMistakesCnt(data?.text);
  return (
    <div className="py-2 px-5 shadow-basic bg-[--white] w-full">
      <h3 className="font-medium text-2xl mb-1">Запись №228</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Название файла</th>
            <th>Дата</th>
            <th>Кол-во ошибок</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.audio_name}</td>
            <td>{new Date(data?.created_at).toLocaleDateString("ru")}</td>
            <td>{mistakes}</td>
            <td>
              <Link
                href={`/recording/${data?.id}`}
                title="Открыть запись"
                className="bg-[--gray-20] w-[40px] h-[40px] flex items-center justify-center cursor-pointer"
              >
                <Image src={ArrowLeft} alt="Подробнее" />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      {children}
    </div>
  );
};

export default Recording;
