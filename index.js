import express from 'express';
import dotenv from "dotenv/config";

const app = express();

const msg = "Welcome to Docker Image";
const port = 8080;

app.get('/', (req, res) => {
    res.send(msg);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});