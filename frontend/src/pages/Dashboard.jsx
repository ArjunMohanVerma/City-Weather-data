import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import WorldMap from "../components/WorldMap";
import CityModal from "../components/CityModal";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

import { getCities } from "../api/cityApi";

const Dashboard = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchCities();

    const interval = setInterval(() => {
      fetchCities();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const fetchCities = async () => {
    try {
      setLoading(true);

      const data = await getCities();

      setCities(data);

      setError("");
    } catch (error) {
      setError("Failed to load city data");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <Navbar />

      <WorldMap
        cities={cities}
        onSelect={setSelectedCity}
      />

      {selectedCity && (
        <CityModal
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;