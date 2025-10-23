var express = require('express'); 
var app = express();
app.use(express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
  } catch (err) {
    next(err);
  }
});

const port = process.env.PORT || 3000
console.log("Listening on port: " + port)
app.listen(port);
