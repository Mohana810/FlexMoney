require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/Routes.js');
app.use(express.json());
app.use(cors());


connectDB();

app.get('/', (req, res) => {
    res.send('Server is Running, Yaayyyy');
});
app.use('/user', userRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
