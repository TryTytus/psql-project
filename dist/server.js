let express = require('express');
let app = express();
let port = 4000;
app.get('/', (req, res) => {
    res.send('dupa');
});
app.listen(port);
//# sourceMappingURL=server.js.map