exports.handler = async message => {
  console.log('Hello!');
  console.log(message);

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers':
        'Content-Type,Authorization,X-Amz-Date,X-Api-Key,X-Amz-Security-Token',
      'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
      'Access-Control-Allow-Origin': '*'
    },
    body: { message: 'Everything is awesome!' }
  };
};
