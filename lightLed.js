
var server = require('server');
var { get } = server.router;

var rpio = require('rpio');

rpio.open(1, rpio.OUTPUT);
rpio.open(2, rpio.OUTPUT);
rpio.open(3, rpio.OUTPUT);
rpio.open(4, rpio.OUTPUT);
rpio.open(5, rpio.OUTPUT);
rpio.open(6, rpio.OUTPUT);
rpio.open(7, rpio.OUTPUT);
rpio.open(8, rpio.OUTPUT);

function light() {
    switch(Num){
    case 1:rpio.write(1, rpio.HIGH);
           break;
    case 2:rpio.write(2, rpio.HIGH);
           break;
    case 3:rpio.write(3, rpio.HIGH);
           break;
    case 4:rpio.write(4, rpio.HIGH);
           break;
    case 5:rpio.write(5, rpio.HIGH);
           break;
    case 6:rpio.write(6, rpio.HIGH);
           break;
    case 7:rpio.write(7, rpio.HIGH);
           break;
    case 8:rpio.write(8, rpio.HIGH);
           break;
                }
        
         
} 
   
 


server({ port: 8080 }, [
  get('/' ,  ctx => {
    console.log('a request is coming...');
    light();
  }),
]);

console.log('server starts on 8080 port');