const getUser = async (event) => {
  console.log('get user')
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello chu ngoc binh, it's get user lambda function api getway!!!!!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  getUser
}
