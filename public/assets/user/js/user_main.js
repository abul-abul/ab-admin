$(document).ready(function(){

	//===========================echo
	Echo.channel('chat-room.1')
		.listen('ChatMessageWasReceived', (e) => {
		    //console.log(e.user, e.chatMessage);
		    
		    $('.number').html(e.chatMessage.message)
		});
	//========================end echo

   

	

})
