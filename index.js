const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const router = require('./router.js');
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(router);

app.listen(port, () => console.log(`JIRA app listening on port ${port}!`));
