
const functions = require('firebase-functions');
const express=require("express");
const cors=require("cors");

const stripe=require("stripe")("sk_test_51HkmwwIQnIwJz7kR6HwSSwEPzrTxX0yS1Ll2qtEpg4SjDvPFyHu6qs7S54W18N32HK4fS8A8VKnD1AJ8qLvfQdS4001UqmfnsM");

//App config
const PORT=process.env.PORT
const app=express()


//middlewares
app.use(cors({origin:true})) 

app.use(express.json())

// Api routes
app.get("/",(req,res)=>{
res.status(200).send("hello world")

})
app.post("/payments",async (req,response)=>{
  const total=req.query.total;
  console.log(total);
  const paymentIntent=await stripe.paymentIntents.create({
      amount:total,
      currency:"inr",
  })
  console.log(paymentIntent.client_secret);
  
  response.status(201).send({
      clientsecret:paymentIntent.client_secret,
  })
})


//listen command
exports.api=functions.https.onRequest(app)