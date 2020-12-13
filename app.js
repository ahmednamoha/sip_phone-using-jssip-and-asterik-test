
var socket = new JsSIP.WebSocketInterface('wss://13.59.79.232:8089/ws');
var configuration = {
  sockets  : [ socket ],
  uri      : 'sip:333@13.59.79.232',
  password : '333'
};
// var coolPhone = new JsSIP.UA(configuration);
var ua = new JsSIP.UA(configuration);
ua.on('connected', function(e){ console.log('the connection is stbalished'); });

ua.on('disconnected', function(e){ 
    console.log(e); 
    console.log('not connected'); 

});
ua.on('registered', function(e){ 
    console.log('registered')
});
ua.on('newRTCSession', function(e){
    console.log('rtcp is conection is created ')
 });



// coolPhone.start();



// var ua = new JsSIP.UA(configuration);

ua.start();

// Register callbacks to desired call events
var eventHandlers = {
  'progress': function(e) {
    console.log('call is in progress');
  },
  'failed': function(e) {
    console.log('call failed with cause: '+ e.data.cause);
  },
  'ended': function(e) {
    console.log('call ended with cause: '+ e.data.cause);
  },
  'confirmed': function(e) {
    console.log('call confirmed');
  }
};

var options = {
  'eventHandlers'    : eventHandlers,
  'mediaConstraints' : { 'audio': true, 'video': false }
};


function conbtn(){
alert('aa')
var session = ua.call('sip:111@13.59.79.232', options);

}