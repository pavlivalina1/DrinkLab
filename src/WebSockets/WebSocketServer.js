/* istanbul ignore file */

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
let likes = 0;
let dislikes = 0;

wss.on('connection', ws => {
  
  ws.send(likes.toString()+','+dislikes.toString());

  ws.on('message', message => {
    if (message === 'like') {
      console
      likes++
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(likes.toString()+','+dislikes.toString());
        }
      });
    }
    else if (message === 'dislike') {
      dislikes++
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(likes.toString()+','+dislikes.toString());
        }
      });
    }
  });
});

server.listen(3001, () => {});