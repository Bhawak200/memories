import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'


const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/posts', postRoutes);


//const CONNECTION_URL = 'mongodb+srv://bhawakciv:bhawakciv123@cluster0.iutd7ro.mongodb.net/?retryWrites=true&w=majority'
const CONNECTION_URL = 'mongodb+srv://bhawakciv:bhawakciv123@cluster0.iutd7ro.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
  .catch(err => console.log(err.message));

//mongoose.set('useFindAndModify', false);