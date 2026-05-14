import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrendChart = ({ data }) => {
  const chartData = data.slice(0, 10).map((item) => ({
    time: new Date(item.createdAt).toLocaleDateString(),
    temp: item.weather.temperature,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <XAxis dataKey="time" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#22d3ee"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;