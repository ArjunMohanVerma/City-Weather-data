import axios from "axios";

const getPopulationData = async (city) => {
  try {
    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${city}&limit=1`;

    const response = await axios.get(url);

    if (response.data.data.length === 0) {
      return null;
    }

    return response.data.data[0].population;
  } catch (error) {
    console.log("Population API Error:", error.message);
    return null;
  }
};

export default getPopulationData;