const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app=express();

const port=process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());





//......................................................................

     

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://carservice:ovW3c21PM4LPKCBy@cluster0.xcemb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){

  try{
    await client.connect();
    const userCollection=client.db('car-service').collection('service');
    
  
          app.get('/service',async (req,res)=>{
            const query={};
          const cursor=userCollection.find(query);
          const service=await cursor.toArray();
          res.send(service);
          });
  
  
  
  
  
  
  }
  finally{
  
  }
}
run().catch(console.dir);
                
//......................................................................


app.get('/',(req,res)=>{
    res.send('MOZAHID MY NAME I FIRST DEPLOY HEROKU');
})
app.listen(port,()=>{
    console.log('MOZAHID MY NAME I FIRST DEPLOY HEROKU',port)
})