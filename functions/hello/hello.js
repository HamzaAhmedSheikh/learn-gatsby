// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

// const random = require("random-name")
const faunadb = require('faunadb'),
  q = faunadb.query;

const handler = async (event) => {
  try {    
    // const subject = event.queryStringParameters.name || 'World'
    // const name = random.first();
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });

    var result = await client.query(      
       q.Get(q.Ref( q.Collection('posts'), '282842307521151489' ))
    );
        // console.log(result);
        console.log("all the entries " + result.data)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `${result.data.title}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
