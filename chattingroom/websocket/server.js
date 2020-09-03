var WebSocket = require('ws');
var WebSocketServer = WebSocket.Server,
    wss = new WebSocketServer({port:10080});

var uuid = require('uuid');
var clients = [];

function wsSend(type, client_uuid, nickname, message, clientcount) {
    for(var i=0; i<clients.length; i++){
        var clientSocket = clients[i].ws;
        if(clientSocket.readyState === WebSocket.OPEN){
            clientSocket.send(JSON.stringify({
                "type" : type,
                "id": client_uuid,
                "nickname": nickname,
                "message":message,
                "clientcount": clientcount,
            }));
        }
    }
}

var clientIndex = 1;
wss.on('connection', function(ws){
    var client_uuid = uuid.v4();
    var nickname = "User"+clientIndex;
    clientIndex+=1;
    clients.push({
        "id":client_uuid,
        "ws":ws,
        "nickname":nickname
    });
    console.log('client [%s] connected', client_uuid);
    
    var connect_message = "I'm coming";
    wsSend("notification", client_uuid, nickname, connect_message, clients.length);
    ws.on('message', function(message){
        if(message.indexOf('/nick') === 0){
            var nickname_array = message.spilt(' ' );
            if(nickname_array.length >= 2){
                var old_nickname = nickname;
                nickname = nickname_array[1];
                var nickname_message = "User " + old_nickname + "updated name: " + nickname;
                wsSend("nick_update", client_uuid, nickname, nickname_message, clients.length);
            }
        }else{
            wsSend("message", client_uuid, nickname, message, clients.length);
        }
    });

    var closeSocket = function(customMessage){
        for(var i=0; i<clients.length; i++){
            if(clients[i].id == client_uuid){
                var disconnect_message;
                if(customMessage){
                    disconnect_message = customMessage;
                }else{
                    disconnect_message = nickname + " is gone";
                }
                clients.splice(i, 1);
                wsSend("notification", client_uuid, nickname, disconnect_message, clients.length);
            }
        }
    }

    ws.on('close', function(){
        closeSocket();
    });
    process.on('SIGINT', function(){
        console.log("Closing things");
        closeSocket('Server has disconnectde');
        process.exit();
    });
});
