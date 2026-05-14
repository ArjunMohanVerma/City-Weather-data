const TemperatureGauge = ({ temp }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-4 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400"
          style={{
            width: `${Math.min((temp / 50) * 100, 100)}%`,
          }}
        />
      </div>

      <span className="mt-2 text-cyan-300 font-semibold">
        {temp}°C
      </span>
    </div>
  );
};

export default TemperatureGauge;