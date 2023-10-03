import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
import cookieParse from 'cookie-parser';
import cors from 'cors';
const PORT = process.env.PORT || 3001; 

import mongoose from 'mongoose';
app.use(express.json());
app.use(cors())
app.use(cookieParse());

// Định nghĩa các tuyến đường và xử lý yêu cầu từ frontend
import TodoRouter from './routes/Todo.js';
import ProjectRouter from './routes/Project.js';
app.use('/todo', TodoRouter);
app.use('/project', ProjectRouter);
// Xử lý lỗi


app.use((err,req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  return res.status(status).json({message})
})

// Định nghĩa các tuyến đường và xử lý yêu cầu từ frontend
app.get('/', (req, res) => {
  res.send('API của tôi đang hoạt động!');
});



// Lắng nghe cổng đã chọn
app.listen(PORT, () => {
  console.log(`API đang lắng nghe tại http://localhost:${PORT}`);
});

// Kết nối tới MongoDB
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB)
          console.log('MongoDB connected');
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }

}

connectDB();
