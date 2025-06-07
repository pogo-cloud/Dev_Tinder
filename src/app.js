const express = require('express');
const app = express();

const routes = {
  '/': "Home sweet home",
  '/getUser': 'User is seeing the page for the first time',
  '/userGateway': 'Gateway error 500'
};

// Dynamic routing based on routes object
Object.keys(routes).forEach((path) => {
  app.get(path, (req, res) => {
    res.send(routes[path]);
  });
});

// Fallback for unmatched routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
