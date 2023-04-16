const postUser = async (event) => {
  console.log('post user')

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello chu ngoc binh, it's post user lambda function api getway!!!!!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports = {
  postUser
}
