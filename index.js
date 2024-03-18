const { PeerServer } = require("peer");

const PORT = process.env.PORT || 9000;
const PEERPATH = process.env.PEERPATH || '/myapp';
const KEY = process.env.KEY || 'peerjs';

(() => {
  const peerServer = PeerServer({ port: PORT, path: PEERPATH, key: KEY});
  peerServer.on('connection', (client) => { 
    console.log('new connect', client);
  });
  
  peerServer.on('disconnect', (client) => {
    console.log('disconnect', client);
  });

  console.log(`Peer server listen port: ${PORT} | key: ${KEY} | path: ${PEERPATH}`);
})();
