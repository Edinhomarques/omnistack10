const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes')


app.use(express.json())

mongoose.connect(`mongodb+srv://routeasy:123654789@routeasy-tuduk.mongodb.net/week10?retryWrites=true&w=majority`, 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true     
});

app.use(routes);

app.listen(3333);