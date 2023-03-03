import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://fadyanabila:Fayzatha1412@wrpl-2023.t4vhx85.mongodb.net/test';
const client = new MongoClient(uri);

async function connect(){
    try{
        await client.connect();
        console.log("Connected to DB");
    } catch (error){
        console.error('Error connecting to DB', error);
    }
}

 connect();

 async function create(collectionname, data){
    const db = client.db('wrpl');
    const collection = db.collection(collectionName);
    const result = await collection.insertOne(data);
    console.log('Created a new user with the following id: ${result.insertedId}');
 }

 async function read(collectionName, filter){
    const db = client.db('wrpl');
    const collection = db.collection(collectionName);
    const result = await collection.find(filter).toArray();
    console.log('Retrieved ${redult.length} documents');
    return result;
 }

 export {create, read};