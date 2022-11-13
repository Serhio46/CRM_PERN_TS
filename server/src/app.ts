import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import connectToSequelizeDB from './db/connect';

const app = express();
dotenv.config();
const server = http.createServer(app);

const startServer = async (): Promise<void> => {
   const PORT = (process.env.PORT as string) || 5000;

   try {
      await connectToSequelizeDB.authenticate();
      await connectToSequelizeDB.sync();
      server.listen(PORT, () => {
         console.log(`Server has started on port: ${PORT} `);
      });
   } catch (error) {
      console.log(error);
   }
};

startServer();
