const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;
let MONGODB_URL = 'mongodb+srv://youknowme:youknowme%402019@cluster0.jlfcort.mongodb.net/?retryWrites=true&w=majority';
// MONGODB_URL = 'http://localhost:27017'
// if(process.env.MONGODB_URL){
//     MONGODB_URL = process.env.MONGODB_URL;
// }
async function initDb(){
    const client = await MongoClient.connect('mongodb://localhost:27017');
    database = client.db('first-api');
}

function getDb(){
    if(!database){
        throw new Error('DAtabase not found');
    }
    return database;
}
module.exports = {
    initDb: initDb,
    getDb: getDb,
}