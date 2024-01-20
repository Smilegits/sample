// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = 8000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route to handle adding appointments
server.post('/clients/:id/appointments', (req, res) => {
  const clientId = parseInt(req.params.id);
  const appointment = req.body;

  // Update the db.json file
  const clients = router.db.get('clients').value();
  const clientIndex = clients.findIndex((client) => client.id === clientId);

  if (clientIndex !== -1) {
    router.db.get('clients').find({ id: clientId }).get('appointments').push(appointment).write();

    res.status(200).jsonp(appointment);
  } else {
    res.status(404).jsonp({ error: 'Client not found' });
  }
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
