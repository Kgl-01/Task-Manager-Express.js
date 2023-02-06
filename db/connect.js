const mongoose = require('mongoose');

const url = `mongodb+srv://Karthik:143.Amma@nodeexpressprojects.lu0piyz.mongodb.net/03-Task-Manager?retryWrites=true&w=majority`

const connectDB = ()=>{
return mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
})
}

module.exports=connectDB;


