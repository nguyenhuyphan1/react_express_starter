const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Huy Nguyen', lastName: 'Phan'},
    {id: 3, firstName: 'Sam', lastName: 'Smith'},
  ];

  res.json(customers);
});

const port = 5001;

app.listen(port, () => `Server running on port ${port}`);