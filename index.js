
import express from "express";
const app = express();

app.get("/Home" ,(req,res) =>{
res.send("hello,world!Lorem ipsum loredfesesgishuads ");
})
app.get("/About" ,(req,res) =>{
res.send("<h1>I AM VERY GOOD AT THAT TIME<h1/>");
})
app.get("/Contact_us" ,(req,res) =>{
res.send("hello,world! ");
})

const port = 5555;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`);

});
