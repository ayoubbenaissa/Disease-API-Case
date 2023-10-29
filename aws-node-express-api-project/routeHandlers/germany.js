const axios = require("axios");
const { returnSuccessPayload, returnErrorPayload } = require("../utils/utils");

const germany = async (event) => {
  try {
    const response = await axios.get("https://api.corona-zahlen.org/germany");
    return returnSuccessPayload({ data: response.data });
  } catch (error) {
    return returnErrorPayload({ error });
  }
};

module.exports = germany;
