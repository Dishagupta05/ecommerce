
import { MongoClient, Db,ServerApiVersion } from 'mongodb';

let cachedClient:MongoClient | null = null;
let cacheDb :Db| null=null;
//kapil:1234

export async function connectToDb(){
  if(cachedClient && cacheDb){
    return {client:cachedClient , db:cacheDb}
  }


const uri = `mongodb+srv://kapil:1234@cluster0.1n2jdbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


  
    // Ensures that the client will close when you finish/error
    await client.connect();

    cachedClient=client;
    cacheDb=client.db('nextjsecommerce');

    return {client, db:client.db('nextjsecommerce') }
  
}


