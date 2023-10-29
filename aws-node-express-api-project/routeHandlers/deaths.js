const axios = require("axios");
const { returnSuccessPayload, returnErrorPayload } = require("../utils/utils");

// function which will return specific all Germany deaths:
const allDeaths = async (event) => {
  try {
    const response = await axios.get(
      `https://api.corona-zahlen.org/germany/history/deaths`
    );
    return returnSuccessPayload({ data: response.data });
  } catch (error) {
    return returnErrorPayload({ error });
  }
};

// function which will return specific all Germany deaths for a given day:
const latestDeaths = async (event) => {
  try {
    const { id } = event.path;
    const response = await axios.get(
      `https://api.corona-zahlen.org/germany/history/deaths/${id}`
    );
    return returnSuccessPayload({ data: response.data });
  } catch (error) {
    return returnErrorPayload({ error });
  }
};

module.exports.allDeaths = allDeaths;
module.exports.latestDeaths = latestDeaths;
