const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, function(){
    console.log('SERVER START LISTENING ON => ',port)
}).on('error', function(err){
    console.log('ERROR => ',err)
});