const AQIBadge = ({ aqi }) => {
  const getAQIColor = () => {
    switch (aqi) {
      case 1:
        return "bg-green-500";
      case 2:
        return "bg-yellow-400";
      case 3:
        return "bg-orange-500";
      case 4:
        return "bg-red-500";
      case 5:
        return "bg-purple-700";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      className={`px-3 py-1 rounded-full text-white ${getAQIColor()}`}
    >
      AQI Level {aqi}
    </div>
  );
};

export default AQIBadge;