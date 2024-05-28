const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path')

const employeeRoute=require('./Routes/employee')

const URL="mongodb+srv://appmingle:y6ZfmQeoy7KWXiQm@cluster0.kezajhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URL)
.then(()=>console.log("Db connected"))
.catch((e)=>console.log("error", e))

app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}));



app.use(employeeRoute);


const PORT=8080;
app.listen(PORT,(req,res)=>{
    console.log("server is connected at port:",PORT);
})