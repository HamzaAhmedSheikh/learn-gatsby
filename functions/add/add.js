// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

const faunadb = require('faunadb'),
  q = faunadb.query;


const handler = async (event) => {  
  try {
    // const subject = event.queryStringParameters.name || 'World'
    var client = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET });
    var result = await client.query(
      q.Create(
        q.Collection('posts'), { data: { name: reqObj.name, age: reqObj.age } } 
      )
    )
     console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify({ id: `${result.ref.id}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
