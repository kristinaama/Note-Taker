const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

app.use(express.static('public'));

// TODO: Create HTML routes for notes page and *

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

