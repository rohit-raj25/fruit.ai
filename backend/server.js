const express=require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const { GoogleGenerativeAI } = require("@google/generative-ai");
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));


const fruitsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true }
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

app.post('/signup',async (req,res)=>{
    const fruit=new Fruit({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email
    });
    const result=await fruit.save();
    console.log(result);

    if(result){
        res.send({
            message:"User added successfully",
            data:result
        });
    }
    else{
        res.send({
            message:"Error in adding user"
        });
    }

});
app.post('/signin',async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const user=await Fruit.findOne({email:email,password:password});
    if(user){
        if(user.password==password){
            res.send({
                message:"User found",
                data:user
            });
        }    
        else{
            res.send({
                message:"Password incorrect"
            });
        }
        
    }
    else{
        res.send({
            message:"User not found"
        });
    }

});

const genAI = new GoogleGenerativeAI(`AIzaSyBze8UngpUFuVWy2LJM78PiS6BEU8nC-KU`);

app.post("/gemini", async (req, res) => {
  const { history, message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const chat = model.startChat({
    history: req.body.history,
  });
  const msg = req.body.message;
  console.log(msg);
  console.log(req.body);

  const result = await chat.sendMessage(msg.toString());
  const response = await result.response;
  const text = response.text();
  res.send(text);
});




mongoose.connect('mongodb+srv://rohitraj250310:rohitraj250310@cluster0.78eoe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Fruits')
.then(()=>{   
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});   //connect to mongodb 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});  //listen to port