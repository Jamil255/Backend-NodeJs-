import express from 'express';
import connectDb from './config/db.js';
const app = express();
const PORT = 9000;
import userRoutes from './routes/userRoutes.js'
connectDb();
app.use(express.json());
app.use('/api/user', userRoutes);
app.get('/',  (req, res)=> {
    res.send("hand shake")
    
})
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})