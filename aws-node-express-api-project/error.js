module.exports.main = async (event) => {
  return {
    statusCode: 404,
    body: JSON.stringify({ message: "error!" }),
  };
};
