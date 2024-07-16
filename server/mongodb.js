require("dotenv").config()
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; //CS

const client = new MongoClient(uri); 

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB using SRV URI');

    const db = client.db(process.env.DBNAME)  ; // Accessing cars database and declaring it into a variable 
    
    const collections = await db.listCollections().toArray();  
    console.log('Collections:');
    collections.forEach(collection => console.log(collection.name));


    // Access the 'cars' collection
    const carsCollection = db.collection('cars'); // Example collection access

    // Count how manu documents there is in 'cars' collection
    const count = await carsCollection.countDocuments();
    console.log('Number of documents:', count);

    // Find each document inside of collection "cars"
    const cars = await carsCollection.find().toArray();
    console.log('Cars:', cars);

    // Perform more database operations as needed

    await client.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await client.close(); // Ensure the client is closed regardless of errors
  }
}


run();