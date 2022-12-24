const express = require('express');
const queryRoutes = require('./routes/queryRoutes');
const app = express();

app.use('', queryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Connected to port ' + PORT)
});