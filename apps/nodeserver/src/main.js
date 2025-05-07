import http from 'http';

// Configuration
const PORT = process.env.PORT || 3000;

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from nodeserver\n');
});

// Start server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Handle shutdown
//process.on('SIGINT', () => {
//  console.log('Received SIGINT signal, shutting down gracefully...');
//  process.exit(0);
//});

//process.on('SIGTERM', () => {
//  console.log('Received SIGTERM signal, shutting down gracefully...');
//
//  process.exit(0);
//});
