const axios = require("axios");
const { returnSuccessPayload, returnErrorPayload } = require("../utils/utils");

// function which will return specific state information:
const stateInfo = async (event) => {
  try {
    const { state } = event.body;
    const response = await axios.get(
      `https://api.corona-zahlen.org/states/${state}`
    );
    return returnSuccessPayload({data: response.data});
  } catch (error) {
    return returnErrorPayload({error});
  }
};

module.exports = stateInfo;
