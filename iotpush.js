const express = require("express");
const app = express();

const port = 3005;
const http = require("http");
const socketIo = require("socket.io");
const server = http.Server(app);
const io = socketIo(server);
const path = require("path");

var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://18.191.91.25:1883');
client.on('connect', () => {
    console.log('led connected');
    client.subscribe('led')
    //  client.subscribe('image')
    
})
// client.on('connect', () => {
//     // Inform controllers that garage is connected
//     client.publish('led', '1')
// })

const bodyParser = require("body-parser");
// var session = require('express-session');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// const config = require("./config/config");
app.post('/pushMessage', function (req, res) {
   // res.send(req.body.msg);
    client.publish('led', req.body.msg)
    res.send({status:1});
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

client.on('message',  (topic, message) =>{
    response = message.toString();
    //var obj = JSON.parse(response);
    console.log('on sub : ' + response);
});    


app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/', (req, res) => {
    res.send("Invalid end point");
});
server.listen(port,() => {
    console.log("Server Started On Port " + port);
});


