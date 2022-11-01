
const express=require('express')
const cors=require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port=process.env.PORT || 5000
const app=express()
app.use(cors())
app.use(express.json())

// yOnoXtkW8yYNW3fe   geniusDbUser




const uri = `mongodb+srv://${process.env.DB_USER}:process.${process.env.DB_PASSWORD}@cluster0.r44yeck.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});






app.get('/',(req,res)=>{
    res.send('genius car server is running')
})

app.listen(port,()=>{
    console.log(`genius car server is running on port ${port}`)
})