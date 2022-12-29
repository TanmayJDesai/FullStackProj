import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express(); 

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(bodyParser());
app.use(cors()); 
app.use('/posts', postRoutes); 
mongoose.set('strictQuery', true);

const MONGO_URI = 'mongodb+srv://TutorSTEM:TribsandTanmay@tutorstemco.sjh95kh.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000; 
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen (PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
/*
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("connected to mongoose");
});

mongoose.connection.on("error", (err) => {
    console.log("error in mongoose connection: ", err);
});

app.listen(PORT, () => {
    console.log("Server on: ", PORT);
});

*/
//mongoose.connect(CONNECTION_URL).then(() => {console.log('Runs on PORT 5000')})
/*

*/
//mongoose.set('useFindAndModify', false); 

//
