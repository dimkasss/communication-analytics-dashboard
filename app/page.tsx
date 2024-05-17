import Card from "@/components/Card";

const getMockArgs = (from: number, to: number, step = 1) => {
  const xValues = [];
  for (let i = from; i <= to; i += step) {
    xValues.push(i);
  }
  return xValues;
};

const getMockValues = (from: number, to: number, step = 1) => {
  const yValues = [];
  for (let i = from; i <= to; i += step) {
    yValues.push(Math.floor(Math.random() * 1000));
  }
  return yValues;
};

const MOCK_DATA_FROM = 0;
const MOCK_DATA_TO = 100;
const MOCK_DATA_STEP = 10;

const MainPage = () => {
  const args = getMockArgs(MOCK_DATA_FROM, MOCK_DATA_TO, MOCK_DATA_STEP);
  const labels = args;
  const datasets = [
    {
      label: "metrics1",
      data: getMockValues(MOCK_DATA_FROM, MOCK_DATA_TO, MOCK_DATA_STEP),
      borderColor: "red",
    },
    {
      label: "metrics2",
      data: getMockValues(MOCK_DATA_FROM, MOCK_DATA_TO, MOCK_DATA_STEP),
      borderColor: "teal",
    },
  ];
  return (
    <main>
      <h1>Main page</h1>
      <p>Страница с метриками и информацией по аудиозаписям</p>
      <section className="flex flex-wrap justify-center">
        <Card datasets={datasets} labels={labels} />
      </section>
    </main>
  );
};

export default MainPage;
