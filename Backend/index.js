
import connectToMongo from './database/db.js';
import express from 'express';
import cors from 'cors'
import payment from './routes/payment.js';

    
connectToMongo();
const app = express()
const port = 4000

// middleware
app.use(express.json());
app.use(cors());


//availbale Route
app.get('/', (req, res) => {
    res.send('Kamal Nayan')
})

app.use('/api/payment', payment);
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})