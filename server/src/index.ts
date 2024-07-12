import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

const MONGO_URL = `mongodb+srv://sudeepgautam33333:0nAenLOTlqIXeUli@bus-ticketing-system-fu.b5f91rx.mongodb.net/?retryWrites=true&w=majority&appName=Bus-ticketing-system-Full-Stack`;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));