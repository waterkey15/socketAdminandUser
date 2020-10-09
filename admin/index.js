var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// import{callF} from './index';

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);

      
      // module.exports = msg;
      JsonWriteFile(msg);

     

      
      






    });
  });

http.listen(3001, () => {
  console.log('listening on *:3001');
});


function JsonWriteFile(msg){
  const fs = require('fs')
      const msgJson = {
        msg : msg
      }
      const jsonString = JSON.stringify(msgJson);
      fs.writeFile('../messages.json', jsonString, err =>{
        if(err){
          console.log('Error writing file', err)
        }else {
          console.log('Successfully wrote file')
      }
      })

      console.log(jsonString);
}

