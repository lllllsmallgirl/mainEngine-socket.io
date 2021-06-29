// 浏览器=》服务器=》浏览器
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'39.97.105.230',
    user:'root',
    password:'84670681',
    database:'class219'
});
connection.connect((err) => {
    if(err){
        console.log('---:'+err);
        return;
    }
    console.log('连接成功')
});

var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use('/',require('express').static('/Users/zm/Documents/GitHub/mainEngine-socket.io'));

app.get('/', (req, res) => {
    res.sendFile( '/Users/zm/Documents/GitHub/mainEngine-socket.io/mainEngine.html'); //文件转移了 路径也要改！！！
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
        var addsql = 'insert into data(ID,Name,Value) values(?,?,?)';
        var addsqlParams = ['1','thandlex',String(tx)];

        connection.query(addsql,addsqlParams,(err,rs)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log('insert data',rs);
        });

        
        io.emit('thandleclick',tx);
    });

    socket.on('blever',(e1,e2,e3)=>{
        console.log('e3',e3);
        io.emit('blever',e1,e2,e3);
    })

    socket.on('tlever',(e1,e2,e3)=>{
      console.log('e3',e3);
      io.emit('tlever',e1,e2,e3);
  })

  socket.on('conbeforeclick',(e1)=>{
    // console.log('sio',e1);
    io.emit('conbeforeclick',e1);
})

      socket.on('conReadyCclick',(e1)=>{
        // console.log('sio',e1);
        io.emit('conReadyCclick',e1);
      })

      socket.on('conOnSeaclick',(e1)=>{
        // console.log('sio',e1);
        io.emit('conOnSeaclick',e1);
      })

      socket.on('wheeltoumingclick',(e1)=>{
        
        io.emit('wheeltoumingclick',e1);
      })

      socket.on('wheeltoumingleftclick',(e1)=>{
        
        io.emit('wheeltoumingleftclick',e1);
      })

      socket.on('pstartclick',(e1)=>{
        
        io.emit('pstartclick',e1);
      })

      socket.on('pstopmousedown',(e1,e2,e3,e4,e5,e6,e7)=>{
        
        io.emit('pstopmousedown',e1,e2,e3,e4,e5,e6,e7);
      })

      socket.on('pstartup',(e1)=>{
        
        io.emit('pstartup',e1);
      })

      socket.on('lbtn1click',(e1)=>{
        
        io.emit('lbtn1click',e1);
      })

      socket.on('lbtn2click',(e1)=>{
        
        io.emit('lbtn2click',e1);
      })

      socket.on('lbtn3click',(e1)=>{
        
        io.emit('lbtn3click',e1);
      })

      socket.on('lbtn4click',(e1)=>{
        
        io.emit('lbtn4click',e1);
      })

      socket.on('l2dbtn1click',(e1)=>{
        
        io.emit('l2dbtn1click',e1);
      })

      socket.on('l2dbtn2click',(e1)=>{
        
        io.emit('l2dbtn2click',e1);
      })

      socket.on('l2dbtn3click',(e1)=>{
        
        io.emit('l2dbtn3click',e1);
      })

      socket.on('l2dbtn4click',(e1)=>{
        
        io.emit('l2dbtn4click',e1);
      })

      socket.on('l2dbtn5click',(e1,e2,e3)=>{
        
        io.emit('l2dbtn5click',e1,e2,e3);
      })

      socket.on('l2dbtn6click',(e1,e2,e3)=>{
        
        io.emit('l2dbtn6click',e1,e2,e3);
      })

      socket.on('l2dbtnStartclick',(e1,e2)=>{
        
        io.emit('l2dbtnStartclick',e1,e2);
      })

      socket.on('l2dbtnStartup',(e1)=>{
        
        io.emit('l2dbtnStartup',e1);
      })

      socket.on('l2dbtnstopmousedown',(e1,e2,e3,e4,e5,e6,e7)=>{
        
        io.emit('l2dbtnstopmousedown',e1,e2,e3,e4,e5,e6,e7);
      })

      socket.on('valve1click',(e1)=>{
        
        io.emit('valve1click',e1);
      })

      socket.on('valve2click',(e1)=>{
        
        io.emit('valve2click',e1);
      })

      socket.on('valve3click',(e1)=>{
        
        io.emit('valve3click',e1);
      })

      socket.on('valve4click',(e1)=>{
        
        io.emit('valve4click',e1);
      })

      socket.on('valve5click',(e1)=>{
        
        io.emit('valve5click',e1);
      })

      socket.on('valve6click',(e1)=>{
        
        io.emit('valve6click',e1);
      })

      socket.on('stecrclick',(e1)=>{
        
        io.emit('stecrclick',e1);
      })

      socket.on('sbecrclick',(e1)=>{
        
        io.emit('sbecrclick',e1);
      })

      socket.on('slecrclick',(e1)=>{
        
        io.emit('slecrclick',e1);
      })

      socket.on('splecrclick',(e1)=>{
        
        io.emit('splecrclick',e1);
      })
  });




http.listen(3000, () => {
    console.log('listening on *:3000');
  });