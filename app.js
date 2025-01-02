const express =require('express');
const app = express();
const dataModel = require('./models/datamodel');
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render("index")
})
app.post("/data", (req,res)=>{
    console.log(req.body);
    let {lagna,bhav,grah} = req.body;
    dataModel.create({
        lagna,bhav,grah
    })
    res.redirect("/")
})
app.listen(3000);