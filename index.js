const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const studentmodel = require('./models/studentmodel');


const con = mongoose.connect("mongodb+srv://Vishal:DZ3sUzq8xuIAFm5g@cluster0.6vtis9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
con.then(()=>
{
    console.log("Connection done");
});
con.catch(()=>
{
    console.log("Error in connection");
    console.log("error");
});



const app = express();
app.use(express.json());



app.post("/student",async(req,res)=>
{
    const re = new studentmodel({
        rollno:req.body.m1,
        name:req.body.m2,
        address:req.body.m3
    });
    if(await re.save()){
        res.json({msg:"Record saved"});
    }
    else{
        res.json({msg:"Not saved"});
    }
    res.json(
        {
            msg:"Response from POST API"
        }
    )
}
);



app.get("/student",async(req,res)=>{
    const re = await studentmodel.find();

    res.json(re);
}
);
app.delete("/student",async(req,res)=>{
    const re = await studentmodel.findOneAndDelete({
        _id:req.body.p1

    });
    if(re)
    {
        res.json({msg:"Record Deleted"});
    }
    else
    {
        res.json({msg:"Not deleted"});
    }
});
app.put("/student",async(req,res)=>{
    const re = await studentmodel.findOneAndUpdate({
        _id:req.body.p1},{
            rollno:req.body.m1,
            name:req.body.m2,
            address:req.body.m3
    
    });
    if(re){
        res.json({msg:"Record updated"});
    }
    else{
        res.json({msg:"Not updated"});
    }
});

app.listen(7000,()=>
{
    console.log("Server is started");
});