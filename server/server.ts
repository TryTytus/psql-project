let express = require('express');
let app = express();

let port = 4000;

app.get('/', (req:any, res:any) => {
    res.send('dupa');
});


app.listen(port);