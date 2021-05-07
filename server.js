const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const authRoute = require('./routes/authRoute');
require('dotenv').config();

//app
const app = express();
//db
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("DB connected"));
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if(process.env.NODE_ENV==='development'){
    app.use(cors({origin:`${process.env.CLIENT_URL}`}));
}
 

 //routes
 app.use('/api',blogRoutes);
 app.use('/api',authRoute);

 //PORT
 const port = process.env.PORT || 8000;
 app.listen(port,()=>{
     console.log(`Hurray ! Your Server is running on port ${port}`);
 });