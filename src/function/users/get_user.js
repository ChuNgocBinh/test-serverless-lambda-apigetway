const { v4: uuidv4 } = require('uuid');

const getUser = async (event) => {
  console.log('get user')
  console.log(uuidv4())

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
