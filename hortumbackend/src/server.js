const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./router');
const path = require('path');


app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routers);


app.listen(3333, () => console.log('server running...'));