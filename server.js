const express = require('express');

const   port = process.env.PORT || 4000;
const    app = express();
app.use(express.json());






app.listen(port, () => {
    console.log('Server started on: ' + port);
});


