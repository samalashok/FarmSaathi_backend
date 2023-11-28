const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config()
const conn=mongoose.connect('mongodb+srv://mrashoksamal:u7omGTQick1XdGkB@clusterpro.i3a7nwf.mongodb.net/FarmSaathi?retryWrites=true&w=majority').then(()=>{
    console.log('Connected to MongoDB')
}).catch(err => console.log('Error connecting',err));
module.exports = conn

// const conn=mongoose.connect('mongodb://localhost:27017/farmsaathi').then(()=>{
// api=a3ZpEjKdtVnyT5aGjGqEnf87KdzJ3IPZ8TBoFfZmIBxH7Mt8Kv18APajhbmdzLhN

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://mrashoksamal:u7omGTQick1XdGkB@clusterpro.i3a7nwf.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

// module.exports=run