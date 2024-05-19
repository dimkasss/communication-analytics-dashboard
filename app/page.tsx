import BlockWrapper from "@/components/BlockWrapper";
import Card from "@/components/Card";
import RecordingsList from "@/components/RecordingsList";
import StatsShorten from "@/components/StatsShorten";

const MainPage = () => {
  return (
    <div className="h-4/5">
      <section className="font-extrabold text-4xl w-2/5 p-2 pb-8">
        Сервис по{" "}
        <span className="bg-[--red] px-2.5 py-[4px] text-[--white]">
          мониторингу
        </span>{" "}
        деловых переговоров
      </section>
      <section className="w-full h-full">
        <div className="flex h-full gap-3">
          <div className="flex flex-col w-1/2 gap-3">
            <BlockWrapper
              className="grow-0"
              name="Текущие записи"
              url="/recordings/current"
            >
              <RecordingsList len={2} />
            </BlockWrapper>
            <BlockWrapper name="Статистика" url="/stats">
              <StatsShorten />
            </BlockWrapper>
          </div>
          <div className="flex w-1/2">
            <BlockWrapper name="Архив записей" url="/stats">
              <RecordingsList len={4} />
            </BlockWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
