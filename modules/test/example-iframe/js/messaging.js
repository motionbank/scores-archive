jQuery(function(){

	window.messaging = window.massaging || {
		connected : false
	};

	var parentWindow = null, parentOrigin = null;
	var postmessenger = window.postmessenger = new PostMessenger(window);
	var listener_id = null;

	if ( LocationParams ) {
		var location_params = LocationParams();
		if ( location_params && 'domain' in location_params ) {
			postmessenger.accept( location_params.domain );
		}
	}

	postmessenger.on('connect?',function(req,res){
		parentWindow = req.source;
		parentOrigin = req.origin;
		listener_id = req.data.listener_id;
		res.send('connect!');
	});

	postmessenger.on(/^>>.+/,function(req, res){
		var messageHandler = window.messaging;
		//console.log(req);
		if ( req.name in messageHandler && 
			 typeof messageHandler[req.name] === 'function' ) {
			messageHandler[req.name].apply(null,arguments);
		} else if ( '>>*' in messageHandler && 
			 typeof messageHandler['>>*'] === 'function' ) {
			messageHandler['>>*'].apply(null,arguments);
		}
	});

	window.messaging.send = function ( msg, data ) {
		postmessenger.send(msg, data, parentWindow, parentOrigin);
	}
});