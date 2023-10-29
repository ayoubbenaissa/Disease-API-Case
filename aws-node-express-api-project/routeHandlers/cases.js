const axios = require("axios");
const { returnSuccessPayload, returnErrorPayload } = require("../utils/utils");

// function which will return specific all Germany cases:
const allCases = async (event) => {
  try {
    const response = await axios.get(
      `https://api.corona-zahlen.org/germany/history/cases`
    );
    return returnSuccessPayload({data: response.data});
  } catch (error) {
    return returnErrorPayload({error});
  }
};

// function which will return specific all Germany cases for a given day:
const latestCases = async (event) => {
  try {
    const { id } = event.path;
    const response = await axios.get(
      `https://api.corona-zahlen.org/germany/history/cases/${id}`
    );
    return returnSuccessPayload({data: response.data});
  } catch (error) {
    console.error("There was an error fetching the data:", error);
    return returnErrorPayload({error});
  }
};

module.exports.allCases = allCases;
module.exports.latestCases = latestCases;
