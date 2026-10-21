const { PeerServer } = require('peer');
const port = process.env.PORT || 10000;

PeerServer({
  port: port,
  path: '/myapp',
  proxied: true, 
});
