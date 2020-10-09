var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);

      console.log('baglanti gerceklesti');


      // let returnedMsg = readFromJson();
      //let meessage = readFromJson();

      // var config = require('./messages.json');

      // var adminMsg = config.msg;

      const fs = require('fs');
      fs.readFile("./messages.json", function(err, data) { 
      
        // Check for errors 
        if (err) throw err; 
       
        // Converting to JSON 
        const message = JSON.parse(data); 
        adminMsg = message.msg;

         if(adminMsg){
        console.log("admins new message is " + adminMsg);
        io.emit('msg', adminMsg);

        
      }
          
        
    }); 






      // if(adminMsg){
      //   console.log("admins new message is " + adminMsg);
      //   io.emit('msg', adminMsg);

      //   delete config;
      //   delete adminMsg;
      // }

      //console.log(returnedMessage);
      // console.log("aidsuhasidhiasdh : ", msg);
      
      

      // if((msg != "1" )|| (msg != "2") || (msg != "3") || (mgs != "4")){
      //   document.getElementById("firstDiv").disabled = true;
        
      // }
      // window.document.getElementById('firstDiv');
      







      


      






    });
  });

http.listen(3000, () => {
  console.log('listening on *:3000');
});


function callF(){
  console.log('fnc called');
}

function readFromJson(){

  const fs = require("fs");
  fs.readFile('./messages.json', 'utf-8', (err, jsonString) =>{
    if(err){
      console.log("Error reading file from disk:", err);
      return;
    }
    try{
      const message = JSON.parse(jsonString);
      console.log("message is = ", message.msg);
      global.returnedMessage = message.msg;
      //return message.msg;
    }catch (err) {
      console.log("Error parsing JSON string:", err);
    }

    return returnedMessage;
  });

  

}