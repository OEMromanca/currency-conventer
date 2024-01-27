import axios from "axios";

const apiURL = "https://data.kurzy.cz/json/meny/b[1]cb[vypsat].js";

export const getDataFromAPI = async (bankNumber: number) => {
  const urlWithBankNumber = `${apiURL.replace("[1]", `[${bankNumber}]`)}`;
  return await axios.get(urlWithBankNumber);
}

