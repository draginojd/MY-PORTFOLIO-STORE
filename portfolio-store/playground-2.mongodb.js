/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'car_shop_database';
const collection = 'cars';

// Create a new database.

use('car_shop_database');

// Create a new collection.
db.createCollection('cars');

db.cars.insertMany([{
    "brand": "Volvo",
    "horsepower": 253,
    "gearbox": "automatic",
    "modelYear": 2021,
    "mileage": 7779,
    "fuel": "petrol",
    "price": 17372.7,
    "currency": "EUR",
    "model": "V90"
},
{
    "brand": "Volvo",
    "horsepower": 263,
    "gearbox": "automatic",
    "modelYear": 2020,
    "mileage": 7779,
    "fuel": "petrol",
    "price": 43727,
    "currency": "EUR",
    "model": "XC90"
}
])


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
