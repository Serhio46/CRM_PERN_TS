import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';

const app = express();
dotenv.config();
const server = http.createServer(app);

const startServer = async () => {
   const PORT = (process.env.PORT as string) || 5000;

   try {
      //await connect();
      server.listen(PORT, () => {
         console.log(`Server has started on port: ${PORT} `);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
