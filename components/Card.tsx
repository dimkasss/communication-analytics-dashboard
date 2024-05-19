import CustomChart, { CustomChartProps } from "./CustomChart";

const Card: React.FC<CustomChartProps> = ({ labels, options, datasets }) => {
  return (
    <div className="m-2 border w-1/3 h-[300px] p-10">
      <h1>Card</h1>
      <CustomChart datasets={datasets} labels={labels} />
    </div>
  );
};

export default Card;
