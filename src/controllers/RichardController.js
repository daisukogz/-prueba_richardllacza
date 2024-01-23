const AWS = require("aws-sdk");
const uuid = require("uuid");

async function getRichardObj(event, context, callback) {
    try {
        const params = {
            TableName: process.env.DYNAMOTABLE
        };
        console.log('getRichardObj Params:', params);
        const dynamoDb = new AWS.DynamoDB.DocumentClient();

        await dynamoDb.scan(params, (error, result) => {
            console.log('getRichardObj Result:', result);

            callback(null, {
                statusCode: 200,
                body: JSON.stringify(result.Items)
            });
        }).promise();

    } catch (error) {
        console.error('Error en get:', error);
        callback(null,{
            statusCode: 500,
            body: JSON.stringify({error: 'Error en el metodo getRichardObj' })
        })
    }

}

async function postRichardObj(event, context, callback) {
    const data = JSON.parse(event.body);
    console.log('postRichardObj data:', data);

    const params = {
        TableName: process.env.DYNAMOTABLE,
        Item: {
            id: uuid.v4(),
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }
    };
    console.log('postRichardObj params:', params);
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    await dynamoDb.put(params, error => {
        if (error){
            console.log('error dynamoDb put:', error);
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501
            });

        }else{
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(params.Item)
            });
        }
    }).promise();

}

module.exports = {
    getRichardObj,
    postRichardObj,
};