import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'

const app = express();
app.use(cors());
//use json middleware for parsing json data
app.use(express.json());
dotenv.config();
const PORT =  process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;
 
//connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
 (req, res) => {
      res.send("Welcome to the Book Store API")
   }
 //difining routes
 app.use("/book",bookRoute);
    app.use("/user",userRoute); 

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`)
})