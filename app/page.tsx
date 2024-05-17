import Card from "@/components/Card";

const getMockArgs = (from: number, to: number, step = 1) => {
  const xValues = [];
  for (let i = from; i <= to; i += step) {
    xValues.push(i);
  }
  return xValues;
};

const MainPage = () => {
  const args = getMockArgs(0, 10);
  const labels = args;
  const datasets = [
    {
      label: "x^2",
      data: args.map((x) => Math.pow(x, 2)),
      borderColor: "red",
    },
    {
      label: "ln^5(x)",
      data: args.map((x) => Math.pow(Math.log(x), 5)),
      borderColor: "teal",
    },
  ];
  return (
    <main>
      <h1>Main page</h1>
      <p>*тут данные с бэка удобненько отображаются*</p>
      <section className="flex flex-wrap justify-center">
        <Card datasets={datasets} labels={labels} />
        <Card datasets={datasets} labels={labels} />
        <Card datasets={datasets} labels={labels} />
        <Card datasets={datasets} labels={labels} />
      </section>
    </main>
  );
};

export default MainPage;
