const returnSuccessPayload = ({code=200, data}) => {
  console.log(`DATA: ${data}`);
  return {
    statusCode: code,
    data: data,
  };
};

const returnErrorPayload = ({code=500, error}) => {
  console.error("There was an error fetching the data:", error);
  return {
    statusCode: code,
    error: JSON.stringify(error),
  };
};

module.exports.returnSuccessPayload = returnSuccessPayload;
module.exports.returnErrorPayload = returnErrorPayload;
