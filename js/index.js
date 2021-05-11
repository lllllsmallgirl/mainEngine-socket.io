// 浏览器=》服务器=》浏览器
var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/',require('express').static('/Users/zm/3.7 已上传至坚果/store的副本'));

app.get('/', (req, res) => {
    res.sendFile( '/Users/zm/3.7 已上传至坚果/store的副本/mainEngine.html');
    // res.sendFile(__dirname + '/img/ii.PNG');
    // console.log("Request for " + req.url + " received.");
  });
var i = 0;
io.on('connection', (socket) => {
  // i+=1;
  // console.log('用户'+i+'进入')
  console.log('a user connected');
    // socket.on('chat message', (msg) => {
    //   io.emit('chat message',msg)
    // });

    socket.on('thandleclick',(tx)=>{
        
        
        io.emit('thandleclick',tx);
    });

    socket.on('blever',(e1,e2,e3)=>{
        // console.log('effect:',ef);
        io.emit('blever',e1,e2,e3);
    })

  });




http.listen(3000, () => {
    console.log('listening on *:3000');
  });