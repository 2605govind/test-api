import express from 'express';
import playrouter from './Routes/playroute.js';

const app = express();

app.use(express());

app.use("/", playrouter)

app.listen(5000, () => {
    console.log("server is running")
})