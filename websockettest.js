var WebSocketClient = require('websocket').client; 
2  
 
3  var client = new WebSocketClient(); 
4  
 
5  client.on('connectFailed', function(error) { 
6      console.log('Connect Error: ' + error.toString()); 
7  }); 
8  
 
9  client.on('connect', function(connection) { 
10      console.log('WebSocket Client Connected'); 
11      connection.on('error', function(error) { 
12          console.log("Connection Error: " + error.toString()); 
13      }); 
14      connection.on('close', function() { 
15          console.log('echo-protocol Connection Closed'); 
16      }); 
17      connection.on('message', function(message) { 
18          if (message.type === 'utf8') { 
19              console.log("Received: '" + message.utf8Data + "'"); 
20          } 
21      }); 
22  
 
23      function sendNumber() { 
24          if (connection.connected) { 
25              var number = Math.round(Math.random() * 0xFFFFFF); 
26              connection.sendUTF(number.toString()); 
27              setTimeout(sendNumber, 1000); 
28          } 
29      } 
30      sendNumber(); 
31  }); 
32  
 
33  client.connect('ws://localhost:8080/', 'echo-protocol'); 
