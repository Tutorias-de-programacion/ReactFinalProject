import express from 'express'; import axios from 'axios'; 
import cors from 'cors';
import * as dotenv from 'dotenv';


const port = process.env.PORT || 5000; 

const app = express();
app.listen(port, ()=>{console.log(`Backend Running on port:${port}`)})


