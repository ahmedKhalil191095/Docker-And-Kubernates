/*
 This is a simple Node.js application that connects to a Redis server to count visits
 To run this application with Docker and Docker Compose, follow these steps:
  1. Ensure you have Docker and Docker Compose installed on your machine.
  2. Create a `Dockerfile` for this Node.js application.
  3. Create a `docker-compose.yml` file to define the services (Node.js app and Redis).
  4. Run `docker-compose up --build` to start the services.
  5. Access the application at `http://localhost:8081` in your web browser.
*/
const express = require('express');
const redis = require('redis');
// const process = require('process');

const app = express();
const client = redis.createClient({
  host: 'redis-server',   // This should match the service (container) name in docker-compose.yml
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  // process.exit(0); // Simulate a crash
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
