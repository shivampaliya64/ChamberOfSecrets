import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes);

app.use(bodyparser.json({limit: "30mb",extended: true}));
app.use(bodyparser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());



//mongoDB 
const CONNECTION_URL = 'mongodb+srv://shivampaliya64:iampaliya64@cluster0.2piql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT,()=> console.log(`Server running on portzy: ${PORT}`)))

    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);





