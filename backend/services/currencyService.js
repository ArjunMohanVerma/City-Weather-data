import axios from "axios";

const getCurrencyRate = async (currencyCode) => {
  try {
    const response = await axios.get(
      `${process.env.EXCHANGE_API_URL}/${currencyCode}`
    );

    return response.data.rates.INR;
  } catch (error) {
    console.log("Currency API Error:", error.message);
    return null;
  }
};

export default getCurrencyRate;