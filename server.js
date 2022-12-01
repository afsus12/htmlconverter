const express = require('express');

const   port = process.env.PORT || 4000;
const    app = express();
app.use(express.json());
const convert = require('./routes/convert.routes');

app.use("/con",convert);


app.use(express.json());


app.listen(port, () => {
    console.log('Server started on: ' + port);
});


