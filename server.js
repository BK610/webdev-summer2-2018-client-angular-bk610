const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/webdev-summer2-client-angular-bk610'));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin',
//     'http://localhost:4200');
//   res.header('Access-Control-Allow-Credentials',
//     'true');
//   res.header('Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.get('/*', function (req, res) {
  res.sendFile(path.join('./dist/webdev-summer2-client-angular-bk610/index.html'));
});
app.listen(process.env.PORT || 4200);
